import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, email, message" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
    return new Response(
      JSON.stringify({ error: "Server email configuration is missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: name || "Portfolio Contact",
      address: process.env.EMAIL,
    },
    replyTo: email,
    to: "ashishsingh27082002@gmail.com",
    subject: `New message from ${name}`,
    text: `
      You have received a new message from your website contact form.
  
      Name: ${name}
      Email: ${email}
  
      Message:
      ${message}
  
      --
      This message was sent from your website's contact form.
    `,
    html: `
      <h3>New Message from Website Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p>This email was sent from your website's contact form.</p>
    `,
  };

  try {
    // Verify transporter to catch auth/config errors early
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error?.message || "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

import React from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import Image from "next/image";

import "../scrolls.css";

const page = () => {
  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
      <div className="border-r border-white w-[391px]">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">projects</div>
        </div>
        <div className="flex flex-col px-[25px] py-[10px] border-b border-white">
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Nextjs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Reactjs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Tailwind</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Nodejs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Expressjs</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-4">page.tsx</div>
          <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-10 flex flex-wrap justify-evenly items-start gap-8 scrollable-div">
          <ProjectsPanel
            projectNumber={1}
            detail="Nodejs,Express,MongoDB"
            image={
              <Image
                src="/projects/natours.png"
                alt="Natours project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Responsive travel website with full backend API, authentication, and booking system."
            githubLink="https://github.com/asshissh/Natourss"
          />
          <ProjectsPanel
            projectNumber={2}
            detail="Nextjs ,Firebase,Gemini API"
            image={
              <Image
                src="/projects/projectL.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="AI-powered platform to generate custom logos with Firebase auth and Gemini API.  "
            liveSiteLink="https://vercel.com/asshisshs-projects/ai-logo-maker"
            githubLink="https://github.com/asshissh/Ai-logo-Maker"
          />
          <ProjectsPanel
            projectNumber={3}
            detail="Reactjs"
            image={
              <Image
                src="/projects/kulfiwala.png"
                alt="Kulfiwala project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Ice-cream ordering app with interactive UI, cart features, and responsive design "
            liveSiteLink="https://kulfiwa.vercel.app/"
            githubLink="https://github.com/asshissh/kulfiwa"
          />
          <ProjectsPanel
            projectNumber={4}
            detail="JavaScript ,HTML,CSS"
            image={
              <Image
                src="/projects/sydney.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Event booking platform with data scraped from Sydney event map, enabling users to explore and book upcoming events. "
            liveSiteLink="https://sydney-psi.vercel.app/"
            githubLink="https://github.com/asshissh/sydney"
          />
          <ProjectsPanel
            projectNumber={5}
            detail="Reactjs,javascript,HTML,CSS,API"
            image={
              <Image
                src="/projects/Stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://stock-inventory-apo6.vercel.app/"
            githubLink="https://github.com/asshissh/Stock_Inventory"
          />

          <ProjectsPanel
            projectNumber={6}
            detail="Reactjs,javascript,HTML,CSS,Chartjs"
            image={
              <Image
                src="/projects/GraphH.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Visualize data effectively with GraphH, a React app utilizing Chart.js for dynamic and interactive charts."
            liveSiteLink="https://graph-a.vercel.app/"
            githubLink="https://github.com/asshissh/GraphA"
          />
          
          <ProjectsPanel
            projectNumber={1}
            detail="Extension,JavaScript"
            image={
              <Image
                src="/projects/chatJump.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Store the chat history of chatgpt easily and quickly . "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/asshissh/Gpt-HisTree"
          />
          {/*
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default page;

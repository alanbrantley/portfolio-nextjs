import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import React, { useState } from "react";
import livediceImg from "../public/assets/projects/livedice.png";
import arthiveImg from "../public/assets/projects/arthive.png";
import storiImg from "../public/assets/projects/stori.png";
import rollingropeImg from "../public/assets/projects/rollingrope.png";
import wrimoImg from "../public/assets/projects/wrimo.png";
import stopwatchImg from "../public/assets/projects/stopwatch.png";
import ProjectItem from "./ProjectItem";
import giftedImg from "../public/assets/projects/gifted.png";
import genaiImg from "../public/assets/projects/genai.png";
import hapticImg from "../public/assets/projects/hapticCover.png";
import makerspaceImg from "../public/assets/projects/makerCover.png";

const Projects = () => {
  // State to manage the visibility of the additional projects
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Button click handler
  const handleAccordionToggle = () => {
    if (isAccordionOpen) {
      document.getElementById("projects").scrollIntoView();
    }
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#40C083]">
          Projects
        </p>
        {/* <h2 className="py-4">Some Recent Projects</h2> */}

        <div className="grid md:grid-cols-2 gap-8 py-4">
          {/* Always visible projects */}

          <ProjectItem
            title="Gifted"
            backgroundImg={giftedImg}
            projectUrl="/gifted"
            tech="Figma, Storytelling, Interaction Design"
          />

          <ProjectItem
            title="Making"
            backgroundImg={makerspaceImg}
            projectUrl="/making"
            tech="3D Printing, Laser Cutting, Metalworking"
          />

          <ProjectItem
            title="Rolling Rope"
            backgroundImg={rollingropeImg}
            projectUrl="/rollingrope"
            tech="CAD, Prototyping, 3D Printing"
          />

          <ProjectItem
            title="ArtHive"
            backgroundImg={arthiveImg}
            projectUrl="/arthive"
            tech="SwiftUI, GitHub, Remote Collab"
          />

          {/* Conditionally rendered projects */}
          {isAccordionOpen && (
            <>
              <ProjectItem
                title="stopWatch"
                backgroundImg={stopwatchImg}
                projectUrl="/stopwatch"
                tech="Police Accountability, Social Venture, Design Thinking"
              />

              <ProjectItem
                title="Haptic Mouse"
                backgroundImg={hapticImg}
                projectUrl="/hapticmouse"
                tech="Unity, C#, Arduino, Firmware"
              />

              <ProjectItem
                title="Wrimo"
                backgroundImg={wrimoImg}
                layout="fit"
                projectUrl="/wrimo"
                tech="Futurecasting, Package Design, Communication"
              />

              <ProjectItem
                title="ML & Generative AI"
                backgroundImg={genaiImg}
                projectUrl="/genai"
                tech="ChatGPT, MidJourney, OpenAI API"
              />
            </>
          )}
        </div>

        {/* Accordion toggle button */}
        <div className="flex justify-center py-12">
          <button
            onClick={handleAccordionToggle}
            className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 focus:outline-none bg-transparent border-none"
          >
            {isAccordionOpen ? (
              <HiOutlineChevronDoubleUp className="text-[#40C083]" size={30} />
            ) : (
              <HiOutlineChevronDoubleDown
                className="text-[#40C083]"
                size={30}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

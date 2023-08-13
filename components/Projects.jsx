import Image from "next/image";
import Link from "next/link";
import React from "react";
import livediceImg from "../public/assets/projects/livedice.png";
import arthiveImg from "../public/assets/projects/arthive.png";
import storiImg from "../public/assets/projects/stori.png";
import rollingropeImg from "../public/assets/projects/rollingrope.png";
import wrimoImg from "../public/assets/projects/wrimo.png";
import stopwatchImg from "../public/assets/projects/stopwatch.png";
import ProjectItem from "./ProjectItem";
import giftedImg from "../public/assets/projects/gifted.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2A74BE]">
          Projects
        </p>
        <h2 className="py-4">Some Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="stopWatch"
            backgroundImg={stopwatchImg}
            projectUrl="/stopwatch"
            tech="Social, Venture, Design Thinking"
          />
          <ProjectItem
            title="Rolling Rope"
            backgroundImg={rollingropeImg}
            projectUrl="/rollingrope"
            tech="CAD, Prototyping, 3D Printing"
          />
          <ProjectItem
            title="Gifted"
            backgroundImg={giftedImg}
            projectUrl="/gifted"
            tech="Figma, Storytelling, Interaction Design"
          />
          <ProjectItem
            title="ArtHive"
            backgroundImg={arthiveImg}
            projectUrl="/arthive"
            tech="SwiftUI, GitHub, Remote Collab"
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
            backgroundImg={storiImg}
            projectUrl="/stori"
            tech="ChatGPT, MidJourney, OpenAI API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

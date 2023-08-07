import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import livediceImg from '../public/assets/projects/livedice.png';
import arthiveImg from '../public/assets/projects/arthive.png'
import storiImg from '../public/assets/projects/stori.png'
import rollingropeImg from '../public/assets/projects/rollingrope.png'
import wrimoImg from '../public/assets/projects/wrimo.png'
import stopwatchImg from '../public/assets/projects/stopwatch.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Some Recent Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
            title='Stori'
            backgroundImg={storiImg}
            projectUrl='/stori'
            tech='Figma, Vite, OpenAI API'
          />
          <ProjectItem
            title='LiveDice'
            backgroundImg={livediceImg}
            projectUrl='/livedice'
            tech='Figma, SwiftUI, CreateML'
          />
          <ProjectItem
            title='ArtHive'
            backgroundImg={arthiveImg}
            projectUrl='/arthive'
            tech='SwiftUI, GitHub, Remote Collab'
          />
          <ProjectItem
            title='Rolling Rope'
            backgroundImg={rollingropeImg}
            projectUrl='/rollingrope'
            tech='CAD, Prototyping, 3D Printing'
          />
          <ProjectItem
            title='Wrimo'
            backgroundImg={wrimoImg}
            layout='fit'
            projectUrl='/wrimo'
            tech='Futurecasting, Package Design, Communication'
          />
          <ProjectItem
            title='stopWatch'
            backgroundImg={stopwatchImg}
            projectUrl='/stopwatch'
            tech='Social, Prototyping, 3D Printing'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

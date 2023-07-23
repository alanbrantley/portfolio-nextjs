import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import livediceImg from '../public/assets/projects/livedice.png';
import arthiveImg from '../public/assets/projects/arthive.png'
import abImg from '../public/assets/projects/alanbrantley.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
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
            title='LiveDice'
            backgroundImg={livediceImg}
            projectUrl='/livedice'
            tech='SwiftUI, CreateML, Prompt Engineering'
          />
          <ProjectItem
            title='ArtHive'
            backgroundImg={arthiveImg}
            projectUrl='/arthive'
            tech='SwiftUI'

          />
          <ProjectItem
            title='alanbrantley.com'
            backgroundImg={abImg}
            projectUrl='/alanbrantley'
            tech='Next.js, TailwindCSS, OpenAI API'

          />
          <ProjectItem
            title='Rolling Rope'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='CAD, Prototyping, 3D Printing'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

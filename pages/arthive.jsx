import Image from 'next/image';
import React from 'react';
import arthiveImg from '../public/assets/projects/arthive.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const arthive = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={arthiveImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ArtHive</h2>
          <h3>SwiftUI / MVVM / GitHub</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This was a final group project for SwiftUI class at USC. My teammates and I were tasked with creating an app, along with a concept that demonstrated viability, feasibility, and desirability. We decided to build an app that would allow artists to share their work with other artists, and to get feedback on their work. We also wanted to create a space where artists could find other artists to collaborate with. Each of us had a different role in the project. We used a previous build as a starting point. My responsibility was to create a front-end sign function. I also contributed the base model of the app, as well as the concept and design and the pitch deck. We used dummy data and front end coding to create the fully functional app. We did not connect to a backend.
          </p>
          <a
            href='https://github.com/alanbrantley/ArtHive'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.figma.com/proto/ya4HBtuqgCOisg3vMwKao4/ArtHive?page-id=0%3A1&type=design&node-id=115-14&viewport=758%2C-291%2C0.32&t=h7aCKaGccmjASTQA-1&scaling=contain&starting-point-node-id=115%3A14&mode=design'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Deck</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Figma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> XCode
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SwiftUI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MVVM
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GitHub
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default arthive;

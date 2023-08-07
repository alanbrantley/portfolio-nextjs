import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import heroImg from '../public/assets/projects/stopwatch.png';


const stopwatch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={heroImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>stopWatch</h2>
          <h3> Social Entrepreneurship / Human-centered Design / Front-end Development </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>Page Under Development</h1>

          <section>
            <h2 className='text-2xl mt-8'>Context</h2>
            <p className='mt-2'>stopWatch was my senior capstone project for BS Engineering | Product Design at Stanford&rsquo;s d.school. </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Social Entrepreneurship</h2>
            <p className='mt-2'> </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Web Design</h2>
            <p className='mt-2'> </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design System</h2>
            <p className='mt-2'> </p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://www.figma.com/proto/FTCkJEP3qQh2YOBFlTong7/Wrimo?page-id=0%3A1&type=design&node-id=1-1234&viewport=353%2C455%2C0.02&t=GJD6ok2JDRoQVuoh-1&scaling=contain&starting-point-node-id=1%3A1234&mode=design'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors'>Process Deck</button>
            </a>
            {/* <a
              href='https://fireclint.github.io/netflix-react-tailwind/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>Demo</button>
            </a> */}
          </div>

          <Link href='/#projects'>
            <p className='underline cursor-pointer mt-8'>Back</p>
          </Link>
        </div>

        <div className='col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0'>
          <p className='text-center text-2xl font-bold pb-2'>Skills</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
          <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Needfinding 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> User Interviews
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Figma
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> HTML/CSS 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Design System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stopwatch;

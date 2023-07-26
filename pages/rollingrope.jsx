import Image from 'next/image';
import React from 'react';
import rollingropeImg from '../public/assets/projects/rollingrope.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const RollingRope = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={rollingropeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Rolling Rope</h2>
          <h3>Fusion 360 / Figma / 3D Printing </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>Rolling Rope - Handheld Back Massager Redesign</h1>

          <section>
            <h2 className='text-2xl mt-8'>The Problem</h2>
            <p className='mt-2'>Modern handheld massagers are often bulky and inconvenient to use, lacking in portability and self-administration. Rolling Rope addresses this by offering an innovative, user-friendly design.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Users</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>People seeking self-administered muscle relief</li>
              <li>Fitness enthusiasts in need of muscle relaxation</li>
              <li>Travelers looking for a portable massaging solution</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>My Role</h2>
            <p className='mt-2'>As the sole designer and creator of Rolling Rope, I was responsible for all aspects of product development, from initial design to prototype testing and branding.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Process</h2>
            <p className='mt-2'>The product underwent multiple design iterations in Fusion 360 before arriving at the final design. The handles and rings were 3D printed and assembled together with wooden balls containing bearings.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design Decisions</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Used Fusion 360 for design due to its versatility and accuracy.</li>
              <li>3D printed parts for quick and cost-effective prototyping.</li>
              <li>Chose a modern and minimalistic design language to fit with contemporary aesthetics.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Constraints</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Limited by the capabilities of available 3D printers.</li>
              <li>Struggled with finding a balance between user comfort and mechanical functionality.</li>
              <li>Had to account for the durability of 3D printed parts during use.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Validation</h2>
            <p className='mt-2'>The final prototype was able to provide distinct muscle relief and validated the design concept.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Next Steps</h2>
            <p className='mt-2'>If I were to move forward with this project, my next steps would be to start a crowdfunding campaign to fund user research and production of a high-fidelity prototype. I would revise the logo and branding, implement the website, and begin a social media campaign while preparing for the production phase.</p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://github.com/yourusername/rollingrope-project'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Demo</button>
            </a>
            <a
              href='https://yourusername.github.io/rollingrope-prototype/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>Screenshots</button>
            </a>
          </div>

          <Link href='/#projects'>
            <p className='underline cursor-pointer mt-8'>Back</p>
          </Link>
        </div>

        <div className='col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0'>
          <p className='text-center text-2xl font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Fusion 360 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Figma
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> 3D Printing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollingRope;
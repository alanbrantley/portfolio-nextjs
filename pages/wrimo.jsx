import Image from 'next/image';
import React from 'react';
import storiImg from '../public/assets/projects/stori.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import heroImg from '../public/assets/projects/wrimo-display.png';
import problemImg from '../public/assets/projects/wrimo-problem.png';
import userImg from '../public/assets/projects/wrimo-users.png';
import valueImg from '../public/assets/projects/wrimo-vp.png';
import featuresImg from '../public/assets/projects/wrimo-features.png';

const wrimo = () => {
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
          <h2 className='py-2'>Wrimo</h2>
          <h3> Futurecasting / Package Design / Communication </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>Wrimo</h1>

          <section>
            <h2 className='text-2xl mt-8'>Context</h2>
            <p className='mt-2'>Wrimo was a 4-week Speculative Design project for Aesthetics of Design II with Lisa Krohn at Iovine and Young Academy. The prompt was to solve a modern problem with technology that does not yet exist. Specifically, we were asked to peer 10 years into the future and to anticipate what could be possible in that time frame.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Problem</h2>
            <p className='mt-2'>For inspiration I looked to my own daily life and observed that my space is overflowing with remote controls. There is one for the fan, the air conditioning, my television, and mice for my computers. I wondered how I might control all the devices in my life and look beyond the simple solution of a smart phone app.</p>
          </section>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
            <Image src={problemImg} className='rounded-xl' alt='/' />
          </div>

          <section>
            <h2 className='text-2xl mt-8'>The Users</h2>
          </section>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
            <Image src={userImg} className='rounded-xl' alt='/' />
          </div>

          <section>
            <h2 className='text-2xl mt-8'>Value Proposition</h2>
          </section>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
            <Image src={valueImg} className='rounded-xl' alt='/' />
          </div>

          <section>
            <h2 className='text-2xl mt-8'>Features</h2>
          </section>
          

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
            <Image src={featuresImg} className='rounded-xl' alt='/' />
          </div>

          <section>
            <h2 className='text-2xl mt-8'>Reflection</h2>
            <p className='mt-2'>This was a very fun exercise in unconstrained creativity. I allowed myself to tak risks, try new things, and follow my imagination where it takes me.I also used the opportunity to experiment with the aesthetics of the pitch deck. If I were to revise the deck, I would make the text larger and brighter to provide more contrast and improve readability. Check out the linked deck to see how Wrimo developed from the prompt to the prototype. </p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://www.figma.com/proto/FTCkJEP3qQh2YOBFlTong7/Wrimo?page-id=0%3A1&type=design&node-id=1-1234&viewport=353%2C455%2C0.02&t=GJD6ok2JDRoQVuoh-1&scaling=contain&starting-point-node-id=1%3A1234&mode=design'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Process Deck</button>
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
          <p className='text-center text-2xl font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
          <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Procreate 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Figma 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> MidJourney
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Photoshop
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Rapid Prototyping
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Fusion 360
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wrimo;

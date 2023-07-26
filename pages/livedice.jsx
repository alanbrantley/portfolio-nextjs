import Image from 'next/image';
import React from 'react';
import livediceImg from '../public/assets/projects/livedice.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const LiveDice = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={livediceImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>LiveDice</h2>
          <h3>Apple Developer Tools / Swift & Core ML / ChatGPT 4</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>LiveDice - The Future of Digital Physical Gaming</h1>

          <section>
            <h2 className='text-2xl mt-8'>The Problem</h2>
            <p className='mt-2'>Traditional digital table games lack the thrill and excitement of a live physical game. There is an opportunity to revolutionize digital gaming by blending it with real-world physical interactions.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Users</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Craps enthusiasts who miss the thrill of the casino.</li>
              <li>People seeking to connect with friends through games online.</li>
              <li>Gaming influencers who want to host engaging online events.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>My Role</h2>
            <p className='mt-2'>As the founder and product lead, I have been responsible for the product&rsquo;s conception, design, user testing, and creation of the MVP. I am actively seeking developers to turn this concept into reality.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Process</h2>
            <p className='mt-2'>Identifying the problem space, I explored various solutions, landing on the concept of a platform that blends physical dice games with digital play. The UX design went through multiple iterations, user tests were conducted, and prototypes built to validate the idea.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design Decisions</h2>
            <p className='mt-2'>Key decisions included:</p>
            <ul className='list-disc ml-5 mt-2'>
              <li>Combining physical dice rolling with digital tracking</li>
              <li>Implementing machine learning for object detection</li>
              <li>Creating a modern, intuitive interface for players</li>
              <li>Partnering with gaming influencers for user acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Constraints</h2>
            <ul className='list-disc ml-5 mt-2'>
                <li>Reliance on Apple&apos;s Continuity Camera and Core ML APIs</li>
              <li>Need for accurate object detection and tracking</li>
              <li>Challenges of maintaining user engagement in a digital physical game</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Validation</h2>
            <p className='mt-2'>User tests and demonstrations of the concept through prototypes have validated the need for a blend of physical and digital gaming. Early interest from gaming influencers further validates this.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Next Steps</h2>
            <p className='mt-2'>My goal is to launch the MVP, secure partnerships with gaming influencers, and continue to refine the product based on user feedback. I am seeking collaborators and investment to make this vision a reality.</p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://github.com/live-dice-app'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Images</button>
            </a>
            <a
              href='https://live-dice-demo.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>Demo</button>
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
              <RiRadioButtonFill className='pr-1' /> Figma 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> SwiftUI
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Machine Learning
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Object Detection
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> CreateML
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> GPT4
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDice;

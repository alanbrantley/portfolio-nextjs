import Image from 'next/image';
import React from 'react';
import storiImg from '../public/assets/projects/stori.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const stori = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={storiImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Stori.ai</h2>
          <h3>Figma / React JS / Open AI API </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>Stori - An AI-Powered Interactive Storytelling Platform</h1>

          <section>
            <h2 className='text-2xl mt-8'>The Problem</h2>
            <p className='mt-2'>Traditional storytelling is a passive experience that doesn&apos;t allow audiences to actively shape the narrative. There is an opportunity to transform storytelling by utilizing AI to create a customizable, interactive adventure.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Users</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>General consumers seeking unique entertainment experiences</li>
              <li>Creators and storytellers looking to bring their visions to life</li>
              <li>Publishers and production studios searching for innovative content</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>My Role</h2>
            <p className='mt-2'>As the founder and lead designer, I am responsible for the initial concept, design strategy, user testing, and prototyping. I collaborate with developers and creators to bring this idea to life.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>The Process</h2>
            <p className='mt-2'>After identifying the problem space, I explored various solutions, ultimately landing on an interactive storytelling platform powered by AI. I worked through multiple iterations of the UX design, conducted user testing, and built clickable prototypes to validate the concept.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design Decisions</h2>
            <p className='mt-2'>Key decisions included:</p>
            <ul className='list-disc ml-5 mt-2'>
              <li>Chatbot interface for natural conversations</li>
              <li>Integration with AI APIs for dynamic text and image generation</li>
              <li>Template story structures that guide the experience</li>
              <li>User choice driving the narrative direction</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Constraints</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Reliance on third-party AI APIs</li>
              <li>Potentially costly data usage from image generation</li>
              <li>Ethical concerns around AI-generated content</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Validation</h2>
            <p className='mt-2'>Feedback from user tests and prototype demonstrations received net positive responses, validating the need and desire for more immersive and interactive story experiences.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Next Steps</h2>
            <p className='mt-2'>My goal is to build a functional MVP, onboard storytellers and creators, and ultimately transform the storytelling landscape. I&apos;m actively seeking collaborators and investment to make this vision a reality.</p>
          </section>

          {/* <div className="mt-8 flex">
            <a
              href='https://github.com/fireclint/netflix-react-tailwind'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Code</button>
            </a>
            <a
              href='https://fireclint.github.io/netflix-react-tailwind/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>Demo</button>
            </a>
          </div> */}

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
              <RiRadioButtonFill className='pr-1' /> MidJourney
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Vite
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> OpenAI API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stori;

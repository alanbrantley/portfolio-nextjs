import Image from 'next/image';
import React from 'react';
import arthiveImg from '../public/assets/projects/arthive.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ArtHive = () => {
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

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>ArtHive</h1>

          <section>
            <h2 className='text-2xl mt-8'>Problem</h2>
            <p className='mt-2'>Finding, exploring and selling art online can be difficult and overwhelming. Traditional art galleries can be intimidating and inaccessible for many people.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Users</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Artists looking to showcase and sell their work.</li>
              <li>Art enthusiasts looking for a convenient and accessible way to browse and purchase unique pieces.</li>
              <li>Art lovers wanting to connect with a community of artists.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Role</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Provided base code from which we built our project</li>
              <li>Managed version control and branch merging</li>
              <li>Created front-end sign in function.</li>
              <li>Contributed to structure, design, and presentation of concept pitch and app demo.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Process</h2>
            <p className='mt-2'>We built a fully functional app using dummy data and front end coding. We started with a previous build as a starting point and created an app that allowed artists to share their work and get feedback.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design Decisions</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Designed a user-friendly interface for easy browsing and posting.</li>
              <li>Created a centralized marketplace specifically for artists and art enthusiasts.</li>
              <li>Planned for future enhancements such as secure payments, community features, and a feedback channel.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Constraints</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>We did not connect to a backend.</li>
              <li>The app is dependent on user-generated content.</li>
              <li>Securing partnerships with artists, galleries and museums is challenging.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Validation</h2>
            <p className='mt-2'>ArtHive is a feasible and desirable solution as it democratizes the art world and connects artists with a global audience.</p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://github.com/alanbrantley/ArtHive/tree/main/SolarGram'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Code</button>
            </a>
            <a
              href='https://www.figma.com/proto/ya4HBtuqgCOisg3vMwKao4/ArtHive?page-id=0%3A1&type=design&node-id=115-14&viewport=758%2C-291%2C0.32&t=FQtCmFDL12PD8w3V-1&scaling=contain&starting-point-node-id=115%3A14&mode=design'
              target='_blank'
              rel='noreferrer'
            > 
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>Deck</button>
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
              <RiRadioButtonFill className='pr-1' /> SwiftUI
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Front-End Dev
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Github 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Version Control
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> MVVM
            </p>
            {/* Add more list items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtHive;

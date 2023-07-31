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
            <h2 className='text-2xl mt-8'>Context</h2>
            <p className='mt-2'>LiveDice was my capstone project for my MS in Product Innovation. This project was born out of a deep interest and passion for the game of Craps and, more specifically, the concept of dice control. Some claim that the outcome of the dice can be influenced by dice positioning, throwing mechanics, and rotational dynamics. In experimenting with this concept, I found it difficult to keep track of throws and stats without disrupting the flow of the action. So, not knowing the first thing about SwiftUI or Machine Learning, I set out to build LiveDice. Ultimately, as a class project, the scope of the Product would grow into an expansive vision of virtual tournaments with &ldquo;live dice&rdquo; where players could compete from home using physical dice. </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Problem</h2>
            <p className='mt-2'>Over the Traditional digital table games lack the thrill and excitement of a live physical game. There is an opportunity to revolutionize digital gaming by blending it with real-world physical interactions.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Users</h2>
            <ul className='list-disc ml-5 mt-2'>
              <li>Craps enthusiasts who miss the thrill of the casino.</li>
              <li>People seeking to connect with friends through games online.</li>
              <li>Gaming influencers who want to host engaging online events.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>My Role</h2>
            <p className='mt-2'>As the founder and product lead, I have been responsible for the product&rsquo;s conception, design, user testing, and creation of the MVP.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Process</h2>
            <p className='mt-2'>After identifying the problem space, I conducted extensive market research and found that the digital Craps space is ripe for innovation. There are not top-flight apps serving this market. However, the market itself is rather small, so I began to consider ways to expand the product&rsquo;s appeal to a broader audience.
            </p>
            <p className='mt-2'>
            I conducted user interviews with casual craps players, enthusiasts, and two of YouTube&rsquo;s top influencers in the space. I explored various solutions, landing on the concept of a platform that blends physical dice games with digital play. The UX design went through multiple iterations guided by data collected from user testing.</p>
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
            <p className='mt-2'>If I were taking this project further, my goal would be to launch the MVP, secure partnerships with gaming influencers, and continue to refine the product based on user feedback. I am open to pursuing this project as an open source collaboration.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Reflection</h2>
            <p className='mt-2'>What started off as a passion project eventually blossomed into a full-blown application. This is the project I am most proud of because of the incredible amount of learning, frustration, long days of problem-sovling that go nowhere, persistance, breakthroughs that lead to new problems, milestones, and doing things I never thought possible. I had a problem and a vision and I brought it into reality. And now I have an app that I can actually use!</p>
          </section>

          <div className="mt-8 flex">
            <a
              href='https://www.figma.com/proto/zjkqU4ZObUWmyHAPYDr7ri/LiveDice?page-id=1194%3A23319&type=design&node-id=1194-23484&viewport=664%2C543%2C0.19&t=HOBzBydn7Y6RyDM7-1&scaling=min-zoom&starting-point-node-id=1194%3A23484&mode=design'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 bg-blue-600 text-white rounded mr-4 hover:bg-blue-700 transition-colors'>Deck</button>
            </a>
            <a
              href='https://www.youtubeeducation.com/watch?v=XKlnC6oNqlM'
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

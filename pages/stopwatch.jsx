import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import heroImg from '../public/assets/projects/stopwatch.png';
import diagramImg from '../public/assets/projects/diagram.png';
import systemImg from '../public/assets/projects/system.png';
import landingImg from '../public/assets/projects/landingpage.png';
import teamImg from '../public/assets/projects/team.png';
import problemImg from '../public/assets/projects/problem.png';
import insightsImg from '../public/assets/projects/insights.png';
import getstopwatchImg from '../public/assets/projects/getstopwatch.png';
import interactionImg from '../public/assets/projects/interaction.png';

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
          <h3>Social Entrepreneurship / Human-centered Design / Front-end Development</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>

          <h1 className='text-4xl mb-8 mt-16'>stopWatch</h1>

        <section>
            <h2 className='text-2xl mt-8'>Context</h2>
            <p className='mt-2'>The stopWatch project was my Stanford Capstone, spanning the Fall &apos;20/Spring &apos;21 quarters. While it was a group effort, all work showcased is my own unless stated otherwise. This project was completed 100% remotely due to the COVID-19 pandemic. We used Zoom and Figma to collaborate.</p>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex        items-center justify-center p-4 mt-8'>
              <Image src={teamImg} className='rounded-xl' alt='/' />
            </div>
          </section>

            

          <section>
            <h2 className='text-2xl mt-8'>Problem</h2>
            <p className='mt-2'>Police violence represents a breach of trust and misuse of power, often disproportionately affecting economically deprived communities. The lack of accountability perpetuates the issue, undermining public trust and hindering efforts to ensure justice and community safety.</p>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex        items-center justify-center p-4 mt-8'>
              <Image src={problemImg} className='rounded-xl' alt='/' />
            </div>
          </section>
          
        <section>
            <h1 className='text-3xl mb-8 mt-16'>Our Process</h1>
            <p className='mt-2'> The concept of this project was born out of frustration and inspiration during the social unrest in the summer of 2020. I have been investigating and observing the rise of police violence since around 2006. As someone who has been beaten and abused by police, I know &quot;our rights&quot; are only as strong as an officer&rsquo;s internal moral obligation to respect them. Typically, justice in these situations is only found in video evidence.</p>
            <h3 className='mt-8'>How Might We...</h3>
            <p className='mt-2'>Get a recording of every traffic stop in America with access independent of law enforcement&apos;s discretion?</p>
            <h3 className='mt-8'>Deep Research</h3>
            <p className='mt-2'>In the initial stages of the stopWatch project, we conducted comprehensive desk research, closely examining police accountability groups. We delved into peer-reviewed articles, analyzed individual case studies, and undertook extensive legal research. Our team scrutinized both state and US case law, and we also embarked on product research to understand the tools available for monitoring and reporting. To ensure a holistic view, we assessed FBI data and statistics, as well as independent data sources, to provide a well-rounded foundation for our project.</p>
            <h3 className='mt-8'>User Interviews</h3>
            <p className='mt-2'>During the foundational phase of our stopWatch project, we conducted over 10 interviews with a diverse range of stakeholders. This included conversations with foreign drivers, victims of police abuse, and drivers from low-income areas. We also engaged with a prominent police accountability activist and founder from Ferguson, MO, consulted with an NYU Civil Rights Attorney, and held discussions with officers from the Stanford Public Safety to ensure a comprehensive understanding of the issues at hand.</p>
            <p className='mt-2'>
              These interviews were critical in shaping our thinking as we moved into the solution phase of the project. 
            </p>
          </section>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8'>
              <Image src={insightsImg} className='rounded-xl' alt='/' />
            </div>

          <section>
            <h2 className='text-2xl mt-8'>Pivot Point</h2>
              <p className='mt-2'>Initially, we planned to market dash cams and offer a complimentary app for management. However, data analysis, feedback from mentors, and our own reflections revealed that this approach might exclude those who needed it most due to cost. Additionally, it limited the scope to vehicles only, leaving out cyclists, pedestrians, and drivers with other cameras.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Our Solutions</h2>
            <p className='mt-2'>We concluded that stopWatch would best serve as a platform for crowd-sourced transparency. It&apos;s crafted to bolster accountability by enabling users to live-stream and document their encounters with law enforcement during traffic stops. The goal is to create a unified database for gathering data, helping identify misconduct trends and pushing for meaningful change.</p>
          </section>

          <h1 className='text-3xl mb-8 mt-8'>My Role and Contribution</h1>

          <section>
            <h2 className='text-2xl mt-8'>UI/UX, Interface, and Interaction Design</h2>
            <p className='mt-2'>One of my key roles for this project was designing visual interfaces for the various prototypes and versions of our solution, including mobile and web interfaces. Click the button below to interact with the web-mockup prototype. </p>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8'>
              <Image src={interactionImg} className='rounded-xl' alt='/' />
            </div>

            <div className="mt-8 flex">
          <a
              href='https://www.figma.com/proto/t1pZHsrRdPMORw1J3ZZWvj/stopWatch-Web-Viewer-Prototype?page-id=0%3A1&type=design&node-id=19-3781&viewport=1886%2C460%2C0.12&t=8GTDeTVvH9G6zxLG-1&scaling=contain&starting-point-node-id=19%3A1965&mode=design'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors'>figma prototype</button>
            </a>
            </div>

          </section>


          <section>
            <h2 className='text-2xl mt-8'>Web Design and Development</h2>
            <p className='mt-2'>One of my major roles in this assignments was to design and develop getstopwatch.com. The purpose of the site was to act as a funnel to inform, drive engagement, and encourage sign-ups for our user research. I used Figma for the design phase and implemented the site in HTML/CSS. This was only the 2nd site I had built. The challenge for this build was learning to implement responsive design. 
          </p>
          </section>

          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex        items-center justify-center p-4 mt-8'>
              <Image src={getstopwatchImg} className='rounded-xl' alt='/' />
            </div>

          <div className="mt-8 flex">
            <a
              href='http://www.getstopwatch.com'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded hover:bg-blue-700 transition-colors'>Visit Website</button>
            </a>
          </div>

          <section>
            <h2 className='text-2xl mt-8'>Website Build And Design</h2>
            <p className='mt-2'>As an individual project, I created a 9 page document explaining my thinking, process, and design system for getstopwatch.com. You can read the full document by clicking the button below</p>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8'>
            <Image src={systemImg} className='rounded-xl' alt='/' />
          </div>

          <div className="mt-8 flex">
          <a
              href='https://www.figma.com/proto/S7jiiJ7Mp21unFvS7QHCMR/Skill-Build?page-id=0%3A1&node-id=34-919&starting-point-node-id=34%3A919&scaling=contain&mode=design&t=WwuehT6TVR0CHSaF-1'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors'>View Report</button>
            </a>
            </div>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Reflection and Next Steps</h2>
              <p className='mt-2'>This was a passion project and I am very thankful for the opportunity to have delved into a solution to this problem. While stopWatch is currently on pause, I am eternally committed to the issue of police violence. Please do not hesitate to reach out if you are interested in discussing this project, past or future. </p>
          </section>

          {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-8'>
            <Image src={diagramImg} className='rounded-xl' alt='/' />
          </div> */}

          <Link href='/#projects'>
            <p className='underline cursor-pointer mt-8'>Back</p>
          </Link>
        </div>

        <div className='col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0'>
          <p className='text-center text-2xl font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-2 md:grid-cols-1'>
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
              <RiRadioButtonFill className='pr-1' /> Web Des & Dev
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stopwatch;

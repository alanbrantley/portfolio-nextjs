import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import heroImg from '../public/assets/projects/stopwatch.png';
import diagramImg from '../public/assets/projects/diagram.png';
import systemImg from '../public/assets/projects/system.png';

const Stopwatch = () => {
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
          <h3>Social Entrepreneurship / Human-centered Design / Front-end Development </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
        <div className='col-span-4 md:flex-grow'>
          <h1 className='text-4xl mb-8'>stopWatch</h1>

          <section>
            <h2 className='text-2xl mt-8'>Context</h2>
            <p className='mt-2'>
              The stopWatch project was my Stanford Capstone, spanning the Fall &apos;20/Spring &apos;21 quarters. While it was a group effort, all work showcased is my own unless stated otherwise. This project was completed 100% remotely due to the COVID-19 pandemic. We used Zoom and Figma to collaborate. 
            </p>
            <p className='mt-2'>
              The goal of the project was to create a solution to create a venture using Design Thinking and Human-Centered Design under the guidance of our instruction team. We chose to address the ever-present societal need of improving police accountability and transparency.
            </p>
            <a
              href='https://getstopwatch.com/about.html'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 mt-2 hover:bg-blue-700 transition-colors mt-2'>About Co-Founders</button>
            </a>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Problem</h2>
            <p className='mt-2'>Police violence represents a breach of trust and misuse of power, often disproportionately affecting economically deprived communities. The lack of accountability perpetuates the issue, undermining public trust and hindering efforts to ensure justice and community safety.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Process</h2>
            <p className='mt-2'> The concept of this project was born out of frustration and inspiration during the social unrest in the summer of 2020. I have been investigating and observing the rise of police violence since around 2006. As someone who has been beaten and abused by police, I know &quot;our rights&quot; are only as strong as an officer&rsquo;s internal moral obligation to respect them. Typically, justice in these situations is only found in video evidence. </p>
            <h3 className='mt-8'>How Might We...</h3>
            <p className='mt-2'>Get a recording of every traffic stop in America with access independent of law enforcement&apos;s discretion?</p>
            <h3 className='mt-8'>Deep Research</h3>
            <p className='mt-2'>In the initial stages of the stopWatch project, we conducted comprehensive desk research, closely examining police accountability groups. We delved into peer-reviewed articles, analyzed individual case studies, and undertook extensive legal research. Our team scrutinized both state and US case law, and we also embarked on product research to understand the tools available for monitoring and reporting. To ensure a holistic view, we assessed FBI data and statistics, as well as independent data sources, to provide a well-rounded foundation for our project.</p>
            <h3 className='mt-8'>User Interviews</h3>
            <p className='mt-2'>During the foundational phase of our stopWatch project, we conducted over 10 interviews with a diverse range of stakeholders. This included conversations with foreign drivers, victims of police abuse, and drivers from low-income areas. We also engaged with a prominent police accountability activist and founder from Ferguson, MO, consulted with an NYU Civil Rights Attorney, and held discussions with officers from the Stanford Public Safety to ensure a comprehensive understanding of the issues at hand.</p>

            <h3 className='mt-8'>Conflicting Needs Among Stakeholders</h3>
            <p className='mt-2'>Through our discussions, we gained insights into a wide range of perspectives and identified conflicting interests.</p>

            <ul className='list-disc ml-5 mt-2'>
              <li>Some individuals expressed discomfort with the idea of being recorded, while others indicated they&apos;d willingly use a dual-facing dash cam at all times.</li>
              <li>An activist we interviewed expressed concerns about the potential for widespread footage to inadvertently promote &quot;trauma porn&quot; related to police violence.</li>
              <li>The Sheriff’s Deputies we engaged with raised concerns about cartels potentially using such technology to monitor their operations. They also feared it might compromise their operational security.</li>
            </ul>
            <p className='mt-2'>
            These concerns, among others, underscored the need for us to approach our project with great caution and thoughtfulness.
            </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Pivot</h2>
            <p className='mt-2'>Initially, we planned to market dash cams and offer a complimentary app for management. However, data analysis, feedback from mentors, and our own reflections revealed that this approach might exclude those who needed it most due to cost. Additionally, it limited the scope to vehicles only, leaving out cyclists, pedestrians, and drivers with other cameras.</p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Our Solution</h2>
            <p className='mt-2'>We concluded that stopWatch would best serve as a platform for crowd-sourced transparency. It&apos;s crafted to bolster accountability by enabling users to live-stream and document their encounters with law enforcement during traffic stops. The goal is to create a unified database for gathering data, helping identify misconduct trends and pushing for meaningful change. </p>
            <Image src={diagramImg} className='rounded-xl mt-6' alt='/' />
          </section>

          <h1 className='text-4xl mb-8 mt-8'>My Role and Contribution</h1>

          <section>
            <h2 className='text-2xl mt-8'>UI Design</h2>
            <p className='mt-2'>As a new learner of UI and web-design skills, I was anxious to learn as much as possible. I helped design app interface layouts, spearheaded slide deck designs, and designed and implemented getstopwatch.com. </p>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Interaction Design</h2>
            <p className='mt-2'>I created this app interface as an alternative to the phone based app. Check out the prototype below.</p>
            <a
              href='https://www.figma.com/file/t1pZHsrRdPMORw1J3ZZWvj/stopWatch-Web-Viewer-Prototype?type=design&node-id=19%3A1965&mode=design&t=oYnNYwoj2s2MgksX-1'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors mt-2'>Figma Prototype</button>
            </a>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Skill-Build</h2>
            <p className='mt-2'>We had an individual assignment that required us to choose a skill we wanted to develop. While we weren&apos;t required to stay within stopWatch, I chose to develop a responsive website to help make stopWatch real in the world and develop my newly learned HTML/CSS skills. This was my first responsive site.</p>
            <a
              href='https://www.getstopwatch.com/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors mt-2'>Visit getstopwatch.com</button>
            </a>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Design System</h2>
            <p className='mt-2'>My Final Report and Design System for getstopWatch.com and the stopWatch app.</p>
            <div className="mt-8">
              <Image src={systemImg} className='rounded-xl' alt='System Image' />
            </div>
            <a
              href='https://www.getstopwatch.com/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors mt-2'>Design System Report</button>
            </a>
          </section>

          <section>
            <h2 className='text-2xl mt-8'>Video Editing</h2>
            <p className='mt-2'>I designed and edited the final presentation, including the stopThis introduction. This presenters in this video are, in order, myself, Roscoe Harris, and Cameron Buzzell</p>

            <div className="mt-8">
              <iframe width="840" height="473" src="https://www.youtube.com/embed/dxcgi9sgWh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </div>
          </section>

          <Link href='/#projects'>
            <p className='underline cursor-pointer mt-8'>Back</p>
          </Link>
        </div>

        <div className='col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0'>
          <p className='text-center text-2xl font-bold pb-2 min-w-[200px]'>Skills</p>
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
              <RiRadioButtonFill className='pr-1' /> Web Design
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Web Development
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Design Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

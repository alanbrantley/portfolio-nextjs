import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Alan | Resume</title>
        <meta
          name='description'
          content='I’m a and educator, designer, developer, dreamer, thinker, builder, and creator.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Alan Brantley</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/alanbrantley'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/alanbrantley'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Multi-Disciplinary <span className='px-1'>|</span> Divergent Thinking{' '} <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Analytical, innovative, and motivated professional with diverse experience in product design, AI and web development, education, and creative content creation. Adept at developing strategies, driving streamlined operations, and navigating complex problem-solving in challenging environments. Effective and proven track record of critical thinking, idea generation, and optimizing efficiencies. Accomplished as a generalist and as a specialist, and a proven leader, with solid interpersonal abilities and strong problem-solving skills.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
            <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
            <p className='py-2'>
                <span className='font-bold'>Technical Skills</span>
                <span className='px-2'>|</span>Product Design
                <span className='px-2'>|</span>Web Development
                <span className='px-2'>|</span>SwiftUI
                <span className='px-2'>|</span>Machine Learning
                <span className='px-2'>|</span>CAD
                <span className='px-2'>|</span>AI Prompting
                <span className='px-2'>|</span>Prompt Engineering
                <span className='px-2'>|</span>Figma
                <span className='px-2'>|</span>Adobe Suite
            </p>
            <p className='py-2'>
                <span className='font-bold'>Soft Skills</span>
                <span className='px-2'>|</span>Leadership
                <span className='px-2'>|</span>Problem Solving
                <span className='px-2'>|</span>Analytical Thinking
                <span className='px-2'>|</span>Communication
                <span className='px-2'>|</span>Public Speaking
                <span className='px-2'>|</span>Mentoring and Coaching
                <span className='px-2'>|</span>Research & Development
                <span className='px-2'>|</span>Team Collaboration
                <span className='px-2'>|</span>Independent Learning
            </p>
            <p className='py-2'>
                <span className='font-bold'>Notable Achievements</span>
                <span className='px-2'>|</span>Jack Kent Cooke Transfer & Graduate Scholar
                <span className='px-2'>|</span>2018 Fullerton College Distinguished Student of the Year
                <span className='px-2'>|</span>2018 Fullerton College Commencement Speaker
                <span className='px-2'>|</span>Stanford University Degree with Distinction
                <span className='px-2'>|</span>USC Order of Arete
            </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Stanford University
            </span>
            <span className='px-2'>|</span>Stanford, CA
          </p>
          <p className='py-1 italic'>Transfer 101 Co-Lead (Aug 2020 - Dec 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Co-instructed a class of 20 on newly admitted transfers on topics related to acclimation, identity, communication, and community.
            </li>
            <li>
            Planed and executed a semester-long curriculum focused on the designated topics.
            </li>
            <li>
            Collaborated with co-instructors to align teaching methods and learning objectives.
            </li>
            <li>
            Co-created a structured framework to address sensitive topics with respect and sensitivity.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Stanford University
            </span>
            <span className='px-2'>|</span>Stanford, CA
          </p>
          <p className='py-1 italic'> Research Assistant for Stanford Undergraduate Research Institute & Shape Lab (Jun 2020 - Aug 2020)
</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Worked directly with Sean Follmer and Graduate Mentor Alexis Sui to research and implement a &ldquo;haptic mouse&rdquo; for blind and low vision individuals.
            </li>
            <li>
            Researched and applied mouse functionality, haptic feedback, accessible design, and Unity development environment.
            </li>
            <li>
            Executed code for the haptic mouse in Unity and C#.
            </li>
            <li>
            Created a slide and poster presentation of my contributions to the Shape Lab team and Stanford Undergraduate Research Institute respectively.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fullerton College
            </span>
            <span className='px-2'>|</span>Fullerton, CA
          </p>
          <p className='py-1 italic'> Pathway Transformation Initiative Growth Mindset Student Ambassador Coordinator  (Jan 2016 - May 2018)
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
          Collaborated with GM ambassadors to design and implement innovative Growth Mindset workshops aimed at fostering student success and engagement.
          </li>
          <li>
          Acted as a key presenter, addressing both individual classes and sessions for incoming students, to impart the importance of a growth mindset.
          </li>
          <li>
          Organized and coordinated the activities of fellow GM ambassadors to ensure effective distribution of responsibilities and efficient implementation of strategies.
          </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fullerton College
            </span>
            <span className='px-2'>|</span>Fullerton, CA
          </p>
          <p className='py-1 italic'> Supplemental Instructor Leader (Aug 2016 - Nov 2017) / Mentor  (Jan 2018 - May 2018)
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
          As instructor, created lesson plans and led weekly study sessions for students enrolled in Calculus and Geometry courses. 
          </li>
          <li>
          In the 4 courses I was assigned, students achieved a notable improvement in academic performance, with an average increase of 5 - 7% in overall class grades from one semester to the next, as well as substantial average grade increase of 10 - 15% among students who consistently attended my sessions
          </li>
          <li>
          As mentor, created and presented break out training sessions on topics such as Applying Growth Mindset, effective tutoring strategies, and college/scholarship applications.
          </li>
          <li>
            Held weekly meetings with cohort to discuss the week&rsquo;s curricula, challenges, and successes.
          </li>
          </ul>
        </div>

      

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Aramark Sports Entertainment LLC.</span>
            <span className='px-2'>|</span>Bakersfield, CA
          </p>
          <p className='py-1 italic'>Bar Manager (Oct 2009 – Nov 2010)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            The Space Between At Rabobank Arena & Convention Center
            </li>
            <li>
              Oversaw the daily operations of the bar, including inventory, cash, and staff.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>The Finish Line Sports Bar and Grill at Bakersfield Red Lion Hotel</span>
            <span className='px-2'>|</span>Bakersfield, CA
          </p>
          <p className='py-1 italic'>Food and Beverage Director (Nov 2005 – Nov 2007)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Oversaw Food and beverage department which consisted of a full service restaurant, bar, room service and banquet facilities and a staff of 15-20.
            </li>
            <li>
            Created and/or enforced policies related to inventory control, cash handling, staff management, and customer relations.
            </li>
            <li>
            Coordinated with management, sales, and event planning to ensure  smooth banquet operations and customer satisfaction.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>University of Southern California (USC), Iovine and Young Academy</span>
          </p>
          <p className='py-1 italic'>Los Angeles, CA (Aug 2021 – May 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            M.S. Product Innovation |  2023
            </li>
            <li>
            Awards and Recognition: IYA Graduate Scholarship, Phi Kappa Phi Honor Society, Commencement Flag Bearer, Order of Arete
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Stanford University</span>
          </p>
          <p className='py-1 italic'>Stanford, CA (Aug 2018 – May 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            B.S. Engineering | Product Design with Notation in Science Communication | 2021
            </li>
            <li>
            Awards and Recognition: Conferred with Distinction, Jack Kent Cooke Graduate Scholarship
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Fullerton Community College</span>
          </p>
          <p className='py-1 italic'>Fullerton, CA (Jan 2014 – May 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            A.A. Arts and Human Expression | 2018
            </li>
            <li>
            Awards and Recognition: Conferred with High Honors, Phi Theta Kappa, Student of Distinction, Distinguished Student of the Year, Convocation Speaker 2016, Commencement Speaker 2018, Jack Kent Cooke Transfer Scholarship
            </li>
          </ul>
        </div>

        

      </div>
    </>
  );
};

export default resume;

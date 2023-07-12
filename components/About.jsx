import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/grad-photo-dre.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          A lifelong passion for education, learning, and self-mastery has taken me on an extraordinary journey. After starting at community college later in life I completed AS degrees in Mathematics and Computer Science before transferring to Stanford. There, I pivoted to design, earning a BS in Engineering | Product Design. Not satisfied, I went on to earn an MS in Product Innovation from the University of Southern California's Jimmy Iovine and Andre Young Academy. There, I studied physical making, web design and development, software engineering, and generative artificial intelligence.
          </p>
          <p className='py-2 text-gray-600'>
          I'm currently dedicated to creating products that are accessible and ethically harness AI's potential while keeping human beings centered at all times. I am devoted to developing accessible opportunities where individuals can access the resources they need to be wi successful no matter who they are or where they come from. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

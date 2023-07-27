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
            Fueled by inspiration and passion, I firmly believe in the potential of individuals to achieve their dreams. My unique journey has underscored the importance of making STEM knowledge and understanding accessible to all, regardless of one&rsquo;s background.
          </p>
          <p className='py-2 text-gray-600'>
          I am currently focused heavily on the application, ethics, and implications of artificial intelligence. I am also exploring the intersection of technology and education, with a particular interest in the future of learning and the role of technology in shaping it. I am passionate about the potential of technology to transform lives and create opportunities for all. I am actively seeking opportunities to collaborate with others who share this vision.
          </p>
          <p className='py-2 text-gray-600'>
            As I aspire to learn the ways of the entrepreneur, I’m not just searching for a job or career, but opportunities for growth, learning, and making meaningful contributions. The dream of achieving financial independence to fund my own initiatives and create opportunities for others propels me forward. If you&apos;re looking to work with someone with an unconventional approach, who thrives under adversity, and has a deep desire to make a difference, I&apos;d love to connect. Let&apos;s change the world, one initiative at a time.
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

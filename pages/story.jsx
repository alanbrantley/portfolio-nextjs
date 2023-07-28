import Image from 'next/image';
import React from 'react';
import storiImg from '../public/assets/projects/stori.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';


const story = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                {/* <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={storiImg}
                    alt='/'
                /> */}
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>My Story</h2>
                    <h3>Meth / Math / Mastery </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8'>
                <div className='col-span-4 md:flex-grow'>
                    <h1 className='text-4xl mb-8'>I&rsquo;ve Got a Story To Tell</h1>

                    <section>
                        <h2 className='text-2xl mt-8'>Pensacola</h2>
                        <p className='mt-2'>
                        I grew up in the South with my two sisters and mom, attending ten schools before I dropped out at 15. I worked various jobs before catching my first felonies at 18 and my last felony at 21, all drug-related.
                        </p>
                        <h2 className='text-2xl mt-8'>Bakersfield</h2>
                        <p className='mt-2'>
                        A year in jail was good for me. After release, I worked as a janitor and later as a banquet server. But life had no direction until Hurricane Katrina took me to Bakersfield, CA. I found some stability working as a Food and Beverage Manager but soon fell into old habits. I got caught in the crossfire of bad decisions, culminating in a violent encounter in the early hours of Jan. 1, 2008 that left me with five stab wounds, a collapsed lung, and a broken knee. Sadly, this was only a stopping point on my descent toward homelessness and meth addiction.
                        </p>
                        <h2 className='text-2xl mt-8'>Montebello</h2>
                        <p className='mt-2'>
                        Eventually, I ended up in East LA, staying with a drag queen named Lee Paris. My meth addiction flourished as I naturally gravitated towards sales as a way to support my habit. I was having the time of my life. But this kid from Pensacola has no place on those streets. After a string of too-close calls, I hung up my baggies for good.
                        </p>
                        <h2 className='text-2xl mt-8'>Alchemy</h2>
                        <p className='mt-2'>
                        I withdrew into the barber shop where I sat alone most of the time. Times got dark. But as they say, it&apos;s always darkest before dawn. I discovered binaural beats and brainwave entrainment, learned to meditate, and saw a new light. I dedicated myself to self-improvement, quitting cigarettes in &lsquo;11 and meth in &lsquo;12. This was a time of transformation.
                        </p>
                        <h2 className='text-2xl mt-8'>Fullerton</h2>
                        <p className='mt-2'>
                        My interest in Sacred Geometry led me to geometry, physics, and mathematics. I tried to understand these topics, but my lack of mathematical knowledge frustrated me. Eventually, I earned AS degrees in Mathematics and Computer Science from Fullerton Community College. I didn&apos;t know exactly what I was doing, accept that I wanted to make mathematical and scientific knowledge more accessible, a mission I hold to this day.
                        </p>
                        <h2 className='text-2xl mt-8'>Angels</h2>
                        <p className='mt-2'>
                        Lee Paris, by the way, remains a dear friend to this day. Without her aid, love, and support, and the support of her partner, Pete, I can’t even imagine what my life would be like. Everything I did to pull myself up out of that life is owed to them.
                        </p>
                        <h2 className='text-2xl mt-8'>Stanford</h2>
                        <p className='mt-2'>
                        After transferring to Stanford on a scholarship and floundering in math, I switched my major to Product Design. I found that Product Design offers the tools to fulfill my dream of not only writing accessible math and geometry books but of bringing all of my ideas out into the world. Product Design, I believe, is the most powerful major a student can choose due to its versatility.
                        </p>
                        <h2 className='text-2xl mt-8'>Los Angeles</h2>
                        <p className='mt-2'>
                        After Stanford, I continued my studies at USC’s Jimmy Iovine and Andre Young Academy, where I sharpened my skills and was given the distinguished and rare honor of having my diploma presented to me on stage by none other than Dr. Dre himself.
                        </p>
                        <h2 className='text-2xl mt-8'>What&apos;s Next?</h2>
                        <p className='mt-2'>
                        And now I’m here on the precipice of my next step on this wild journey. If you have any questions, are curious, or just want to talk, please reach out.
                        </p>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default story;

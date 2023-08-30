import Image from "next/image";
import React from "react";
import storiImg from "../public/assets/projects/stori.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const story = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        {/* <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={storiImg}
                    alt='/'
                /> */}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">My Story</h2>
          <h3>Meth / Math / Mastery </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8">I&rsquo;ve Got a Story To Tell</h1>

          <section>
            <h2 className="text-2xl mt-8">Pensacola</h2>
            <p className="mt-2">
              I grew up in the South with my two sisters and mom, attending ten
              schools before I dropped out at 15. Predictably,I was in trouble
              with the law before I turned 19. I would live the next few years
              essentially as an outlaw until the law finally caught up with me
              in &apos;01.
            </p>
            <h2 className="text-2xl mt-8">Bakersfield</h2>
            <p className="mt-2">
              Spending nearly a year in jail was good for me. After release, I
              worked as a janitor and later as a banquet server. But I was still
              adrift when Hurricane Katrina flung me all the way to Bakersfield,
              CA. I found some stability working as a Food and Beverage Manager
              but soon fell into old habits. I got caught in the crossfire of
              bad decisions and addiction culminating in a violent encounter in
              the early hours of Jan. 1, 2008 that left me with five stab
              wounds, a collapsed lung, and a broken knee. Sadly, this was only
              a stopping point on my descent toward homelessness and more
              serious addictions.
            </p>
            <h2 className="text-2xl mt-8">Montebello</h2>
            <p className="mt-2">
              Eventually, I ended up in LA, sleeping on the floor of a barber
              shop turned storage room. My addictions flourished as I sank into
              the street lifestyle once again. The worst part was that I was
              enjoying it. But this Pensacola kid has no place on those streets.
              After a string of too-close calls, I knew I had to make make some
              changes or I wasn&apos;t going to be okay.
            </p>
            <h2 className="text-2xl mt-8">Alchemy</h2>
            <p className="mt-2">
              I withdrew into the barber shop where I sat alone most of the
              time. Times got dark. But as they say, it&apos;s always darkest
              before dawn. I discovered binaural beats and brainwave
              entrainment, learned to meditate, and was, in a sense, reborn. I
              dedicated myself to improving my life. Slowly, then quickly, my
              addictions and unhealthy habits began to fall away. This was a
              time of transformation.
            </p>
            <p className="mt-2">
              During this time I developed an affinity for Sacred Geometry,
              which ultimately led me to geometry, physics, and mathematics. As
              I has always done in life, I tried to teach myself. But my lack of
              mathematical knowledge prevented any real understanding.
            </p>
            <h2 className="text-2xl mt-8">Fullerton</h2>
            <p className="mt-2">
              Eventually, I realized I couldn&apos;t do it alone and enrolled at
              Fullerton Community College (SP &apos;14) to pursue Mathematics. I
              didn&apos;t know what I was doing. I just knew I didn&apos;t want
              other people in my position to feel left out the way I had. I
              wanted to make mathematical and scientific knowledge more
              accessible to all who desired it, a mission I hold to this day.
            </p>
            {/* <h2 className='text-2xl mt-8'>Angels</h2>
                        <p className='mt-2'>
                        Lee Paris, by the way, remains a dear friend to this day. Without her aid, love, and support, and the support of her partner, Pete, I can’t even imagine what my life would be like. Everything I did to pull myself up out of that life is owed to them.
                        </p> */}
            <h2 className="text-2xl mt-8">Stanford</h2>
            <p className="mt-2">
              After transferring to Stanford on a scholarship and floundering in
              math, I discovered Product Design and eagerly declared. I found
              Product Design to be a much better vehicle for my goals and
              aspirations if increasing the beauty and accessibility of STEM
              topics.
            </p>
            <h2 className="text-2xl mt-8">Los Angeles</h2>
            <p className="mt-2">
              After Stanford, I continued my studies at USC&apos;s Jimmy Iovine
              and Andre Young Academy, where I sharpened my skills and was given
              the distinguished and rare honor of having my diploma presented to
              me on stage by none other than Dr. Dre himself.
            </p>
            <h2 className="text-2xl mt-8">What&apos;s Next?</h2>
            <p className="mt-2">
              And now I’m here on the precipice of my next step on this wild
              journey. If you have any questions, are curious, or just want to
              talk, please don&apos;t hesitate to reach out.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default story;

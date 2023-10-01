import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import heroImg from "../public/assets/projects/hapticPoster.png";
import timelineImg from "../public/assets/projects/learningTimeline.png";

const hapticMouse = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={heroImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Haptic Mouse</h2>
          <h3>Accessible Design / Firmware / Arduino</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8 mt-16">Haptic Mouse</h1>

          <section>
            <h2 className="text-2xl mt-8">Context</h2>
            <p className="mt-2">
              During the summer of 2020, my partner and I embarked on a project
              in collaboration with the Stanford Undergraduate Research
              Institute and Stanford&apos;s Shape Lab. Our goal was to develop a
              haptic mouse specifically designed to aid computer users with
              Blind and Low Vision (BLV). Despite the challenges of
              collaborating remotely, we successfully constructed a working
              prototype of the device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Problem</h2>
            <p className="mt-2">
              The project aimed to address the significant challenge faced by
              Blind and Low Vision (BLV) computer users, who often struggle with
              navigation and interaction due to the visual-centric nature of
              most computer interfaces. There is a pressing need for an
              assistive device that can bridge this gap and enhance the
              computing experience for BLV users, making it more accessible and
              user-friendly. The goal was to develop a haptic mouse prototype
              that leverages tactile feedback to provide BLV users with more
              intuitive and effective ways to interact with digital content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">My Role</h2>
            <p className="mt-2">
              In this project, my primary responsibility was to develop the
              firmware for the haptic device. To achieve this, I constructed a
              digital environment using Unity, wherein I created a virtual
              representation that could be controlled by a mouse. As the mouse
              navigated over different obstacles or textures within the
              environment, the haptic device was programmed to simulate the
              varying terrains experienced by the avatar, thereby providing
              tactile feedback representative of each encountered element.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Poster Presentation</h2>
            <p className="mt-2">
              At the conclusion of our research project, we were each required
              to give individual poster presentations. My objective for this
              presentation was to craft a unique visual representation that
              would elucidate the pipeline and showcase how the device prototype
              would be utilized. This endeavor marked one of my initial forays
              into visual design, and was created using Keynote.
            </p>

            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={heroImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Further Exploration</h2>
            <p className="mt-2">
              After completing the project, I was excited to practice my visual
              design skills. Inspired by the layout of train schedule maps that
              aim to incorporate a wealth of information, I dedicated some time
              to developing a detailed research timeline using Figma.
            </p>

            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={timelineImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Reflection</h2>
            <p className="mt-2">
              I'm very proud of participation and contributions to this project,
              particularly since I was venturing into entirely new territory and
              learning every aspect from scratch. Initially, feelings of
              imposter syndrome were overwhelming, but over the course of 10
              weeks, I was happy with my progress and the skills I gained and
              grew. This experience was not only a journey of developing
              technical skills but also a transformative lesson in
              self-realization. It taught me that with commitment, I am capable
              of achieving virtually anything, marking a significant enhancement
              in my self-confidence and mindset.
            </p>
          </section>
          {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
            <Image src={diagramImg} className='rounded-xl' alt='/' />
          </div> */}

          <Link href="/#projects">
            <p className="underline cursor-pointer mt-8">Back</p>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0">
          <p className="text-center text-2xl font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Accessible Design
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Arduino
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Unity / C#
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Firmware
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hapticMouse;

import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import heroImg from "../public/assets/projects/wrimo-display.png";
import ideationImg from "../public/assets/projects/ideation.png";
import directionImg from "../public/assets/projects/direction.png";
import lofiImg from "../public/assets/projects/lofiProto.png";
import digitalProtoImg from "../public/assets/projects/digitalProto.png";
import packagingImg from "../public/assets/projects/packaging.png";
import renderImg from "../public/assets/projects/render.png";
import vvpImg from "../public/assets/projects/vvp.png";
import presentationImg from "../public/assets/projects/presentation.png";
import usersImg from "../public/assets/projects/users.png";

const wrimo = () => {
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
          <h2 className="py-2">Wrimo</h2>
          <h3> Futurecasting / Package Design / Communication </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8">Wrimo</h1>

          <section>
            <h2 className="text-2xl mt-16">Context & Prompt</h2>
            <p className="mt-2">
              Wrimo was a 4-week Speculative Design project for Aesthetics of
              Design II with Lisa Krohn at Iovine and Young Academy. The prompt
              was to imagine how humans might interact with technology 10 years
              into the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">
              How might we interact with technology in 10 years?
            </h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={ideationImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Problem</h2>
            <p className="mt-2">
              For inspiration I looked to my own daily life and observed that my
              space is overflowing with remote controls. There is one for the
              fan, the air conditioning, my television, and mice for my
              computers. I wondered how I might control all the devices in my
              life and look beyond the simple solution of a smart phone app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Users</h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={usersImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Direction</h2>
            <p className="mt-2">
              One of the constraints for this project was that it had a physical
              prototype requirement. This forced me away from the &quot;killer
              app&quot; mindset and toward thinking about how we interact with
              our world. Through weeks of iteration, experimentation, and
              pivots, I landed Wrimo, a wrist wearable universal remote with
              ground breaking shape shifting technology. Inspired by
              Shape-memory alloys, Wrimo&apos;s shape-shifting material
              interface and shape automatically shift to meet the user&apos;s
              immediate need.{" "}
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={directionImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Lo-Fi Prototypes</h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={lofiImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Interface Designs</h2>
            <p className="mt-2">Designed in Figma.</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={digitalProtoImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Product Rendering</h2>
            <p className="mt-2">Rendered in Fusion 360.</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={renderImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Product Packaging</h2>
            <p className="mt-2">
              I generated the boxes using MidJourney, created the logo in Figma,
              and created the image in Photoshop.{" "}
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={packagingImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Visual Value Proposition</h2>
            <p className="mt-2">
              I like to think my Photoshop skills have progressed since then.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={vvpImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Final Presentation</h2>
            <p className="mt-2">
              Click the button below to read more about the users, solution, and
              process here.{" "}
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={presentationImg} className="rounded-xl" alt="/" />
            </div>

            <div className="mt-8 flex">
              <a href="/wrimoFinalPresent.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  Process Deck
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Reflection</h2>
            <p className="mt-2">
              This was a very fun exercise in unconstrained creativity. I
              allowed myself to tak risks, try new things, and follow my
              imagination where it takes me.I also used the opportunity to
              experiment with the aesthetics of the pitch deck. If I were to
              revise the deck, I would make the text larger and brighter to
              provide more contrast and improve readability. Check out the
              linked deck to see how Wrimo developed from the prompt to the
              prototype.{" "}
            </p>
          </section>

          <Link href="/#projects">
            <p className="underline cursor-pointer mt-8">Back</p>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl py-4 px-8 mt-8 md:mt-0">
          <p className="text-center text-2xl font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Procreate
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Figma
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> MidJourney
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Photoshop
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Rapid Prototyping
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Fusion 360
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wrimo;

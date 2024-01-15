import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import makerHeroImg from "../public/assets/maker/makerHero.png";
import packagingImg from "../public/assets/projects/packaging.png";
import renderImg from "../public/assets/projects/render.png";
import vvpImg from "../public/assets/projects/vvp.png";
import presentationImg from "../public/assets/projects/presentation.png";
import ilumenumImg from "../public/assets/maker/Ilumenum.png";
import lockImg from "../public/assets/maker/LockImg.png";
import hapticImg from "../public/assets/maker/Haptic.png";
import rollingImg from "../public/assets/maker/Rolling.png";
import rimImg from "../public/assets/maker/Rim.png";
import ilumenumIIImg from "../public/assets/maker/IlumenumII.png";

const making = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={makerHeroImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Making</h2>
          <h3> Maker Spaces / Metal Shop / Wood Shop </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8">Makership</h1>

          <section>
            <h1 className="text-2xl mt-16">Stanford Product Realization Lab</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam corrupti veritatis, ea vitae sit ab sint pariatur eum
              ullam, eveniet, perspiciatis magnam impedit nam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Lever Action Locking Device</h2>
            <p className="mt-2">Laser Cutting, CAD, 3D Printing</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={lockImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Ilumenum</h2>
            <p className="mt-2">Lathe, Mill, Improvisation</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={ilumenumImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Haptic Mouse</h2>
            <p className="mt-2">C#, Unity, Microcontroller</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={hapticImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h1 className="text-2xl mt-16">IYA Creator&apos;s Studio</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam corrupti veritatis, ea vitae sit ab sint pariatur eum
              ullam, eveniet, perspiciatis magnam impedit nam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Rolling Rope</h2>
            <p className="mt-2">Prototyping, CAD, 3D Printing </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={rollingImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Mini Rim</h2>
            <p className="mt-2">CAD/CAM, CNC</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={rimImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Ilumenum II</h2>
            <p className="mt-2">CAD/CAM, Microcontroller, 3D Printing </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={ilumenumIIImg} className="rounded-xl" alt="/" />
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
            <h2 className="text-2xl mt-8">Summary</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nulla amet, ab nostrum dignissimos ullam qui atque, eius ea
              voluptates nesciunt, dolores fuga tenetur!{" "}
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
              <RiRadioButtonFill className="pr-1" /> Sketching
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> CAD
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Laser Cutter
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> 3D Printer
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Metal Lathe/Mill
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Haas CNC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default making;

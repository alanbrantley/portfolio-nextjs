import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import makerHeroImg from "../public/assets/maker/makerHero.png";
import ilumenumImg from "../public/assets/maker/Ilumenum.png";
import lockImg from "../public/assets/maker/LockImg.png";
import hapticImg from "../public/assets/maker/Haptic.png";
import rollingImg from "../public/assets/maker/Rolling.png";
import rimImg from "../public/assets/maker/Rim.png";
import ilumenumIIImg from "../public/assets/maker/IlumenumII.png";
import moverImg from "../public/assets/maker/mover.png";

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
          <section>
            <h1 className="text-2xl mt-16">Stanford Product Realization Lab</h1>
            <p className="mt-2">
              I got my first taste of making at Stanford&apos;s PRL. When I
              transferred my intended major was math. When I found out about the
              Product Realization Lab, my math education was over.
            </p>
          </section>

          <section>
            <h2 className="text-xl mt-16">Lever Action Locking Device</h2>
            <h3 className="mt-2">Foundations of Product Realization</h3>
            <p>
              This project marked a pivotal moment in my academic journey, being
              the first instance of transforming a concept into a tangible
              product. Tasked with demonstrating proficiency in 3D modeling and
              digital fabrication, the goal was to design and construct a
              bi-stable mechanical device. The device needed to switch between
              two unique states and visually indicate its current state.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={lockImg} className="rounded-xl" alt="/" />
            </div>
            <h3 className="mt-8">Portfolio Piece</h3>
            <p>
              Below is an entry into my first design portfolio, created when I
              was applying for graduate school. Press the button below to view
              the write-up on the Bi-Stable Mechanism.
            </p>

            <div className="mt-8 flex">
              <a href="/biStable.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Original Portfolio
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Ilumenum</h2>
            <h3 className="mt-2 ">Product Realization: Design and Making</h3>
            <h3 className="mt-8 ">Inspiration and Pivot</h3>
            <p className="mt-2">
              The journey of this project was marked by significant challenges
              and adaptability. Initially envisioned as a pyramid lamp, the
              project took a new direction after being inspired by a previous
              student&apos;s work. This pivot led to the exploration of new
              skills, including learning how to turn metal on a lathe.{" "}
            </p>
            <h3 className="mt-8 ">Design and Fabrication</h3>
            <p className="mt-2">
              The revised concept evolved into a cylindrical lamp designed to
              operate essentially like a knob, activating various states of the
              Playground Express Microcontroller as the user rotates. The base
              was crafted from 5-inch diameter aluminum stock, meticulously
              turned on the lathe. The cover rotator followed a similar process,
              with additional milling to create hollow features on the cover.
              The original plan for the shade involved kerfed balsa wood,
              intended to be stained to match an anodization process.{" "}
            </p>

            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={ilumenumImg} className="rounded-xl" alt="/" />
            </div>

            <h3 className="mt-8 ">Adaptation Amidst Global Challenges</h3>
            <p className="mt-2">
              Unfortunately, our labs shut down before I could fully realize my
              vision. Thankfully, I had completed the day before the shutdown,
              and I was able to complete the project at home. I found some
              embroidery rings and made the shade from card stock.{" "}
            </p>

            <h3 className="mt-8 ">Final Results</h3>
            <p className="mt-2">
              The final assembly of the two pieces was seamless, demonstrating
              excellent tolerances and a high-quality machine finish. The
              precision in craftsmanship resulted in components that fit
              together like butter, and along with the actuator, provided a very
              satisfying feeling when rotating the cover around the base.{" "}
            </p>

            <p className="mt-2">
              To view a more detailed write-up on the project, click the button
              below.{" "}
            </p>

            <div className="mt-8 flex">
              <a href="/ilumenum.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Orignal Portfolio
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Haptic Mouse</h2>
            <p className="mt-2">C#, Unity, Microcontroller</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={hapticImg} className="rounded-xl" alt="/" />
            </div>

            <div className="mt-8 flex">
              <a href="/haptic.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Original Portfolio
                </button>
              </a>
              <a href="/hapticmouse" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Web Portfolio
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Book Mover</h2>
            <p className="mt-2">3D Printing, Quantitative Analysis</p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8">
              <Image src={moverImg} className="rounded-xl" alt="/" />
            </div>
            <div className="mt-8 flex">
              <a href="/mover.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Technical Report
                </button>
              </a>
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
            <div className="mt-8 flex">
              <a href="/rollingrope" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  View Web Portfolio
                </button>
              </a>
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

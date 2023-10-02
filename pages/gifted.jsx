import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import giftedImg from "../public/assets/projects/gifted.png";
import problemImg from "../public/assets/projects/gifted-problem.png";
import storyboardImg from "../public/assets/projects/storyboard.png";
import wireframeImg from "../public/assets/projects/wireframe.png";
import compareImg from "../public/assets/projects/comparison.png";
import userImg from "../public/assets/projects/user.png";
import vvpImg from "../public/assets/projects/vvp1.png";
import vvpFinalImg from "../public/assets/projects/vvpFinal.png";
import candidatesImg from "../public/assets/projects/candidates.png";
import solutionImg from "../public/assets/projects/gifted-solution.png";
import interactionImg from "../public/assets/projects/gifted-interaction.png";

const Gifted = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={giftedImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gifted</h2>
          <h3>Figma / Storytelling / Interaction Design</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8">Gifted</h1>

          <section>
            <h2 className="text-2xl mt-16">Context</h2>
            <p className="mt-2">
              The was a solo project for a UI/UX course with Chris Swain at IYA.
              Gifted was devised after Dalle-2 and MidJourney but before ChatGPT
              or Bing chat made the concept effectively obsolete. But this was a
              fantastic exercise in human-centered design. I expanded my skills
              in user research and testing and learned a lot about the
              importance of storytelling in design. I am proud of the work I did
              on this project and I am excited to share it here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Introducing </h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={solutionImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Problem</h2>
            <p className="mt-2">
              Even with Amazon, gift apps, and the entire internet, finding good
              gifts still requires a ton of work. There still is no single
              solution that offers a seamless gifting experience.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={problemImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Target User</h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={userImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Design Decisions</h2>
            <p className="mt-2">Key decisions included:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Use proprietary AI to search entire web for suggestions</li>
              <li>
                Smart suggestions based on recipients personality and interests{" "}
              </li>
              <li>Text/Email Gifting</li>
              <li>Creating a wishlist for to share with network</li>
            </ul>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={compareImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">User Scenario Storyboard</h2>
            <p className="mt-2">
              In the hustle of Christmas, Kylee, a devoted gift-giver, was in a
              race against time. Scouring every online store and magazine, she
              struggled to find the ideal gift for her cherished Uncle Z within
              her budget. Just when she was close to settling for the ordinary,
              she discovered the Gifted app. Pouring her thoughts into the app,
              detailing Z&apos;s tastes and her earlier gift ideas, she was
              presented with a stunning revelation—a classical pocket watch.
              From Amazon to artisanal options, she had a gamut to pick from.
              Thanks to Gifted&apos;s smart filters, she zeroed in on a unique
              watch from a niche store, had it exquisitely engraved, and placed
              it wrapped under the tree, well in time for the festive morning.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={storyboardImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">User Story Wireframe</h2>
            <p className="mt-2">
              As a account holder, I quickly manage my wish list, my gift list,
              and know what my friends and family want from my phone.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={wireframeImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Visual Value Proposition Draft</h2>
            <p className="mt-2">
              This was a stretching assignment for me because it forced me tell
              a story visually. There were many VVP drafts. This was one of the
              ones that didn&apos;t make it.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={vvpImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Other Candidates</h2>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={candidatesImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">VVP</h2>
            <p className="mt-2">
              After many more iterations, feedback, and more iterating I landed
              on this one because it told the story I wanted to tell. The image
              on the left was an actual google result.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={vvpFinalImg} className="rounded-xl" alt="/" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Demonstration</h2>
            <p className="mt-2">
              Explore the Gifted prototype in Figma by clicking the button
              below.
            </p>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-4">
              <Image src={interactionImg} className="rounded-xl" alt="/" />
            </div>
            <div className="mt-8 flex">
              <a
                href="https://www.figma.com/proto/FsSEMW0XKxnH06jJE89RWZ/Gifted-App?page-id=139%3A3815&type=design&node-id=201-30714&viewport=2228%2C-221%2C0.19&t=S1kSK1G7G4m7ON36-1&scaling=scale-down&starting-point-node-id=201%3A30714&mode=design"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  Gifted Prototype
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Initial Business Model</h2>
            <p className="mt-2">
              Freemium with affiliate marketing, ads, partnerships, and
              subscriptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Next Steps</h2>
            <p className="mt-2">
              The next steps for this project would be construct an MVP and
              conduct user research to validate the concept or pivot. I would
              also need to conduct market research to determine the viability of
              the product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-16">Reflection</h2>
            <p className="mt-2">
              I grew my Figma and design skills by leaps and bounds through this
              project. Professor Swain pushed us to do our most excellent work
              and I really did do my best. I learned a lot about the importance
              of user research and testing. I also learned a lot about the
              importance of storytelling in design. I am proud of the work I did
              on this project, even if the idea is kaput.
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
              <RiRadioButtonFill className="pr-1" /> Figma
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Qualtrix
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> User Research
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Interaction Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifted;

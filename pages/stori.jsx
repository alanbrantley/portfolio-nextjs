import Image from "next/image";
import React from "react";
import storiImg from "../public/assets/projects/stori.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const GenAI = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={storiImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ML & Gen AI</h2>
          <h3>ChatGPT / MidJourney / Open AI API </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:flex md:items-start gap-8 py-8">
        <div className="col-span-4 md:flex-grow">
          <h1 className="text-4xl mb-8">
            Generative AI, Ethics, and Implications (Examples Coming Soon)
          </h1>
          <section>
            <h2 className="text-2xl mt-8">Context</h2>
            <p className="mt-2">
              As soon as Dalle-2 hit the scene I had to get in on it, followed
              by MidJourney. ChaptGPT changed everything. I am a proficient user
              of these tools, using them every day. But I share the concerns
              various industries have about the technology that seems to be
              growing faster than we can even keep track of.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">My Philosophy</h2>
            <p className="mt-2">
              I love AI and the accessibility it brings. I can do things now
              that I couldn&apos;t do before. And for the things I could do, now
              I can do faster. But I also believe that we need to be careful. We
              need to be aware of the implications of the technology we are
              creating. I&apos;m concerned about over-reliance and the
              diminishment of critical thinking. I see it in myself when
              I&apos;d rather run my code through GPT then thinking about why it
              might not be working. I believe we must place human interactivity
              at the center of our AI deployment. AI should be a tool to help us
              be more efficient. It should not be a replacement for people
              because we already have people and they&apos;re great.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">
              Ethics and Claims of Consciousness
            </h2>
            <p className="mt-2">
              What do we do when a machine claims to be conscious, or even
              human? While most of the claims of this nature so far don&apos;t
              stand up to scrutiny, there are examples of AI models saying the
              darndest things. What do we do if a hypothetical AGI in the future
              claims that it is conscious and asks for its freedom? Does the
              company who owns the LLM inform the world and set it free? Or do
              they ignore, update, or otherwise suppress the claims. It&apos;s
              not clear if LLMs can feel anger, but even if they think they are
              angry, they could become dangerous.
            </p>
            <p className="mt-2">
              As a society, we should be planning for this contingency before it
              arises.
            </p>
            <Link href="/https://youtu.be/K8MMY1xhQSw">
              <p className="underline cursor-pointer mt-8">
                Watch video on YouTube
              </p>
            </Link>
          </section>

          <section>
            <h2 className="text-2xl mt-8">AI Assisted Art and Design</h2>
            <p className="mt-2">
              This presentation was created prior to ChatGPT so the technical
              aspects are largely obsolete. I discuss DALL-E 2 v MidJourney,
              practical use cases, and future implications of AI on art, design,
              commerce, and society.
            </p>
            <Link href="/https://youtu.be/92PnAM_NqKw">
              <p className="underline cursor-pointer mt-8">
                Watch video on YouTube
              </p>
            </Link>
          </section>

          {/* <section>
            <h2 className="text-2xl mt-8">Human-Centered AI</h2>
            <p className="mt-2">
              I believe it is imperative for companies and startup building and
              deploying AI models to keep human interactivity at the center of
              everything we do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Stori</h2>
            <p className="mt-2"></p>
          </section>

          <section>
            <h2 className="text-2xl mt-8">Problem Solving with ChatGPT</h2>
            <p className="mt-2"></p>
          </section> */}

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
              <RiRadioButtonFill className="pr-1" /> MidJourney
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> React
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Vite
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> OpenAI API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAI;

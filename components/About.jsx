import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/grad-photo-dre.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2A74BE]">
            About
          </p>
          <h2 className="py-4">A Little Bit About Me</h2>
          <p className="py-2 text-gray-600">
            I&apos;m a recent graduate of USC&apos;s Iovine and Young Academy
            with an MS in Product Innovation, where I studied the intersection
            of technology, business, and the arts. I&apos;m a creative, a
            builder, and a dreamer. I&apos;m passionate about the potential of
            technology to transform lives and create opportunities for all.
          </p>
          <p className="py-2 text-gray-600">
            I am currently focused on the application, ethics, and implications
            of artificial intelligence. I am also exploring the intersection of
            technology and education, with a particular interest in the future
            of learning and the role of AI technology in shaping it.
          </p>
          <Link href="/story">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Click here to learn more about my story.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <Helmet>
        <script>
          {`
            window.chatbaseConfig = {
              chatbotId: "HG4S7d7jSx3yJ__QlRHda",
            }
          `}
        </script>
        <script
          src="https://www.chatbase.co/embed.min.js"
          id="HG4S7d7jSx3yJ__QlRHda"
          defer
        ></script>
      </Helmet>

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600"></p>
          <h1 className="py-4 text-gray-700">
            My name is <span className="text-[#2A74BE]"> Alan.</span>
          </h1>
          <h1 className="py-2 text-gray-700">Artist. Creator. Educator</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            <i>Luck is the residue of Hard Work and Design - </i>
            John Milton
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/alanbrantley"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/alanbrantley"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>

            <a
              href="https://www.youtube.com/channel/UCSAVg9y37L3OIb5euvdByng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import CoverImg from "../public/assets/NGCover.png";

const Main = () => {
  return (
    <div id="home" className="w-full min-h-screen text-center">
      {/* Helmet component to manage the document head */}
      <Helmet>
        {/* Inline script to configure the chatbot */}
        <script>
          {`
            window.chatbaseConfig = {
              chatbotId: "HG4S7d7jSx3yJ__QlRHda",
            }
          `}
        </script>
        {/* Script to embed the chatbot */}
        <script
          src="https://www.chatbase.co/embed.min.js"
          id="HG4S7d7jSx3yJ__QlRHda"
          defer
        ></script>
      </Helmet>

      {/* Main container for the page content */}
      <div className="max-w-[1080px] w-full h-full mx-auto p-4 flex flex-col">
        {/* HEADER section */}
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          {/* Title of the page */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Natural Geometry
          </h1>
          {/* Subtitle of the page */}
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            A Geometric Reality
          </h4>
        </section>

        {/* Featured Blog section */}
        <section>
          {/* Cover image container */}
          <div className="mb-8 md:mb-16">
            <div className="sm:mx-0">
              <a
                aria-label="Introduction Natural Geometry"
                href="/posts/dynamic-routing"
                className="block"
              >
                {/* Wrapper to maintain the 16:9 aspect ratio */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
                >
                  {/* Container for the image with hover effect */}
                  <div className="absolute top-0 left-0 w-full h-full shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <Image
                      alt="Cover Image for Natural Geometry Blog Post"
                      src={CoverImg}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Blog description container */}
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 text-left">
            <div>
              {/* Blog title */}
              <h2>
                <a className="hover:underline" href="/posts/dynamic-routing">
                  An Introduction To Natural Geometry
                </a>
              </h2>

              {/* Publication date */}
              <div className="text-lg text-left mt-8">
                <time dateTime="2020-03-16T05:35:07.322Z">May 18, 2024</time>
              </div>
            </div>

            {/* Blog content summary */}
            <div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Praesent elementum facilisis leo vel fringilla est ullamcorper
                eget. At imperdiet dui accumsan sit amet nulla facilities morbi
                tempus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;

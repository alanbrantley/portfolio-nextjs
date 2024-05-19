import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Chapters from "../components/Chapters";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alan | Designer and Developer</title>
        <meta
          name="description"
          content="Natural Geometry is a blog about the intersection of nature and geometry"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
  );
}

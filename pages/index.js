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
        <title>Natural Geometry</title>
        <meta
          name="description"
          content="Natural Geometry is a blog about the intersection of nature and geometry"
        />
        <link rel="icon" href="/NG.png" />
      </Head>
      <Main />
      {/* <About /> */}
      {/* <Skills /> */}
      <Chapters />
      {/* <Contact /> */}
    </div>
  );
}

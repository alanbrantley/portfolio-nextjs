import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Natural Geometry</title>
        <meta
          name="description"
          content="I’m a designer and developer specializing in prompt engineering and accessible design"
        />
        <link rel="icon" href="/NG.png" />
      </Head>
      <Main />
      {/* <About /> */}
      {/* <Skills /> */}
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

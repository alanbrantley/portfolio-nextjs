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
        <title>Alan | Designer and Developer</title>
        <meta
          name="description"
          content="I’m a designer and developer specializing in prompt engineering and accessible design"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      {/* <Skills /> */}
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

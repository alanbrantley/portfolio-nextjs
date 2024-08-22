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
        <title>Alan | Educator and Designer</title>
        <meta
          name="description"
          content="I’m an educator and designer who loves to create and teach. I’m passionate about using design thinking to solve problems and create a better world."
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

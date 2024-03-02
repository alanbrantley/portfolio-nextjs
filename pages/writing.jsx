import Head from "next/head";
import Image from "next/image";
import VectorImg from "../public/assets/projects/vector.png";
import AnalysisImg from "../public/assets/projects/realAnalysis.png";
import GrowthImg from "../public/assets/projects/growthMath.png";
import stressImg from "../public/assets/projects/stress.png";
import gmoImg from "../public/assets/projects/gmo.png";
import gradImg from "../public/assets/graduate.png";

const writing = () => {
  return (
    <>
      <Head>
        <title>Alan | Writing Samples</title>
        <meta
          name="description"
          content="Writing samples from Alan Brantley, a technological generalist based in Los Angeles, CA."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Writing Samples</h2>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto  flex items-center justify-center ">
            <Image src={gmoImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Research | Debate Prep{" "}
            </h3>
            <h2 className="py-4">GM Oh! Is it Right to Know?</h2>
            <p className="py-2 text-gray-600">
              In our group assignment, we examined California&apos;s Proposition
              37, proposed by the Right to Know movement, which sought to
              mandate labels on food products containing GMOs. Our class was
              divided into groups and assigned topics to debate. Before knowing
              our stance, each of us wrote a paper discussing both sides of the
              argument. This is my contribution.
            </p>

            <a href="/GMOh.pdf" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto  flex items-center justify-center">
            <Image src={VectorImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Linear Algebra | Technical Writing | Proofs
            </h3>
            <h2 className="py-4">
              Dual Vector Space, Traces, and Cyclicity of Trace
            </h2>
            <p className="py-2 text-gray-600">
              This paper explores dual vector spaces, traces, and the cyclicity
              of traces in finite-dimensional vector spaces, proving key
              concepts like the basis independence of trace and its cyclicity. I
              demonstrated that for square matrices A and B, the trace of AB is
              equal to the trace of BA, emphasizing the invariant nature of
              trace in matrix products.
            </p>

            <a href="/vector.pdf" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto  flex items-center justify-center">
            <Image src={AnalysisImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Real Analysis | Technical Writing | Infinite Series
            </h3>
            <h2 className="py-4">
              Rearranging Infinite Series and Double Summation
            </h2>
            <p className="py-2 text-gray-600">
              In &quot;Rearranging Infinite Series and Double Summation,&quot; I
              examined how altering the order of numbers in infinite series,
              especially those with both positive and negative values, can
              significantly change their sums, sometimes resulting in infinite
              totals. I also explored double summations, revealing that the sum
              of numbers in a two-dimensional grid can vary based on the
              addition sequence, highlighting the impact of order changes in
              advanced mathematics.
            </p>

            <a href="/analysis.pdf" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto  flex items-center justify-center">
            <Image src={GrowthImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Research | Growth Mindset | Mathematics Education
            </h3>
            <h2 className="py-4">
              Growth Potential for Growth Mindset Application in Mathematics
              Education: A Literature Review
            </h2>
            <p className="py-2 text-gray-600">
              In my paper, &quot;Growth Potential for Growth Mindset Application
              in Mathematics Education: A Literature Review,&quot; I analyzed
              how growth and fixed mindsets influence math learning, showing
              that students&apos; beliefs about their intelligence significantly
              affect their math performance. The review highlights the effects
              of mindset interventions on students&apos; attitudes and
              achievements in math, summarizing current trends and suggesting
              avenues for future research.
            </p>

            <a href="/growth.pdf" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto flex items-center justify-center">
            <Image src={stressImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Quantitative Analysis | Experimental Measurements{" "}
            </h3>
            <h2 className="py-4">Mechanical Engineering Technical Reports</h2>
            <p className="py-2 text-gray-600">
              The following selection of reports were produced in the context of
              Mechanical Engineering 104 at Stanford. My graduating class had
              the privilege of taking this course remotely over Zoom with 3D
              printers sent to us by Stanford. The following is a selection of
              reports highlighting individual and group reports produced during
              the course of this course. In the case of the group assignment, I
              compiled the report and all student contributions are labeled
              accordingly.
            </p>
            <div className="mt-8 flex">
              <a href="/P1.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  P1 Report
                </button>
              </a>
              <a href="/P3.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  P3 Report
                </button>
              </a>
              <a href="/PG.pdf" target="_blank" rel="noreferrer">
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  Group Report
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="w-full p-2 flex py-32">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-16">
          <div className=" col-span-1 w-full h-auto m-auto flex items-center justify-center">
            <Image src={gradImg} className="" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              College Application | Personal Statement{" "}
            </h3>
            <h2 className="py-4">Stanford Acceptance Personal Statement</h2>
            <p className="py-2 text-gray-600">
              By popular demand, I offer the Personal Statement and Additional
              Info essays that I submitted to Stanford University. I am proud to
              say that I was accepted to Stanford and I am excited to share my
              essays with you. Please note the inclusion of the Additional
              Information statement, an essay that I believe was instrumental in
              my acceptance to Stanford. I used this essay to explain my
              perceived weaknesses, and in particular, the circumstances of my
              early life and the gap in my education. Also note that these
              essays are not perfect. There are typos, grammatical errors, and
              other mistakes. I am sharing them with you as they were submitted
              to Stanford. I hope that they can be of use to you in your college
              application process.
            </p>
            <div className="mt-8 flex">
              <a
                href="/Stanford_Personal_Statement.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  Personal Statement
                </button>
              </a>
              <a
                href="/Stanford_Additional_Information.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-4 py-2 rounded mr-4 hover:bg-blue-700 transition-colors">
                  Additional Information
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default writing;

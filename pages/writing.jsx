import Head from "next/head";
import Image from "next/image";
import AboutImg from "../public/assets/grad-photo-dre.png";
import VectorImg from "../public/assets/projects/vector.png";
import AnalysisImg from "../public/assets/projects/realAnalysis.png";
import GrowthImg from "../public/assets/projects/growthMath.png";
import stressImg from "../public/assets/projects/stress.png";
import gmoImg from "../public/assets/projects/gmo.png";

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
          <div className=" col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={gmoImg} className="rounded-xl" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Research | Debate Prep{" "}
            </h3>
            <h2 className="py-4">GM Oh! Is it Right to Know?</h2>
            <p className="py-2 text-gray-600">
              In our group assignment, we examined California&s Proposition 37,
              proposed by the Right to Know movement, which sought to mandate
              labels on food products containing GMOs. Our class was divided
              into groups and assigned topics to debate. Before knowing our
              stance, each of us wrote a paper discussing both sides of the
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
          <div className=" col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={VectorImg} className="rounded-xl" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Linear Algebra | Proof Writing | Matrix Operations
            </h3>
            <h2 className="py-4">
              Dual Vector Space, Traces, and Cyclicity of Trace
            </h2>
            <p className="py-2 text-gray-600">
              In my technical paper, I explored dual vector spaces, traces, and
              the cyclicity of traces in finite-dimensional vector spaces,
              proving key concepts like the basis independence of trace and its
              cyclicity. I demonstrated that for square matrices A and B, the
              trace of AB is equal to the trace of BA, emphasizing the invariant
              nature of trace in matrix products.
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
          <div className=" col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={AnalysisImg} className="rounded-xl" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Real Analysis | Infinite Series | Double Sums
            </h3>
            <h2 className="py-4">
              Rearranging Infinite Series and Double Summation
            </h2>
            <p className="py-2 text-gray-600">
              In my paper &quot;Rearranging Infinite Series and Double
              Summation,&quot I examined how altering the order of numbers in
              infinite series, especially those with both positive and negative
              values, can significantly change their sums, sometimes resulting
              in infinite totals. I also explored double summations, revealing
              that the sum of numbers in a two-dimensional grid can vary based
              on the addition sequence, highlighting the impact of order changes
              in advanced mathematics.
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
          <div className=" col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={GrowthImg} className="rounded-xl" alt="/" />
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
          <div className=" col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image src={stressImg} className="rounded-xl" alt="/" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h3 className="uppercase text tracking-widest">
              Quantitative Analysis | Experimental Measurements{" "}
            </h3>
            <h2 className="py-4">Mechanical Engineering Technical Reports</h2>
            <p className="py-2 text-gray-600">
              The following selection of reports were produced in the context of
              Mechanical Engineering 104 at Stanford. My graduating class had
              the privilage of taking this course remotely over Zoom with 3D
              printers sent to us by Stanford. The following is a selection of
              reports highlighting individual and group reports produced during
              the course of this course. In the case of the group assignment, I
              compiled the report and all student contributions are labled
              accordingly.
            </p>

            <a href="/hapticmouse" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper 1
              </button>
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Paper 3
              </button>
              <button className="px-4 py-2 my-8 rounded mr-4 hover:bg-blue-700 transition-colors">
                Read Group Paper
              </button>
            </a>
            <a href="/hapticmouse" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default writing;

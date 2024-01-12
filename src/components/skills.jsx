import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Skills() {
  return (
    <AnimatedPages>
      <section className="grid items-center w-full items-center lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto overflow-x-hidden ">
        <div className="p-5 w-full">
          <h3 className="text-center text-3xl">Technical Skills</h3>
          <div className="p-8 pl-16">
            <div className="flex pt-3 w-full">
              <p>HTML5</p>
              <div className="bg-amber-400 w-2/5 h-3 mt-1 ml-12">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>CSS3</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-14 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Javascript</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-6 h-3">
                <div className=" bg-[#83c5be] w-10/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>React.js</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-10 h-3">
                <div className=" bg-[#83c5be] w-10/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>tailwindcss</p>
              <div className="bg-amber-400 mt-1 ml-4 w-2/5 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Node.js</p>
              <div className="bg-amber-400 w-2/5 ml-10 mt-1 h-3">
                <div className=" bg-[#83c5be] w-4/6 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>python</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-11 h-3">
                <div className=" bg-[#83c5be] w-4/6 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Debugging</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-4 h-3">
                <div className=" bg-[#83c5be] w-full h-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl">Soft Skills</h3>
          <div className="p-8">
            <div className="flex pt-3 w-full">
              <p>Communication</p>
              <div className=" bg-amber-400 w-2/5 mt-1 ml-9 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Problem Solving</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-8 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Attention to Details</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-4 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Time Management</p>
              <div className=" bg-amber-400 w-2/5 mt-1 ml-4 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Continous Learning</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-3 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Critical Thinking</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-9 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
            <div className="flex pt-3 w-full">
              <p>Adaptability</p>
              <div className="bg-amber-400 w-2/5 mt-1 ml-16 h-3">
                <div className=" bg-[#83c5be] w-11/12 h-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
}

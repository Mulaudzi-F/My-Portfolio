import React from "react";
import AnimatedPages from "./AnimatedPage";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";

export default function Skills({ smallDevices }) {
  const skillsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.3, // Trigger when 50% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting) {
          skillsRef.current.classList.remove("showSection");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
      skillsRef.current.classList.add("showSection");
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // -------------------Revealing sections------------------------//

    <div>
      {smallDevices < 768 ? (
        <Element name="skills" className="skills">
          {" "}
          <section ref={skillsRef}>
            <h1 className="text-center underline decoration-8  decoration-[#83c5be] text-4xl mt-10 relative top-16">
              Skills
            </h1>
            <div className="grid items-center mt-40   w-full items-center lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto overflow-x-hidden ">
              <div className="p-5 ml-3 w-full">
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
                <div className="p-8 ml-16">
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
                    Handling Pressure
                    <div className="bg-amber-400 w-2/5 mt-1 ml-4 h-3">
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
            </div>
          </section>
        </Element>
      ) : (
        <AnimatedPages>
          <section>
            <h1 className="text-center underline decoration-8  decoration-[#83c5be] text-4xl mt-10 relative top-16">
              Skills
            </h1>
            <div className="grid items-center mt-40   w-full items-center lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto overflow-x-hidden ">
              <div className="p-5 ml-3 w-full">
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
                <div className="p-8 ml-16">
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
                    Handling Pressure
                    <div className="bg-amber-400 w-2/5 mt-1 ml-4 h-3">
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
            </div>
          </section>
        </AnimatedPages>
      )}
    </div>
  );
}

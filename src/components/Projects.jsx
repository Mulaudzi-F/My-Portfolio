import React from "react";
import data from "./data";
import ProjectCard from "./ProjectCard";
import AnimatedPages from "./AnimatedPage";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";

export default function Project({ smallDevices }) {
  const project = data.map((eachProject, index) => {
    return <ProjectCard key={index} item={eachProject} />;
  });

  // -------------------Revealing sections------------------------//

  const projectRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.15, // Trigger when 10% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting) {
          projectRef.current.classList.remove("showSection");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (projectRef.current) {
      observer.observe(projectRef.current);
      projectRef.current.classList.add("showSection");
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {smallDevices < 768 ? (
        <Element name="projects" className="projects">
          <div ref={projectRef} className="overflow-x-hidden  mt-60  section">
            <h1 className="text-center underline decoration-8 decoration-[#83c5be]  text-3xl">
              My Projects
            </h1>
            <div className="grid grid-cols-1 p-10 lg:grid-cols-2 sm:gap-6 grid-rows-4 gap-2 overflow-hidden">
              {project}
            </div>
          </div>
        </Element>
      ) : (
        <AnimatedPages>
          <div className="overflow-x-hidden mt-20">
            <h1 className="text-center underline decoration-8 decoration-[#83c5be]  text-3xl">
              My Projects
            </h1>
            <div className="grid grid-cols-1 p-10 lg:grid-cols-2 sm:gap-6 grid-rows-4 gap-2 overflow-hidden">
              {project}
            </div>
          </div>
        </AnimatedPages>
      )}
    </div>
  );
}

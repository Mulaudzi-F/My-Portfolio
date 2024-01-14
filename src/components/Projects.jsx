import React from "react";
import data from "./data";
import ProjectCard from "./ProjectCard";
import AnimatedPages from "./AnimatedPage";
import { Element } from "react-scroll";

export default function Project({ smallDevices }) {
  const project = data.map((eachProject, index) => {
    return <ProjectCard key={index} item={eachProject} />;
  });
  return (
    <div>
      {smallDevices < 768 ? (
        <Element name="projects" className="projects">
          <div className="overflow-x-hidden mt-60">
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
          <div className="overflow-x-hidden mt-60">
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

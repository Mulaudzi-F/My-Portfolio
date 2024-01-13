import React from "react";
import data from "./data";
import ProjectCard from "./ProjectCard";
import AnimatedPages from "./AnimatedPage";

export default function Project() {
  const project = data.map((eachProject, index) => {
    return <ProjectCard key={index} item={eachProject} />;
  });
  return (
    <AnimatedPages>
      <div className="overflow-x-hidden mt-60">
        <h1 className="text-center  text-3xl">My Projects</h1>
        <div className="grid grid-cols-1 p-10 lg:grid-cols-2  grid-rows-4 gap-2 overflow-hidden">
          {project}
        </div>
      </div>
    </AnimatedPages>
  );
}

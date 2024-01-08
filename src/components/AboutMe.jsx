import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Aboutme() {
  return (
    <AnimatedPages>
      <section className="About__me">
        <div>
          <h1 className="text-center text-3xl">About Me</h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className="px-3    w-68 grow-0 shrink-0 basis-2/5 ">
            <img
              src="./images/large 2.png "
              className=" h-full w-full object-contain rounded-lg  "
            />
          </div>
          <p className="about__content  grow-0 shrink-0 basis-3/5  px-2">
            Welcome to my digital world of innovation and creativity! I am
            thrilled to introduce you to my journey as an aspiring software
            developer. Within these digital realms, you'll discover the
            culmination of my passion for coding, problem-solving, and turning
            ideas into elegant solutions. As an entry-level software developer,
            I'm on an exciting quest to explore the endless possibilities of
            technology. This portfolio is a testament to my dedication and
            commitment to honing my skills and pushing the boundaries of what's
            possible in the world of software development.
          </p>
        </div>
        <div>
          <h3>
            <span>Let's code the future together!</span>
          </h3>
        </div>
      </section>
    </AnimatedPages>
  );
}

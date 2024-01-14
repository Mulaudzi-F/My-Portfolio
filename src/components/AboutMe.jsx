import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Aboutme() {
  return (
    <AnimatedPages>
      <section className="About__me sm:mt-20 md:h-screen font-serif overflow-x-hidden">
        <div className=" mt-8">
          <h1 className="text-center font-serif underline decoration-8 decoration-[#83c5be] text-3xl">
            About Me
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row ">
          <div className="px-3  lg:w-full">
            <img
              src="./images/large 2.png"
              className="h-full w-full object-contain rounded-lg"
              alt="Fhatuwani Mulaudzi image"
            />
          </div>
          <div className="about__content mx-10 overflow-x-hidden ">
            <p className="overflow-hidden">
              Welcome to my digital world of innovation and creativity! I am
              thrilled to introduce you to my journey as an aspiring software
              developer. Within these digital realms, you'll discover the
              culmination of my passion for coding, problem-solving, and turning
              ideas into elegant solutions. As an entry-level software
              developer, I'm on an exciting quest to explore the endless
              possibilities of technology. This portfolio is a testament to my
              dedication and commitment to honing my skills and pushing the
              boundaries of what's possible in the world of software
              development.
            </p>
            <p className="font-bold">
              <span>Let's code the future together!</span>
            </p>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
}

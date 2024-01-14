import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Home() {
  return (
    <AnimatedPages>
      <section
        className="home w-full sm:pt-10 pt-20 overflow-x-hidden sm:justify-center  max-w-full "
        id="home"
      >
        <div className="section1__container  lg: lg:flex-row w-full lg:font-bold  flex items-center flex-col">
          <div className="w-full rounded-none ">
            <img
              src="./images/mulaudzifhatuwani2.png "
              className="w-full rounded-none h-100 "
              alt="my home picture"
            />
          </div>
          <div className="home_description mx-10   lg:leading-[2.5rem] lg:text-[1.5rem] font-bold text-sm ">
            <h3>
              Greetings My name is <span>Fhatuwani Mulaudzi</span>
            </h3>
            <p className="">I'm Developer</p>
            <p>
              Within these digital realms, lies the culmination of my passion
              for coding, problem-solving, and turning ideas into elegant
              solutions
            </p>
            <button className="bg-[#83c5be] p-6 px-16 pt-4 mx-16 lg:px-16 rounded-lg">
              <a href="https://sdjawcnmmtbmbazgcgor.supabase.co/storage/v1/object/public/potfolio%20files/FHATUWANI%20MULAUDZI%20Javascript%20developer.pdf?t=2024-01-09T10%3A13%3A59.097Z">
                Get Cv
              </a>
            </button>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
}

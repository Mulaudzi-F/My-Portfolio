import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Home() {
  return (
    <AnimatedPages>
      <section className="home w-full " id="home">
        <div className="section1__container items-center w-full flex">
          <div className="w-full rounded-none z-[-10]">
            <img
              src="./images/large 2.png"
              className="w-full rounded-none h-100 "
              alt="my home picture"
            />
          </div>
          <div className="home_description  font-bold  ">
            <h3>
              Greetings My name is <span>Fhatuwani Mulaudzi</span>
            </h3>
            <p>I'm Software developer</p>
            <p>
              Within these digital realms, lies the culmination of my passion
              for coding, problem-solving, and turning ideas into elegant
              solutions
            </p>
            <button className="bg-slate-700 m-3 px-5">Get Cv</button>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
}

import React from "react";

export default function Home() {
  return (
    <section
      className="home bg-[url('./images/home-background.jpeg')] backdrop-contrast-50  "
      id="home"
    >
      <div className="section1__container ">
        <div className="home_description text-[#e9ecef] font-bold z-20 ">
          <h3>
            Greetings My name is <span>Fhatuwani Mulaudzi</span>
          </h3>
          <p>I'm Software developer</p>
          <p>
            Within these digital realms, lies the culmination of my passion for
            coding, problem-solving, and turning ideas into elegant solutions
          </p>
          <button className="bg-slate-700 m-3 px-5">Get Cv</button>
          <button className="bg-slate-700 px-4">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

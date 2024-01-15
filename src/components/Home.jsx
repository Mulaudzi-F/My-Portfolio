import React from "react";
import AnimatedPages from "./AnimatedPage";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";

export default function Home({ smallDevices }) {
  // -------------------Revealing sections------------------------//

  const homeRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.15, // Trigger when 50% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting) {
          homeRef.current.classList.remove("showSection");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (homeRef.current) {
      observer.observe(homeRef.current);
      homeRef.current.classList.remove("showSection");
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {smallDevices < 768 ? (
        <Element>
          <section
            ref={homeRef}
            className="home section w-full h-auto sm:pt-10  overflow-x-hidden sm:justify-center  max-w-full "
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
                {smallDevices < 768 ? (
                  <p className="animated-text ">
                    I'm <span className="first-text  after:bg-[#cccccc]"></span>
                  </p>
                ) : (
                  <p>I'm a Developer</p>
                )}
                <span>
                  Within these digital realms, lies the culmination of my
                  passion for coding, problem-solving, and turning ideas into
                  elegant solutions.
                </span>
                <br />
                <br />
                <p className="font-bold">
                  <span>Let's code the future together!</span>
                </p>
                <button className="bg-[#83c5be] mx-6 px-16 py-2 lg:px-16  rounded-lg">
                  <a href="https://sdjawcnmmtbmbazgcgor.supabase.co/storage/v1/object/public/potfolio%20files/FHATUWANI%20MULAUDZI%20Javascript%20developer.pdf?t=2024-01-09T10%3A13%3A59.097Z">
                    download Cv
                  </a>
                </button>
              </div>
            </div>
          </section>
        </Element>
      ) : (
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
                  Greetings My name is{" "}
                  <span className="text-[#ff7f50]">Fhatuwani Mulaudzi</span>
                </h3>
                {smallDevices < 768 ? (
                  <p className="animated-text ">
                    <span className="first-text  after::bg-[#cccccc]"></span>
                  </p>
                ) : (
                  <p>I'm a Developer</p>
                )}
                <p>
                  Within these digital realms, lies the culmination of my
                  passion for coding, problem-solving, and turning ideas into
                  elegant solutions
                </p>
                <p className="font-bold">
                  <span>Let's code the future together!</span>
                </p>
                <button className="bg-[#83c5be]  px-16 py-2 mx-16 lg:px-16 rounded-lg">
                  <a href="https://sdjawcnmmtbmbazgcgor.supabase.co/storage/v1/object/public/potfolio%20files/FHATUWANI%20MULAUDZI%20Javascript%20developer.pdf?t=2024-01-09T10%3A13%3A59.097Z">
                    Get Cv
                  </a>
                </button>
              </div>
            </div>
          </section>
        </AnimatedPages>
      )}
    </div>
  );
}

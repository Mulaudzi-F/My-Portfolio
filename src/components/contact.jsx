import React from "react";
import AnimatedPages from "./AnimatedPage";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";

export default function Contact({ smallDevices }) {
  // -------------------Revealing sections------------------------//

  const contactRef = useRef(null);

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
          contactRef.current.classList.remove("showSection");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (contactRef.current) {
      observer.observe(contactRef.current);
      contactRef.current.classList.add("showSection");
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {smallDevices < 768 ? (
        <Element name="contact" className="contact">
          {" "}
          <div
            ref={contactRef}
            className="w-full section overflow-x-hidden mt-40 p-10 shadow-lg px-10 "
          >
            <h2 className="text-center underline decoration-[#83c5be] decoration-8 text-3xl">
              Contact Me
            </h2>
            <div className="flex flex-col lg:flex-row gap-7 overflow-x-hidden mt-10 w-full border-2 items-center  rounded-t-2xl  pt-10 pl-20">
              <div className="  mx-20">
                <h2 className="text-xl">Get in Touch</h2>
                <div className="flex">
                  <div className="nav__icons flex-col w-1/2">
                    <figure className="hover:scale-125 ">
                      <a
                        href=" https:www.linkedin.com/in/fhatuwani-brighton-mulaudzi-a861791b8"
                        target="blank"
                      >
                        <img src="./images/linkedin.png" alt="linkedin icon" />
                      </a>
                    </figure>
                    <figure className="hover:scale-125">
                      <a href="https://github.com/Mulaudzi-F" target="blank">
                        <img src="./images/github.png" alt="github icon" />
                      </a>
                    </figure>
                    <figure className="hover:scale-125">
                      <a href="#">
                        <img src="./images/twitter.png" alt="twitter" />
                      </a>
                    </figure>
                  </div>
                  <div>
                    <p className="pt-4 ">
                      I would love the opportunity to connect with you and
                      discuss potential synergies or explore ways we could
                      collaborate.{" "}
                    </p>
                    <ul className="pt-10">
                      <li className="flex">
                        <img src="./images/phone.png" className="w-5" />
                        <span>069 370 1969</span>
                      </li>
                      <li className="flex">
                        <img src="./images/email.png" className="w-5" />
                        <span>mulaudzifhatuwanib20@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <form
                action="https://formsubmit.co/mulaudzifhatuwanib20@gmail.com"
                method="POST"
                className="flex pt-10 justify-center flex-col gap-3  lg:pr-14 "
              >
                <h3 className="text-center text-xl">Leave a message Here👇</h3>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="px-20 h-10"
                  name="name"
                />

                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="h-10 px-20"
                  name="email"
                />

                <textarea
                  placeholder="Message"
                  className="px-20 h-40"
                  name="message"
                ></textarea>
                <button className="bg-[#83c5be] h-12 -2 rounded-md">
                  Send
                </button>
              </form>
            </div>
          </div>
        </Element>
      ) : (
        <AnimatedPages>
          <div className="w-full overflow-x-hidden mt-10 p-10 shadow-lg px-10 ">
            <h2 className="text-center underline decoration-[#83c5be] decoration-8 text-3xl">
              Contact Me
            </h2>
            <div className="flex flex-col lg:flex-row gap-7 overflow-x-hidden mt-10 w-full border-2 items-center  rounded-t-2xl  pt-10 pl-20">
              <div className="  mx-20">
                <h2 className="text-xl">Get in Touch</h2>
                <p className="pt-4 ">
                  I would love the opportunity to connect with you and discuss
                  potential synergies or explore ways we could collaborate.{" "}
                </p>
                <ul className="pt-10">
                  <li className="flex">
                    <img src="./images/phone.png" className="w-5" />
                    <span>069 370 1969</span>
                  </li>
                  <li className="flex">
                    <img src="./images/email.png" className="w-5" />
                    <span>mulaudzifhatuwanib20@gmail.com</span>
                  </li>
                </ul>
              </div>
              <form
                action="https://formsubmit.co/mulaudzifhatuwanib20@gmail.com"
                method="POST"
                className="flex pt-10 justify-center flex-col gap-3  lg:pr-14 "
              >
                <h3 className="text-center text-xl">Leave a message Here👇</h3>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="px-20 h-10"
                  name="name"
                />

                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="h-10 px-20"
                  name="email"
                />

                <textarea
                  placeholder="Message"
                  className="px-20 h-40"
                  name="message"
                ></textarea>
                <button className="bg-[#83c5be] h-12 -2 rounded-md">
                  Send
                </button>
              </form>
            </div>
          </div>
        </AnimatedPages>
      )}
    </div>
  );
}

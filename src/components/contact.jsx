import React from "react";
import AnimatedPages from "./AnimatedPage";

export default function Contact() {
  return (
    <AnimatedPages>
      <div className="w-full pt-20 shadow-lg  ">
        <h2 className="text-center text-3xl">Contact Me</h2>
        <div className="flex  w-full border-2  rounded-t-2xl  pt-10 pl-20">
          <div className="  px-20">
            <h2 className="text-xl">Get in Touch</h2>
            <p>
              I would love the opportunity to connect with you and discuss
              potential synergies or explore ways we could collaborate.{" "}
            </p>
            <ul>
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
            className="flex px-20 flex-col gap-3   "
          >
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
            <button className="bg-[#83c5be] h-12 px-2 rounded-md">Send</button>
          </form>
        </div>
      </div>
    </AnimatedPages>
  );
}

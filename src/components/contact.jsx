import React from "react";

export default function Contact() {
  return (
    <div className="w-full pt-20 ">
      <h2 className="text-center text-3xl">Contact Me</h2>
      <div className="flex  w-full  pt-10 pl-20">
        <div className="  px-20">
          <h2 className="text-xl">Get in Touch</h2>
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
        <form className="flex px-20 flex-col gap-3 py-6  ">
          <input
            type="text"
            required
            placeholder="Name"
            className="px-20 h-10"
          />

          <input
            type="email"
            required
            placeholder="Email"
            className="h-10 px-20"
          />

          <textarea placeholder="Message" className="px-20 h-40"></textarea>
          <button className="bg-stone-400 h-12 px-2 rounded-md">Send</button>
        </form>
      </div>
    </div>
  );
}

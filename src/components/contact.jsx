import React from "react";

export default function Contact() {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl">Contact Me</h2>
      <div className="flex  w-full">
        <div className="border-rose-600 border-8 px-20">
          <h2 className="text-xl">Get in Touch</h2>
          <ul>
            <li>
              <img src="./" />
              069 370 1969
            </li>
            <li>mulaudzifhatuwanib20@gmail.com</li>
          </ul>
        </div>
        <form className="flex px-20 flex-col gap-3 border-rose-600 border-8">
          <input type="text" required placeholder="Name" className="w-full" />

          <input type="email" required placeholder="Email" />

          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

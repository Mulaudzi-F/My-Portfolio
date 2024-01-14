import React from "react";

export default function SmallNav({ openSideNav, handleSideNav }) {
  console.log(openSideNav);
  return (
    <div
      className={`bg-[#83c5be]  ${
        openSideNav ? "block" : "invisible"
      } z-10 w-1/2 rounded shadow-lg  `}
    >
      <h1 onClick={handleSideNav} className="  text-3xl z-10">
        <ion-icon name="close-outline"></ion-icon>
      </h1>
      <ul className="flex flex-col justify-center items-center  ">
        <li className="mt-4">
          <a className=" active:text-[#ff7f50]" href="">
            Home
          </a>
        </li>
        <li className="mt-4">
          <a href="">About</a>
        </li>
        <li className="mt-4">
          <a href="">Skills</a>
        </li>

        <li className="mt-4">
          <a href="">Projects</a>
        </li>
        <li className="mt-4">
          <a href="">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

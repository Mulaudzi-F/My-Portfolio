import React from "react";

export default function SmallNav({ openSideNav, handleSideNav }) {
  return (
    <div
      className={`bg-[#83c5be] fixed z-10 w-full ${
        openSideNav ? "block" : "hidden"
      } `}
    >
      <h1 onClick={handleSideNav} className="text-end m-6 text-3xl z-10">
        <ion-icon name="close-outline"></ion-icon>
      </h1>
      <ul className="nav__lists pt-0 pl-6">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>

        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

import React from "react";

export default function SmallNav({ openSideNav, handleSideNav }) {
  console.log(openSideNav);
  return (
    <div
      className={`bg-[#83c5be]  ${
        openSideNav ? "block" : "hidden"
      } z-10 w-full block `}
    >
      <h1 onClick={handleSideNav} className="text-end m-6 text-3xl z-10">
        <ion-icon name="close-outline"></ion-icon>
      </h1>
      <ul className="nav__lists pt-0 pl-6 ">
        <li>
          <a className="active:text-[#ff7f50]" href="">
            Home
          </a>
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

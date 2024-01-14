import React from "react";
import { Link } from "react-scroll";
import Contact from "./contact";

export default function SmallNav({ openSideNav, handleSideNav }) {
  return (
    <div
      className={`bg-[#83c5be]  ${
        openSideNav ? "block" : "invisible"
      } z-10 w-1/2 rounded shadow-lg  `}
    >
      <h1 onClick={handleSideNav} className=" text-end text-3xl z-10">
        <ion-icon name="close-outline"></ion-icon>
      </h1>
      <ul className="flex flex-col justify-center items-center  ">
        <li className="mt-4 active:text-[#ff7f50]">
          <Link to="home" spy={true} smooth={true} offset={-430} duration={500}>
            Home
          </Link>
        </li>
        <li className="mt-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-430}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="mt-4">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-430}
            duration={500}
          >
            Skills
          </Link>
        </li>

        <li className="mt-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-430}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="mt-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-430}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

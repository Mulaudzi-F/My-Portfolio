import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidenav({ smallDevices }) {
  return (
    <section
      className={`nav_section overflow-hidden ${
        smallDevices.width < 768 ? "hidden" : "block"
      }  md:w-20%`}
    >
      <div>
        <img src="./images/mulaudzifhatuwani2.png" className="profile__img" />

        <h2 className="text-[#14213d] ml-6 text-2xl">Fhatuwani Mulaudzi</h2>
        <p className="animated-text text-center">
          <span className="first-text"></span>
        </p>
      </div>
      <ul className="nav__lists ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li>
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
      </ul>
      <div className="nav__icons">
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
      <p className="p-6 text-[#14213d]">CopyRight @ 2024. All right reserved</p>
    </section>
  );
}

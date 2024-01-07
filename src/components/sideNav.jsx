import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidenav() {
  return (
    <section className="nav_section">
      <div>
        <img src="./images/mulaudzifhatuwani2.png" className="profile__img" />

        <h2>Fhatuwani Mulaudzi</h2>
      </div>
      <ul className="nav__lists">
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
        <figure>
          <img src="./images/linkedin.png" alt="linkedin icon" />
        </figure>
        <figure>
          <img src="./images/github.png" alt="github icon" />
        </figure>
        <figure>
          <img src="./images/twitter.png" alt="twitter" />
        </figure>
      </div>
      <p className="p-6">CopyRight @ 2024. All right reserved</p>
    </section>
  );
}

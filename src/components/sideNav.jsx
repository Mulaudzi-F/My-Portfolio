import React from "react";

export default function Sidenav() {
  return (
    <section className="nav_section">
      <div>
        <img src="./images/mulaudzifhatuwani2.png" className="profile__img" />

        <h2>Fhatuwani Mulaudzi</h2>
      </div>
      <ul className="nav__lists">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>

        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact_Me</a>
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

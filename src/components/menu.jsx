import React from "react";
import { Link } from "react-scroll";

export default function Menu({ openSideNav, handleSideNav }) {
  console.log(openSideNav);
  return (
    <div
      name="smallNav"
      className={`fixed  z-10 shadow-lg ${
        openSideNav ? "hidden" : "block"
      } text-5xl rounded w-full  bg-[#83c5be] md:hidden`}
    >
      <Link to="smallNav" spy={true} smooth={false} offset={0} duration={0}>
        <h1 className="z-20" onClick={handleSideNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </h1>
      </Link>
    </div>
  );
}

import React from "react";

export default function Menu({ openSideNav, handleSideNav }) {
  return (
    <div
      onClick={handleSideNav}
      className={`fixed p-4 z-10 shadow-lg ${
        openSideNav ? "hidden" : "block"
      } text-5xl rounded   hover:bg-[#83c5be] md:hidden`}
    >
      <ion-icon name="menu-outline"></ion-icon>
    </div>
  );
}

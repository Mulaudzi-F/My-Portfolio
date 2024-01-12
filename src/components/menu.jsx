import React from "react";

export default function Menu({ openSideNav, handleSideNav }) {
  return (
    <button
      onClick={handleSideNav}
      className="fixed pl-10 z-10 text-4xl md:hidden"
    >
      <ion-icon name="menu-outline"></ion-icon>
    </button>
  );
}

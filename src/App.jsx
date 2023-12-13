import { useState } from "react";

import Sidenav from "./components/sideNav";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Sidenav />
      <main>
        <Home />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;

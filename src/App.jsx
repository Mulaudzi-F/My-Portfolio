import { useState } from "react";

import Sidenav from "./components/sideNav";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Skills from "./components/skills";
import Project from "./components/Projects";
import Contact from "./components/contact";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Sidenav />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="skills" element={<Skills />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

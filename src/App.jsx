import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidenav from "./components/sideNav";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Skills from "./components/skills";
import Project from "./components/Projects";
import Contact from "./components/contact";
import Menu from "./components/menu";
import SmallNav from "./components/SmNav";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [smallDevices, setSmallDevices] = useState({
    width: window.innerWidth,
  });
  const [openSideNav, setOpenSideNav] = useState(false);

  function handleSideNav() {
    setOpenSideNav(!openSideNav);
  }
  /* predict whent the program is in a small devices */
  function detectSmallDevices() {
    setSmallDevices({
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", detectSmallDevices);

    return () => {
      window.removeEventListener("resize", detectSmallDevices);
    };
  }, []);

  return (
    <div className="">
      {smallDevices.width < 768 ? (
        <div className=" w-full ">
          <Menu openSideNav={openSideNav} handleSideNav={handleSideNav} />
          <main className="flex flex-col  overflow-x-hidden">
            <SmallNav openSideNav={openSideNav} handleSideNav={handleSideNav} />
            <Home />
            <AboutMe />

            <Skills />
            <Project />
            <Contact />
          </main>
        </div>
      ) : (
        <BrowserRouter>
          <div className="portfolio ">
            <Sidenav smallDevices={smallDevices} />

            <main className="w-full md:w-[80%] overflow-x-hidden  md:left-[20%]">
              <AnimatePresence>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<AboutMe />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="project" element={<Project />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

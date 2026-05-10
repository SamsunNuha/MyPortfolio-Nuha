import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaMedal,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import ResumePDF from "../assets/resume.pdf";

const navItems = [
  { name: "Home", icon: <FaHome />, id: "home" },
  { name: "About", icon: <FaUser />, id: "about" },
  { name: "My Skills", icon: <FaTools />, id: "my-skills" },
  { name: "Projects", icon: <FaProjectDiagram />, id: "projects" },
  { name: "Certifications", icon: <FaMedal />, id: "feats" },
  {
    name: "Resume",
    icon: <FaFileAlt />,
    link: ResumePDF
  },
];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [sideOpen, setSideOpen] = useState(false);

  // Scroll to section
  const scrollToSection = (item) => {
    if (item.link) {
      window.open(item.link, "_blank");
      setSideOpen(false);
      return;
    }

    const section = document.getElementById(item.id);
    if (section) {
      const yOffset = -90; // Header offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setSideOpen(false);
  };

  // Detect current section in view for dynamic active nav
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        if (!item.id) return;
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          const bottom = section.getBoundingClientRect().bottom;
          if (top <= 120 && bottom >= 120) {
            setActive(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden md:flex w-full shadow-md bg-white fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          <img src={logo} alt="Logo" className="w-24 h-24 rounded-full border border-gray-300" />

          <div className="flex flex-col items-center">
            <motion.h1
              className="text-5xl font-ephesis font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Nuha's Portfolio
            </motion.h1>

            <nav className="mt-2">
              <ul className="flex gap-8 text-gray-700 font-medium text-2xl">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => scrollToSection(item)}
                    className={`cursor-pointer transition-all duration-300 hover:text-black hover:scale-105 ${active === item.name ? "text-black font-bold underline underline-offset-4" : ""
                      }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop Say Hi Button */}
          <motion.button
            onClick={() => scrollToSection({ id: "contact" })}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition-all"
          >
            Say Hi...
          </motion.button>
        </div>
      </header>

      {/* TABLET HEADER */}
      <header className="md:hidden sm:flex hidden w-full shadow-md bg-white fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center px-4 py-3">
          <img src={logo} className="w-16 h-16 rounded-full border border-gray-300" alt="Logo" />
          <button onClick={() => setSideOpen(true)} className="text-3xl text-gray-700">
            <FaBars />
          </button>
        </div>
      </header>

      {/* SIDEBAR */}
      {sideOpen && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-[60] p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button className="text-3xl" onClick={() => setSideOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => scrollToSection(item)}
                  className={`cursor-pointer flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${active === item.name ? "bg-black text-white" : "hover:bg-gray-200"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Tablet Say Hi Button below sidebar */}
          <motion.button
            onClick={() => scrollToSection({ id: "contact" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-6 bg-black text-white rounded-xl shadow-md text-center"
          >
            Say Hi...
          </motion.button>
        </motion.div>
      )}

      {/* PHONE BOTTOM NAV */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg py-3 z-40 rounded-t-xl">
        <div className="flex justify-between px-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSection(item)}
              className="flex flex-col items-center cursor-pointer text-gray-600"
            >
              <div className={`text-2xl ${active === item.name ? "text-black scale-110" : ""}`}>
                {item.icon}
              </div>
              <span className={`text-xs mt-1 ${active === item.name ? "text-black font-bold" : ""}`}>
                {item.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE TOP-RIGHT HI BUTTON */}
      <motion.button
        onClick={() => scrollToSection({ id: "contact" })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="sm:hidden fixed top-4 right-4 w-8 py-2 bg-black text-white rounded-full shadow-lg text-center z-50"
      >
        Hi
      </motion.button>
    </>
  );
};

export default Header;

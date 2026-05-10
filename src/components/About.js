import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/my.jpeg";

const roles = [
  "Java Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Quality Assurance Engineer",
  "python developer",
  "Software Engineer",


];

const About = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typewriter animation for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(currentRole.slice(0, i + 1));
      i++;

      if (i === currentRole.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2500); // Wait 2.5s before next role
      }
    }, 80); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  return (
    <section
      id="about"
      className="w-full h-screen overflow-y-auto bg-white py-24 px-12 pt-16 sm: pl-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="md:w-[70%] w-full">
          <p className="text-2xl font-semibold text-gray-700">Hello I'm</p>

          {/* NAME + ROLE */}
          <div className="mt-2">
            {/* Desktop view */}
            <div className="hidden md:flex items-baseline gap-4 flex-wrap">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent animate-pulse">
                Samsun Nuha
              </h3>
              <motion.span
                key={displayText}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold text-gray-600 border-l pl-3"
              >
                {displayText}
              </motion.span>
            </div>

            {/* Mobile view */}
            <div className="flex md:hidden flex-col">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent animate-pulse">
                Samsun Nuha
              </h3>
              <motion.span
                key={displayText + "-mobile"}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-semibold text-gray-600 mt-2"
              >
                {displayText}
              </motion.span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            I am an undergraduate at SEUSL, currently in my 3rd year, 2nd semester,
            pursuing a BSc (Hons) specialization in
            Computer Science. I am a dedicated and detail-oriented individual with
            a strong commitment to professionalism, continuous learning, and excellence
            in every task I undertake.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            With a solid foundation in software development and analytical thinking, I
            focus on building intelligent, purpose-driven applications. My work aims to
            transform data into insight—creating solutions that not only function
            efficiently but also deliver meaningful user experiences.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            I am currently expanding my expertise in Machine Learning and Artificial
            Intelligence, exploring how emerging technologies can integrate with
            traditional development to create innovative, future-ready systems.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="text-center border p-4 rounded-xl shadow-md">
              <h4 className="text-3xl font-bold text-black">7</h4>
              <p className="text-gray-600 text-lg">Certifications</p>
            </div>

            <div className="text-center border p-4 rounded-xl shadow-md">
              <h4 className="text-3xl font-bold text-black">1+</h4>
              <p className="text-gray-600 text-lg">Years Experience</p>
            </div>

            <div className="text-center border p-4 rounded-xl shadow-md">
              <h4 className="text-3xl font-bold text-black">10</h4>
              <p className="text-gray-600 text-sm">Technologies</p>
            </div>

            <div className="text-center border p-4 rounded-xl shadow-md">
              <h4 className="text-3xl font-bold text-black">100%</h4>
              <p className="text-gray-600 text-lg">Passion Driven</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          className="md:w-[30%] w-full flex justify-center md:justify-end"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <img
            src={myImage}
            alt="Profile"
            className="w-64 md:w-[80%] h-auto rounded-3xl shadow-xl border"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;

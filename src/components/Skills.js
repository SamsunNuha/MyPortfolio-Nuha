import React from "react";
import { FaHtml5, FaReact, FaNodeJs, FaBug, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiSpringboot, SiJirasoftware } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="my-skills"
      className="relative min-h-screen bg-white overflow-hidden px-6 md:px-12 py-20 sm:px-16 pl-14">
      {/* Background Shapes */}
      <div className="absolute -top-32 -left-32 w-94 h-96 bg-black/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-94 h-96 bg-black/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My Skills
      </h2>

      {/* Cards Wrapper */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 
        overflow-x-auto snap-x pb-4 md:overflow-visible justify-center items-center"
      >

        {/* ========== Frontend Developer ========== */}
        <div className="snap-center group w-full max-w-md min-h-[460px] flex flex-col border-2 border-black p-8 rounded-xl transition-all duration-500 hover:bg-black hover:text-white mx-auto">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <FaHtml5 className="text-3xl" />
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
          </div>

          {/* Description */}
          <p className="mb-6 text-lg leading-relaxed">
            I create modern, responsive, and user-friendly web interfaces.
          </p>

          <div className="flex-grow" />

          {/* Skills */}
          <h4 className="font-semibold mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">HTML</li>
            <li className="border px-3 py-1 rounded-full">CSS</li>
            <li className="border px-3 py-1 rounded-full">JavaScript</li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <FaReact /> React
            </li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <SiTailwindcss /> Tailwind CSS
            </li>
          </ul>

          {/* Tools */}
          <h4 className="font-semibold mt-4 mb-2">Tools</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">VS Code</li>
            <li className="border px-3 py-1 rounded-full">Git</li>
            <li className="border px-3 py-1 rounded-full">GitHub</li>
            <li className="border px-3 py-1 rounded-full">Figma</li>
          </ul>
        </div>

        {/* ========== Java Full Stack Developer ========== */}
        <div className="snap-center group w-full max-w-md min-h-[460px] flex flex-col border-2 border-black p-8 rounded-xl transition-all duration-500 hover:bg-black hover:text-white mx-auto">
          
          <div className="flex items-center gap-3 mb-4">
            <FaJava className="text-3xl" />
            <h3 className="text-2xl font-bold">Java Full Stack Developer</h3>
          </div>

          <p className="mb-6 text-lg leading-relaxed">
            I develop secure backend systems and clean REST APIs.
          </p>

          <div className="flex-grow" />

          <h4 className="font-semibold mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">Java</li>
            <li className="border px-3 py-1 rounded-full">JSP</li>
            <li className="border px-3 py-1 rounded-full">Servlets</li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <SiSpringboot /> Spring Boot
            </li>
            <li className="border px-3 py-1 rounded-full">REST API</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Tools</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">IntelliJ</li>
            <li className="border px-3 py-1 rounded-full">MySQL</li>
            <li className="border px-3 py-1 rounded-full">Postman</li>
            <li className="border px-3 py-1 rounded-full">Tomcat</li>
          </ul>
        </div>

        {/* ========== MERN STACK Developer ========== */}
        <div className="snap-center group w-full max-w-md min-h-[460px] flex flex-col border-2 border-black p-8 rounded-xl transition-all duration-500 hover:bg-black hover:text-white mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <SiMongodb className="text-3xl" />
            <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
          </div>

          <p className="mb-6 text-lg leading-relaxed">
            I build full-stack MERN applications with optimized APIs and secure data flow.
          </p>

          <div className="flex-grow" />

          <h4 className="font-semibold mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <SiMongodb /> MongoDB
            </li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <SiExpress /> Express.js
            </li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <FaReact /> React.js
            </li>
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <FaNodeJs /> Node.js
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Tools</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">VS Code</li>
            <li className="border px-3 py-1 rounded-full">Git</li>
            <li className="border px-3 py-1 rounded-full">GitHub</li>
            <li className="border px-3 py-1 rounded-full">Postman</li>
          </ul>
        </div>

        {/* ========== Manual Tester ========== */}
        <div className="snap-center group w-full max-w-md min-h-[460px] flex flex-col border-2 border-black p-8 rounded-xl transition-all duration-500 hover:bg-black hover:text-white mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <FaBug className="text-3xl" />
            <h3 className="text-2xl font-bold">Manual Tester</h3>
          </div>

          <p className="mb-6 text-lg leading-relaxed">
            Skilled in test case creation, bug reporting, and software quality analysis.
          </p>

          <div className="flex-grow" />

          <h4 className="font-semibold mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full">Test Cases</li>
            <li className="border px-3 py-1 rounded-full">Bug Reporting</li>
            <li className="border px-3 py-1 rounded-full">SDLC</li>
            <li className="border px-3 py-1 rounded-full">STLC</li>
            <li className="border px-3 py-1 rounded-full">Functional Testing</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Tools</h4>
          <ul className="flex flex-wrap gap-2 text-lg">
            <li className="border px-3 py-1 rounded-full flex items-center gap-1">
              <SiJirasoftware /> Jira
            </li>
            <li className="border px-3 py-1 rounded-full">TestLink</li>
            <li className="border px-3 py-1 rounded-full">Postman</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;

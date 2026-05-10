import React from "react";
import { motion } from "framer-motion";
import Python from "../assets/python for beginners.jpeg";
import IEEE from "../assets/iee membership.jpeg";
import Fullstack from "../assets/front_end and backend website creation.jpeg";
import HTML from "../assets/introduction to html.jpeg";
import WebDesignPDF from "../assets/Web_Design_for_Beginners.pdf";
import CybersecurityCert from "../assets/Cybersecurity_Certificate.jpg";
import GenAICert from "../assets/GenAI_Certificate.jpg";

const Feats = () => {
  const certifications = [
    {
      img: CybersecurityCert,
      title: "Cybersecurity Webinar",
      skills: "Cybersecurity Fundamentals, Ethical Hacking, Threat Analysis",
      link: CybersecurityCert,
    },
    {
      img: GenAICert,
      title: "Generative AI Literacy",
      skills: "Generative AI, LLMs, AI Tools & Ethics",
      link: GenAICert,
    },
    {
      img: HTML, // Placeholder for Moratuwa certificate
      title: "Web Design for Beginners",
      skills: "HTML, CSS, UI/UX Design",
      link: WebDesignPDF,
    },
    {
      img: Fullstack,
      title: "Front-end and Backend Website Creation",
      skills: "Fullstack Development, Web Design",
      link: Fullstack,
    },
    {
      img: HTML,
      title: "Introduction to HTML",
      skills: "HTML5, Web Structure",
      link: HTML,
    },
    {
      img: Python,
      title: "Python for Beginners",
      skills: "Python, Logic, Basic Programming",
      link: Python,
    },
    {
      img: IEEE,
      title: "IEEE Membership",
      skills: "Professional Network, Technical Community",
      link: IEEE,
    },
  ];

  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 px-4 md:px-12 py-16 sm: pl-14"
      id="feats"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent tracking-wide">
        Certifications
      </h1>

      {/* Main Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-8xl mx-auto bg-gradient-to-b from-gray-100 via-white to-gray-200 rounded-3xl p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{
                backgroundColor: "#000",
                color: "#fff",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-300 flex flex-col h-full shadow-sm"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 md:h-60 overflow-hidden border-b border-gray-300">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold">{cert.title}</h3>
                <p className="text-sm sm:text-base mt-2">{cert.skills}</p>

                {/* Button at Bottom */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-black text-white w-full text-center py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Feats;

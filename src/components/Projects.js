import React from "react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

//FAS Foodie
import FASFOODIE1 from "../assets/FASFOODIE1.jpeg";
import FASFOODIE2 from "../assets/FASFOODIE2.jpeg";
import FASFOODIE3 from "../assets/FASFOODIE3.jpeg";
import FASFOODIE4 from "../assets/FASFOODIE4.jpeg";
import FASFOODIE5 from "../assets/FASFOODIE5.jpeg";
import FASFOODIE6 from "../assets/FASFOODIE6.jpeg";
import FASFOODIE7 from "../assets/FASFOODIE7.jpeg";
import FASFOODIE8 from "../assets/FASFOODIE8.jpeg";
//Online Food Delivery
import FOOD1 from "../assets/1.png";
import FOOD2 from "../assets/2.png";
import FOOD3 from "../assets/3.png";
import FOOD4 from "../assets/4.png";
import FOOD5 from "../assets/5.png";
import FOOD6 from "../assets/6.png";
import FOOD7 from "../assets/7.png";
import FOOD8 from "../assets/8.png";
import FOOD9 from "../assets/9.png";
import FOOD10 from "../assets/10.png";
import FOOD11 from "../assets/11.png";
import FOOD12 from "../assets/12.png";
import FOOD13 from "../assets/13.png";
import FOOD14 from "../assets/14.png";
import FOOD15 from "../assets/15.png";
import FOOD16 from "../assets/16.png";

//Employee Management System
import BOOKTECH1 from "../assets/BOOKTECH1.png";
import BOOKTECH2 from "../assets/BOOKTECH2.png";
import BOOKTECH3 from "../assets/BOOKTECH3.png";
import BOOKTECH4 from "../assets/BOOKTECH4.png";
import BOOKTECH5 from "../assets/BOOKTECH5.png";
import BOOKTECH6 from "../assets/BOOKTECH6.png";
import BOOKTECH7 from "../assets/BOOKTECH7.png";
import BOOKTECH8 from "../assets/BOOKTECH8.png";
import BOOKTECH9 from "../assets/BOOKTECH9.png";
import BOOKTECH10 from "../assets/BOOKTECH10.png";
import BOOKTECH11 from "../assets/BOOKTECH11.png";
import BOOKTECH12 from "../assets/BOOKTECH12.png";
import BOOKTECH13 from "../assets/BOOKTECH13.png";
import BOOKTECH14 from "../assets/BOOKTECH14.png";
import BOOKTECH15 from "../assets/BOOKTECH15.png";
import BOOKTECH16 from "../assets/BOOKTECH16.png";
import BOOKTECH17 from "../assets/BOOKTECH17.png";
import BOOKTECH18 from "../assets/BOOKTECH18.png";
import BOOKTECH19 from "../assets/BOOKTECH19.png";
import BOOKTECH20 from "../assets/BOOKTECH20.png";

//Smart Resume
import CV01 from "../assets/01cv.jpeg";
import CV02 from "../assets/02cv.jpeg";
import CV03 from "../assets/03cv.jpeg";
import CV04 from "../assets/04cv.jpeg";
import CV05 from "../assets/05cv.jpeg";
import CV06 from "../assets/06cv.jpeg";
import CV07 from "../assets/07cv.jpeg";
import CV08 from "../assets/08cv.jpeg";
import CV09 from "../assets/09cv.jpeg";
import CV10 from "../assets/10cv.jpeg";
import CV11 from "../assets/11cv.jpeg";
import CV12 from "../assets/12cv.jpeg";
import CV13 from "../assets/13cv.jpeg";
import CV14 from "../assets/14cv.jpeg";
import CV16 from "../assets/16cv.jpeg";
import CV17 from "../assets/17cv.jpeg";
import CV18 from "../assets/18cv.jpeg";
import CV19 from "../assets/19cv.jpeg";
import CV20 from "../assets/20cv.jpeg";

// Finance Tracker (Removed)

// FAS Laboratory
import FASLAB1 from "../assets/FASLAB1.jpeg";
import FASLAB2 from "../assets/FASLAB2.jpeg";
import FASLAB3 from "../assets/FASLAB3.jpeg";
import FASLAB4 from "../assets/FASLAB4.jpeg";
import FASLAB5 from "../assets/FASLAB5.jpeg";
import FASLAB6 from "../assets/FASLAB6.jpeg";
import FASLAB7 from "../assets/FASLAB7.jpeg";
import FASLAB8 from "../assets/FASLAB8.jpeg";
import FASLAB9 from "../assets/FASLAB9.jpeg";
import FASLAB11 from "../assets/FASLAB11.jpeg";

const Projects = () => {
  // ========= Project Array =========
  const projectData = [
    {
      title: "Employee Management System",
      desc: "Employee Management System is a MERN-based platform with modern sign-in/sign-up, employee tracking, live admin chat, profile management, and an admin dashboard.",
      tags: "#MongoDB  #Express.js  #React.js  #Node.js",
      images: [BOOKTECH1, BOOKTECH2, BOOKTECH3, BOOKTECH4, BOOKTECH5, BOOKTECH6, BOOKTECH7, BOOKTECH8, BOOKTECH9, BOOKTECH10, BOOKTECH11, BOOKTECH12, BOOKTECH13, BOOKTECH14, BOOKTECH15, BOOKTECH16, BOOKTECH17, BOOKTECH18, BOOKTECH19, BOOKTECH20],
      link: "https://github.com/SamsunNuha/EmployeeManagmentSystem-SaM-.git",
    },
    {
      title: "Online Food Delivery",
      desc: "A comprehensive online food delivery system that allows users to browse menus, place orders, and track deliveries. Features include user authentication, menu management, and an order processing system.",
      tags: "#HTML  #CSS  #JavaScript  #Bootstrap  #PHP  #SQL",
      images: [FOOD1, FOOD2, FOOD3, FOOD4, FOOD5, FOOD6, FOOD7, FOOD8, FOOD9, FOOD10, FOOD11, FOOD12, FOOD13, FOOD14, FOOD15, FOOD16],
      link: "https://github.com/SamsunNuha/FoodDeliveryOnline-Tasty-Nest-.git", // Keeping the link unless specified otherwise
    },
    {
      title: "FAS Foodie Restaurant",
      desc: "A full-service restaurant and food delivery platform specializing in biryanis and traditional dishes with fast delivery and catering options.",
      tags: "#HTML  #CSS  #JavaScript  #Bootstrap  #MySQL  #PHP",
      images: [FASFOODIE1, FASFOODIE2, FASFOODIE3, FASFOODIE4, FASFOODIE5, FASFOODIE6, FASFOODIE7, FASFOODIE8],
      link: "https://github.com/SamsunNuha/fasFoodie.git",
    },
    {
      title: "Smart Resume Create & Catch Job",
      desc: "A web-based platform for building professional resumes and finding jobs. Features include multi-template resume building, job categorization, application tracking, and an admin management panel.",
      tags: "#HTML  #CSS  #Bootstrap  #JavaScript  #PHP  #SQL",
      images: [CV01, CV02, CV03, CV04, CV05, CV06, CV07, CV08, CV09, CV10, CV11, CV12, CV13, CV14, CV16, CV17, CV18, CV19, CV20],
      link: "https://github.com/SamsunNuha/last-update-resume-create-and-find-jobs.git", // Update link if needed
    },
    {
      title: "FAS Laboratory",
      desc: "FAS Laboratory is an online Laboratory Management System where users can book doctor channeling appointments, schedule medical tests, and make payments through a convenient pre-booking system.",
      tags: "#HTML  #CSS  #JavaScript  #Bootstrap  #MySQL  #PHP",
      images: [FASLAB1, FASLAB2, FASLAB3, FASLAB4, FASLAB5, FASLAB6, FASLAB7, FASLAB8, FASLAB9, FASLAB11],
      link: "https://github.com/SamsunNuha/Fas-Medical-laboratory.git",
    },
  ];

  return (
    <section id="projects" className="bg-white py-10 px-4 md:px-10 min-h-screen sm: pl-14">
      <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border border-black bg-white text-black rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col h-[450px] max-w-[360px] w-full mx-auto"
          >
            {/* IMAGE CAROUSEL */}
            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg border border-gray-300">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={false} // arrows enabled
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${project.title} image ${i + 1}`}
                      className="w-full h-40 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            {/* DESCRIPTION */}
            <p className="text-sm">{project.desc}</p>

            {/* TAGS SECTION */}
            <div className="mt-3 text-xs text-gray-700 flex flex-wrap gap-2">
              {project.tags.split("  ").map((tag, t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-gray-200 rounded-md border border-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-2 border border-black rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-black hover:text-white transition"
            >
              Visit <FaGithub size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

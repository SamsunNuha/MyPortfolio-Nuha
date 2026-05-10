import React from "react";
import sampleImg from "../assets/logo.png";
import HireMe from "../assets/HireMe.jpeg";
import Friendship from "../assets/friendship.jpeg";

const HomeContent = () => {
  return (
    <section
      id="home"
      className="w-full h-screen overflow-y-auto bg-white pt-32 sm:pt-36 md:pt-40 sm: pl-14"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center">
          <div
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 
            border-4 border-gray-300 rounded-xl overflow-hidden shadow-lg 
            transition-all duration-500 animate-jump hover:scale-105"
          >
            <img src={sampleImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center w-72 sm:w-80 mt-4 justify-between">
            <div className="border-t-4 border-black flex-1"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center text-center md:text-left relative px-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug">
            " I will <span className="text-black font-bold">SUCCEED</span> in Life,
            <br />
            not immediately
            <br />
            But, <span className="text-black font-bold">Definitely</span> "
          </h2>

          <div className="mt-8">
            <button className="flex items-center gap-3 mx-auto md:mx-0 bg-black text-white px-6 py-3 rounded-xl text-2xl sm:text-3xl shadow-md hover:bg-gray-800 hover:scale-105 transition-all">
              <img src={HireMe} alt="icon" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white" />
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL LINE WITH LOGO */}
      <div className="flex items-center justify-center mt-20 pb-10">
        <div className="border-t border-gray-300 w-1/3"></div>
        <img src={Friendship} alt="Logo" className="w-24 h-16 mx-8 border-black" />
        <div className="border-t border-gray-300 w-1/3"></div>
      </div>
    </section>
  );
};

export default HomeContent;

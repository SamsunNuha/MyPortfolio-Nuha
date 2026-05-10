import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter
} from "react-icons/fa";

const SocialBar = () => {
  const socials = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/samsun-nuha" },
    { icon: <FaGithub />, link: "https://github.com/SamsunNuha" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@nuha9172" },
    { icon: <FaFacebook />, link: "https://web.facebook.com/sam jabeer" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/Nuha jabeer/?hl=en" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/+94753360265" },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-30">

      {/* Top Double Gradient Line */}
      <div className="relative w-1 h-[240px] mb-6">
        <div className="absolute w-1 h-full bg-gradient-to-b from-black via-gray-500 to-black rounded-full"></div>
        <div className="absolute w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 left-1/2 top-0 -translate-x-1/2 rounded-full"></div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl hover:text-gray-700 hover:scale-110 transition-all"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Bottom Double Gradient Line */}
      <div className="relative w-1 h-[155px] mt-6">
        <div className="absolute w-1 h-full bg-gradient-to-b from-black via-gray-500 to-black rounded-full"></div>
        <div className="absolute w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 left-1/2 top-0 -translate-x-1/2 rounded-full"></div>
      </div>

    </div>
  );
};

export default SocialBar;

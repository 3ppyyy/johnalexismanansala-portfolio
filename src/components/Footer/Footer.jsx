import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

// Hook to detect if user is on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Footer = () => {
  const isMobile = useIsMobile();

  const handleScroll = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0d081f]/60 backdrop-blur-md border-t border-gray-700">
      <div className="container mx-auto text-center">
        {/* Logo - Clickable to top */}
        <h2
          className="text-xl font-semibold text-blue-500 cursor-pointer"
          onClick={() => handleScroll("top")}
        >
          <span className="text-[#2B71EA]">&lt;</span>
          <span className="text-white">J</span>
          <span className="text-[#2B71EA]">/</span>
          <span className="text-white">A</span>
          <span className="text-[#2B71EA]">&gt;</span>
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "top" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-blue-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/johnalexis.umali/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/john-alexis-manansala-609b752b4/" },
            { icon: <FaGithub />, link: "https://github.com/3ppyyy" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/lexis_3ppy/" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl hover:text-blue-500 ${isMobile ? '' : 'transition-transform transform hover:scale-110'}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 John Alexis Manansala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../../constants";

// Hook to detect if user is on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window size

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Experience = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const experience = experiences[0];
  const isMobile = useIsMobile(); // Check if the user is on mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative font-sans py-20 sm:py-24 px-6 sm:px-12 md:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-14 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D1D9FF] tracking-widest">
          EXPERIENCE
        </h2>
        <div className="w-20 sm:w-24 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full animate-pulse"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base font-light">
          My hands-on experience as a fresh graduate
        </p>
      </div>

      {/* Experience Card Container */}
      <div className="relative flex justify-center">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-blue-700 h-full opacity-30"></div>

        {/* Experience Card */}
        <div
          ref={ref}
          className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : isMobile
              ? "opacity-100 translate-y-0" // No animation on mobile
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glowing Dot */}
          <div className="w-6 h-6 mb-6 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"></div>

          {/* Experience Content */}
          <img
            src={experience.img}
            alt={experience.company}
            loading="lazy"
            className="w-14 h-14 sm:w-16 sm:h-16 mb-4 object-cover rounded-md"
          />
          <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.role}</h3>
          <h4 className="text-sm sm:text-md text-gray-300">{experience.company}</h4>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{experience.date}</p>
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl px-2">
            {experience.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

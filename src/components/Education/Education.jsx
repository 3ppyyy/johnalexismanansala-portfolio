import React, { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

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

const Education = () => {
  const sectionRef = useRef(null);
  const [activeCards, setActiveCards] = useState([]);
  const isMobile = useIsMobile(); // Check if the user is on mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    const elements = sectionRef.current.querySelectorAll(".edu-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-6 sm:px-10 lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D1D9FF] tracking-widest">
          EDUCATION
        </h2>
        <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full animate-pulse"></div>
        <p className="text-gray-400 mt-4 text-base font-light">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full">
          <div className="absolute top-0 left-0 w-full h-20 bg-blue-500 blur-xl animate-pulse opacity-40"></div>
        </div>

        {/* Education Items */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;
          const isActive = activeCards.includes(index);
          return (
            <div
              key={edu.id}
              data-index={index}
              className={`edu-card relative flex flex-col items-center mb-16 transition-all duration-700 ease-out
                ${isEven ? "sm:justify-start" : "sm:justify-end"}
                ${isActive ? "opacity-100 translate-y-0" : isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${isMobile ? "flex-col" : "sm:flex-row"}
              `}
            >
              {/* Timeline Dot - Only render on desktop */}
              {!isMobile && (
                <div className={`absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-blue-500 w-12 h-12 rounded-full z-10 flex justify-center items-center ${isMobile ? "mb-4" : ""}`}>
                  <img
                    src={edu.img}
                    alt={edu.school}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              )}

              {/* Card */}
              <div
                className={`w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(59,130,246,0.3)]
                transform hover:scale-105 transition-transform duration-300
                ${isEven ? "sm:ml-44 ml-8" : "sm:mr-44 ml-8"}
                ${isMobile ? "text-center" : ""}
              `}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;

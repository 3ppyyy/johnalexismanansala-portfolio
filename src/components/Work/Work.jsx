import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";

// Hook to detect if user is on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window size

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useIsMobile(); // Check if the user is on mobile

  return (
    <section
      id="work"
      className={`py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative z-20 ${
        hoveredIndex !== null ? "blurred-background" : ""
      }`}
    >
      {/* Section Title */}
      <motion.div
        initial={isMobile ? {} : { opacity: 0, y: 30 }} // No animation on mobile
        whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // No animation on mobile
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D1D9FF] tracking-widest">
          PROJECTS
        </h2>
        <div className="w-24 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full animate-pulse"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-light">
          A showcase of the projects I have worked on.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex flex-col gap-28 relative z-30">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isHovered = hoveredIndex === index;
          const shouldBlur = hoveredIndex !== null && !isHovered;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={isMobile ? {} : { opacity: 0, y: 40 }} // No animation on mobile
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // No animation on mobile
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-10 relative z-40 ${
                !isEven ? "lg:flex-row-reverse" : ""
              } cursor-pointer group transition-all duration-300 ${
                shouldBlur ? "blur-sm brightness-75 scale-[0.98]" : ""
              }`}
            >
              <div
                className={`w-full lg:w-1/2 transition-transform duration-500 ${
                  isHovered ? "scale-105 z-50" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              <div
                className={`w-full lg:w-1/2 text-center lg:text-left transition-opacity duration-300 ${
                  isHovered ? "z-50" : ""
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Global Blur Overlay */}
      {hoveredIndex !== null && (
        <div className="fixed inset-0 backdrop-blur-md z-10 transition-all duration-300 pointer-events-none"></div>
      )}
    </section>
  );
};

export default Work;

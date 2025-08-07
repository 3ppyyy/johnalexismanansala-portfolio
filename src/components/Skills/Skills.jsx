import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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

const Skills = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="skills"
      className="relative pt-24 pb-28 px-6 md:px-[7vw] lg:px-[12vw] font-sans bg-transparent overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={isMobile ? {} : { opacity: 0, y: 20 }}
        whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D1D9FF] tracking-widest">
          SKILLS
        </h2>
        <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full animate-pulse" />
        <p className="text-gray-400 mt-4 text-sm sm:text-base font-light max-w-xl mx-auto">
          A collection of my technical skills and tools used across real-world projects
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center py-6">
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            initial={isMobile ? {} : { opacity: 0, y: 40 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-[0.02] backdrop-blur-md border border-blue-900/40 shadow-[0_0_16px_1px_rgba(30,144,255,0.15)] rounded-3xl p-5 w-full sm:w-[47%] lg:w-[30%] hover:shadow-[0_0_30px_2px_rgba(30,144,255,0.3)] transition-all duration-500"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-300 text-center mb-5 tracking-wide">
              {category.title}
            </h3>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={900}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 border border-blue-700/30 bg-blue-200/5 rounded-xl py-3 hover:bg-blue-300/10 transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-80"
                    />
                    <span className="text-[0.7rem] sm:text-sm text-blue-100 text-center leading-tight tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

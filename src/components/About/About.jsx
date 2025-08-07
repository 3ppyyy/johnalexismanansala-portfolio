import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile2.jpg';

// Hook to detect if user is on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state based on window size

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const About = () => {
  const isMobile = useIsMobile();

  const sectionMotion = !isMobile ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  } : {};

  const leftMotion = !isMobile ? {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  } : {};

  const rightMotion = !isMobile ? {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
  } : {};

  return (
    <motion.section
      id="about"
      {...sectionMotion}
      className="relative py-4 pb-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Light Splash Glow Effect */}
      {!isMobile && (
        <>
          <div className="absolute right-6 top-1/4 w-48 h-48 bg-blue-500 opacity-60 blur-2xl rounded-full animate-pulse z-0"></div>
          <div className="absolute right-16 top-1/3 w-24 h-24 bg-blue-300 opacity-40 blur-xl rounded-full animate-ping z-0"></div>
        </>
      )}

      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10">
        {/* Left Side */}
        <motion.div
          {...leftMotion}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            John Alexis Manansala
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2B71EA] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Web Developer',
                'UI/UX Designer',
                'Creative Web Coder',
                'Tech Enthusiast',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#2B71EA]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A web developer who enjoys solving problems with clean, efficient code. I focus on creating responsive, user-friendly web applications.
          </p>

          <a
            href="https://drive.google.com/file/d/1eTtxSOAb4JGaTESixDUzbqkFbOvm498y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2B71EA, #4F8BFF)',
              boxShadow: '0 0 2px #2B71EA, 0 0 2px #2B71EA, 0 0 40px #2B71EA',
            }}
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          {...rightMotion}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          {isMobile ? (
            <img
              loading="lazy"
              src={profileImage}
              alt="John Alexis"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[40rem] object-cover rounded-2xl shadow-xl drop-shadow-[0_10px_20px_rgba(43,113,234,0.5)]"
            />
          ) : (
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[40rem] overflow-hidden shadow-xl rounded-2xl z-10"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                loading="lazy"
                src={profileImage}
                alt="John Alexis"
                className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(43,113,234,0.5)]"
              />
            </Tilt>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

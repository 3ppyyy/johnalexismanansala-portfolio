import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

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

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // LIFTED STATE
  const isMobile = useIsMobile(); // Check if the user is on mobile

  return (
    <div
      className={`bg-[#050414] relative overflow-hidden ${
        hoveredIndex !== null ? "blurred-site" : ""
      }`}
    >
      {/* Left-side blur blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Right-side blur blob */}
      <BlurBlob
        position={{ top: "10%", left: "80%" }} // fixed from 'right' to 'left'
        size={{ width: "25%", height: "35%" }}
      />

      <div className="relative pt-20 z-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

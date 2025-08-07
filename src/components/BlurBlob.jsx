import React from 'react';
import PropTypes from 'prop-types';

// Hook to detect if user is on mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768); // Set initial state based on window size

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const BlurBlob = ({ position, size }) => {
  const isMobile = useIsMobile(); // Check if the user is on mobile
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute z-0 pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
        animation: isMobile ? 'none' : 'blobMorph 30s infinite ease-in-out', // Remove animation on mobile
      }}
    >
      <div
        className="w-full h-full opacity-25 blur-[100px]"
        style={{
          background: 'linear-gradient(135deg, #1E4EBF, #417BCA)', // Darker gradient
          animation: isMobile ? 'none' : 'colorShift 10s ease-in-out infinite alternate', // Remove animation on mobile
        }}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlurBlob;

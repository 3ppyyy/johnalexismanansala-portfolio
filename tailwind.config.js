// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      colors: {
        primary: '#2B71EA',
        primaryDark: '#1F4FBA',
        primaryLight: '#4F8BFF',
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(38.73deg, rgba(43, 113, 234, 0.15) 0%, rgba(43, 113, 234, 0) 50%), linear-gradient(141.27deg, rgba(43, 113, 234, 0) 50%, rgba(43, 113, 234, 0.15) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 2px #2B71EA, 0 0 2px #2B71EA, 0 0 40px #2B71EA',
      },
    },
  },
  plugins: [],
};

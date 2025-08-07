import React, { useRef, useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactLogo from "../../assets/contact_logo.webp";

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

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef();
  const isMobile = useIsMobile();

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);

      emailjs
        .sendForm(
          "service_60g7sfm",
          "template_60xz16h",
          form.current,
          "iuzGJ4UHk3nelrqrk"
        )
        .then(
          () => {
            setIsSent(true);
            setIsLoading(false);
            form.current.reset();
            toast.success("Message sent successfully! ✅", { theme: "dark" });
          },
          (error) => {
            console.error("Error:", error);
            setIsLoading(false);
            toast.error("Failed to send message. Please try again.", {
              theme: "dark",
            });
          }
        );
    },
    []
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative flex flex-col lg:flex-row items-center justify-center gap-12 pb-28 px-[7vw] transition-all duration-700 ${
        isMobile ? "opacity-100" : isVisible ? "animate-fadeSlideIn opacity-100" : "opacity-0"
      }`}
    >
      <ToastContainer />

      {/* Left Section - Image and Name */}
      <div className="w-full lg:w-1/2 flex flex-col items-center relative">
        {/* Background Shape (only on desktop) */}
        {!isMobile && (
          <div className="absolute inset-0 w-full h-full bg-blue-500 opacity-20 blur-[120px] rounded-[40%_60%_60%_40%/40%_40%_60%_60%] -z-10"></div>
        )}

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-6">
          {/* Tilted background box (desktop only) */}
          {!isMobile && (
            <div className="absolute w-[400px] h-[400px] bg-blue-500 rotate-12 opacity-20 rounded-lg -z-10"></div>
          )}

          <img
            loading="lazy"
            src={contactLogo}
            alt="Contact"
            className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain mask-gradient-bottom"
          />
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="relative w-full max-w-md">
        {/* Abstract Background (desktop only) */}
        {!isMobile && (
          <div className="absolute -top-10 -left-10 w-full h-full bg-[#0d081f] blur-[100px] opacity-40 rounded-[30%] -z-10"></div>
        )}

        <div className="bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-4xl font-bold text-[#D1D9FF] tracking-widest mb-4 text-center">
            CONTACT
          </h2>
          <div className="w-24 h-[2px] bg-blue-500 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-gray-400 text-center text-lg font-light mb-6">
            I’d love to hear from you—reach out for any opportunities or questions!
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-blue-400 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

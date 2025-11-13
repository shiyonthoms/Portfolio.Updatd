import { useState } from "react";
import DecryptedText from './ReactBits/DecryptedText';
import Shuffle from "./ReactBits/Shuffle";
import { motion } from "framer-motion";
import ASCIIText from "./ReactBits/ASCIIText";


const NavBar = ({ routeNames, currentRoute, setCurrentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (route) => {
    setCurrentRoute(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center h-[72px] justify-between">
      {/* Left Side: Name/Logo */}
      
      {/* <div className="text-white font-bold text-2xl rounded-full bg-gray-700/40  ml-2 z-40 lg:ml-12 md:ml-4 sm:ml-2 border-none md:ring-3 md:ring-cyan-500 md:shadow-black md:shadow-lg">
      
        <Shuffle
          text="ST"
          shuffleDirection="left"
          duration={0.9}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={false}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="font-bold text-white text-[20px] p-3 bg-accent-foreground/30 rounded-full border-none md:ring-3 md:ring-cyan-500 md:shadow-black"
          loop={true}
          loopDelay={0.9}
        />
        <span className="pl-2 pr-3">Shiyon Thomas</span>
      </div> */}
 <div className="ml-2 z-40 lg:ml-12 md:ml-4 sm:ml-2 flex items-center justify-start">
  <div className="relative w-60 h-20 overflow-hidden">
    <ASCIIText
      text="SHIYON"
      enableWaves={true}
      asciiFontSize={1}     // keep readable!
      textFontSize={500}     // controls true size
      planeBaseHeight={10}   // gentle size reduction
    />
  </div>
</div>


      {/* Center: Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6 mr-0 lg:mr-10">
        {routeNames.map((route) => (
          <button
            key={route}
            className={`text-lg px-4 py-2 rounded-3xl transition-colors duration-300 ${
              currentRoute === route
                ? "bg-gray-900/40 text-white border-none ring-3 ring-cyan-500 shadow-black shadow-lg"
                : "text-white hover:bg-gray-300/40"
            }`}
            onClick={() => setCurrentRoute(route)}
          >
            {route}
          </button>
        ))}
      </div>

      {/* Right Side: Toggling Menu Icon (Visible on mobile) */}
      {/* This button now has the highest z-index to stay on top */}
      <div className="lg:hidden z-50  pr-1 sm:pr-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 focus:outline-none"
        >
          {/* Conditionally render the 'X' or 'Menu' icon */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* This now has a lower z-index than the toggle button */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center transition-opacity duration-300
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} h-screen`}
      >
        <div className="flex flex-col items-center gap-8">
          {routeNames.map((route) => (
            <button
              key={route}
              className={`text-2xl font-semibold transition-colors duration-300 ${
                currentRoute === route
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleLinkClick(route)}
            >
              {route}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
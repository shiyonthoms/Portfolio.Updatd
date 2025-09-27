import { useState } from "react";

const NavBar = ({ routeNames, currentRoute, setCurrentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (route) => {
    setCurrentRoute(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center h-[72px] justify-between">
      {/* Left Side: Name/Logo */}
      <div className="text-white font-bold text-2xl rounded-3xl px-4 py-2 bg-gray-700/40  ml-2 z-40 lg:ml-12 md:ml-4 sm:ml-2">
        Shiyon Thomas
      </div>

      {/* Center: Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6 mr-0 lg:mr-10">
        {routeNames.map((route) => (
          <button
            key={route}
            className={`text-lg px-4 py-2 rounded-3xl transition-colors duration-300 ${
              currentRoute === route
                ? "bg-gray-900/40 text-white"
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
      <div className="lg:hidden z-50  pr-1 sm:pr-2 ">
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
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
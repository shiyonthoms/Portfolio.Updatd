// src/components/PassionsCard.jsx
import { motion } from "framer-motion";
import { FaMusic, FaGamepad, FaBook, FaLaptopCode } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

const passions = [
  { name: "", icon: <FaMusic className="text-red-400" size={28} /> },
  { name: "", icon: <FaLaptopCode className="text-green-400" size={28} /> },
  { name: "", icon: <BiCameraMovie className="text-yellow-400" size={28} /> },
  { name: "", icon: <FaGamepad className="text-purple-400" size={28} /> },
];

const PassionsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl  bg-gradient-to-br p-6 flex flex-col items-center text-white w-full"
    >
      {/* Animated soft glow */}
      <motion.div
        className="
          absolute -top-10 -right-10 
          w-36 h-36 rounded-full blur-3xl
          bg-gradient-to-br from-purple-500/20 to-pink-500/10
        "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      <h2 className="text-xl font-bold mb-4">Passions & Hobbies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
        {passions.map((passion) => (
          <div
            key={passion.name}
            role="button"
            tabIndex={0}
            title={passion.name}
            aria-label={`${passion.name} passion`}
            className="
              flex flex-col items-center justify-center 
              p-1 sm:p-2 rounded-xl 
              transition duration-200 cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-teal-300/60
            "
            onKeyDown={(e) => {
              // if you want keyboard interactions later, handle Enter/Space here
              if (e.key === "Enter" || e.key === " ") {
                e.currentTarget.click?.();
              }
            }}
          >
            {/* Round icon container */}
            <div
              className="
                w-12 h-12 sm:w-14 sm:h-14 
                rounded-full 
                bg-gray-700/40 hover:bg-gray-700/60
                flex items-center justify-center
                transition-transform duration-200 hover:scale-110
              "
            >
              {passion.icon}
            </div>

            <span className="text-[10px] sm:text-xs mt-2 text-gray-300">
              {passion.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PassionsCard;

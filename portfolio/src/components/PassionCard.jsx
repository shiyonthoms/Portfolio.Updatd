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
      <motion.div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      <h2 className="text-xl font-bold mb-4">Passions & Hobbies</h2>
      <p className="text-gray-300 text-sm sm:text-base mb-4 text-center">
        Beyond coding, I explore my creativity and recharge through fun activities and personal projects.
      </p>

      <div className="grid grid-cols-4 gap-4">
        {passions.map((passion) => (
          <div
            key={passion.name}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-700/40 hover:bg-gray-700/60 transition duration-300 cursor-pointer"
            title={passion.name}
          >
            {passion.icon}
            <span className="text-xs mt-2">{passion.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PassionsCard;

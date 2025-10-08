// src/components/TechStackCard.jsx
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiFirebase } from "react-icons/si";

const tools = [
  { name: "React", icon: <FaReact className="text-cyan-400" size={28} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={28} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" size={28} /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" size={28} /> },
  { name: "Prisma", icon: <SiPrisma className="text-indigo-400" size={28} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" size={28} /> },
];

const TechStackCard = () => {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col gap-4">
      <h2 className="text-lg font-medium text-white mb-2">💻 Tools & Tech Stack</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center w-16 h-16 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-200"
            title={tool.name}
          >
            {tool.icon}
            <span className="text-xs mt-1 text-white opacity-80">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;

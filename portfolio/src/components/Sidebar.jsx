import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaNodeJs } from "react-icons/fa";
import { SiPrisma, SiTailwindcss, SiPostgresql, SiNextdotjs, SiFirebase } from "react-icons/si";
import WeatherTimeCard from "./WeatherTimeCard";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/shiyon.thomas/", icon: <FaFacebookF /> },
  { name: "Instagram", href: "https://www.instagram.com/shiyonthoms/", icon: <FaInstagram /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shiyonthomas/", icon: <FaLinkedinIn /> },
  { name: "GitHub", href: "https://github.com/shiyonthoms", icon: <FaGithub /> },
];

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" size={28} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={28} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={28} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={28} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" size={28} /> },
  { name: "Python", icon: <FaPython className="text-blue-300" size={28} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={28} /> },
  { name: "Prisma", icon: <SiPrisma className="text-indigo-400" size={28} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" size={28} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={28} /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" size={28} /> }
];

const Sidebar = () => (
  
  <div className="w-full flex flex-col gap-6">

    <div className="backdrop-blur-md rounded-2xl p-4 bg-gray-800/30 transition duration-500 shadow-cyan-800 hover:shadow-lg">
    
      <h2 className="text-white font-bold text-xl mb-4">Socials</h2>
      <div className="flex flex-col gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-2xl bg-gray-700/40 hover:bg-gray-200/20 transition duration-300"
          >
            <div className="w-9 h-9 rounded-full flex justify-center items-center text-white hover:ring-green-300 ring-2 ring-transparent hover:scale-110 transition duration-300">
              {social.icon}
            </div>
            <span className="pl-3 text-white">{social.name}</span>
          </a>
        ))}
      </div>
    </div>

 
    <div className="backdrop-blur-md rounded-2xl p-4 bg-gray-800/30 transition duration-500 shadow-cyan-800 hover:shadow-lg">
      <h2 className="text-white font-bold text-xl mb-4">Skills</h2>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40 hover:bg-gray-700/60 transition duration-300"
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
    <div className="pb-2">
      <WeatherTimeCard />
      </div>
    
  </div>
);

export default Sidebar;

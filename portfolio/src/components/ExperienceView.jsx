import React from 'react';
import {motion} from "framer-motion"

export const experienceDetails = [
  {
    role: "Systems Engineer",
    companyName: "Tata Consultancy Services",
    from: "2022 - Aug 2025",
    location: "Kerala, India",
    imgs: "/tcs-black.svg",
    description: [
      "Developed and maintained responsive web interfaces using React.js, JavaScript, and Tailwind CSS, ensuring seamless user experience across devices",
      "Collaborated with product, design, and analytics teams to build and optimize full-stack digital solutions for a Fortune 50 healthcare & retail client.",
      "Developed reusable components and end-to-end solutions, enabling rapid feature deployment and scalable architecture for enterprise-grade applications.",
      "Enhanced application scalability and maintainability through modular architecture, efficient state management and optimized component design."
    ],
    skills: [
      "React", "Tailwind", "JavaScript",
      "Node", "HTML", "CSS", "Express", "SQL", "PostgreSQL"
    ],
  },
  // You can easily add more jobs here in the future
];


const ExperienceView = () => (
  <div className="w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1.3}}>
    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Experience</h1>
    <div className="space-y-8 transition duration-500 shadow-cyan-800 hover:shadow-lg rounded-2xl">

      {/* Map over the experienceDetails array */}
      {experienceDetails.map((exp, index) => (
        <div 
          key={index} 
          className="bg-gray-700/40 p-5 rounded-lg flex flex-col sm:flex-row items-start gap-5"
        >
          {/* Company Logo */}
          <img 
            src={exp.imgs} 
            alt={`${exp.companyName} logo`}
            className="w-20 h-20 rounded-lg object-contain flex-shrink-0 p-1 mx-auto sm:mx-0"
          />

          {/* Experience Details */}
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-300 font-medium">{exp.companyName}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.from}</p>
            
            {/* Description */}
            <ul className="list-disc list-inside text-left text-gray-300 space-y-1 mb-4">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-gray-600/50 text-xs font-semibold px-3 py-1 rounded-full text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </div>
    </motion.div>
  </div>
);

export default ExperienceView;
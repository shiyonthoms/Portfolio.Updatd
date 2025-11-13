import React from 'react';
import {motion} from "framer-motion"



export const educationDetails = [
  // {
  //   collegeName: "Amrita College of Engineering",
  //   degree: "Master of Computer Application (MCA)",
  //   from: "2020 - 2022",
  //   imgs: "/amritaCollege.jpg",
  //   cgpa: "8.2",
  //   location: "Kerala, India",

  // },
  {
    collegeName: "St. Philomenas College",
    degree: "Bachelor of Computer Application (BCA)",
    from: "2017 - 2020",
    imgs: "/philoCollege.jpg",
    cgpa: "7.0",
    location: "Karnadaka, India",
  },
];

const EducationView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30 ">
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1.3}}>
    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h1>
    <div className="space-y-6 ">
      {educationDetails.map((edu, index) => (
        <div 
          key={index} 
          className="bg-gray-700/40 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-5 transition duration-500 shadow-cyan-800 hover:shadow-lg"
        >
          <img 
            src={edu.imgs} 
            alt={`${edu.collegeName} logo`}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-300">{edu.collegeName}</p>
            <p className="text-gray-300">{edu.location}</p>
            <div className="flex justify-center sm:justify-start items-baseline gap-4 mt-1 text-gray-400 text-sm">
              <span>{edu.from}</span>
              <span>•</span>
              <span>CGPA: {edu.cgpa}</span>
            </div>
            
          </div>
        </div>
      ))}
      
    </div>
    </motion.div>

  </div>
);

export default EducationView;
import React from 'react';
// Import your education data
export const educationDetails = [
  {
    collegeName: "Amrita College of Engineering",
    degree: "Master of Computer Application (MCA)",
    from: "2020 - 2022",
    imgs: "/amritaCollege.jpg",
    cgpa: "8.2"
  },
  {
    collegeName: "St. Philomenas College",
    degree: "Bachelor of Computer Application (BCA)",
    from: "2017 - 2020",
    imgs: "/philoCollege.jpg",
    cgpa: "7.0"
  },
];

const EducationView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h1>
    <div className="space-y-6">

      {/* Map over the educationDetails array to create a card for each entry */}
      {educationDetails.map((edu, index) => (
        <div 
          key={index} 
          className="bg-gray-700/40 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-5 hover:scale-102 transition duration-500"
        >
          {/* College Image */}
          <img 
            src={edu.imgs} 
            alt={`${edu.collegeName} logo`}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />

          {/* Education Details */}
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-300">{edu.collegeName}</p>
            <div className="flex justify-center sm:justify-start items-baseline gap-4 mt-1 text-gray-400 text-sm">
              <span>{edu.from}</span>
              <span>•</span>
              <span>CGPA: {edu.cgpa}</span>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  </div>
);

export default EducationView;
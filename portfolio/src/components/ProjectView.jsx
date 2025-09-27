export const projectInfo = [
  {
    title: "The MovieHub",
    subtitle: "A movie database using the TMDB API.",
    imgs: "/project-icon/movieDB.jpg",
  },
  {
    title: "The GameHub",
    subtitle: "A game database using the IGDB API.",
    imgs: "/project-icon/gameHub.jpg",
  },
  {
    title: "Todo App",
    subtitle: "A fully functional Todo Application.",
    imgs: "/project-icon/todo.jpg",
  },
  {
    title: "CRM System",
    subtitle: "A customer relationship management system.",
    imgs: "/project-icon/crm.jpg",
  },
];

import React from 'react';
// Import your project data

const ProjectsView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h1>
    
    {/* Responsive grid for the project cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Map over the projectInfo array to create a card for each project */}
      {projectInfo.map((project, index) => (
        <div 
          key={index} 
          className="bg-gray-700/40 rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/40"
        >
          {/* Project Image */}
          <img 
            src={project.imgs} 
            alt={`Screenshot of ${project.title}`}
            className="w-full h-48 object-cover"
          />

          {/* Project Details */}
          <div className="p-5">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-1">{project.subtitle}</p>
          </div>
        </div>
      ))}
      
    </div>
  </div>
);

export default ProjectsView;
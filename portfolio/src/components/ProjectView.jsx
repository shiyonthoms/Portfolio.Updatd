import React, { useState } from "react";

export const projectInfo = [
  {
    title: "Hirable - Job Portal",
    subtitle: "Full Stack Application – React.js, Node.js, Prisma, PostgreSQL, Tailwind CSS",
    imgs: "/project-icon/Hirable.png",
    description:
      "Developed and deployed a full-stack job portal featuring authentication, job listings, and role-based dashboards. Designed RESTful APIs, integrated Prisma ORM for optimized database queries, and deployed on Vercel (frontend) and Render (backend).",
    techStack: [
      "React.js",
      "Node.js (Express)",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "https://github.com/shiyonthoms/Hirable---JobPortal",
  },
  {
    title: "EmberTax",
    subtitle: "Client Project – React.js, Tailwind CSS, Vercel",
    imgs: "/project-icon/EmberTax.png",
    description:
      "Delivered a responsive tax services platform for a client, featuring optimized navigation, form integration, and smooth animations. Enhanced lead management and user engagement using EmailJS and SEO-friendly architecture.",
    techStack: ["React.js", "Tailwind CSS", "EmailJS", "Vercel"],
    link: "https://embertax.com",
  },
  {
    title: "GameHub",
    subtitle: "React.js, Tailwind CSS, IGDB API",
    imgs: "/project-icon/GameHub.png",
    description:
      "Created a gaming discovery platform with API-driven search and dynamic filtering, enabling users to explore trending titles through a responsive, data-rich interface.",
    techStack: ["React.js", "Tailwind CSS", "IGDB API", "Express"],
    link: "https://github.com/shiyonthoms/GameHub",
  },
  {
    title: "Todo Application",
    subtitle: "React, Express, Prisma, PostgreSQL, JWT Auth, Tailwind CSS",
    imgs: "/project-icon/todo.jpg",
    description:
      "A full-stack Todo application with user authentication, task CRUD operations, and secure data handling. The backend is built using Express and integrates Prisma as ORM for PostgreSQL. Authentication is handled via JWT tokens for session control and role protection. The frontend is built in React and styled with Tailwind CSS, featuring real-time UI updates and responsive design.",
    techStack: [
      "React.js",
      "Express (Node.js)",
      "Prisma",
      "PostgreSQL",
      "JWT Authentication",
      "Tailwind CSS"
    ],
    link: "https://github.com/shiyonthoms/TODO-Application--Front---Back-Express--",  
  },
  {
  title: "MovieHub",
  subtitle: "React, Express, TMDB API, Tailwind CSS",
  imgs: "/project-icon/Movie.png",
  description:
    "Developed a movie discovery platform powered by the TMDB API that allows users to browse, search, and explore detailed information about movies and trending titles. Built the frontend with React and Tailwind CSS for a clean, responsive, and modern interface. The backend, developed in Express.js, handles API requests and data fetching from TMDB, ensuring efficient caching and faster load times. Includes search filtering, genre-based navigation, and detailed movie pages with ratings, cast, and trailers.",
  techStack: [
    "React.js",
    "Express (Node.js)",
    "TMDB API",
    "Tailwind CSS",
  ],
  link: "https://github.com/shiyonthoms/movieApp", 
}

];

const ProjectsView = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-700/40 rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/40 cursor-pointer"
          >
            <img
              src={project.imgs}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-1">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>


      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          onClick={() => setSelectedProject(null)} 
        >
          <div
            className="bg-gray-800 rounded-xl p-6 max-w-lg w-[90%] relative shadow-lg shadow-green-900/40 animate-fadeIn"
            onClick={(e) => e.stopPropagation()} 
          >

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-2 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>


            <img
              src={selectedProject.imgs}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />


            <h2 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h4 className="text-green-400 font-semibold mb-1">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>


            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Visit
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsView;

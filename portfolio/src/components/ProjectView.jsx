// ProjectsView.js
import React from 'react';

const ProjectsView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Projects</h1>
    <div className="space-y-4">
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Portfolio Website</h3>
        <p className="text-gray-300">React + Tailwind CSS</p>
      </div>
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">E-commerce App</h3>
        <p className="text-gray-300">MERN Stack</p>
      </div>
    </div>
  </div>
);

export default ProjectsView;
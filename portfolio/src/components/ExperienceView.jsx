// ExperienceView.js
import React from 'react';

const ExperienceView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Experience</h1>
    <div className="space-y-4">
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
        <p className="text-gray-300">Company A (2022–Present)</p>
      </div>
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Intern</h3>
        <p className="text-gray-300">Company B (2021–2022)</p>
      </div>
    </div>
  </div>
);

export default ExperienceView;
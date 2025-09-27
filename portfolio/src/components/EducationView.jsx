// EducationView.js
import React from 'react';

const EducationView = () => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Education</h1>
    <div className="space-y-4">
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
        <p className="text-gray-300">XYZ University</p>
      </div>
      <div className="bg-gray-700/40 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Master's in IT</h3>
        <p className="text-gray-300">ABC University</p>
      </div>
    </div>
  </div>
);

export default EducationView;
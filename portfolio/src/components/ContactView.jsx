// ContactView.js
import React from 'react';

const ContactView = ({ getDownloadFile }) => (
  <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl text-center bg-gray-800/30">
    <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h1>
    <div className="space-y-4 mb-6">
      <p className="text-lg">Email: shiyon@example.com</p>
      <p className="text-lg">Phone: +91 1234567890</p>
    </div>
    <button
      onClick={getDownloadFile}
      className="px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition text-white font-semibold"
    >
      Download CV
    </button>
  </div>
);

export default ContactView;
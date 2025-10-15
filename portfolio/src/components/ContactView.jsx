import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"

const ContactView = ({ getDownloadFile }) => {
  // State for form inputs and loading status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // EmailJS submit handler
  const submitHandel = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = { name, email, message };

    try {
      // Send the main email
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Send the auto-reply email
      await emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey);

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error("EmailJS error:", err);
      // You could add a user-facing error message here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white w-full p-6 backdrop-blur-lg rounded-2xl bg-gray-800/30 h-full lg:h-[82%]">
      <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:1.3}}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Get in Touch</h1>
        <button
          onClick={getDownloadFile}
          className="mt-4 sm:mt-0 px-5 py-2 rounded-lg bg-gray-400/30 hover:bg-gray-600/40 transition text-white font-semibold whitespace-nowrap cursor-pointer"
        >
          Download CV
        </button>
      </div>

      {/* Contact Form */}
      <form onSubmit={submitHandel}>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Name Input */}
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="p-3 bg-gray-700/50 rounded-lg border-none focus:ring-2 focus:ring-cyan-300 outline-none placeholder:text-gray-400 shadow-cyan-800 shadow-lg" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Email Input */}
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="p-3 bg-gray-700/50 rounded-lg border-none focus:ring-2 focus:ring-cyan-300 outline-none placeholder:text-gray-400 shadow-cyan-800 shadow-lg" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* Message Textarea */}
        <div className="flex flex-col mt-5">
          <label className="font-semibold mb-1">Message</label>
          <textarea 
            name="message" 
            required 
            rows="5"
            className="p-3 bg-gray-700/50 rounded-lg border-none focus:ring-2 focus:ring-cyan-300 outline-none placeholder:text-gray-400 resize-none shadow-cyan-800 shadow-lg" 
            placeholder="Drop your message here..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {/* Submit Button with Animation */}
        <div className="flex justify-center mt-6 items-center">
          <div className="relative w-48 h-12 flex justify-center items-center rounded-lg overflow-hidden">
            <div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,#a8ff78_0%,#78ffd6_50%,#a8ff78_100%)] animate-[spin_2s_linear_infinite]"></div>
            <button 
              className="relative w-[188px] h-[44px] rounded-lg hover:cursor-pointer bg-gray-800 font-semibold text-lg" 
              type="submit" 
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
      </motion.div>
    </div>
  );
};

export default ContactView;
import Sidebar from './Sidebar'; 

const ProfileView = ({ getDownloadFile }) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Top Card: Profile Info */}
      <div className="backdrop-blur-lg w-full rounded-2xl flex flex-col lg:flex-row items-center justify-center p-6 gap-6 bg-gray-800/30 lg:h-[50vh]">
        {/* Text content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-4 text-center order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hello, I'm <br /> Shiyon Thomas
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-300">
            IT Specialist & Full-Stack Developer
          </p>
          <button
            onClick={getDownloadFile}
            className="flex relative justify-center whitespace-nowrap rounded-full font-semibold h-14 w-52 text-sm tracking-widest px-8 uppercase items-center gap-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer bg-black text-white"
          >
            <span>Download CV</span>
          </button>
        </div>

        {/* Profile picture */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
          <img
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover ring-4 ring-gray-700"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>

      {/* Bottom section: About Me & Connect */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4">
        {/* About Me */}
        <div className="w-full lg:w-2/3 backdrop-blur-lg rounded-2xl p-6 bg-gray-800/30">
          <h2 className="text-white text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I'm a passionate IT Specialist and Full-Stack Developer who loves building functional, user-friendly digital experiences. My goal is to leverage technology to solve real-world problems while continuously growing as a developer. I aspire to work on innovative projects that make a meaningful impact.
          </p>
        </div>

        {/* Connect */}
        <div className="w-full lg:w-1/3 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center gap-4 p-6 bg-gray-800/30">
          <h3 className="text-white font-bold text-lg">Connect with me</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.linkedin.com/in/shiyonthomas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition text-sm">LinkedIn</a>
            <a href="https://github.com/shiyonthoms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition text-sm">GitHub</a>
            <a href="mailto:shiyon@example.com" className="text-white hover:text-red-500 transition text-sm">Email</a>
          </div>
        </div>
      </div>
      
      {/* RENDER THE SIDEBAR HERE FOR MOBILE: Visible only on screens smaller than md */}
      <div className="w-full md:hidden mt-4">
        <Sidebar />
      </div>

    </div>
  );
};

export default ProfileView;
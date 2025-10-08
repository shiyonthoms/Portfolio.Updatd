import Sidebar from './Sidebar'; 
import SpotifyCard from './SpotifyCard';
import AppleMusicCard from './AppleMusicCard';
import WeatherTimeCard from './WeatherTimeCard';
import TechStackCard from './TechStackCard';
import NowPlayingCard from './NowPlayingCard';
import PremiumCards from './PremiumCards';
import PassionsCard from './PassionCard';

const ProfileView = ({ getDownloadFile }) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="backdrop-blur-lg w-full rounded-2xl flex flex-col lg:flex-row items-center justify-center p-6 gap-6 bg-gray-800/30 lg:h-[46vh] hover:scale-102 transition duration-500">
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center space-y-4 text-center order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hello, I'm <br /> Shiyon Thomas
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-300">
            IT Specialist & Full-Stack Developer
          </p>
          <div className='border-5 p-1 rounded-full border-gray-300/40 transition duration-300 ease-in-out'>
          <button
            onClick={getDownloadFile}
            className="flex relative justify-center whitespace-nowrap rounded-full font-semibold h-14 w-52 text-sm tracking-widest px-8 uppercase items-center gap-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-black text-white"
          >
            <span>Download CV</span>
          </button>
          </div>
          <div className='w-full rounded-2xl justify-center gap-6 flex flex-row md:pt-5'>
            <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>Age</span><br /><span className='font-bold text-md'>26</span></div> 
           <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>YoE</span><br /><span className='font-bold text-md'>3</span></div> 
           <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>Projects</span><br /><span className='font-bold text-md'>5</span></div> 
             
          </div>
        </div>

        {/* Profile picture */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
        <div className='border-10 p-1 rounded-full border-gray-300/40 transition duration-300 ease-in-out'>
          <img
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover ring-4 ring-gray-700"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-4">

        <div className="w-full lg:w-2/3 backdrop-blur-lg rounded-2xl p-6 bg-gray-800/30 hover:scale-102 transition duration-500">
          <h2 className="text-white text-xl font-semibold mb-5">About Me</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I'm Shiyon Thomas, an IT Specialist and Full-Stack Developer passionate about building functional, user-friendly digital experiences. I focus on hands-on projects that solve real-world problems and continuously improve my skills.
            <br /> 
            <br />
            I'm driven to push boundaries, whether it's developing innovative web solutions, exploring new technologies, or enhancing my full-stack expertise. My goal is to work on impactful projects that make a meaningful difference.
            <br />
            <br />
            Outside of work, I enjoy music, exploring new tech tools, and diving into creative hobbies, which spark my creativity and help me unwind. Let's connect to collaborate or chat about tech or even share ideas!
          </p>
        </div>


        <div className="w-full lg:w-1/3 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center gap-4 p-6 bg-gray-800/30 hover:scale-102 transition duration-500 ">
        <PassionsCard/>
        </div>
      </div>
      
      <div className="w-full md:hidden mt-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default ProfileView;
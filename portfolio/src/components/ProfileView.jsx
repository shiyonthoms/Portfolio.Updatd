import Sidebar from './Sidebar'; 
import { GoDownload } from "react-icons/go";
import PassionsCard from './PassionCard';
import ShinyText from './ReactBits/ShinyText';
import BlurText from './ReactBits/BlurText';
import TrueFocus from './ReactBits/TrueFocus';
import ScrambledText from './ReactBits/ScrambledText';
import ScrollReveal from './ReactBits/ScrollReveal';


const ProfileView = ({ getDownloadFile }) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="backdrop-blur-lg w-full rounded-2xl flex flex-col lg:flex-row items-center justify-center p-6 gap-6 bg-gray-800/30 lg:h-[46vh] hover:scale-102 transition duration-500 shadow-red-800/40 hover:shadow-2xl">
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center space-y-4 text-center order-2 lg:order-1">
          {/* <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hello, I'm <br /> Shiyon Thomas
          </h1> */}
          <BlurText
            text="SHIYON THOMAS"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-mono text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-white"
          />
          {/* <p className="text-lg sm:text-xl font-medium text-gray-300">
            IT Specialist & Full-Stack Developer
          </p> */}
          <BlurText
            text="IT Specialist & Full-Stack Developer"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-xl font-medium text-gray-300"
          />
          <div className='border-5 p-1 rounded-full border-gray-300/40 transition duration-300 ease-in-out'>
          <button
            onClick={getDownloadFile}
            className="flex relative justify-center whitespace-nowrap rounded-full font-semibold h-14 w-52 text-sm tracking-widest px-8 uppercase items-center gap-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-black text-white"
          >
            <span><ShinyText text="Download CV" speed={3} className="text-md font-bold text-white/70" /></span>
            <GoDownload className='text-xl text-white'/>
          </button>
          </div>
          {/* <div className='w-full rounded-2xl justify-center gap-6 flex flex-row md:pt-5'>
            <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>Age</span><br /><span className='font-bold text-md'>26</span></div> 
           <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>YoE</span><br /><span className='font-bold text-md'>3</span></div> 
           <div className='backdrop-blur-lg w-30 h-15 rounded-2xl items-center'><span className='text-lg font-semibold'>Projects</span><br /><span className='font-bold text-md'>5</span></div> 
             
          </div> */}
          <div></div>
          <TrueFocus
            manualMode={true}
            blurAmount={3}
            borderColor="white"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            items={[
              <div className='backdrop-blur-lg w-30 h-15 rounded-2xl flex flex-col items-center justify-center border-2'>
                <span className='text-lg font-semibold text-white'>Age</span>
                <span className='font-bold text-md text-white'>26</span>
              </div>,
              <div className='backdrop-blur-lg w-30 h-15 rounded-2xl flex flex-col items-center justify-center border-2'>
                <span className='text-lg font-semibold text-white'>YoE</span>
                <span className='font-bold text-md text-white'>3</span>
              </div>,
              <div className='backdrop-blur-lg w-30 h-15 rounded-2xl flex flex-col items-center justify-center border-2'>
                <span className='text-lg font-semibold text-white'>Projects</span>
                <span className='font-bold text-md text-white'>5</span>
              </div>
            ]}
          />
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

        <div className="w-full lg:w-2/3 backdrop-blur-lg rounded-2xl p-6 bg-gray-800/30 hover:scale-102 transition duration-500 shadow-red-800/40 hover:shadow-2xl">
  <h2 className="text-white text-xl font-semibold mb-5">About Me</h2>

  <ScrambledText
    className="text-gray-300 text-sm sm:text-base pb-4"
    radius={50}
    duration={1.2}
    speed={0.5}
    scrambleChars=".:"
  >
    I'm Shiyon Thomas, an IT Specialist and Full-Stack Developer passionate about building functional, user-friendly digital experiences. I focus on hands-on projects that solve real-world problems and continuously improve my skills.
    <br /><br />
    I'm driven to push boundaries, whether it's developing innovative web solutions, exploring new technologies, or enhancing my full-stack expertise. My goal is to work on impactful projects that make a meaningful difference.
    <br /><br />
   Let's connect to collaborate or chat about tech or even share ideas!
  </ScrambledText>
</div>



        <div className="w-full lg:w-1/3 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center gap-4 p-6 bg-gray-800/30 hover:scale-102 transition duration-500 shadow-red-800/40 hover:shadow-2xl">
        <PassionsCard/>
        </div>
      </div>
      
      <div className="w-full md:hidden md:mt-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default ProfileView;
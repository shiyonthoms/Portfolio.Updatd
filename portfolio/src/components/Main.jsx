const Main = ({ currentRoute }) => {

  const getDownloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Shiyon_Thomas_Resume.pdf";
    link.download = "ShiyonThomasResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full h-full flex items-center justify-center overflow-auto">
      <div className="w-full h-full flex">
        {/* Sidebar */}
        <div className="hidden md:flex min-w-[300px] w-[20%]  h-full"></div>

        {/* Main Panel */}
        <div className="flex-1 h-full flex flex-col items-center">
          {currentRoute === "Profile" && (
            <>
              {/* Your existing Profile Page JSX */}
              {/* Top card */}
              <div className="backdrop-blur-lg w-[95%] h-full lg:h-[70%] rounded-2xl mt-2 flex flex-col lg:flex-row items-center">
                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6 order-1 md:order-2 mt-5 lg:mt-0">
                  <h1 className="text-4xl font-bold text-white">Hello I'm</h1>
                  <h1 className="text-4xl font-bold text-white">Shiyon Thomas</h1>
                  <h1 className="text-xl font-bold text-white">IT Specialist & Full-Stack Developer</h1>
                  <button
                    onClick={getDownloadFile}
                    className="flex relative justify-center whitespace-nowrap rounded-full font-semibold h-[56px] w-[210px] text-sm tracking-[2px] px-8 uppercase items-center gap-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer bg-black"
                  >
                    <span>Download CV</span>
                  </button>
                </div>

                {/* Picture */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <img
                    className="w-80 h-80 rounded-full object-cover"
                    src="/pic.jpg"
                    alt="Profile Picture"
                  />
                </div>
              </div>

              {/* Bottom card */}
              <div className="flex w-[95%] h-[20%] rounded-2xl mt-2 flex-col lg:flex-row items-center justify-center gap-6">
                {/* Left: Typewriter / Interactive text */}
                <div className="hidden w-full lg:w-2/3 h-full backdrop-blur-lg rounded-2xl lg:flex flex-col items-center justify-center p-4">
                  <h2 className="text-white text-2xl font-semibold mb-2">I am a</h2>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white">
                    <span className="typewriter">Full-Stack Developer</span>
                  </h1>
                  <p className="text-white mt-2 text-center">
                    Turning ideas into functional & beautiful web apps. 🚀
                  </p>
                </div>

                {/* Right: Social links / contact */}
                <div className="w-full lg:w-1/3 h-full backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center gap-4 p-4">
                  <h3 className="text-white font-bold text-lg">Connect with me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-blue-500 transition">
                      LinkedIn
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition">
                      GitHub
                    </a>
                    <a href="#" className="text-white hover:text-red-500 transition">
                      Email
                    </a>
                  </div>
                  <button
                    onClick={getDownloadFile}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </>
          )}

          {currentRoute === "Education" && (
            <div className="text-white text-center p-4">
              <h1 className="text-3xl font-bold mb-4">Education</h1>
              <ul className="list-disc space-y-2 pl-6">
                <li>Bachelor's in Computer Science, XYZ University</li>
                <li>Master's in IT, ABC University</li>
              </ul>
            </div>
          )}

          {currentRoute === "Experience" && (
            <div className="text-white text-center p-4">
              <h1 className="text-3xl font-bold mb-4">Experience</h1>
              <ul className="list-disc space-y-2 pl-6">
                <li>Full-Stack Developer at Company A (2022–Present)</li>
                <li>Intern at Company B (2021–2022)</li>
              </ul>
            </div>
          )}

          {currentRoute === "Projects" && (
            <div className="text-white text-center p-4">
              <h1 className="text-3xl font-bold mb-4">Projects</h1>
              <ul className="list-disc space-y-2 pl-6">
                <li>Portfolio Website (React + Tailwind)</li>
                <li>E-commerce App (MERN Stack)</li>
              </ul>
            </div>
          )}

          {currentRoute === "Contact" && (
            <div className="text-white text-center p-4">
              <h1 className="text-3xl font-bold mb-4">Contact</h1>
              <p>Email: shiyon@example.com</p>
              <p>Phone: +91 1234567890</p>
              <button
                onClick={getDownloadFile}
                className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition text-white mt-2"
              >
                Download CV
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Main;

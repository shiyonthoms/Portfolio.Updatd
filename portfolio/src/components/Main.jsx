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
    <section className="w-full min-h-screen flex items-start justify-center overflow-auto">
      <div className="w-full min-h-full flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col min-w-[300px] w-[20%] min-h-full items-center py-4">
          <div className="backdrop-blur-md rounded-2xl flex-col space-y-6 min-w-[300px] w-[90%] flex-shrink-0 ml-8">
            <div className="text-white font-bold text-2xl rounded-2xl pl-4 pr-4 pt-2 pb-2 bg-gray-700/40 border-1 border-gray-900">
              Socials
            </div>
            <div>
              <div className="flex-col gap-4 flex justify-center pl-4 pr-4 pb-4">
                <div className="border-1 rounded-3xl pr-4 pt-1 pb-1 bg-gray-700/40 border-none flex">
                  <a target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:ring-green-300 ring-2 border-none hover:scale-110 transition duration-300 ease-in-out" data-state="closed" href="https://www.facebook.com/shiyon.thomas/">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                  <span className="pl-2 items-center justify-center flex">Facebook</span>
                </div>
                <div className="border-1 rounded-3xl pr-4 pt-1 pb-1 bg-gray-700/40 border-none flex">
                  <a target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:ring-green-300 ring-2 border-none hover:scale-110 transition duration-300 ease-in-out" data-state="closed" href="https://www.instagram.com/shiyonthoms/">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <span className="pl-2 items-center justify-center flex">Instagram</span>
                </div>
                <div className="border-1 rounded-3xl pr-4 pt-1 pb-1 bg-gray-700/40 border-none flex">  
                  <a target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:ring-green-300 ring-2 border-none hover:scale-110 transition duration-300 ease-in-out" data-state="closed" href="https://www.linkedin.com/in/shiyonthomas/">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <span className="pl-2 items-center justify-center flex">Linkedin</span>
                </div>
                <div className="border-1 rounded-3xl pr-4 pt-1 pb-1 bg-gray-700/40 border-none flex"> 
                  <a target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:ring-green-300 ring-2 border-none hover:scale-110 transition duration-300 ease-in-out" data-state="closed" href="https://github.com/shiyonthoms">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <span className="pl-2 items-center justify-center flex">GitHub</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md rounded-2xl flex-col space-y-6 min-w-[300px] w-[90%] flex-shrink-0 ml-8 mt-10">
            <div className="text-white font-bold text-2xl rounded-2xl pl-4 pr-4 pt-2 pb-2 bg-gray-700/40 border-1 border-gray-900">
              Socials
            </div>
            <div className="grid grid-cols-4 gap-6 text-white pl-5 pr-5 pb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-react text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-js text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-html5 text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-css text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-github text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-git text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-python text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-database text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-node text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-brands fa-figma text-2xl"></i>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700/40">
                <i className="fa-solid fa-file-xml text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 min-h-screen flex flex-col items-center p-2 md:p-4 md:ml-5">
          {currentRoute === "Profile" && (
            <>
              {/* Top card */}
              <div className="backdrop-blur-lg w-full max-w-7xl min-h-[50vh] lg:min-h-[60vh] rounded-2xl flex flex-col lg:flex-row items-center justify-center p-4 lg:p-6 mb-4">
                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-4 lg:space-y-6 order-2 lg:order-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">Hello I'm</h1>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">Shiyon Thomas</h1>
                  <h1 className="text-lg sm:text-xl font-bold text-white text-center px-4">IT Specialist & Full-Stack Developer</h1>
                  <button
                    onClick={getDownloadFile}
                    className="flex relative justify-center whitespace-nowrap rounded-full font-semibold h-[56px] w-[210px] text-sm tracking-[2px] px-8 uppercase items-center gap-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer bg-black text-white"
                  >
                    <span>Download CV</span>
                  </button>
                </div>

                {/* Picture */}
                <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
                  <img
                    className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                    src="/pic.jpg"
                    alt="Profile Picture"
                  />
                </div>
              </div>

              {/* Bottom card */}
              <div className="flex w-full max-w-7xl min-h-[30vh] lg:min-h-[20vh] rounded-2xl flex-col lg:flex-row items-stretch justify-center gap-4">
                {/* Left: About Me */}
                <div className="w-full lg:w-2/3 backdrop-blur-lg rounded-2xl flex flex-col justify-center p-4 lg:p-6">
                  <h2 className="text-white text-lg font-semibold mb-2">About Me</h2>
                  <p className="text-white text-sm lg:text-base leading-relaxed">
                    I'm a passionate IT Specialist and Full-Stack Developer who loves building functional, user-friendly digital experiences. My goal is to leverage technology to solve real-world problems while continuously growing as a developer. I aspire to work on innovative projects that make a meaningful impact.
                  </p>
                </div>

                {/* Right: Connect */}
                <div className="w-full lg:w-1/3 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center gap-4 p-4 lg:p-6">
                  <h3 className="text-white font-bold text-lg">Connect with me</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#" className="text-white hover:text-blue-500 transition text-sm">
                      LinkedIn
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition text-sm">
                      GitHub
                    </a>
                    <a href="#" className="text-white hover:text-red-500 transition text-sm">
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentRoute === "Education" && (
            <div className="text-white w-full max-w-4xl p-6 backdrop-blur-lg rounded-2xl">
              <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
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
          )}

          {currentRoute === "Experience" && (
            <div className="text-white w-full max-w-4xl p-6 backdrop-blur-lg rounded-2xl">
              <h1 className="text-3xl font-bold mb-6 text-center">Experience</h1>
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
          )}

          {currentRoute === "Projects" && (
            <div className="text-white w-full max-w-4xl p-6 backdrop-blur-lg rounded-2xl">
              <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
              <div className="space-y-4">
                <div className="bg-gray-700/40 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">Portfolio Website</h3>
                  <p className="text-gray-300">React + Tailwind</p>
                </div>
                <div className="bg-gray-700/40 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">E-commerce App</h3>
                  <p className="text-gray-300">MERN Stack</p>
                </div>
              </div>
            </div>
          )}

          {currentRoute === "Contact" && (
            <div className="text-white w-full max-w-4xl p-6 backdrop-blur-lg rounded-2xl text-center">
              <h1 className="text-3xl font-bold mb-6">Contact</h1>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Main;
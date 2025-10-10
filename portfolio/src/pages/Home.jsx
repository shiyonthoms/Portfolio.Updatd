import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Aurora from "../components/ReactBits/Aurora";

const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="w-full min-h-[100dvh] relative flex items-center justify-center bg-gray-900/90 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm">
        <div className="w-full h-full md:w-[90%] md:h-[95vh] xl:max-w-screen-2xl bg-gray-900/40 backdrop-blur-md md:rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-gray-800/40">
          
          {/* Navbar */}
          <NavBar
            routeNames={routeNames}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />

          {/* Main content scrollable area */}
          <div className="flex-1 w-full overflow-y-auto no-scrollbar">
            <Main currentRoute={currentRoute} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import FaultyTerminal from "../components/ReactBits/FaultyTerminal";
import Aurora from "../components/ReactBits/Aurora";
import ScrollReveal from "../components/ReactBits/ScrollReveal";



const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="w-full h-[100vh] relative flex items-center justify-center  bg-gray-900/90">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Foreground content */}
      <div className="backdrop-blur-sm w-full h-full flex items-center justify-center md:p-4 relative z-10">
        <div className="w-full h-full md:w-[90%] min-w-screen-2xl md:h-[95vh] bg-gray-900/40 backdrop-blur-md md:rounded-2xl flex flex-col overflow-hidden border-red-500  shadow-2xl">
          
          <NavBar
            routeNames={routeNames}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />
          <div className="flex-1 min-h-0 w-full overflow-y-auto no-scrollbar">
            <Main currentRoute={currentRoute} />
          </div>

        </div>
      </div>
      
    </main>
  );
};


export default Home;
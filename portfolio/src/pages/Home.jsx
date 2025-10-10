import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Aurora from "../components/ReactBits/Aurora";

const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="relative flex items-center justify-center min-h-screen w-full bg-gray-900 overflow-hidden">
      
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Foreground container */}
      <div className="relative z-10 flex w-full h-full items-center justify-center p-0 md:p-4 backdrop-blur-sm">
        <div
          className="
            flex flex-col w-full h-full md:w-[90%] md:h-[95vh]
            bg-gray-900/40 backdrop-blur-md md:rounded-2xl
            overflow-hidden shadow-2xl border border-gray-800/50
          "
        >
          {/* Navigation */}
          <NavBar
            routeNames={routeNames}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />

          {/* Scrollable main area */}
          <div className="flex-1 w-full overflow-y-auto overflow-x-hidden no-scrollbar">
            <Main currentRoute={currentRoute} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

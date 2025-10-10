import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Aurora from "../components/ReactBits/Aurora";
import ScrollReveal from "../components/ReactBits/ScrollReveal";

const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="relative flex flex-col items-center justify-start w-full min-h-screen bg-gray-900/90 overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full backdrop-blur-sm flex justify-center px-2 md:px-8 pt-4 md:pt-8 ">
        <div className="w-full md:w-[90%] max-w-screen-2xl bg-gray-900/40 backdrop-blur-md md:rounded-2xl flex flex-col shadow-2xl  border-gray-800 overflow-hidden rounded-2xl">
          
          {/* NavBar stays fixed on top */}
          <NavBar
            routeNames={routeNames}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />

          {/* Scrollable main section */}
          <div className="flex-1 w-full overflow-y-auto no-scrollbar max-h-[calc(100vh-4rem)] md:max-h-[calc(90vh-5rem)]">
            <Main currentRoute={currentRoute} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;

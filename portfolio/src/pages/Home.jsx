import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import PixelBlast from "../components/PixelBlast";
import Aurora from "../components/Aurora";
import PrismaticBurst from "../components/PrismaticBurst";
import PillNav from "../components/PillNav";


const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="relative flex flex-col items-center justify-start w-full min-h-screen bg-gray-900/90 overflow-hidden border-0">
      {/* Background PixelBlast - NO pointer-events-none! */}
      <div className="absolute inset-0 z-0 backdrop-blur-sm border-0 ">
        {/* <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0}
          transparent
        /> */}
         <Aurora
          colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-screen md:h-full flex justify-center px-0 lg:px-8 pt-0 md:pt-8 pointer-events-none">
        <div className="w-full md:w-[90%] max-w-screen-2xl bg-gray-900/30 backdrop-blur-sm md:rounded-2xl flex flex-col shadow-2xl overflow-hidden pointer-events-auto ">
          
          {/* NavBar stays fixed on top */}
          <NavBar
            routeNames={routeNames}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />

          {/* Scrollable main section */}
          <div className="flex-1 w-full overflow-y-auto no-scrollbar max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)]">
            <Main currentRoute={currentRoute} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;


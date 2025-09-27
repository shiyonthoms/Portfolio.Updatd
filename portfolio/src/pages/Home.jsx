import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="w-full h-screen bg-[url('/bg-image-2.jpg')] bg-cover flex items-center justify-center">
      <div className="backdrop-blur-sm w-full h-full flex items-center justify-center md:p-4">
      <div className="w-full h-full md:w-[90%] min-w-screen-2xl md:h-[95vh] bg-gray-900/40 backdrop-blur-md md:rounded-2xl flex flex-col overflow-hidden">
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
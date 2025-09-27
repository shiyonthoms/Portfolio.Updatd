import { useState } from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const Home = () => {
  const routeNames = ["Profile", "Education", "Experience", "Projects", "Contact"];
  const [currentRoute, setCurrentRoute] = useState(routeNames[0]);

  return (
    <main className="w-full h-screen bg-[url('/bg-image-3.jpg')] bg-cover flex items-center justify-center">
      <div className="w-[95%] min-w-screen-2xl h-[95vh] bg-gray-900/40 backdrop-blur-md rounded-2xl flex flex-col overflow-hidden">
        <NavBar
          routeNames={routeNames}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
        <div className="flex-1 min-h-0 w-full">
          <Main currentRoute={currentRoute} />
        </div>
      </div>
    </main>
  );
};

export default Home;

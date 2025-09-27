const NavBar = ({ routeNames, currentRoute, setCurrentRoute }) => {
  return (
    <nav className="w-full flex items-center h-[72px] px-5">
      <div className="text-white font-bold text-2xl rounded-4xl pl-4 pr-4 pt-2 pb-2 bg-gray-700/40 hover:bg-gray-900/30 cursor-pointer ml-4">
        Shiyon Thomas
      </div>

      <div className="hidden lg:flex ml-auto items-center space-x-6 mx-auto">
        {routeNames.map((route) => (
          <button
            key={route}
            className={`text-lg p-4 rounded-4xl ${
              currentRoute === route
                ? "bg-gray-900/40 text-white"
                : "text-white hover:bg-gray-900/40"
            }`}
            onClick={() => setCurrentRoute(route)}
          >
            {route}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

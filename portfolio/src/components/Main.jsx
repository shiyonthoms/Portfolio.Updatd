import React from 'react';
import Sidebar from './Sidebar';
import ProfileView from './ProfileView';
import EducationView from './EducationView';
import ExperienceView from './ExperienceView';
import ProjectsView from './ProjectView';
import ContactView from './ContactView';


const getDownloadFile = () => {
  const link = document.createElement("a");
  link.href = "/Shiyon_Thomas_Resume.pdf";
  link.download = "ShiyonThomasResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Main = ({ currentRoute }) => {
  const routeComponents = {
    Profile: <ProfileView getDownloadFile={getDownloadFile} />,
    Education: <EducationView />,
    Experience: <ExperienceView />,
    Projects: <ProjectsView />,
    Contact: <ContactView getDownloadFile={getDownloadFile} />,
  };

  return (
    <section className="w-full h-full flex items-center justify-center p-2 md:p-4">
      <div className="w-full max-w-[1600px] h-full flex flex-col md:flex-row gap-4">
        
        {/* Sidebar for Desktop */}
        <div className="hidden md:flex w-full md:w-[300px] flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Panel - THIS IS THE CORRECTED LINE */}
        <div className="flex-1 h-full flex flex-col">
          {/* Render the component that matches the current route, or default to Profile */}
          {routeComponents[currentRoute] || <ProfileView getDownloadFile={getDownloadFile} />}
        </div>

      </div>
    </section>
  );
};

export default Main;
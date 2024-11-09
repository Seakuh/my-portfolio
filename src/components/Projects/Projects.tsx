import apartmentgenie from "../../assets/images/apartmentgenie.png";
import avantiLogo from "../../assets/images/avantiLogo.jpg";
import flowmarked from "../../assets/images/flowmarked.png";
import focusplugin from "../../assets/images/focusplugin.png";
import muscle from "../../assets/images/muscle.png";
import videomapping from "../../assets/images/videomapping.jpg";

import "./Projects.css";

interface Project {
  title: string;
  imageUrl: string;
  link?: string;
}

const projectList: Project[] = [
  {
    title: "AI Apartment Genie 🏠🧞‍♂️",
    imageUrl: apartmentgenie,
    link: "https://apartment-text-generator-site.onrender.com/",
  },
  {
    title: "Focus Plugin 🎯",
    imageUrl: focusplugin,
    link: "https://github.com/Seakuh/focus-browser-plugin",
  },
  {
    title: "Flowmarkt (Private) 🛒",
    link: "https://nowkoelln.de/",
    imageUrl: flowmarked,
  },
  {
    title: "Video Mapping 📽️",
    imageUrl: videomapping,
    link: "https://midsommar-festival.de/",
  },
  {
    title: "Muscle Measrement 💪",
    imageUrl: muscle,
    link: "https://github.com/Seakuh/muscle_measurement_app/tree/main",
  },
  {
    title: "Avanti Kollektiv 🎧",
    imageUrl: avantiLogo,
    link: "https://soundcloud.com/avantilabelgroup",
  },
];

const handleCardClick = (link?: string) => {
  if (link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }
};

export const Projects: React.FC = () => {
  return (
    <div className="card-container">
      {projectList.map((project, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(project.link)}
        >
          <div className="card-image-container">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="card-image"
            />
            <div className="card-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

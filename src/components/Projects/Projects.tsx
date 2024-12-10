import adler from "../../assets/images/adler.webp";
import apartmentgenie from "../../assets/images/apartmentgenie.png";
import avantiLogo from "../../assets/images/avantiLogo.jpg";
import synthesizerAi from "../../assets/images/browser-synthesizer-ai.png";
import contentCreationGuru from "../../assets/images/contentgutulogo.png";
import flowmarked from "../../assets/images/flowmarked.png";
import focusplugin from "../../assets/images/focusplugin.png";
import guruHub from "../../assets/images/guruhubai.png";
import ledProgramming from "../../assets/images/ledprogramming.png";
import muscle from "../../assets/images/muscle.png";
import verbundenesZuhause from "../../assets/images/verbundenesZuhause.png";
import videomapping from "../../assets/images/videomapping.jpg";

import "./Projects.css";

interface Project {
  title: string;
  imageUrl: string;
  link?: string;
}

const projectList: Project[] = [
  {
    title: "AI Apartment Genie 🏠",
    imageUrl: apartmentgenie,
    link: "https://guruhub-ai.com/home-finder/",
  },
  {
    title: "Focus Plugin 🎯",
    imageUrl: focusplugin,
    link: "https://github.com/Seakuh/focus-browser-plugin",
  },
  {
    title: "GuruHub AI 🧞‍♂️",
    imageUrl: guruHub,
    link: "https://guruhub-ai.com/",
  },
  {
    title: "Content Creation Guru 💬",
    imageUrl: contentCreationGuru,
    link: "https://guruhub-ai.com/content-creation/",
  },
  {
    title: "Flowmarkt (Private) 🛒",
    link: "https://nowkoelln.de/",
    imageUrl: flowmarked,
  },
  {
    title: "Browser Synthesizer AI 🎼",
    link: "https://github.com/Seakuh/browser-synthesizer-ai",
    imageUrl: synthesizerAi,
  },
  {
    title: "Video Mapping 📽️",
    imageUrl: videomapping,
    link: "https://www.shadertoy.com/profile/?show=shaders",
  },
  {
    title: "LED Programming 🚨",
    imageUrl: ledProgramming,
    link: "https://github.com/Seakuh/LED_Project",
  },
  {
    title: "Muscle Measrement 💪",
    imageUrl: muscle,
    link: "https://github.com/Seakuh/muscle_measurement_app/tree/main",
  },
  {
    title: "Politiker*innen Quartett 🃏",
    imageUrl: adler,
    link: "https://politiker-quartett.netlify.app/",
  },
  {
    title: "Avanti Kollektiv 🎧",
    imageUrl: avantiLogo,
    link: "https://avanti-kollektiv.de/",
  },
  {
    title: "Connected Home 🏡",
    imageUrl: verbundenesZuhause,
    link: "http://mein-verbundenes-zuhause.de/",
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

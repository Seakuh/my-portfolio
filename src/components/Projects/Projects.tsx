import adler from "../../assets/images/adler.webp";
import antragmanager from "../../assets/images/antragmanager.png";
import apartmentgenie from "../../assets/images/apartmentgenie.png";
import avantiLogo from "../../assets/images/avantiLogo.jpg";
import synthesizerAi from "../../assets/images/browser-synthesizer-ai.png";
import chefbot from "../../assets/images/chefbot.png";
import contentCreationGuru from "../../assets/images/contentgutulogo.png";
import eventscanner from "../../assets/images/eventscanner.png";
import flowmarked from "../../assets/images/flowmarked.png";
import focusplugin from "../../assets/images/focusplugin.png";
import garzelle from "../../assets/images/garzelle.jpeg";
import guruHub from "../../assets/images/guruhubai.png";
import immofy from "../../assets/images/immofy.jpeg";
import ledProgramming from "../../assets/images/ledprogramming.png";
import muscle from "../../assets/images/muscle.png";
import pdfeditor from "../../assets/images/pdfeditor.png";
import retromountain from "../../assets/images/retromountainlogo.png";
import timeTracker from "../../assets/images/timeTracker.png";
import vartakt from "../../assets/images/vartakt.png";
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
    title: "Event Scanner 📅",
    imageUrl: eventscanner,
    link: "https://event-scanner.com/",
  },
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
    title: "Immofy 🏠",
    imageUrl: immofy,
    link: "https://immofy.org/",
  },
  {
    title: "Garzellen Marked (WIP) 🛒",
    imageUrl: garzelle,
    link: "https://opensea.io/",
  },
  {
    title: "PDF File Editor 📄",
    imageUrl: pdfeditor,
    link: "https://pdf-form-editor-y6inb.kinsta.page/",
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
    title: "Vartakt 🌈",
    link: "https://vartakt.com/",
    imageUrl: vartakt,
  },

  {
    title: "ChefBot 🏡",
    imageUrl: chefbot,
    link: "https://dashboard.ionicframework.com/app/03712aee/preview/10282531",
  },
  {
    title: "Video Mapping 📽️",
    imageUrl: videomapping,
    link: "https://www.shadertoy.com/profile/?show=shaders",
  },
  {
    title: "Antragmanager 📝",
    imageUrl: antragmanager,
    link: "https://antragmanager.de/",
  },
  {
    title: "Time Tracker Pro",
    imageUrl: timeTracker,
    link: "https://chromewebstore.google.com/detail/time-tracker-pro/acckphgedbjghgcnlfklgcolmkajjjjk",
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
    title: "Retro Mountain 🏔️",
    imageUrl: retromountain,
    link: "https://www.retromountainphangan.com/",
  },
  {
    title: "Connected Home 🏡",
    imageUrl: verbundenesZuhause,
    link: "http://mein-verbundenes-zuhause.de/",
  },

  // {
  //   title: "Creative 🏡",
  //   imageUrl: creative,
  //   link: "https://www.shadertoy.com/profile/?show=shaders",
  // },
];

// const handleCardClick = (link?: string) => {
//   if (link) {
//     window.open(link, "_blank", "noopener,noreferrer");
//   }
// };

export const Projects: React.FC = () => {
  return (
    <div className="card-container">
      {projectList.map((project, index) => (
        <a
          href={project.link}
          className="card"
          key={index}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      ))}
    </div>
  );
};

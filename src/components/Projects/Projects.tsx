import "./Projects.css";

interface Project {
  title: string;
  imageUrl: string;
  link?: string;
}

const projectList: Project[] = [
  {
    title: "Apartment Genie 🏠🧞‍♂️",
    imageUrl:
      "https://raw.githubusercontent.com/Seakuh/apartment-text-generator/refs/heads/main/apartment-text-generator/public/home_ginue_logo.png",
    link: "https://apartment-text-generator-site.onrender.com/",
  },
  {
    title: "Focus Plugin 🎯",
    imageUrl:
      "https://github.com/Seakuh/focus-browser-plugin/blob/main/icons/zen.png?raw=true",
    link: "https://github.com/Seakuh/focus-browser-plugin",
  },
  {
    title: "Flowmarkt (Private) 🛒",
    link: "https://www.instagram.com/avantikollektiv/",
    imageUrl:
      "https://private-user-images.githubusercontent.com/53711153/371127388-9765b211-cfa3-4119-b398-fa2782729d24.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA5Nzg1MDgsIm5iZiI6MTczMDk3ODIwOCwicGF0aCI6Ii81MzcxMTE1My8zNzExMjczODgtOTc2NWIyMTEtY2ZhMy00MTE5LWIzOTgtZmEyNzgyNzI5ZDI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTA3VDExMTY0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjZTliNDY0ODVlOWZjN2JhYjYwMjUwMzRhNTFkZTdjZmZhNWYyYTg3MGI1MWMxMWZmNjIwOGFjOTMyNzg3OTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.eEIXPhWEh9j8C6ZD3uzhNtPB2wFEjWddDnFP7RXgPC0",
  },
  {
    title: "Muscle Measrement 💪",
    link: "https://github.com/Seakuh/muscle_measurement_app",
    imageUrl:
      "https://raw.githubusercontent.com/Seakuh/muscle_measurement_app/refs/heads/main/assets/images/appIcon.png?token=GHSAT0AAAAAACX6RKNJIPQDMOTUXWOWQ5QMZZMUL6A",
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

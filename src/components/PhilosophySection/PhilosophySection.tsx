import React from "react";
import "./PhilosophySection.css";

export const PhilosophySection: React.FC = () => {
  return (
    <div className="image-text-container">
      <div className="text-content">
        <p>
          "I am an inventor, destined to shape the world and leave a lasting
          mark on its future." Daniel G.
        </p>
      </div>
      {/* <div
        className="circle-image"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/daniel-grimm-55354a176/",
            "_blank"
          )
        }
        style={{ cursor: "pointer" }}
      >
        <img src={me} alt="imageofme" />
      </div> */}
    </div>
  );
};

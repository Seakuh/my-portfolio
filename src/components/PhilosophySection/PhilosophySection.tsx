import React from "react";
import me from "../../assets/images/me.jpeg";
import "./PhilosophySection.css";

export const PhilosophySection: React.FC = () => {
  return (
    <div className="image-text-container">
      <div className="text-content">
        <p>"I am an inventor, destined to shape</p>
        <p>the world and leave a lasting mark on its future." Daniel G.</p>
      </div>
      <div className="circle-image">
        <img src={me} alt="imageofme" />
      </div>
    </div>
  );
};

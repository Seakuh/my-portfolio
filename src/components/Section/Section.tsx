import React from "react";
import "./Section.css";

interface SectionProps {
  title?: string;
  content: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  return (
    <div id={id} className="section">
      {title === undefined ? null : <h1 className="section-title">{title}</h1>}
      <div className="section-content">{content}</div>
    </div>
  );
};

export default Section;

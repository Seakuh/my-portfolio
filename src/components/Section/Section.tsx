import React from 'react';
import './Section.css';

interface SectionProps {
  title?: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{content}</div>
    </div>
  );
};

export default Section;

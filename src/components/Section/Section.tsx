import React from 'react';
import './Section.css';

interface SectionProps {
  readonly title?: string;
  readonly style?: React.CSSProperties;
  readonly children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, style, children }) => {
  return (
    <div className="section" style={style}>
      { title && <h1 className="section-title">{title}</h1> }
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Section;

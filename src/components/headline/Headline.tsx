import React from 'react';
import './Headline.css';

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Headline: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="content">
      <h2>{title}</h2>
    </div>
  );
};

export default Headline;

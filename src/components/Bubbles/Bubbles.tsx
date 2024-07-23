import React, { useState, useEffect } from 'react';
import './Bubbles.css';

const labels = [
  { name: 'Node.JS', color: 'green' },
  { name: 'Architecture', color: 'green' },
  { name: 'Full Stack', color: 'green' },
  { name: 'Spring Boot', color: 'green' },
  { name: 'Express.JS', color: 'green' },
  { name: 'LLM', color: 'purple' },
  { name: 'Open AI', color: 'purple' },
  { name: 'Generative AI', color: 'purple' },
  { name: 'NestJS', color: 'red' },
  { name: 'english-speaking', color: 'red' },
  { name: 'german-speaking', color: 'red' },
  { name: 'TypeScript', color: 'red' },
  { name: 'PostgreSQL', color: 'purple' },
  { name: 'Java / Kotlin / JVM', color: 'yellow' },
  { name: 'JavaScript', color: 'red' },
  { name: 'Java', color: 'blue' },
  { name: 'UX', color: 'red' },
  { name: 'Linux', color: 'orange' },
  { name: 'Frontend', color: 'yellow' },
  { name: 'remote-friendly', color: 'yellow' },
  { name: 'Junior friendly', color: 'lime' },
  { name: 'Microfrontends', color: 'red' },
  { name: 'Docker', color: 'orange' },
  { name: 'websockets', color: 'red' },
];

interface BubbleProps {
  label: { name: string; color: string };
  onClick: () => void;
}

const Bubble: React.FC<BubbleProps> = ({ label, onClick }) => {
  const size = Math.random() * 100 + 50;
  const left = Math.random() * 100;
  const duration = Math.random() * 5 + 4;

  const bubbleStyle = {
    backgroundColor: label.color,
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}vw`,
    animationDuration: `${duration}s`,
  };

  return (
    <div className="bubble" style={bubbleStyle} onClick={onClick}>
      <span>{label.name}</span>
    </div>
  );
};

const Bubbles: React.FC = () => {
  const [bubbles, setBubbles] =
    useState<{ name: string; color: string }[]>(labels);

  const handleBubbleClick = (index: number) => {};

  return (
    <div className="bubble-container">
      {bubbles.map((label, index) => (
        <Bubble
          key={index + label.name}
          label={label}
          onClick={() => handleBubbleClick(index)}
        />
      ))}
    </div>
  );
};

export default Bubbles;

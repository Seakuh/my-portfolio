import React, { useState } from 'react';
import './Bubbles.css';
import { labels } from './data';

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

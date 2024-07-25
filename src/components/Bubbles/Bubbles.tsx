import React, { CSSProperties } from 'react';
import './Bubbles.css';
import { bubbleData } from './bubble-data';

interface BubbleProps {
  readonly name: string;
  readonly color: string;
  readonly size: number;
}

const Bubble: React.FC<BubbleProps> = ({ name, color, size }) => {
  const left = Math.random() * 100;
  const duration = Math.random() * 5 + 4;
  const delay = Math.random() * 2;

  const bubbleStyle: CSSProperties = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}vw`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };

  return (
    <div className="bubble" style={bubbleStyle}>
      <span>{name}</span>
    </div>
  );
};

const Bubbles: React.FC = () => {
  return (
    <div className="bubble-container">
      {bubbleData.map((label, index) => (
        <Bubble
          key={index + label.name}
          name={label.name}
          color={label.color}
          size={label.size}
        />
      ))}
    </div>
  );
};

export default Bubbles;

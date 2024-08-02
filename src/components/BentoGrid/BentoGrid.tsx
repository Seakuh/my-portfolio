import React from 'react';
import './BentoGrid.css';
import { items } from './data';

const BentoGrid: React.FC = () => {
  return (
    <div className="flex-container">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-item"
        >
          <div className="flex-text">{item.text}</div>
          <img src={item.imageSrc} alt={item.altText} className="flex-image" />
        </a>
      ))}
    </div>
  );
};

export default BentoGrid;

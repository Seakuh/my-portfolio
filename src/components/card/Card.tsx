import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
  buttonText,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          {buttonText ?? 'Learn More'}
        </a>
      </div>
    </div>
  );
};

export default Card;

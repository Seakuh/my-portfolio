import React, { useState } from "react";
import "./PersonalGoals.css";
import { smartGoals } from "./data";

const PersonalGoals: React.FC = () => {
  return (
    <div className="goals-container">
      <div className="grid">
        {smartGoals.map((goal, index) => (
          <GoalCard key={index} goal={goal} />
        ))}
      </div>
    </div>
  );
};

interface GoalCardProps {
  goal: {
    title: string;
    description: string;
    specific: string;
    measurable: string;
    achievable: string;
    relevant: string;
    timeBound: string;
    emoji: string;
  };
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const smartAttributes = [
    { label: "Specific", value: goal.specific },
    { label: "Measurable", value: goal.measurable },
    { label: "Achievable", value: goal.achievable },
    { label: "Relevant", value: goal.relevant },
    { label: "Time-bound", value: goal.timeBound },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? smartAttributes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === smartAttributes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="goal-card">
      <div className="image-placeholder">{goal.emoji}</div>
      <h2 className="goal-title">{goal.title}</h2>
      <p className="goal-description">{goal.description}</p>
      <div className="carousel">
        <div className="button-container">
          <button className="carousel-button" onClick={handlePrevious}>
            &lt;
          </button>
          <button className="carousel-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="carousel-content">
          <h3>{smartAttributes[currentIndex].label}</h3>
          <p>{smartAttributes[currentIndex].value}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalGoals;

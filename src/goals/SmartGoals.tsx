import React from "react";
import "./SmartGoals.css";
import { smartGoals } from "./data";

const SmartGoals: React.FC = () => {
  return (
    <div className="smart-goals-container">
      <h1 className="title">My SMART Goals for 2024 🎯</h1>
      <div className="scroll-wrapper">
        {smartGoals.map((goal, index) => (
          <div key={index} className="smart-goal-card">
            <span className="emoji">{goal.emoji}</span>
            <h2>{goal.title}</h2>
            <p>{goal.description}</p>
            <ul>
              <li>
                <strong>Specific:</strong> {goal.specific}
              </li>
              <li>
                <strong>Measurable:</strong> {goal.measurable}
              </li>
              <li>
                <strong>Achievable:</strong> {goal.achievable}
              </li>
              <li>
                <strong>Relevant:</strong> {goal.relevant}
              </li>
              <li>
                <strong>Time-bound:</strong> {goal.timeBound}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartGoals;

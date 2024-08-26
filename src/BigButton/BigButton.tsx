// BigButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BigButton.css";

const BigButton: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleClick = () => {
    navigate("/timeline"); // Navigates to the Timeline section
  };

  return (
    <button className="big-button" onClick={handleClick}>
      T {/* Letter logo, e.g., "T" for Timeline */}
    </button>
  );
};

export default BigButton;

import React from "react";
import { frequencyData } from "../data"; // Importiere die Frequenzdaten
import "./FrequencyOverview.css";
import FrequencyCard from "./FreqzencyCard/FrequencyCard";

const FrequencyOverview: React.FC = () => {
  return (
    <div className="frequency-overview">
      <p>Desciption below</p>
      {frequencyData.map((freq, index) => (
        <FrequencyCard frequency={freq.hz} />
      ))}
    </div>
  );
};

export default FrequencyOverview;

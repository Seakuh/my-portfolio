import React from "react";
import { frequencyData } from "../data"; // Importiere die Frequenzdaten
import "./FrequencyOverview.css";
import FrequencyCard from "./FreqzencyCard/FrequencyCard";

const FrequencyOverview: React.FC = () => {
  return (
    <div className="frequency-overview">
      <p>
        Binaural frequencies are used for various purposes such as meditation,
        relaxation, and mental healing. These frequencies are believed to have
        specific effects on the mind and body based on research into sound
        therapy and brainwave entrainment. Although scientific evidence varies,
        some studies suggest that listening to binaural beats may influence
        brainwave activity, potentially affecting mental states, emotional
        well-being, and cognitive performance.
      </p>
      {frequencyData.map((freq, index) => (
        <FrequencyCard frequency={freq.hz} />
      ))}
    </div>
  );
};

export default FrequencyOverview;

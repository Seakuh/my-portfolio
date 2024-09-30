import React, { useEffect, useRef } from "react";
import { useFrequencyPlayer } from "../../utils";
import "./FrequencyCard.css";

interface FrequencyCardProps {
  frequency: number;
}

const FrequencyCard: React.FC<FrequencyCardProps> = ({ frequency }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { playFrequency, pauseFrequency } = useFrequencyPlayer(); // Verwende den benutzerdefinierten Hook

  // Zeichne die Welle direkt nach dem Rendern
  useEffect(() => {
    drawWave();
  }, []);

  const drawWave = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const width = canvas.width;
    const height = canvas.height;
    const amplitude = height / 4; // Amplitude der Welle
    const wavelength = width / frequency; // Wellenlänge basierend auf der Frequenz
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "#3b82f6"; // Blaue Farbe
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let x = 0; x < width; x++) {
      const y =
        height / 2 + amplitude * Math.sin((2 * Math.PI * x) / wavelength);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  };

  return (
    <div
      className="frequency-card"
      onMouseEnter={() => playFrequency(frequency)} // Frequenz beim Hover abspielen
      onMouseLeave={pauseFrequency} // Frequenz stoppen beim Verlassen des Hover-Zustands
    >
      <h2 className="frequency-title">{frequency} Hz</h2>
      <div className="card-content">
        <canvas ref={canvasRef} className="wave-canvas"></canvas>
      </div>
    </div>
  );
};

export default FrequencyCard;

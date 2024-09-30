import { useEffect, useRef } from 'react';

const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Wave parameters
    const amplitude = 50; // Wave amplitude in pixels
    const frequency = 100; // Frequency in Hz
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const sampleRate = 44100; // Standard audio sample rate in Hz
    const timePeriod = 1 / frequency; // Time period of one cycle
    const wavelength = sampleRate / frequency; // Number of samples per cycle
    const xScale = canvasWidth / wavelength; // Scale x-axis to fit the wavelength
    const yCenter = canvasHeight / 2; // Center y-axis

    // Draw the sine wave
    context.beginPath();
    for (let x = 0; x < canvasWidth; x++) {
      const t = (x / xScale) * (1 / sampleRate); // Time in seconds
      const y = amplitude * Math.sin(2 * Math.PI * frequency * t);
      context.lineTo(x, yCenter - y);
    }
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    context.stroke();
  }, []);

  return <canvas ref={canvasRef} width={800} height={200} />;
};

export default WaveCanvas;

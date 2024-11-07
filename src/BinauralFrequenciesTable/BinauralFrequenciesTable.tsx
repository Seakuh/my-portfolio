import React, { useRef } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import "./BinauralFrequenciesTable.css";
import { frequencyData } from "./data";

export const BinauralFrequenciesTable: React.FC = () => {
  const { pause } = useGlobalAudioPlayer();

  // Create refs for AudioContext and OscillatorNode
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  // Initialize the AudioContext
  // Initialize the AudioContext
  if (!audioContextRef.current) {
    audioContextRef.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }

  // Function to pause audio and stop oscillator
  const pauseSound = () => {
    console.log("PAUSE");
    pause(); // Pause the MP3 playback
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
  };

  // Function to play a frequency
  const playFrequency = (freq: number) => {
    // Stop the current oscillator if it exists
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }

    // Create a new oscillator
    if (audioContextRef.current) {
      oscillatorRef.current = audioContextRef.current.createOscillator();
      oscillatorRef.current.type = "sine"; // Sine wave
      oscillatorRef.current.frequency.value = freq; // Set the frequency

      // Connect the oscillator to the AudioContext output
      oscillatorRef.current.connect(audioContextRef.current.destination);

      // Start the oscillator
      oscillatorRef.current.start();

      console.log(`Playing frequency: ${freq} Hz`);
    }

    // Stop the oscillator after 5 seconds
    setTimeout(() => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
    }, 5000);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Hz</th>
            <th>Tuning</th>
            <th>Effect</th>
            <th>Best Time to Listen</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {frequencyData.map((freq, index) => (
            <tr key={index}>
              <td>{freq.hz}</td>
              <td>{freq.tuning}</td>
              <td>{freq.effect}</td>
              <td>{freq.bestTime}</td>
              <td>
                <button onClick={() => playFrequency(freq.hz)}>Play</button>
                <button onClick={pauseSound}>Pause</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BinauralFrequenciesTable;

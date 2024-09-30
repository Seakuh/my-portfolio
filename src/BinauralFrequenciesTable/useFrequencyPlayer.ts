import { useRef } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export const useFrequencyPlayer = () => {
  // Create refs for AudioContext and OscillatorNode
  const audioContextRef = useRef<AudioContext | null>(
    new (window.AudioContext || (window as any).webkitAudioContext)()
  );
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const { load, play, pause } = useGlobalAudioPlayer();

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
  };

  // Function to pause audio and stop oscillator
  const pauseFrequency = () => {
    console.log("PAUSE");
    pause(); // Pause the MP3 playback
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
  };

  return {
    playFrequency,
    pauseFrequency,
    load,
    play,
  };
};

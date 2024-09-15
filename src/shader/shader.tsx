import { useEffect, useRef } from "react";
import LandingText from "../LandingText/LandingText";
import "./shader.css";

export const Shader = () => {
  // Correctly type the ref as an HTMLIFrameElement
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Start the iframe video on load
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const playVideo = () => {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"play","args":""}',
          "*"
        );
      };
      playVideo();
    }
  }, []);

  // Pause and play the iframe on hover
  const handleMouseEnter = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pause","args":""}',
        "*"
      );
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"play","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="shader-container">
      <div className="text-container">
        <LandingText />
      </div>
      <iframe
        ref={iframeRef}
        width="1200"
        height="500"
        src="https://www.shadertoy.com/embed/lcBfRD?gui=false&paused=false&muted=false"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></iframe>
    </div>
  );
};

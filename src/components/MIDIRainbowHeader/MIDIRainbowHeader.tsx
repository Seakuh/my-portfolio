import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import "./MIDIRainbowHeader.css";

export const MIDIRainbowHeader: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  const [midiEnabled, setMidiEnabled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(0.01);
  const [hueOffset, setHueOffset] = useState(230);
  const [saturation, setSaturation] = useState(80);
  const [brightness, setBrightness] = useState(100);
  const [ambientR, setAmbientR] = useState(70);
  const [ambientG, setAmbientG] = useState(70);
  const [ambientB, setAmbientB] = useState(70);

  useEffect(() => {
    if (!sketchRef.current) return;
    console.log("Sketch created");
    // Create p5 sketch
    const sketch = (p: p5) => {
      // ==== Terrain / Berg ====
      let cols: number, rows: number;
      let scl = 20;
      let w = 1600;
      let h = 1200;

      let flying = 0;
      let terrain: number[][] = [];

      p.setup = () => {
        const container = sketchRef.current;
        if (!container) return;

        p.createCanvas(container.offsetWidth, container.offsetHeight, p.WEBGL);

        cols = w / scl;
        rows = h / scl;

        terrain = new Array(cols);
        for (let x = 0; x < cols; x++) {
          terrain[x] = new Array(rows);
        }

        p.noStroke();
        p.colorMode(p.HSB, 360, 100, 100, 255);
      };

      p.draw = () => {
        p.background(255); // White background

        // Fixed camera position (no mouse control)
        p.camera(
          0,
          -600,
          800, // Closer zoom
          0,
          0,
          0,
          0,
          1,
          0
        );

        // Licht mit RGB
        p.directionalLight(255, 255, 255, 0.5, 1, -0.5);
        p.ambientLight(ambientR, ambientG, ambientB);

        // Animation
        flying -= animationSpeed;

        let yoff = flying;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let n = p.noise(xoff, yoff);
            let height = p.map(n, 0, 1, -120, 220);
            terrain[x][y] = height;
            xoff += 0.15;
          }
          yoff += 0.15;
        }

        // Szene
        p.rotateX(p.PI / 3);
        p.translate(-w / 2, -h / 2);

        // Regenbogen-Berg
        for (let y = 0; y < rows - 1; y++) {
          p.beginShape(p.TRIANGLE_STRIP);
          for (let x = 0; x < cols; x++) {
            let h1 = terrain[x][y];
            let h2 = terrain[x][y + 1];

            // Hue abhängig von Position + Offset (Regenbogen)
            let baseHue1 =
              (hueOffset +
                (x / cols) * 180 +
                (y / rows) * 180 +
                p.map(h1, -120, 220, -40, 40)) %
              360;
            let baseHue2 =
              (hueOffset +
                (x / cols) * 180 +
                ((y + 1) / rows) * 180 +
                p.map(h2, -120, 220, -40, 40)) %
              360;

            // Vertex 1
            p.fill(baseHue1, saturation, brightness);
            p.vertex(x * scl, y * scl, h1);

            // Vertex 2
            p.fill(baseHue2, saturation, brightness);
            p.vertex(x * scl, (y + 1) * scl, h2);
          }
          p.endShape();
        }
      };

      p.windowResized = () => {
        const container = sketchRef.current;
        if (container) {
          p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        }
      };

      // ==== MIDI-Teil ====
      const initMIDI = () => {
        if (!navigator.requestMIDIAccess) {
          console.warn("WebMIDI wird von diesem Browser nicht unterstützt.");
          return;
        }

        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
      };

      const onMIDISuccess = (midiAccess: MIDIAccess) => {
        console.log("MIDI ready");
        setMidiEnabled(true);

        midiAccess.inputs.forEach((input) => {
          console.log("Input:", input.name);
          input.onmidimessage = getMIDIMessage;
        });

        // Falls später neue Devices dazukommen
        midiAccess.onstatechange = (e: any) => {
          console.log("MIDI state change", e.port.name, e.port.state);
        };
      };

      const onMIDIFailure = () => {
        console.warn("Konnte keinen Zugriff auf MIDI bekommen.");
        setMidiEnabled(false);
      };

      const getMIDIMessage = (message: MIDIMessageEvent) => {
        if (!message.data) return;
        const status = message.data[0];
        const data1 = message.data[1];
        const data2 = message.data[2];
        const type = status & 0xf0;

        // Nur Control Change (0xB0)
        if (type === 0xb0) {
      
          const cc = data1;
          const value = data2;
          console.log("CC", cc, "Value", value);

          // CC-Mapping:
          if (cc === 1) {
            console.log("Speed", value);
            setAnimationSpeed(midiMap(value, 0, 127, 0.0, 0.08));
          } else if (cc === 2) {
            console.log("Hue", value);
            setHueOffset(midiMap(value, 0, 127, 0, 360));
          } else if (cc === 3) {
            console.log("Saturation", value);
            setSaturation(midiMap(value, 0, 127, 20, 100));
          } else if (cc === 4) {
            console.log("Brightness", value);
            setBrightness(midiMap(value, 0, 127, 20, 100));
          } else if (cc === 5) {
            console.log("Ambient R", value);
            setAmbientR(midiMap(value, 0, 127, 0, 255));
          } else if (cc === 6) {
            console.log("Ambient G", value);
            setAmbientG(midiMap(value, 0, 127, 0, 255));
          } else if (cc === 7) {
            console.log("Ambient B", value);
            setAmbientB(midiMap(value, 0, 127, 0, 255));
          }
        }
      };

      const toggleMIDI = async () => {
        if (!midiEnabled) {
          try {
            const access = await navigator.requestMIDIAccess();
            console.log("MIDI ready");
            access.inputs.forEach((input) => {
              console.log("Input:", input.name);
              input.onmidimessage = getMIDIMessage;
            });
            setMidiEnabled(true);
          } catch (e) {
            console.warn("Could not access MIDI:", e);
            setMidiEnabled(false);
          }
        } else {
          setMidiEnabled(false);
          // optional: inputs wieder abkoppeln
        }
      };

      toggleMIDI();

      const midiMap = (
        v: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number
      ) => {
        return outMin + ((v - inMin) * (outMax - outMin)) / (inMax - inMin);
      };

      // Initialize MIDI on mount
      if (midiEnabled) {
        initMIDI();
      }
    };

    // Create new p5 instance
    p5Instance.current = new p5(sketch, sketchRef.current);

    // Cleanup on unmount
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [midiEnabled, animationSpeed, hueOffset, saturation, brightness, ambientR, ambientG, ambientB]);

  const toggleMIDI = async () => {
    if (!midiEnabled) {
      try {
        const access = await navigator.requestMIDIAccess();
        console.log("MIDI enabled");
        setMidiEnabled(true);

        access.inputs.forEach((input) => {
          console.log("Input:", input.name);
        });
      } catch (e) {
        console.warn("Could not access MIDI:", e);
      }
    } else {
      setMidiEnabled(false);
    }
  };

  const getMIDIMessage = (message: MIDIMessageEvent) => {
    console.log("Raw MIDI", message.data);
  
    if (!message.data) return;
    const status = message.data[0];
    const data1 = message.data[1];
    const data2 = message.data[2];
    const type = status & 0xf0;
  
    console.log("Status:", status.toString(16), "Type:", type.toString(16), "d1:", data1, "d2:", data2);
  };
  

  return (
    <>
      <div className="midi-rainbow-header">
        <div className="header-content">
          <h1 className="header-title">Creating tools for a future beyond.</h1>
          <p className="header-subtitle">
          Daniel G.
          </p>
        </div>
        <div ref={sketchRef} className="canvas-container"></div>

        {/* Floating Palette Button */}
        <button
          className="palette-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle Adjustments"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </button>
      </div>

      {/* MIDI Controls below header */}
      <div className="midi-controls-wrapper">

        <div className={`midi-controls ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <button
            className={`midi-toggle-btn ${midiEnabled ? 'active' : ''}`}
            onClick={toggleMIDI}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            {midiEnabled ? 'MIDI ON' : 'MIDI OFF'}
          </button>

          <div className="controls-grid">
          <div className="control-group">
          <label className="control-label">Speed</label>
          <input
            type="range"
            className="control-slider"
            min="0"
            max="0.08"
            step="0.001"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
          />
          <span className="control-value">{animationSpeed.toFixed(3)}</span>
        </div>

        <div className="control-group">
          <label className="control-label">Hue</label>
          <input
            type="range"
            className="control-slider"
            min="0"
            max="360"
            step="1"
            value={hueOffset}
            onChange={(e) => setHueOffset(parseFloat(e.target.value))}
          />
          <span className="control-value">{Math.round(hueOffset)}°</span>
        </div>

        <div className="control-group">
          <label className="control-label">Saturation</label>
          <input
            type="range"
            className="control-slider"
            min="20"
            max="100"
            step="1"
            value={saturation}
            onChange={(e) => setSaturation(parseFloat(e.target.value))}
          />
          <span className="control-value">{Math.round(saturation)}%</span>
        </div>

        <div className="control-group">
          <label className="control-label">Brightness</label>
          <input
            type="range"
            className="control-slider"
            min="20"
            max="100"
            step="1"
            value={brightness}
            onChange={(e) => setBrightness(parseFloat(e.target.value))}
          />
          <span className="control-value">{Math.round(brightness)}%</span>
        </div>

        <div className="rgb-controls">
          <div className="control-group">
            <label className="control-label">R</label>
            <input
              type="range"
              className="control-slider"
              min="0"
              max="255"
              step="1"
              value={ambientR}
              onChange={(e) => setAmbientR(parseFloat(e.target.value))}
            />
            <span className="control-value">{Math.round(ambientR)}</span>
          </div>

          <div className="control-group">
            <label className="control-label">G</label>
            <input
              type="range"
              className="control-slider"
              min="0"
              max="255"
              step="1"
              value={ambientG}
              onChange={(e) => setAmbientG(parseFloat(e.target.value))}
            />
            <span className="control-value">{Math.round(ambientG)}</span>
          </div>

          <div className="control-group">
            <label className="control-label">B</label>
            <input
              type="range"
              className="control-slider"
              min="0"
              max="255"
              step="1"
              value={ambientB}
              onChange={(e) => setAmbientB(parseFloat(e.target.value))}
            />
            <span className="control-value">{Math.round(ambientB)}</span>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

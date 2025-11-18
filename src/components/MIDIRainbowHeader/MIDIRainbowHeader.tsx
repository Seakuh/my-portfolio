import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./MIDIRainbowHeader.css";

export const MIDIRainbowHeader: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!sketchRef.current) return;

    // Create p5 sketch
    const sketch = (p: p5) => {
      // ==== Terrain / Berg ====
      let cols: number, rows: number;
      let scl = 20;
      let w = 1600;
      let h = 1200;

      let flying = 0;
      let terrain: number[][] = [];

      // ==== Farb- und Animations-Parameter (MIDI-gesteuert) ====
      let animationSpeed = 0.01; // CC1
      let hueOffset = 0; // CC2
      let saturation = 80; // CC3 (0-100)
      let brightness = 80; // CC4 (0-100)

      // RGB-Ambient-Licht als "globaler Tint" (CC5–7)
      let ambientR = 70;
      let ambientG = 70;
      let ambientB = 70;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        cols = w / scl;
        rows = h / scl;

        terrain = new Array(cols);
        for (let x = 0; x < cols; x++) {
          terrain[x] = new Array(rows);
        }

        p.noStroke();
        p.colorMode(p.HSB, 360, 100, 100, 255);

        initMIDI();
      };

      p.draw = () => {
        p.background(255); // White background
        p.orbitControl();

        // Licht mit RGB aus MIDI
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
        p.resizeCanvas(p.windowWidth, p.windowHeight);
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

          // CC-Mapping:
          // CC 1 -> Geschwindigkeit
          if (cc === 1) {
            animationSpeed = midiMap(value, 0, 127, 0.0, 0.08);
          }
          // CC 2 -> Hue Offset (0..360)
          else if (cc === 2) {
            hueOffset = midiMap(value, 0, 127, 0, 360);
          }
          // CC 3 -> Saturation (20..100)
          else if (cc === 3) {
            saturation = midiMap(value, 0, 127, 20, 100);
          }
          // CC 4 -> Brightness (20..100)
          else if (cc === 4) {
            brightness = midiMap(value, 0, 127, 20, 100);
          }
          // CC 5–7 -> Ambient RGB (0..255)
          else if (cc === 5) {
            ambientR = midiMap(value, 0, 127, 0, 255);
          } else if (cc === 6) {
            ambientG = midiMap(value, 0, 127, 0, 255);
          } else if (cc === 7) {
            ambientB = midiMap(value, 0, 127, 0, 255);
          }
        }
      };

      const midiMap = (
        v: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number
      ) => {
        return outMin + ((v - inMin) * (outMax - outMin)) / (inMax - inMin);
      };
    };

    // Create new p5 instance
    p5Instance.current = new p5(sketch, sketchRef.current);

    // Cleanup on unmount
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <div className="midi-rainbow-header">
      <div className="header-content">
        <h1 className="header-title">Daniel Grimm</h1>
        <p className="header-subtitle">
          Creating tools for a future beyond systems of pressure. Trust.
          Freedom. Real connection.
        </p>
      </div>
      <div ref={sketchRef} className="canvas-container"></div>
    </div>
  );
};

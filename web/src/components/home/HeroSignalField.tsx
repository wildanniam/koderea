import type { CSSProperties } from "react";

type SignalStyle = CSSProperties & {
  "--signal-angle": string;
  "--signal-distance": string;
  "--signal-duration": string;
  "--signal-delay": string;
  "--signal-length": string;
  "--signal-opacity": number;
  "--signal-travel": string;
};

const SIGNALS = Array.from({ length: 34 }, (_, index) => ({
  angle: (index * 137.508 + 11) % 360,
  delay: -((index * 0.47) % 5.6),
  distance: 8 + ((index * 11) % 23),
  duration: 3.9 + ((index * 7) % 19) / 10,
  length: 14 + ((index * 17) % 34),
  opacity: 0.18 + ((index * 9) % 18) / 100,
  travel: 7 + ((index * 5) % 9),
}));

export function HeroSignalField() {
  return (
    <div
      aria-hidden="true"
      className="hero-signal-field pointer-events-none absolute inset-0 overflow-hidden"
    >
      {SIGNALS.map((signal, index) => {
        const style: SignalStyle = {
          "--signal-angle": `${signal.angle}deg`,
          "--signal-delay": `${signal.delay}s`,
          "--signal-distance": `${signal.distance}rem`,
          "--signal-duration": `${signal.duration}s`,
          "--signal-length": `${signal.length}px`,
          "--signal-opacity": signal.opacity,
          "--signal-travel": `${signal.travel}rem`,
        };

        return <span key={index} className="hero-signal" style={style} />;
      })}
    </div>
  );
}

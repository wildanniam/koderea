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

const SIGNALS = Array.from({ length: 88 }, (_, index) => ({
  angle: (index * 137.508 + 11) % 360,
  delay: -((index * 0.31) % 4.6),
  distance: 7 + ((index * 13) % 25),
  duration: 3.1 + ((index * 7) % 18) / 10,
  length: 7 + ((index * 11) % 19),
  opacity: 0.32 + ((index * 9) % 27) / 100,
  travel: 17 + ((index * 5) % 20),
}));

export function HeroSignalField() {
  return (
    <div
      aria-hidden="true"
      data-hero-signals
      className="hero-signal-field pointer-events-none absolute inset-0 z-[2] overflow-hidden"
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

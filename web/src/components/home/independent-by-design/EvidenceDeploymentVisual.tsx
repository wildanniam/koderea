"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { VisualFrame } from "./VisualFrame";

const STROKE = "rgba(255,255,255,0.14)";

const cards: { icon: ReactNode }[] = [
  { icon: <ShieldGlyph /> },
  { icon: <BarsGlyph /> },
  { icon: <FlaskGlyph /> },
];

const barHeights = [40, 62, 34, 78, 52, 92];

export function EvidenceDeploymentVisual() {
  const reduce = useReducedMotion();

  // Card right edge (~178) into report left (~322).
  const rowY = [78, 153, 228];
  const paths = rowY.map((y) => `M 178 ${y} C 250 ${y}, 250 153, 322 153`);

  return (
    <>
      <VisualFrame />

      {/* Connectors */}
      <svg
        viewBox="0 0 522 306"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={STROKE}
            strokeWidth={1}
            strokeDasharray="4 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>

      {/* Evidence cards */}
      <div className="absolute inset-y-0 left-[4%] flex w-[30%] flex-col justify-center gap-[4%]">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-[6%]"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.45, delay: i * 0.12 }}
          >
            <span className="flex h-[clamp(16px,4.4cqw,22px)] w-[clamp(16px,4.4cqw,22px)] shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[#9CA3AF]">
              <span className="h-[62%] w-[62%]">{c.icon}</span>
            </span>
            <span className="flex flex-1 flex-col gap-[5px]">
              <span className="h-[clamp(4px,1.2cqw,6px)] w-[80%] rounded-full bg-white/15" />
              <span className="h-[clamp(4px,1.2cqw,6px)] w-[55%] rounded-full bg-white/10" />
            </span>
          </motion.div>
        ))}
      </div>

      {/* Report card */}
      <div className="absolute right-[4%] top-1/2 flex w-[34%] -translate-y-1/2 flex-col gap-[8%] rounded-2xl border border-white/12 bg-white/[0.04] p-[7%] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between">
          <span className="flex flex-col gap-[6px]">
            <span className="h-[clamp(5px,1.4cqw,7px)] w-[64px] rounded-full bg-white/25" />
            <span className="h-[clamp(4px,1.2cqw,6px)] w-[44px] rounded-full bg-white/12" />
          </span>
          <motion.span
            className="flex h-[clamp(18px,5cqw,26px)] w-[clamp(18px,5cqw,26px)] items-center justify-center rounded-full bg-white/10 text-[#FDFDFD]"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.9 }}
          >
            <svg viewBox="0 0 16 16" className="h-[58%] w-[58%]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8.4l2.6 2.6L12 5" />
            </svg>
          </motion.span>
        </div>

        <span className="flex flex-col gap-[6px]">
          <span className="h-[clamp(4px,1.2cqw,6px)] w-full rounded-full bg-white/10" />
          <span className="h-[clamp(4px,1.2cqw,6px)] w-[86%] rounded-full bg-white/10" />
        </span>

        {/* Chart bars */}
        <div className="flex h-[clamp(34px,14cqw,70px)] items-end gap-[6%]">
          {barHeights.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                transformOrigin: "bottom",
                backgroundImage:
                  "linear-gradient(to top, rgba(59,130,246,0.75), rgba(147,197,253,0.9))",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- glyphs ---- */
function ShieldGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M8 1.5l5 2v4c0 3.2-2.1 5.5-5 6.5-2.9-1-5-3.3-5-6.5v-4z" />
      <path d="M5.8 8l1.6 1.6L10.4 6.5" strokeLinecap="round" />
    </svg>
  );
}
function BarsGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M3 13V9M6.5 13V5M10 13V7.5M13.5 13V3" />
    </svg>
  );
}
function FlaskGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M6.5 1.8v4L3.2 12a1.4 1.4 0 0 0 1.2 2.1h7.2A1.4 1.4 0 0 0 12.8 12L9.5 5.8v-4" />
      <path d="M5.5 1.8h5M5 9.5h6" strokeLinecap="round" />
    </svg>
  );
}

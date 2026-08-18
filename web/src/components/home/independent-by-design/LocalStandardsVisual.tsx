"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { VisualFrame, assetUrl } from "./VisualFrame";

const STROKE = "rgba(255,255,255,0.14)";

type Pill = { label: string; icon: ReactNode };

const leftPills: Pill[] = [
  { label: "Healthcare", icon: <AsteriskGlyph /> },
  { label: "Government", icon: <AssetGlyph src={assetUrl("mingcute-government-line.svg")} /> },
  { label: "Fintech", icon: <DollarGlyph /> },
  { label: "Institutional data", icon: <DatabaseGlyph /> },
];

const rightPills: Pill[] = [
  { label: "Standards", icon: <ShieldGlyph /> },
  { label: "Policies", icon: <DocGlyph /> },
  { label: "Risk frameworks", icon: <AssetGlyph src={assetUrl("reicon-danger.svg")} /> },
  { label: "Compliance", icon: <CheckGlyph /> },
];

// Row centers (of 330) for both card columns and connector endpoints.
const rowY = [66, 132, 198, 264];

export function LocalStandardsVisual() {
  const reduce = useReducedMotion();

  const leftPaths = rowY.map((y) => `M 171 ${y} C 205 ${y}, 205 165, 227 165`);
  const rightPaths = rowY.map((y) => `M 295 165 C 320 165, 330 ${y}, 351 ${y}`);

  return (
    <>
      <VisualFrame />

      {/* Connector layer */}
      <svg
        viewBox="0 0 522 330"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {leftPaths.map((d, i) => (
          <motion.path
            key={`l-${d}`}
            d={d}
            fill="none"
            stroke={STROKE}
            strokeWidth={1}
            strokeDasharray="4 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {rightPaths.map((d, i) => (
          <motion.path
            key={`r-${d}`}
            d={d}
            fill="none"
            stroke={STROKE}
            strokeWidth={1}
            strokeDasharray="4 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>

      {/* Left column cards */}
      <div className="absolute inset-y-0 left-[4%] flex w-[29%] flex-col justify-center gap-[2.4%]">
        {leftPills.map((p) => (
          <PillCard key={p.label} pill={p} />
        ))}
      </div>

      {/* Right column cards */}
      <div className="absolute inset-y-0 right-[4%] flex w-[29%] flex-col justify-center gap-[2.4%]">
        {rightPills.map((p) => (
          <PillCard key={p.label} pill={p} />
        ))}
      </div>

      {/* Central assurance node */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="flex h-[clamp(44px,13cqw,64px)] w-[clamp(44px,13cqw,64px)] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_28px_rgba(147,197,253,0.14)]">
          <Image
            src={assetUrl("icon-bare.svg")}
            alt=""
            width={28}
            height={32}
            className="h-[38%] w-auto"
          />
        </div>
        <span className="mt-2 max-w-[9ch] text-center text-[clamp(7px,2cqw,10px)] leading-tight text-[#ADADAD]">
          Assurance Evaluation Layer
        </span>
      </div>
    </>
  );
}

function PillCard({ pill }: { pill: Pill }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-[6%] py-[3.5%]">
      <span className="flex h-[clamp(12px,3.2cqw,16px)] w-[clamp(12px,3.2cqw,16px)] shrink-0 items-center justify-center text-[#9CA3AF]">
        {pill.icon}
      </span>
      <span className="truncate text-[clamp(8px,2.4cqw,12px)] leading-none text-[#D4D4D4]">
        {pill.label}
      </span>
    </div>
  );
}

/* ---- glyphs ---- */

function AssetGlyph({ src }: { src: string }) {
  return <Image src={src} alt="" width={16} height={16} className="h-full w-full opacity-80" />;
}

function AsteriskGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M8 2v12M2.7 4.7l10.6 6.6M13.3 4.7L2.7 11.3" />
    </svg>
  );
}
function DollarGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5v13M10.5 4.2A3 3 0 0 0 5.4 6.3c0 2.6 5.2 1.4 5.2 4a3 3 0 0 1-5.1 1.9" />
    </svg>
  );
}
function DatabaseGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3">
      <ellipse cx="8" cy="3.5" rx="5" ry="2" />
      <path d="M3 3.5v9c0 1.1 2.2 2 5 2s5-.9 5-2v-9M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" />
    </svg>
  );
}
function ShieldGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M8 1.5l5 2v4c0 3.2-2.1 5.5-5 6.5-2.9-1-5-3.3-5-6.5v-4z" />
      <path d="M5.8 8l1.6 1.6L10.4 6.5" strokeLinecap="round" />
    </svg>
  );
}
function DocGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M4 1.5h5l3 3v10H4z" />
      <path d="M9 1.5v3h3M6 8h4M6 11h4" strokeLinecap="round" />
    </svg>
  );
}
function CheckGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.2" />
      <path d="M5.4 8.2l1.8 1.8L11 6.2" />
    </svg>
  );
}

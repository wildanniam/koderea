"use client";

import { motion, useReducedMotion } from "motion/react";
import { VisualFrame } from "./VisualFrame";

const STROKE = "rgba(255,255,255,0.16)";
const FAINT = "rgba(255,255,255,0.08)";

const dots = [95, 153, 211];

// Connector control points from each source dot toward the assurance core.
const connectors = [
  "M 62 95 C 150 95, 180 150, 296 152",
  "M 62 153 L 296 153",
  "M 62 211 C 150 211, 180 156, 296 154",
];

/**
 * Visual 01 — Independent Assessment.
 * Source dots -> connectors draw toward center -> core glow -> check confirms.
 */
export function IndependentAssessmentVisual() {
  const reduce = useReducedMotion();
  const viewport = { once: true, amount: 0.4 } as const;

  return (
    <>
      <VisualFrame />
      <svg
        viewBox="0 0 522 306"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connectors */}
        {connectors.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={STROKE}
            strokeWidth={1}
            strokeDasharray="4 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={viewport}
            transition={reduce ? { duration: 0 } : { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Source dots */}
        {dots.map((cy, i) => (
          <g key={cy}>
            <motion.circle
              cx={50}
              cy={cy}
              r={11}
              fill="rgba(217,217,217,0.10)"
              stroke={FAINT}
              strokeWidth={1}
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={reduce ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }}
              style={{ transformOrigin: `${50}px ${cy}px` }}
            />
            <circle cx={50} cy={cy} r={3.4} fill="rgba(255,255,255,0.55)" />
          </g>
        ))}

        {/* Crosshair axes */}
        <line x1="252" y1="153" x2="408" y2="153" stroke={FAINT} strokeWidth={1} strokeDasharray="3 5" />
        <line x1="330" y1="80" x2="330" y2="226" stroke={FAINT} strokeWidth={1} strokeDasharray="3 5" />

        {/* Concentric dashed rings */}
        <circle cx="330" cy="153" r="70" fill="none" stroke={STROKE} strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="330" cy="153" r="48" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="3 6" />

        {/* Core glow */}
        <motion.circle
          cx="330"
          cy="153"
          r="30"
          fill="url(#coreGlow)"
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "330px 153px" }}
        />
        <circle cx="330" cy="153" r="6" fill="#BFDBFE" />

        {/* Check node */}
        <g>
          <circle cx="462" cy="153" r="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <motion.path
            d="M 450 153 l 8 8 l 16 -18"
            fill="none"
            stroke="#FDFDFD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={viewport}
            transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 1.05 }}
          />
        </g>

        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
}

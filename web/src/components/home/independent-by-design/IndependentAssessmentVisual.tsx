"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { VisualFrame, assetUrl } from "./VisualFrame";

const CANVAS_WIDTH = 522;
const CANVAS_HEIGHT = 306;

type AssetProps = {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
};

function Asset({ name, x, y, width, height, className = "" }: AssetProps) {
  return (
    <span
      className={`absolute ${className}`}
      style={{
        left: `${(x / CANVAS_WIDTH) * 100}%`,
        top: `${(y / CANVAS_HEIGHT) * 100}%`,
        width: `${(width / CANVAS_WIDTH) * 100}%`,
        height: `${(height / CANVAS_HEIGHT) * 100}%`,
      }}
    >
      <Image src={assetUrl(name)} alt="" fill sizes={`${Math.ceil(width)}px`} className="object-fill" />
    </span>
  );
}

/** Figma node 248:9205, rebuilt from the exported vector layers. */
export function IndependentAssessmentVisual() {
  const reduce = useReducedMotion();
  const transition = reduce ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <VisualFrame style={{ background: "radial-gradient(circle at 47% 50%, #1a1a1a 0%, #0d0d0d 50%, #070707 75%, #010101 100%)" }} />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={transition}
      >
        <Asset name="ellipse47043.png" x={153.854} y={61.364} width={183.273} height={183.273} className="opacity-60" />
        <Asset name="ellipse47042.png" x={176.764} y={84.273} width={137.455} height={137.455} className="opacity-75" />
        <Asset name="ellipse47041.png" x={199.673} y={107.182} width={91.636} height={91.636} className="opacity-90" />
        <Asset name="ellipse47044.svg" x={222.582} y={130.091} width={45.818} height={45.818} />

        <Asset name="vector1194233964.svg" x={245} y={43} width={0.981} height={220.981} />
        <span
          className="absolute bg-white/10"
          style={{
            left: `${(135 / CANVAS_WIDTH) * 100}%`,
            top: `${(152.75 / CANVAS_HEIGHT) * 100}%`,
            width: `${(220.981 / CANVAS_WIDTH) * 100}%`,
            height: "1px",
          }}
        />

        <div
          className="absolute inset-0"
        >
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full"
            viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
            fill="none"
            preserveAspectRatio="none"
          >
            {[
              "M53.1 79.7 158.4 125.5",
              "M56.6 153 125.3 153",
              "M52.5 222.3 160.2 179.9",
            ].map((path) => (
              <path
                key={path}
                d={path}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeDasharray="4.58 4.58"
              />
            ))}
          </svg>
        </div>

        {[61.364, 139.255, 213.709].map((y, index) => (
          <motion.div
            key={y}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.65 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={reduce ? { duration: 0 } : { duration: 0.35, delay: 0.1 + index * 0.1 }}
            style={{ transformOrigin: `${(41 / CANVAS_WIDTH) * 100}% ${(y + 11.45) / CANVAS_HEIGHT * 100}%` }}
          >
            <Asset name="ellipse47045.svg" x={index === 0 ? 30.145 : 29} y={y} width={22.909} height={22.909} />
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.82 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${(435.64 / CANVAS_WIDTH) * 100}% ${(153 / CANVAS_HEIGHT) * 100}%` }}
        >
          <Asset name="group.svg" x={387.909} y={105.273} width={95.455} height={95.455} />
          <Asset name="group1.svg" x={412.727} y={130.091} width={45.818} height={45.818} />
        </motion.div>
      </motion.div>
    </>
  );
}

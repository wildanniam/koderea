"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { VisualFrame, assetUrl } from "./VisualFrame";

const W = 522;
const H = 330;

type IconName =
  | "group2.svg"
  | "group3.svg"
  | "group4.svg"
  | "group5.svg"
  | "group6.svg"
  | "group7.svg"
  | "mingcute-government-line.svg"
  | "reicon-danger.svg";

const leftItems: { label: string; icon: IconName; top: number }[] = [
  { label: "Healthcare", icon: "group5.svg", top: 65 },
  { label: "Government", icon: "mingcute-government-line.svg", top: 118 },
  { label: "Fintech", icon: "group6.svg", top: 171 },
  { label: "Institutional data", icon: "group7.svg", top: 224 },
];

const rightItems: { label: string; icon: IconName; top: number; tall?: boolean }[] = [
  { label: "Standards", icon: "group2.svg", top: 65, tall: true },
  { label: "Policies", icon: "group3.svg", top: 125 },
  { label: "Risk frameworks", icon: "reicon-danger.svg", top: 178 },
  { label: "Compliance", icon: "group4.svg", top: 231 },
];

function PctAsset({ name, x, y, width, height, className = "" }: { name: string; x: number; y: number; width: number; height: number; className?: string }) {
  return (
    <span
      className={`absolute ${className}`}
      style={{ left: `${x / W * 100}%`, top: `${y / H * 100}%`, width: `${width / W * 100}%`, height: `${height / H * 100}%` }}
    >
      <Image src={assetUrl(name)} alt="" fill sizes={`${Math.ceil(width)}px`} className="object-fill" />
    </span>
  );
}

export function LocalStandardsVisual({ active = false }: { active?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <>
      <VisualFrame style={{ background: "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 50%, #070707 75%, #010101 100%)" }} />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={reduce ? { duration: 0 } : { duration: 0.45 }}
        animate={active && !reduce ? { filter: "brightness(1.22)", scale: 1.008 } : { filter: "brightness(1)", scale: 1 }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.15 }}
        >
          <PctAsset name="vector1194233969.svg" x={178} y={87} width={52.358} height={161} />
          <PctAsset name="vector1194233970.svg" x={178} y={139} width={50.615} height={55} />
          <PctAsset name="vector1194233971.svg" x={290.5} y={87} width={54.349} height={166} className="-scale-x-100" />
          <PctAsset name="vector1194233972.svg" x={290.5} y={145} width={52.346} height={55} className="-scale-x-100" />
        </motion.div>

        {leftItems.map((item, index) => (
          <DiagramPill
            key={item.label}
            side="left"
            {...item}
            delay={0.12 + index * 0.08}
            reduce={Boolean(reduce)}
          />
        ))}
        {rightItems.map((item, index) => (
          <DiagramPill
            key={item.label}
            side="right"
            {...item}
            delay={0.48 + index * 0.08}
            reduce={Boolean(reduce)}
          />
        ))}

        {[80.04, 133, 185.96, 238.93].map((top, index) => (
          <PctAsset key={`left-${top}`} name={index % 2 === 0 ? "ellipse47028.svg" : "ellipse47032.svg"} x={169.96} y={top} width={12} height={12} />
        ))}
        {[83, 140, 193, 246].map((top) => (
          <PctAsset key={`right-${top}`} name="ellipse47032.svg" x={344.5} y={top} width={12} height={12} />
        ))}

        <motion.div
          className="absolute"
          style={{ left: `${225 / W * 100}%`, top: `${129 / H * 100}%`, width: `${72 / W * 100}%`, aspectRatio: "1" }}
          initial={{ opacity: 0, scale: 0.72 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex size-full items-center rounded-full border border-[#D9D9D9]/40 bg-[#010101] p-[5.4%] shadow-[0_18px_16px_rgba(0,0,0,0.5)]"
            animate={active && !reduce ? { scale: [1, 1.075, 1], boxShadow: ["0 18px 16px rgba(0,0,0,.5)", "0 18px 30px rgba(115,221,242,.18)", "0 18px 16px rgba(0,0,0,.5)"] } : { scale: 1, boxShadow: "0 18px 16px rgba(0,0,0,.5)" }}
            transition={active && !reduce ? { duration: 1.7, repeat: Infinity, ease: "easeInOut" } : { duration: 0.35 }}
          >
            <div className="flex size-full items-center justify-center rounded-full border border-[#6E6E6E]/40 bg-gradient-to-b from-[#010101] from-20% to-[#6E6E6E] to-[210%]">
              <span className="relative h-[50%] w-[43%]">
                <Image src={assetUrl("icon-bare.svg")} alt="" fill sizes="28px" className="object-fill" />
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="absolute text-center text-[clamp(7px,2.3cqw,12px)] font-medium leading-[1.2] text-[#ADADAD]"
          style={{ left: `${232 / W * 100}%`, top: `${213 / H * 100}%`, width: `${58 / W * 100}%` }}
        >
          Assurance<br />Evaluation<br />Layer
        </div>
      </motion.div>
    </>
  );
}

function DiagramPill({ label, icon, top, side, tall, delay, reduce }: { label: string; icon: IconName; top: number; side: "left" | "right"; tall?: boolean; delay: number; reduce: boolean }) {
  const x = side === "left" ? 20 : 350;
  const width = side === "left" ? 156 : 152;
  const height = tall ? 48 : 41;
  const accent = side === "left" ? "#B9A9EF" : "#73DDF2";

  return (
    <motion.div
      className="absolute flex items-center gap-[5.13%] rounded-[12px] border bg-[#EEEEEE]/[0.05] px-[2.3%] backdrop-blur-[12px]"
      style={{ left: `${x / W * 100}%`, top: `${top / H * 100}%`, width: `${width / W * 100}%`, height: `${height / H * 100}%`, borderColor: accent }}
      initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={reduce ? { duration: 0 } : { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="relative size-[clamp(10px,3.1cqw,16px)] shrink-0">
        <Image src={assetUrl(icon)} alt="" fill sizes="16px" className="object-contain" />
      </span>
      <span className="whitespace-nowrap text-[clamp(8px,2.7cqw,14px)] font-medium leading-[1.2] text-[#515151]">{label}</span>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { VisualFrame, assetUrl } from "./VisualFrame";

const W = 522;
const H = 306;

type AssetProps = { name: string; x: number; y: number; width: number; height: number; className?: string };

function Asset({ name, x, y, width, height, className = "" }: AssetProps) {
  return (
    <span
      className={`absolute ${className}`}
      style={{ left: `${x / W * 100}%`, top: `${y / H * 100}%`, width: `${width / W * 100}%`, height: `${height / H * 100}%` }}
    >
      <Image src={assetUrl(name)} alt="" fill sizes={`${Math.ceil(width)}px`} className="object-fill" />
    </span>
  );
}

export function EvidenceDeploymentVisual({ active = false }: { active?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <>
      <VisualFrame style={{ background: "radial-gradient(circle at 50% 53%, #1a1a1a 0%, #0d0d0d 50%, #070707 75%, #010101 100%)" }} />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={reduce ? { duration: 0 } : { duration: 0.45 }}
      >
        <div
          className="absolute inset-0"
        >
          <Asset name="vector1194233960.svg" x={195} y={59} width={43.75} height={192.5} />
          <Asset name="vector1194233961.svg" x={198} y={147.5} width={132.75} height={11.046} />
          <motion.span
            aria-hidden="true"
            className="absolute size-[6px] rounded-full bg-[#73DDF2] shadow-[0_0_12px_3px_rgba(115,221,242,0.55)]"
            style={{ top: `${153 / H * 100}%` }}
            animate={active && !reduce ? { left: ["38%", "63%"], opacity: [0, 1, 1, 0] } : { left: "38%", opacity: 0 }}
            transition={active && !reduce ? { duration: 1.45, repeat: Infinity, ease: "easeInOut" } : { duration: 0.25 }}
          />
        </div>

        {[27, 111, 195].map((top, index) => (
          <EvidenceCard key={top} top={top} index={index} reduce={Boolean(reduce)} active={active} />
        ))}

        <motion.div
          className="absolute overflow-hidden rounded-[20px] border-[1.23px] border-white bg-[#EEEEEE]/[0.05] shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-[14px]"
          style={{ left: `${334 / W * 100}%`, top: `${38 / H * 100}%`, width: `${160 / W * 100}%`, height: `${240 / H * 100}%` }}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
          animate={{ boxShadow: active ? "0 20px 50px rgba(115,221,242,.14)" : "0 18px 40px rgba(0,0,0,.4)" }}
        >
          <span className="absolute left-1/2 top-[8.33%] h-[16.67%] w-[25%] -translate-x-1/2">
            <Image src={assetUrl("group8.svg")} alt="" fill sizes="40px" className="object-contain" />
          </span>

          <div className="absolute left-[10%] top-[32.08%] flex w-[80%] flex-col gap-2">
            <span className="h-3 w-full rounded-full bg-[#D9D9D9]/20" />
            <span className="h-3 w-[68.75%] rounded-full bg-[#D9D9D9]/20" />
            <span className="h-3 w-[40.625%] rounded-full bg-[#D9D9D9]/20" />
          </div>

          <motion.span
            className="absolute left-[10%] top-[62.5%] h-[28.75%] w-[80%] origin-bottom"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={reduce ? { duration: 0 } : { duration: 0.65, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute left-[23.05%] top-[-42.75%] h-[185.5%] w-[53.9%] -rotate-90">
              <Image src={assetUrl("frame2147239519.svg")} alt="" fill sizes="128px" className="object-fill" />
            </span>
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}

function EvidenceCard({ top, index, reduce, active }: { top: number; index: number; reduce: boolean; active: boolean }) {
  return (
    <motion.div
      className="absolute rounded-[12px] border-2 border-[#73DDF2] bg-[#EEEEEE]/[0.05] backdrop-blur-[12px]"
      style={{ left: `${28 / W * 100}%`, top: `${top / H * 100}%`, width: `${164 / W * 100}%`, height: `${72 / H * 100}%` }}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={reduce ? { duration: 0 } : { duration: 0.42, delay: 0.1 + index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      animate={{ borderColor: active ? "rgba(115,221,242,1)" : "rgba(115,221,242,.65)" }}
    >
      <span className="absolute left-[7.32%] top-1/2 size-[61.11%] max-h-11 max-w-11 -translate-y-1/2">
        {index === 0 ? (
          <Image src={assetUrl("icon-park-outline-check-one.svg")} alt="" fill sizes="44px" className="object-contain" />
        ) : (
          <>
            <Image src={assetUrl(index === 1 ? "group9.svg" : "group10.svg")} alt="" fill sizes="39px" className="object-contain" />
            <span className="absolute inset-[30%]">
              <Image src={assetUrl(index === 1 ? "vector1.svg" : "vector2.svg")} alt="" fill sizes="16px" className="object-contain" />
            </span>
          </>
        )}
      </span>
      <span className="absolute left-[39.02%] top-1/2 flex w-[51.22%] -translate-y-1/2 flex-col gap-2">
        <span className="h-2 w-full rounded-full bg-white/10" />
        <span className="h-2 w-[54.76%] rounded-full bg-white/10" />
      </span>
    </motion.div>
  );
}

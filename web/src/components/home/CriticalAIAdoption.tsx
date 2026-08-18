"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useRevealTimeline } from "./useRevealTimeline";

type Sector = {
  label: string;
  body: string;
  icon: string;
  width: number;
  height: number;
};

const sectors: Sector[] = [
  {
    label: "Healthcare",
    body: "Evaluate AI systems against local clinical context, performance, fairness, and safety requirements before deployment.",
    icon: "/home/critical-ai-adoption/healthcare-icon.svg",
    width: 51,
    height: 60,
  },
  {
    label: "Fintech",
    body: "Assess AI systems where reliability, fairness, risk, and compliance are critical to deployment decisions.",
    icon: "/home/critical-ai-adoption/fintech-icon.svg",
    width: 54,
    height: 58,
  },
  {
    label: "Government",
    body: "Support accountable AI adoption across public-sector systems through structured evaluation, governance, and evidence.",
    icon: "/home/critical-ai-adoption/government-icon.svg",
    width: 81,
    height: 59,
  },
];

export function CriticalAIAdoption() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useRevealTimeline(sectionRef, (section) => {
    const heading = section.querySelectorAll<HTMLElement>("[data-cai-head]");
    const items = section.querySelectorAll<HTMLElement>("[data-cai-item]");

    const tl = gsap.timeline();
    tl.fromTo(
      heading,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      },
    ).fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.25",
      );
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="critical-ai-heading"
      className="bg-[#010101] px-6 py-24 text-[#FDFDFD] md:px-8 md:py-32"
    >
      <div className="mx-auto flex max-w-[1145px] flex-col">
        <header className="mx-auto flex max-w-[720px] flex-col items-start text-left md:items-center md:text-center">
          <h2
            id="critical-ai-heading"
            data-cai-head
            className="text-[clamp(2.25rem,10vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[48px] md:leading-[1]"
          >
            Designed for Critical AI Adoption
          </h2>
          <p
            data-cai-head
            className="mt-6 max-w-[36ch] text-lg leading-[1.5] tracking-[-0.02em] text-[#E6E6E6] md:max-w-none md:text-[20px]"
          >
            Koderea applies independent AI assurance across regulated and
            high-stakes sectors, adapting evaluation to local data, domain risks,
            and institutional requirements
          </p>
        </header>

        <ul className="mt-16 flex list-none flex-col gap-12 md:mt-[100px] md:flex-row md:justify-between md:gap-8">
          {sectors.map((sector) => (
            <SectorItem
              key={sector.label}
              sector={sector}
              reduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectorItem({
  sector,
  reduceMotion,
}: {
  sector: Sector;
  reduceMotion: boolean;
}) {
  return (
    <li
      data-cai-item
      className="flex max-w-[36ch] flex-col md:max-w-[321px] md:flex-1"
    >
      <motion.div
        className="flex h-[60px] items-end"
        tabIndex={0}
        whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
        whileFocus={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left bottom", width: sector.width, outline: "none" }}
      >
        <Image
          src={sector.icon}
          alt=""
          aria-hidden="true"
          width={sector.width}
          height={sector.height}
          className="block select-none"
          draggable={false}
        />
      </motion.div>

      <h3 className="mt-10 text-[20px] font-medium uppercase leading-[1.3] tracking-[4px] text-[#FDFDFD]">
        {sector.label}
      </h3>
      <p className="mt-4 text-base leading-[1.5] text-[#ADADAD]">
        {sector.body}
      </p>
    </li>
  );
}

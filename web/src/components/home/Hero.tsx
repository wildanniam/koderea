"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { HeroSignalField } from "@/components/home/HeroSignalField";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh overflow-hidden bg-paper px-6 pb-24 pt-32 text-center md:px-10 md:pb-28 md:pt-36">
      <HeroSignalField />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(253,253,253,0.92)_0%,rgba(253,253,253,0.72)_21%,rgba(253,253,253,0.12)_44%,transparent_66%)]"
      />

      <Image
        src="/brand/hero-horizon.svg"
        alt=""
        width={1440}
        height={357}
        priority
        sizes="100vw"
        className="pointer-events-none absolute bottom-[-7rem] left-1/2 z-[1] h-auto w-[max(100%,58rem)] max-w-none -translate-x-1/2 select-none md:bottom-[-5rem]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[42rem] flex-col items-center self-center pb-24 md:pb-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          <h1 className="text-[clamp(3rem,5vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#1d1d1d]">
            <span className="block">AI Claims are Easy.</span>
            <span className="block">Evidence is Harder.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18, filter: "blur(7px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="mt-5 max-w-[33rem] text-base font-normal leading-[1.5] text-slate-700">
            Koderea turns AI claims into validated evidence through independent testing,
            local-context evaluation, and structured assurance.
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="brand-button mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium leading-[1.2] tracking-[-0.02em] text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
        >
          Start consultation
        </motion.a>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 md:bottom-9">
        <motion.a
          href="#company-intro"
          aria-label="See how Koderea works"
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 1.8, ease: "easeInOut", repeat: Infinity }
          }
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium leading-[1.2] tracking-[-0.02em] text-[#1d1d1d] transition-colors hover:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 md:text-base"
        >
          See how Koderea works
          <ArrowRightIcon
            aria-hidden="true"
            size={20}
            className={`rotate-90 ${shouldReduceMotion ? "pointer-events-none" : ""}`}
          />
        </motion.a>
      </div>
    </section>
  );
}

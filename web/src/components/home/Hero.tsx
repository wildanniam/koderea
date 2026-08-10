"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { MouseIcon } from "@/components/ui/mouse";
import { WavesBackground } from "./WavesBackground";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center md:px-12 lg:px-24 overflow-hidden">
      {/* Abstract Background Animation */}
      <WavesBackground />

      {/* Optional subtle gradient to fade out the top/bottom edges of the waves */}
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent via-background/20 to-background pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-foreground leading-[1.05] mb-8">
            Trust through assurance.<br />
            <span className="text-muted">Accelerate your AI.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted font-normal leading-relaxed mb-12">
            Koderea helps organizations adopt AI with evidence, clarity, and local context.
            We provide expert third-party validation, risk assessment, and compliance framework advisory for critical AI systems in Indonesia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#capabilities"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Explore our capabilities
          </a>
          <a
            href="#academy"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm px-8 text-sm font-medium text-foreground transition-colors hover:bg-black/5 hover:border-black/20"
          >
            View Academy
            <ArrowRightIcon aria-hidden="true" size={16} className="motion-reduce:pointer-events-none" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#company-intro"
        aria-label="Scroll to learn about Koderea"
        animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 1.8, ease: "easeInOut", repeat: Infinity }
        }
        className="absolute bottom-7 left-6 z-10 hidden rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:block md:left-12 lg:left-24"
      >
        <MouseIcon
          aria-hidden="true"
          size={42}
          className={shouldReduceMotion ? "pointer-events-none" : undefined}
        />
      </motion.a>
    </section>
  );
}

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import LightRays from "@/components/LightRays";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { MouseIcon } from "@/components/ui/mouse";

const LIGHT_RAYS_MASK =
  "radial-gradient(ellipse 42% 58% at 50% 50%, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.28) 46%, rgba(0, 0, 0, 0.78) 76%, #000 100%)";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center md:px-12 lg:px-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="h-full w-full"
          style={{ maskImage: LIGHT_RAYS_MASK, WebkitMaskImage: LIGHT_RAYS_MASK }}
        >
          {shouldReduceMotion ? (
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.12),_transparent_65%)]" />
          ) : (
            <LightRays
              raysOrigin="top-center"
              raysColor="#5B5BD6"
              raysSpeed={0.28}
              lightSpread={0.75}
              rayLength={2}
              fadeDistance={1.05}
              saturation={0.85}
              followMouse
              mouseInfluence={0.35}
              noiseAmount={0.025}
              distortion={0.025}
              className="opacity-40 mix-blend-multiply"
            />
          )}
        </div>
      </div>

      {/* Optional subtle gradient to fade out the top/bottom edges */}
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
            <span className="text-[#4f4f4f]">Accelerate your AI.</span>
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

      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <motion.a
          href="#company-intro"
          aria-label="Scroll to learn about Koderea"
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 1.8, ease: "easeInOut", repeat: Infinity }
          }
          className="block rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <MouseIcon
            aria-hidden="true"
            size={42}
            className={shouldReduceMotion ? "pointer-events-none" : undefined}
          />
        </motion.a>
      </div>
    </section>
  );
}

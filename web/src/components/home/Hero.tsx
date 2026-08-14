"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { HeroSignalField } from "@/components/home/HeroSignalField";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP((_, contextSafe) => {
    const container = containerRef.current;
    if (!container || !contextSafe) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      let snapTween: gsap.core.Tween | null = null;
      let hasSnapped = false;
      let previousScrollY = window.scrollY;

      const snapToCompanyIntro = contextSafe(() => {
        const companyIntro = document.getElementById("company-intro");
        if (!companyIntro || snapTween) return;

        hasSnapped = true;

        const clearSnapTween = () => {
          snapTween = null;
        };

        snapTween = gsap.to(window, {
          scrollTo: {
            y: companyIntro,
            autoKill: false,
          },
          duration: 0.62,
          ease: "power3.inOut",
          overwrite: "auto",
          onComplete: clearSnapTween,
          onInterrupt: clearSnapTween,
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "hero-depth-exit",
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to("[data-hero-content]", { yPercent: -12, scale: 0.9, opacity: 0.16 }, 0)
        .to("[data-hero-horizon]", { yPercent: -34, scale: 1.12 }, 0)
        .to("[data-hero-signals]", { scale: 1.48, rotation: 1.2, opacity: 0.2 }, 0)
        .to("[data-hero-scroll-prompt]", { y: 36, opacity: 0 }, 0);

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const heroTrigger = timeline.scrollTrigger;
        const companyIntro = document.getElementById("company-intro");

        if (!heroTrigger || !companyIntro) {
          previousScrollY = currentScrollY;
          return;
        }

        const isMovingUp = currentScrollY < previousScrollY - 2;
        const isMovingDown = currentScrollY > previousScrollY;
        const snapStart = heroTrigger.start + (heroTrigger.end - heroTrigger.start) * 0.9;
        const isInTransitionZone =
          currentScrollY >= snapStart && currentScrollY < companyIntro.offsetTop;

        if (isMovingUp) {
          hasSnapped = false;
          snapTween?.kill();
          snapTween = null;
        } else if (!hasSnapped && isMovingDown && isInTransitionZone) {
          snapToCompanyIntro();
        }

        previousScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        snapTween?.kill();
      };
    });

    return () => media.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-svh bg-paper md:motion-safe:min-h-[155svh]"
    >
      <div className="relative flex min-h-svh overflow-hidden bg-paper px-6 pb-24 pt-32 text-center md:motion-safe:sticky md:motion-safe:top-0 md:px-10 md:pb-28 md:pt-36">
        <HeroSignalField />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(253,253,253,0.92)_0%,rgba(253,253,253,0.72)_21%,rgba(253,253,253,0.12)_44%,transparent_66%)]"
        />

        <div
          aria-hidden="true"
          data-hero-horizon
          className="pointer-events-none absolute inset-x-0 bottom-[-7rem] z-[1] flex justify-center md:bottom-[-5rem]"
        >
          <Image
            src="/brand/hero-horizon.svg"
            alt=""
            width={1440}
            height={357}
            priority
            sizes="100vw"
            className="h-auto w-[max(100%,58rem)] max-w-none select-none"
          />
        </div>

        <div
          data-hero-content
          className="relative z-10 mx-auto flex w-full max-w-[42rem] flex-col items-center self-center pb-24 md:pb-28"
        >
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

        <div
          data-hero-scroll-prompt
          className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 md:bottom-9"
        >
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
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SearchIcon } from "@/components/ui/search";
import { AtomIcon } from "@/components/ui/atom";
import { BadgeAlertIcon } from "@/components/ui/badge-alert";
import { FileCheck2Icon } from "@/components/ui/file-check-2";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AssuranceNarrative() {
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Define",
      desc: "Establish the context, need, and the specific AI claim.",
      icon: SearchIcon,
      bg: "bg-gradient-to-br from-zinc-800 to-zinc-900"
    },
    {
      title: "Test",
      desc: "Formulate rigorous evaluation criteria and scenarios.",
      icon: AtomIcon,
      bg: "bg-gradient-to-br from-zinc-800 to-zinc-900"
    },
    {
      title: "Validate",
      desc: "Inspect outcomes, anomalies, risk, and guardrail signals.",
      icon: BadgeAlertIcon,
      bg: "bg-gradient-to-br from-zinc-800 to-zinc-900"
    },
    {
      title: "Evidence",
      desc: "Produce an inspectable decision artifact for stakeholders.",
      icon: FileCheck2Icon,
      bg: "bg-gradient-to-br from-zinc-700 to-zinc-900"
    }
  ];

  useGSAP(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const rightCol = rightColRef.current;

    if (!container || !pin || !track || !rightCol) return;

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - rightCol.clientWidth);

        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${Math.max(getScrollDistance(), 1)}`,
            pin,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        let active = true;
        let refreshFrame: number | null = null;

        const scheduleRefresh = () => {
          if (!active) return;

          if (refreshFrame !== null) {
            cancelAnimationFrame(refreshFrame);
          }

          refreshFrame = requestAnimationFrame(() => {
            refreshFrame = null;
            if (active) ScrollTrigger.refresh();
          });
        };

        const resizeObserver = new ResizeObserver(scheduleRefresh);
        resizeObserver.observe(track);
        resizeObserver.observe(rightCol);

        if (document.readyState === "complete") {
          scheduleRefresh();
        } else {
          window.addEventListener("load", scheduleRefresh, { once: true });
        }

        void document.fonts.ready.then(scheduleRefresh);

        return () => {
          active = false;
          resizeObserver.disconnect();
          window.removeEventListener("load", scheduleRefresh);

          if (refreshFrame !== null) {
            cancelAnimationFrame(refreshFrame);
          }
        };
      },
    );

    return () => media.revert();
  }, { scope: containerRef });

  return (
    <section
      id="assurance"
      ref={containerRef}
      className="relative overflow-x-clip bg-foreground py-24 text-background md:py-0 md:motion-reduce:py-24"
    >
      <div
        ref={pinRef}
        className="flex w-full flex-col items-center md:h-screen md:flex-row md:motion-reduce:h-auto md:motion-reduce:flex-col"
      >

        {/* Intro Side - 40% width on desktop */}
        <div className="z-10 flex h-full w-full shrink-0 flex-col justify-center bg-foreground px-6 py-12 md:w-[40vw] md:px-12 md:py-0 md:motion-reduce:w-full md:motion-reduce:py-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]">
            From Claim <br />to Evidence
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
            Our signature assurance methodology ensures that AI systems do exactly what they claim to do, safely and reliably.
          </p>
        </div>

        {/* Right Side - 60% width, acts as a viewport for the horizontal track */}
        <div
          ref={rightColRef}
          className="flex h-full w-full items-center overflow-hidden md:w-[60vw] md:motion-reduce:h-auto md:motion-reduce:w-full md:motion-reduce:overflow-visible"
        >
          {/* The scrolling track */}
          <div
            ref={trackRef}
            className="flex flex-col items-center gap-6 px-6 md:flex-row md:pr-[20vw] md:motion-safe:will-change-transform md:motion-reduce:w-full md:motion-reduce:flex-col md:motion-reduce:pr-6"
          >
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="assurance-card flex h-auto w-full shrink-0 flex-col justify-center p-1 md:h-[65vh] md:w-[32vw] md:motion-reduce:max-w-4xl md:motion-reduce:w-full"
              >
                <div className={`w-full h-[45%] rounded-t-3xl ${step.bg} border border-white/10 flex items-center justify-center relative overflow-hidden`}>
                  {/* Subtle radial glow and icon */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                  <step.icon aria-hidden="true" className="card-visual relative z-10 text-white/50 motion-reduce:pointer-events-none" size={112} />
                </div>
                <div className="w-full h-[55%] bg-white/5 border border-white/10 border-t-0 p-8 md:p-10 rounded-b-3xl flex flex-col justify-start">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-white/40 text-2xl font-mono font-bold">0{idx + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

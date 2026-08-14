"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      desc: "Capture your AI system details and evaluation intent. We align on scope, data context, and the population you serve.",
      image: "/assurance/bento-1.svg",
    },
    {
      title: "Test",
      desc: "Run structured evaluations across key scenarios. Measure bias, performance, fairness, and robustness with clarity.",
      image: "/assurance/bento-2.svg",
    },
    {
      title: "Validate",
      desc: "Get a clear readiness view with transparent metrics. Understand where you excel and where to improve.",
      image: "/assurance/bento-3.svg",
    },
    {
      title: "Evidence",
      desc: "Generate audit-ready reports with traceable evidence. Communicate risk, rationale, and recommendations.",
      image: "/assurance/bento-4.svg",
    },
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
      className="relative overflow-x-clip border-y border-slate-100 bg-paper py-24 text-foreground md:py-0 md:motion-reduce:py-24"
    >
      <div
        ref={pinRef}
        className="flex w-full flex-col items-center md:h-screen md:flex-row md:motion-reduce:h-auto md:motion-reduce:flex-col"
      >

        <div className="z-10 flex h-full w-full shrink-0 flex-col justify-center bg-paper px-6 py-12 md:w-[38vw] md:px-10 md:py-0 md:motion-reduce:w-full md:motion-reduce:py-12 lg:px-16">
          <h2 className="mb-6 max-w-[12ch] text-[clamp(3rem,4.1vw,4rem)] font-semibold leading-none tracking-[-0.02em]">
            Koderea&apos;s V&amp;V Assurance Process
          </h2>
          <p className="max-w-md text-lg leading-[1.3] text-slate-500 md:text-xl">
            A structured workflow to define evaluation scope, test AI systems, validate readiness, and produce audit-ready evidence.
          </p>
        </div>

        <div
          ref={rightColRef}
          className="flex h-full w-full items-center overflow-hidden md:w-[62vw] md:motion-reduce:h-auto md:motion-reduce:w-full md:motion-reduce:overflow-visible"
        >
          <div
            ref={trackRef}
            className="flex flex-col items-center gap-6 px-6 md:flex-row md:gap-7 md:pr-[12vw] md:motion-safe:will-change-transform md:motion-reduce:w-full md:motion-reduce:flex-col md:motion-reduce:pr-6"
          >
            {steps.map((step, idx) => (
              <article
                key={step.title}
                className="assurance-card group relative z-0 w-full shrink-0 overflow-hidden rounded-[1.125rem] bg-paper p-3 shadow-[0_10px_38px_rgba(30,37,48,0.045)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:z-10 motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.015] motion-safe:hover:shadow-[0_30px_72px_rgba(30,37,48,0.14)] md:w-[min(30vw,29rem)] md:p-3.5 md:motion-reduce:max-w-3xl md:motion-reduce:w-full"
              >
                <div className="overflow-hidden rounded-[0.875rem] bg-[#f4f4f4] shadow-[0_1px_2px_rgba(30,37,48,0.02)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:shadow-[0_16px_38px_rgba(30,37,48,0.09)]">
                  <Image
                    src={step.image}
                    alt=""
                    width={634}
                    height={391}
                    sizes="(min-width: 768px) 30vw, calc(100vw - 4rem)"
                    className="block h-auto w-full origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.018]"
                  />
                </div>
                <div className="px-1 pb-1 pt-4">
                  <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.01em] text-slate-900 md:text-2xl">
                    <span className="sr-only">Step {idx + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[29rem] text-base font-medium leading-[1.3] text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function CompanyIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = '"Koderea is an AI Advisory & Solutions Provider based in Indonesia. We bridge the gap between AI ambition and production readiness through rigorous assurance, strategic consulting, and targeted capability building."';
  const words = text.split(" ");

  useGSAP(() => {
    const container = containerRef.current;
    const wordElements = textRef.current?.querySelectorAll(".word");

    if (!container || !wordElements || wordElements.length === 0) return;

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(wordElements, { opacity: 0.15 });

        gsap.to(wordElements, {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        let active = true;
        let refreshFrame: number | null = null;

        const scheduleRefresh = () => {
          if (!active) return;
          if (refreshFrame !== null) cancelAnimationFrame(refreshFrame);

          refreshFrame = requestAnimationFrame(() => {
            refreshFrame = null;
            if (active) ScrollTrigger.refresh();
          });
        };

        const resizeObserver = new ResizeObserver(scheduleRefresh);
        resizeObserver.observe(container);
        if (textRef.current) resizeObserver.observe(textRef.current);

        void document.fonts.ready.then(scheduleRefresh);

        return () => {
          active = false;
          resizeObserver.disconnect();
          if (refreshFrame !== null) cancelAnimationFrame(refreshFrame);
        };
      },
    );

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(wordElements, { clearProps: "all" });
    });

    return () => media.revert();
  }, { scope: containerRef });

  return (
    <section
      id="company-intro"
      ref={containerRef}
      className="relative border-y border-slate-100 bg-paper lg:motion-safe:min-h-[200svh]"
    >
      <div className="flex items-center px-6 py-24 md:px-12 lg:motion-safe:sticky lg:motion-safe:top-0 lg:motion-safe:min-h-svh lg:motion-safe:py-24 lg:px-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p
            ref={textRef}
            className="text-3xl font-medium leading-[1.18] tracking-[-0.035em] text-foreground md:text-[2.5rem] lg:text-[2.625rem] xl:text-[2.75rem]"
          >
            {words.map((word, idx) => (
              <span key={idx} className="word mr-[0.25em] inline-block pb-2">
                {word}
              </span>
            ))}
          </p>

          <figure className="mt-12 flex items-center gap-5 text-left md:mt-14 md:gap-6">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-100 md:h-[4.5rem] md:w-[4.5rem]">
              <Image
                src="/images/thomhert-siadari.webp"
                alt="Thomhert Suprapto Siadari, CEO of Koderea"
                width={512}
                height={512}
                sizes="72px"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
            <figcaption>
              <p className="text-sm font-normal leading-[1.3] text-slate-500 md:text-base">
                CEO of Koderea
              </p>
              <a
                href="https://www.linkedin.com/in/thomhertsiadari/"
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 inline-block text-lg font-medium leading-[1.2] tracking-[-0.02em] text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:text-xl"
              >
                Thomhert Suprapto Siadari
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

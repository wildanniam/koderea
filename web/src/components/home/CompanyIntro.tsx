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

  const text = "Koderea is an AI Advisory & Solutions Provider based in Indonesia. We bridge the gap between AI ambition and production readiness through rigorous assurance, strategic consulting, and targeted capability building.";
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
      className="relative border-y border-black/5 bg-white lg:motion-safe:min-h-[200svh]"
    >
      <div className="flex items-center px-6 py-24 md:px-12 lg:motion-safe:sticky lg:motion-safe:top-0 lg:motion-safe:min-h-svh lg:motion-safe:py-24 lg:px-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-24">
          <p
            ref={textRef}
            className="text-3xl font-medium leading-[1.3] tracking-tight text-foreground md:text-5xl lg:text-[48px] xl:text-[54px]"
          >
            {words.map((word, idx) => (
              <span key={idx} className="word mr-[0.25em] inline-block pb-2">
                {word}
              </span>
            ))}
          </p>

          <figure className="w-full max-w-64 justify-self-start lg:max-w-none lg:justify-self-end">
            <div className="overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/images/thomhert-siadari.webp"
                alt="Thomhert Suprapto Siadari, CEO of Koderea"
                width={512}
                height={512}
                sizes="(min-width: 1280px) 288px, (min-width: 1024px) 256px, 256px"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-5 border-t border-black/10 pt-4">
              <a
                href="https://www.linkedin.com/in/thomhertsiadari/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                Thomhert Suprapto Siadari
              </a>
              <p className="mt-1 text-sm text-muted">CEO, Koderea</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

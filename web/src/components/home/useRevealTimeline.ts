"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

type Reveal = (section: HTMLElement) => void;

/**
 * Runs a GSAP scroll-entry animation triggered by an IntersectionObserver
 * instead of ScrollTrigger.
 *
 * Sections 4 and 5 sit directly below pinned ScrollTrigger sections. An
 * IntersectionObserver is intentionally used here so their reveal remains
 * independent from pin-spacer recalculation.
 *
 * The markup is never pre-hidden. The reveal applies its starting state only
 * after the section has entered the viewport, so SSR, slow hydration, a client
 * exception, or a restored scroll position can never leave content invisible.
 */
export function useRevealTimeline(scopeRef: RefObject<HTMLElement | null>, reveal: Reveal) {
  useGSAP(
    () => {
      const section = scopeRef.current;
      if (!section) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        let played = false;
        const play = () => {
          if (played) return;
          played = true;
          reveal(section);
        };

        if (typeof IntersectionObserver === "undefined") {
          play();
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                play();
                observer.disconnect();
                break;
              }
            }
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(section);

        return () => observer.disconnect();
      });

      return () => media.revert();
    },
    { scope: scopeRef },
  );
}

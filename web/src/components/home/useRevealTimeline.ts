"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/**
 * `setup` puts the section into its hidden start state and returns a `reveal`
 * function that builds and runs the entrance tweens. Returning `void` (e.g. for
 * reduced motion) skips the animation entirely.
 */
type Setup = (section: HTMLElement) => (() => void) | undefined | void;

/**
 * Runs a GSAP scroll-entry animation triggered by an IntersectionObserver
 * instead of ScrollTrigger.
 *
 * Sections 4 and 5 sit directly below pinned ScrollTrigger sections
 * (AssuranceNarrative / AssuranceBridge). Those pins mutate the document height
 * after triggers are created, which makes ScrollTrigger start positions go stale
 * so the reveal never fires — leaving cards stuck at opacity 0. An
 * IntersectionObserver is immune to that layout miscalculation, and building the
 * tweens on enter (rather than pre-pausing a timeline) avoids GSAP context
 * revert races under React Strict Mode's double-invoked effects.
 *
 * Under `prefers-reduced-motion: reduce` the setup never runs, so the markup
 * stays in its natural (fully visible) state.
 */
export function useRevealTimeline(scopeRef: RefObject<HTMLElement | null>, setup: Setup) {
  useGSAP(
    () => {
      const section = scopeRef.current;
      if (!section) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = setup(section);
        if (!reveal) return;

        let played = false;
        const play = () => {
          if (played) return;
          played = true;
          reveal();
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

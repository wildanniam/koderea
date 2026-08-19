"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import gsap from "gsap";
import { useRevealTimeline } from "./useRevealTimeline";
import { IndependentAssessmentVisual } from "./independent-by-design/IndependentAssessmentVisual";
import { LocalStandardsVisual } from "./independent-by-design/LocalStandardsVisual";
import { EvidenceDeploymentVisual } from "./independent-by-design/EvidenceDeploymentVisual";

type TextTile = {
  kind: "text";
  step: number;
  number: string;
  title: ReactNode;
  body: string;
  gridClass: string;
  cornerClass: string;
  titleClass: string;
};

type VisualTile = {
  kind: "visual";
  step: number;
  label: string;
  render: (active: boolean) => ReactNode;
  aspectClass: string;
  gridClass: string;
  cornerClass: string;
};

type Tile = TextTile | VisualTile;

// DOM order = mobile stack order: each text tile precedes its illustration.
const tiles: Tile[] = [
  {
    kind: "text",
    step: 0,
    number: "01",
    title: "Independent Assessment",
    body: "Vendor-agnostic evaluation designed to preserve objectivity throughout the assurance process.",
    gridClass: "md:col-start-1 md:row-start-1",
    cornerClass: "md:rounded-br-[12px] md:rounded-tr-[12px]",
    titleClass: "md:max-w-[225px]",
  },
  {
    kind: "visual",
    step: 0,
    label: "Illustration: source signals converge on a central assurance core that confirms an independent assessment.",
    render: (active) => <IndependentAssessmentVisual active={active} />,
    aspectClass: "aspect-[522/306]",
    gridClass: "md:col-start-2 md:row-start-1",
    cornerClass: "md:rounded-bl-[12px] md:rounded-tl-[12px]",
  },
  {
    kind: "text",
    step: 1,
    number: "02",
    title: (
      <>
        Local Context,
        <br />
        Global Standards
      </>
    ),
    body: "AI systems are evaluated against local data and institutional requirements while aligned with recognized global frameworks.",
    gridClass: "md:col-start-2 md:row-start-2",
    cornerClass: "md:rounded-bl-[12px] md:rounded-tl-[12px]",
    titleClass: "md:max-w-[243px]",
  },
  {
    kind: "visual",
    step: 1,
    label: "Illustration: local context inputs feed an assurance evaluation layer that maps to global standards, policies, risk frameworks, and compliance.",
    render: (active) => <LocalStandardsVisual active={active} />,
    aspectClass: "aspect-[522/330]",
    gridClass: "md:col-start-1 md:row-start-2",
    cornerClass: "md:rounded-br-[12px] md:rounded-tr-[12px]",
  },
  {
    kind: "text",
    step: 2,
    number: "03",
    title: (
      <>
        Evidence Before
        <br />
        Deployment
      </>
    ),
    body: "Transparent testing and traceable findings provide a defensible basis for AI deployment decisions.",
    gridClass: "md:col-start-1 md:row-start-3",
    cornerClass: "md:rounded-br-[12px] md:rounded-tr-[12px]",
    titleClass: "md:max-w-[230px]",
  },
  {
    kind: "visual",
    step: 2,
    label: "Illustration: evidence cards flow into a report card summarizing findings with a validated status and a results chart.",
    render: (active) => <EvidenceDeploymentVisual active={active} />,
    aspectClass: "aspect-[522/306]",
    gridClass: "md:col-start-2 md:row-start-3",
    cornerClass: "md:rounded-[12px]",
  },
];

export function IndependentByDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const leaveStep = (step: number, relatedTarget: EventTarget | null) => {
    const next = relatedTarget instanceof Element ? relatedTarget : null;
    if (next?.closest(`[data-ibd-step="${step}"]`)) return;
    setActiveStep(null);
  };

  useRevealTimeline(sectionRef, (section) => {
    const heads = section.querySelectorAll<HTMLElement>("[data-ibd-head]");
    const cells = section.querySelectorAll<HTMLElement>("[data-ibd-tile]");

    const tl = gsap.timeline();
    tl.fromTo(
      heads,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      },
    ).fromTo(
        cells,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.2",
      );
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="independent-by-design-heading"
      className="bg-[#010101] px-6 pb-28 pt-8 text-[#FDFDFD] md:px-8 md:pb-40 md:pt-4"
    >
      <div className="mx-auto flex max-w-[1044px] flex-col">
        <header className="mx-auto flex max-w-[680px] flex-col items-start text-left md:items-center md:text-center">
          <h2
            id="independent-by-design-heading"
            data-ibd-head
            className="text-[clamp(2.25rem,9vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px] md:leading-[1.2]"
          >
            Independent by Design
          </h2>
          <p
            data-ibd-head
            className="mt-5 max-w-[755px] text-lg leading-[1.5] tracking-[-0.02em] text-[#ADADAD] md:text-[20px]"
          >
            Objective, locally grounded assurance for deployment decisions backed
            by evidence
          </p>
        </header>

        <div className="mt-16 md:mt-[100px]">
          <div className="flex flex-col gap-px bg-[#333333] md:grid md:grid-cols-2 md:grid-rows-[306px_330px_306px]">
            {tiles.map((tile, i) => {
              const active = activeStep === tile.step;
              const muted = activeStep !== null && !active;
              const sharedProps = {
                "data-ibd-step": tile.step,
                onPointerEnter: () => setActiveStep(tile.step),
                onPointerLeave: (event: ReactPointerEvent<HTMLElement>) =>
                  leaveStep(tile.step, event.relatedTarget),
              };

              return tile.kind === "text" ? (
                <article
                  key={i}
                  data-ibd-tile
                  {...sharedProps}
                  className={`relative flex flex-col justify-start overflow-hidden bg-[#010101] p-6 transition-[background-color,opacity,filter] duration-500 ease-out md:p-10 ${active ? "bg-[#070809]" : ""} ${muted ? "opacity-55 saturate-50" : "opacity-100"} ${tile.gridClass} ${tile.cornerClass}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_25%,rgba(115,221,242,0.08),transparent_46%)] transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"}`}
                  />
                  <span className={`relative flex items-center gap-3 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] transition-[color,transform] duration-500 md:text-[28px] ${active ? "translate-x-1 text-white" : "text-[#E6E6E6]"}`}>
                    {tile.number}
                    <span
                      aria-hidden="true"
                      className={`h-px bg-gradient-to-r from-[#73DDF2] to-[#B9A9EF] transition-[width,opacity] duration-500 ${active ? "w-9 opacity-100" : "w-0 opacity-0"}`}
                    />
                  </span>
                  <div className={`relative mt-10 transition-transform duration-500 ease-out md:mt-[60px] ${active ? "translate-x-1" : ""}`}>
                    <h3 className={`text-[26px] font-semibold leading-[1.05] tracking-[-0.02em] transition-colors duration-500 md:text-[32px] md:leading-[1] ${active ? "text-white" : "text-[#E6E6E6]"} ${tile.titleClass}`}>
                      {tile.title}
                    </h3>
                    <p className={`mt-5 max-w-[42ch] text-[15px] leading-[1.5] tracking-[-0.02em] transition-colors duration-500 md:text-base ${active ? "text-[#CECECE]" : "text-[#ADADAD]"}`}>
                      {tile.body}
                    </p>
                  </div>
                </article>
              ) : (
                <div
                  key={i}
                  data-ibd-tile
                  {...sharedProps}
                  tabIndex={0}
                  role="img"
                  aria-label={tile.label}
                  onFocus={() => setActiveStep(tile.step)}
                  onBlur={(event) => leaveStep(tile.step, event.relatedTarget)}
                  className={`group relative overflow-hidden bg-[#010101] outline-none transition-[opacity,filter] duration-500 [container-type:inline-size] ${muted ? "opacity-45 saturate-50" : "opacity-100"} ${tile.aspectClass} md:aspect-auto md:h-full ${tile.gridClass} ${tile.cornerClass}`}
                >
                  <div className={`absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transform-none ${active ? "scale-[1.012]" : "scale-100"}`}>
                    {tile.render(active)}
                  </div>
                  <div className={`pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-[box-shadow,background-color] duration-500 ${active ? "bg-white/[0.012] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),inset_0_0_70px_rgba(115,221,242,0.035)]" : "shadow-none"} group-focus-visible:shadow-[inset_0_0_0_2px_rgba(147,197,253,0.7)]`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

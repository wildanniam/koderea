"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useRevealTimeline } from "./useRevealTimeline";
import { IndependentAssessmentVisual } from "./independent-by-design/IndependentAssessmentVisual";
import { LocalStandardsVisual } from "./independent-by-design/LocalStandardsVisual";
import { EvidenceDeploymentVisual } from "./independent-by-design/EvidenceDeploymentVisual";

type TextTile = {
  kind: "text";
  number: string;
  title: ReactNode;
  body: string;
  gridClass: string;
  cornerClass: string;
  titleClass: string;
};

type VisualTile = {
  kind: "visual";
  label: string;
  render: () => ReactNode;
  aspectClass: string;
  gridClass: string;
  cornerClass: string;
};

type Tile = TextTile | VisualTile;

// DOM order = mobile stack order: each text tile precedes its illustration.
const tiles: Tile[] = [
  {
    kind: "text",
    number: "01",
    title: "Independent Assessment",
    body: "Vendor-agnostic evaluation designed to preserve objectivity throughout the assurance process.",
    gridClass: "md:col-start-1 md:row-start-1",
    cornerClass: "md:rounded-br-[12px] md:rounded-tr-[12px]",
    titleClass: "md:max-w-[225px]",
  },
  {
    kind: "visual",
    label: "Illustration: source signals converge on a central assurance core that confirms an independent assessment.",
    render: () => <IndependentAssessmentVisual />,
    aspectClass: "aspect-[522/306]",
    gridClass: "md:col-start-2 md:row-start-1",
    cornerClass: "md:rounded-bl-[12px] md:rounded-tl-[12px]",
  },
  {
    kind: "text",
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
    label: "Illustration: local context inputs feed an assurance evaluation layer that maps to global standards, policies, risk frameworks, and compliance.",
    render: () => <LocalStandardsVisual />,
    aspectClass: "aspect-[522/330]",
    gridClass: "md:col-start-1 md:row-start-2",
    cornerClass: "md:rounded-br-[12px] md:rounded-tr-[12px]",
  },
  {
    kind: "text",
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
    label: "Illustration: evidence cards flow into a report card summarizing findings with a validated status and a results chart.",
    render: () => <EvidenceDeploymentVisual />,
    aspectClass: "aspect-[522/306]",
    gridClass: "md:col-start-2 md:row-start-3",
    cornerClass: "md:rounded-[12px]",
  },
];

export function IndependentByDesign() {
  const sectionRef = useRef<HTMLElement>(null);

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
            {tiles.map((tile, i) =>
              tile.kind === "text" ? (
                <article
                  key={i}
                  data-ibd-tile
                  className={`flex flex-col justify-start overflow-hidden bg-[#010101] p-6 md:p-10 ${tile.gridClass} ${tile.cornerClass}`}
                >
                  <span className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#E6E6E6] md:text-[28px]">
                    {tile.number}
                  </span>
                  <div className="mt-10 md:mt-[60px]">
                    <h3 className={`text-[26px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#E6E6E6] md:text-[32px] md:leading-[1] ${tile.titleClass}`}>
                      {tile.title}
                    </h3>
                    <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.5] tracking-[-0.02em] text-[#ADADAD] md:text-base">
                      {tile.body}
                    </p>
                  </div>
                </article>
              ) : (
                <div
                  key={i}
                  data-ibd-tile
                  tabIndex={0}
                  role="img"
                  aria-label={tile.label}
                  className={`group relative overflow-hidden bg-[#010101] outline-none [container-type:inline-size] ${tile.aspectClass} md:aspect-auto md:h-full ${tile.gridClass} ${tile.cornerClass}`}
                >
                  {tile.render()}
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-transparent transition-[box-shadow] duration-300 motion-safe:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16),0_20px_50px_rgba(0,0,0,0.4)] group-focus-visible:shadow-[inset_0_0_0_2px_rgba(147,197,253,0.7)]" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

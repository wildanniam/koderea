"use client";

import Image from "next/image";
import { useState } from "react";

type FlowGroup = "institution" | "vendor" | "controls" | "validation" | "report";

const institutionItems = [
  ["EHR/EMR", "ehr.svg"],
  ["Claims", "claims.svg"],
  ["HR / People", "people.svg"],
  ["Finance", "finance.svg"],
  ["Operations", "operations.svg"],
] as const;

const vendorItems = [
  ["Foundation Models", "foundation-model.svg"],
  ["Custom Models", "custom-model.svg"],
  ["Third Party APIs", "third-party-api.svg"],
] as const;

const controls = [
  { label: "Monitoring & Feedback", icon: "monitoring.svg", className: "left-[40.7%] top-[9%]" },
  { label: "Risk & Controls", icon: "risk.svg", className: "left-[53.7%] top-[9%]" },
  { label: "Explainability", icon: "explainability.svg", className: "left-[33.3%] top-[43%]" },
  { label: "Policy & Standards", icon: "policy.svg", className: "left-[62.3%] top-[43%]" },
  { label: "Fairness / Bias Checks", icon: "fairness.svg", className: "left-[46.3%] top-[76%]" },
] as const;

const validationItems = ["Performance", "Fairness", "Risk", "Compliance", "Readiness"];
const reportItems = ["Findings", "Evidence", "Recommendation", "Compliance", "Readiness"];

function AssetIcon({ name, size = 16 }: { name: string; size?: number }) {
  return (
    <span className="relative block shrink-0" style={{ width: size, height: size }} aria-hidden="true">
      <Image
        src={`/bridging/icons/${name}`}
        alt=""
        fill
        sizes={`${size}px`}
        loading="eager"
        unoptimized
        className="object-contain"
      />
    </span>
  );
}

function InputStack({
  title,
  items,
  group,
  activeGroup,
  setActiveGroup,
  className,
}: {
  title: string;
  items: readonly (readonly [string, string])[];
  group: FlowGroup;
  activeGroup: FlowGroup | null;
  setActiveGroup: (group: FlowGroup | null) => void;
  className: string;
}) {
  const isActive = activeGroup === group;
  const isDimmed = activeGroup !== null && !isActive;

  return (
    <article
      tabIndex={0}
      onPointerEnter={() => setActiveGroup(group)}
      onPointerLeave={() => setActiveGroup(null)}
      onFocus={() => setActiveGroup(group)}
      onBlur={() => setActiveGroup(null)}
      className={`${className} bridge-card absolute z-20 w-[17%] rounded-[13px] border border-[#edeef2] bg-[#fafafa] p-3 shadow-[0_4px_13px_rgba(221,221,221,0.25),inset_0_20px_20px_rgba(178,178,178,0.12)] outline-none transition-[transform,opacity,box-shadow,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-slate-300 ${
        isActive
          ? "-translate-y-1 border-slate-300 shadow-[0_16px_36px_rgba(30,37,48,0.12),inset_0_20px_20px_rgba(178,178,178,0.1)]"
          : ""
      } ${isDimmed ? "opacity-55" : "opacity-100"}`}
      aria-label={`${title}: ${items.map(([label]) => label).join(", ")}`}
    >
      <h3 className="mb-3 text-[12px] font-semibold tracking-[0.1em] text-[#adadad]">{title}</h3>
      <ul className="space-y-1">
        {items.map(([label, icon]) => (
          <li
            key={label}
            className="bridge-pill flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3 py-2 text-[12px] font-medium leading-none text-[#515151] transition-[transform,box-shadow,color] duration-200 hover:translate-x-1 hover:text-carbon hover:shadow-[0_5px_14px_rgba(30,37,48,0.08)]"
          >
            <AssetIcon name={icon} />
            <span className="whitespace-nowrap">{label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function OutputStack({
  title,
  subtitle,
  items,
  group,
  activeGroup,
  setActiveGroup,
  className,
}: {
  title: string;
  subtitle?: string;
  items: readonly string[];
  group: FlowGroup;
  activeGroup: FlowGroup | null;
  setActiveGroup: (group: FlowGroup | null) => void;
  className: string;
}) {
  const isActive = activeGroup === group;
  const isDimmed = activeGroup !== null && !isActive;

  return (
    <article
      tabIndex={0}
      onPointerEnter={() => setActiveGroup(group)}
      onPointerLeave={() => setActiveGroup(null)}
      onFocus={() => setActiveGroup(group)}
      onBlur={() => setActiveGroup(null)}
      className={`${className} bridge-card absolute z-20 w-[17%] rounded-[13px] border border-[#edeef2] bg-[#fafafa] p-3 shadow-[0_4px_13px_rgba(221,221,221,0.25),inset_0_20px_20px_rgba(178,178,178,0.12)] outline-none transition-[transform,opacity,box-shadow,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-slate-300 ${
        isActive
          ? "-translate-y-1 border-slate-300 shadow-[0_16px_36px_rgba(30,37,48,0.12),inset_0_20px_20px_rgba(178,178,178,0.1)]"
          : ""
      } ${isDimmed ? "opacity-55" : "opacity-100"}`}
      aria-label={`${title}: ${items.join(", ")}`}
    >
      {subtitle ? (
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-lg bg-[#5a5a5a]">
            <AssetIcon name="report.svg" size={23} />
          </span>
          <div>
            <h3 className="text-[12px] font-semibold leading-tight text-carbon">{title}</h3>
            <p className="mt-0.5 text-[11px] leading-tight text-[#707070]">{subtitle}</p>
          </div>
        </div>
      ) : (
        <h3 className="mb-3 text-[12px] font-semibold tracking-[0.1em] text-[#adadad]">{title}</h3>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="bridge-pill flex items-center justify-between rounded-full border border-[#e6e6e6] bg-white px-3 py-2 text-[11px] font-medium leading-none text-[#515151] transition-[transform,box-shadow,color] duration-200 hover:-translate-x-1 hover:text-carbon hover:shadow-[0_5px_14px_rgba(30,37,48,0.08)]"
          >
            <span>{item}</span>
            <AssetIcon name="check.svg" />
          </li>
        ))}
      </ul>
    </article>
  );
}

export function AssuranceBridge() {
  const [activeGroup, setActiveGroup] = useState<FlowGroup | null>(null);
  const hasActiveInput = activeGroup === "institution" || activeGroup === "vendor";
  const hasActiveOutput = activeGroup === "validation" || activeGroup === "report";
  const coreIsActive = activeGroup !== null;

  return (
    <section
      id="assurance-layer"
      aria-labelledby="assurance-layer-title"
      className="scroll-mt-20 border-b border-slate-100 bg-paper py-24 md:px-10 md:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="px-6 text-center md:px-0">
          <h2
            id="assurance-layer-title"
            className="text-[clamp(2.5rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-carbon"
          >
            One fixed layer. Continuous confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-[724px] text-lg font-normal leading-[1.3] text-[#515151] md:text-xl">
            Applies independent AI assurance across regulated and high-stakes sectors,
            adapting evaluation to local data, domain risks, and institutional requirements.
          </p>
        </header>

        <div className="mt-12 md:mt-[60px]">
          <p className="px-6 text-sm font-medium text-slate-500 lg:hidden">
            Swipe to explore the assurance system. Tap a group to trace its role.
          </p>
          <div
            tabIndex={0}
            aria-label="Interactive diagram of Koderea's independent assurance layer"
            className="mt-4 overflow-x-auto overscroll-x-contain px-6 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 lg:mt-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            <div className="relative aspect-[1200/575] w-[920px] overflow-hidden rounded-[20px] border border-[#e6e6e6] bg-[#fafafa] lg:w-full">
              <div
                aria-hidden="true"
                className={`bridge-connector absolute left-[20%] top-[35%] z-0 h-[1px] w-[20%] transition-opacity duration-300 ${
                  activeGroup === null || hasActiveInput ? "opacity-100" : "opacity-25"
                }`}
              />
              <div
                aria-hidden="true"
                className={`bridge-connector absolute left-[20%] top-[72%] z-0 h-[1px] w-[20%] transition-opacity duration-300 ${
                  activeGroup === null || hasActiveInput ? "opacity-100" : "opacity-25"
                }`}
              />
              <div
                aria-hidden="true"
                className={`bridge-connector absolute left-[66%] top-[35%] z-0 h-[1px] w-[15%] transition-opacity duration-300 ${
                  activeGroup === null || hasActiveOutput ? "opacity-100" : "opacity-25"
                }`}
              />
              <div
                aria-hidden="true"
                className={`bridge-connector absolute left-[66%] top-[72%] z-0 h-[1px] w-[15%] transition-opacity duration-300 ${
                  activeGroup === null || hasActiveOutput ? "opacity-100" : "opacity-25"
                }`}
              />

              <InputStack
                title="INSTITUTION DATA"
                items={institutionItems}
                group="institution"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="left-[3.6%] top-[7.4%]"
              />
              <InputStack
                title="AI VENDOR MODELS"
                items={vendorItems}
                group="vendor"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="left-[3.7%] top-[62%]"
              />

              <div
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 z-0 aspect-square w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed transition-[border-color,transform,opacity] duration-500 ${
                  coreIsActive ? "scale-105 border-slate-300 opacity-100" : "border-[#dedede] opacity-80"
                }`}
              />
              <div
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 z-0 aspect-square w-[21%] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[border-color,transform] duration-500 ${
                  coreIsActive ? "scale-105 border-slate-300" : "border-[#e4e4e4]"
                }`}
              />

              <div
                className={`absolute left-1/2 top-1/2 z-10 flex aspect-square w-[14.1%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#e6e6e6] bg-[#fafafa] text-center shadow-[0_8px_24px_rgba(30,37,48,0.12),inset_0_16px_20px_rgba(178,178,178,0.13)] transition-[transform,box-shadow] duration-500 ${
                  coreIsActive
                    ? "scale-105 shadow-[0_18px_48px_rgba(30,37,48,0.18),inset_0_16px_20px_rgba(178,178,178,0.11)]"
                    : ""
                }`}
              >
                <AssetIcon name="assurance-mark.svg" size={58} />
                <p className="mt-3 max-w-[90px] text-[14px] font-medium leading-[1.05] text-[#515151]">
                  Independent Assurance Layer
                </p>
              </div>

              {controls.map((control) => (
                <div
                  key={control.label}
                  tabIndex={0}
                  onPointerEnter={() => setActiveGroup("controls")}
                  onPointerLeave={() => setActiveGroup(null)}
                  onFocus={() => setActiveGroup("controls")}
                  onBlur={() => setActiveGroup(null)}
                  className={`${control.className} absolute z-20 flex w-[9%] flex-col items-center gap-2 text-center outline-none transition-[transform,opacity] duration-300 focus-visible:ring-2 focus-visible:ring-slate-300 ${
                    activeGroup === "controls" ? "-translate-y-1" : ""
                  } ${activeGroup !== null && activeGroup !== "controls" ? "opacity-45" : "opacity-100"}`}
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#e6e6e6] bg-white shadow-[0_3px_10px_rgba(30,37,48,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:scale-110 hover:border-slate-300 hover:shadow-[0_10px_24px_rgba(30,37,48,0.12)]">
                    <AssetIcon name={control.icon} size={29} />
                  </span>
                  <span className="text-[12px] font-medium leading-[1.1] text-[#515151]">{control.label}</span>
                </div>
              ))}

              <OutputStack
                title="VALIDATING OUTPUT"
                items={validationItems}
                group="validation"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="right-[3.2%] top-[4.7%]"
              />
              <OutputStack
                title="Assurance Report"
                subtitle="Audit-ready evidence"
                items={reportItems}
                group="report"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="right-[3.2%] top-[51%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

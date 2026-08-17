"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

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
  { label: "Monitoring & Feedback", icon: "monitoring.svg", className: "left-[41.08%] top-[15.83%] w-[5.67%]" },
  { label: "Risk & Controls", icon: "risk.svg", className: "left-[51.17%] top-[15.3%] w-[7.04%]" },
  { label: "Explainability", icon: "explainability.svg", className: "left-[33.75%] top-[42.26%] w-[6.71%]" },
  { label: "Policy & Standards", icon: "policy.svg", className: "left-[57.5%] top-[42.26%] w-[8.72%]" },
  { label: "Fairness / Bias Checks", icon: "fairness.svg", className: "left-[45.67%] top-[65.57%] w-[6.96%]" },
] as const;

const validationItems = ["Performance", "Fairness", "Risk", "Compliance", "Readiness"];
const reportItems = ["Findings", "Evidence", "Recommendation", "Compliance", "Readiness"];

const flowGeometry = {
  "institution-1.svg": {
    viewBox: "0 0 182.006 230.006",
    path: "M0.50308 0.50308H74.8725C85.9863 0.50308 94.9957 9.51254 94.9957 20.6263V229.503H181.503",
  },
  "institution-2.svg": {
    viewBox: "0 0 175.006 190.016",
    path: "M0.50308 0.50308H63.9126C75.0663 0.50308 84.0923 9.57505 84.0356 20.7286L83.1771 189.503L174.503 187.831",
  },
  "institution-3.svg": {
    viewBox: "0 0 177.006 151.009",
    path: "M0.50308 0.50308H55.1919C66.3056 0.50308 75.3151 9.51255 75.3151 20.6263V150.503L176.503 149.943",
  },
  "institution-4.svg": {
    viewBox: "0 0 177.006 111.006",
    path: "M0.50308 0.50308H45.2786C56.3923 0.50308 65.4018 9.51255 65.4018 20.6263V110.503H176.503",
  },
  "institution-5.svg": {
    viewBox: "0 0 137.006 72.0062",
    path: "M0.50308 0.50308H30.5289C41.6426 0.50308 50.6521 9.51255 50.6521 20.6263V51.3799C50.6521 62.4936 59.6615 71.5031 70.7753 71.5031H136.503",
  },
  "vendor-1.svg": {
    viewBox: "0 0 156.006 92.0062",
    path: "M0.50308 0.50308H37.535C48.6487 0.50308 57.6582 9.51254 57.6582 20.6263V71.3799C57.6582 82.4936 66.6677 91.5031 77.7814 91.5031H155.503",
  },
  "vendor-2.svg": {
    viewBox: "0 0 156.006 129.006",
    path: "M0.50308 0.50308H51.1632C62.277 0.50308 71.2864 9.51255 71.2864 20.6263V128.503H155.503",
  },
  "vendor-3.svg": {
    viewBox: "0 0 174.006 164.006",
    path: "M0.50308 0.50308H61.623C72.7367 0.50308 81.7462 9.51255 81.7462 20.6263V82.0031V163.503H173.503",
  },
  "output-lead.svg": {
    viewBox: "0 0 137.006 1.00616",
    path: "M0.50308 0.50308H136.503",
  },
  "output-bus.svg": {
    viewBox: "0 0 77.0062 304.006",
    path: "M69.4459 0.50308H20.6263C9.51254 0.50308 0.50308 9.51254 0.50308 20.6263V283.38C0.50308 294.494 9.51255 303.503 20.6263 303.503H76.5031",
  },
} as const;

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

function FlowAsset({
  name,
  className,
  state,
  style,
  trace = false,
  traceDelay = 0,
}: {
  name: string;
  className: string;
  state: "idle" | "active" | "muted";
  style?: CSSProperties;
  trace?: boolean;
  traceDelay?: number;
}) {
  const geometry = flowGeometry[name as keyof typeof flowGeometry];

  return (
    <span
      aria-hidden="true"
      data-state={state}
      style={style}
      className={`${className} bridge-flow-asset absolute z-[1] transition-[opacity,filter,transform] duration-500 ${
        state === "active"
          ? "opacity-100 drop-shadow-[0_0_3px_rgba(58,68,85,0.18)]"
          : state === "muted"
            ? "opacity-20"
            : "opacity-70"
      }`}
    >
      <Image
        src={`/bridging/lines/${name}`}
        alt=""
        fill
        sizes="220px"
        loading="eager"
        unoptimized
        className="object-fill"
      />
      {geometry ? (
        <motion.svg
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
          viewBox={geometry.viewBox}
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d={geometry.path}
            pathLength="1"
            vectorEffect="non-scaling-stroke"
            stroke="#3A4455"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={false}
            animate={
              trace
                ? { pathLength: [0, 1, 1], opacity: [0, 0.9, 0] }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: traceDelay,
              times: [0, 0.76, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.svg>
      ) : null}
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
      data-active={isActive}
      className={`${className} bridge-card absolute z-20 w-[16.55%] rounded-[13px] border border-[#edeef2] bg-[#fafafa] p-3 shadow-[0_4px_13px_rgba(221,221,221,0.25),inset_0_20px_20px_rgba(178,178,178,0.12)] outline-none transition-[transform,opacity,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-slate-300 ${
        isActive
          ? "-translate-y-1 scale-[1.012] shadow-[0_16px_36px_rgba(30,37,48,0.11),inset_0_20px_20px_rgba(178,178,178,0.1)]"
          : ""
      } ${isDimmed ? "opacity-70" : "opacity-100"}`}
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
  introRunning,
  introOffset,
}: {
  title: string;
  subtitle?: string;
  items: readonly string[];
  group: FlowGroup;
  activeGroup: FlowGroup | null;
  setActiveGroup: (group: FlowGroup | null) => void;
  className: string;
  introRunning: boolean;
  introOffset: number;
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
      data-active={isActive}
      className={`${className} bridge-card absolute z-20 w-[16.55%] rounded-[13px] border border-[#edeef2] bg-[#fafafa] p-3 shadow-[0_4px_13px_rgba(221,221,221,0.25),inset_0_20px_20px_rgba(178,178,178,0.12)] outline-none transition-[transform,opacity,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-slate-300 ${
        isActive
          ? "-translate-y-1 scale-[1.012] shadow-[0_16px_36px_rgba(30,37,48,0.11),inset_0_20px_20px_rgba(178,178,178,0.1)]"
          : ""
      } ${isDimmed ? "opacity-70" : "opacity-100"}`}
      aria-label={`${title}: ${items.join(", ")}`}
    >
      {subtitle ? (
        <div className="mb-3 flex items-center gap-2">
          <AssetIcon name="report.svg" size={40} />
          <div>
            <h3 className="text-[12px] font-semibold leading-tight text-carbon">{title}</h3>
            <p className="mt-0.5 text-[11px] leading-tight text-[#707070]">{subtitle}</p>
          </div>
        </div>
      ) : (
        <h3 className="mb-3 text-[12px] font-semibold tracking-[0.1em] text-[#adadad]">{title}</h3>
      )}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={false}
            animate={
              introRunning
                ? { x: [0, -3, 0], scale: [1, 1.012, 1] }
                : { x: isActive ? -3 : 0, scale: 1 }
            }
            whileHover={{ x: -4 }}
            transition={{
              duration: 0.42,
              delay: introRunning ? introOffset + index * 0.06 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bridge-pill flex items-center justify-between rounded-full border border-[#e6e6e6] bg-white px-3 py-2 text-[11px] font-medium leading-none text-[#515151] transition-[transform,box-shadow,color] duration-200 hover:-translate-x-1 hover:text-carbon hover:shadow-[0_5px_14px_rgba(30,37,48,0.08)]"
          >
            <span>{item}</span>
            <AssetIcon name="check.svg" />
          </motion.li>
        ))}
      </ul>
    </article>
  );
}

export function AssuranceBridge() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const shouldReduceMotion = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);
  const [activeGroup, setActiveGroup] = useState<FlowGroup | null>(null);
  const [activeControl, setActiveControl] = useState<string | null>(null);
  const introRunning = isInView && !introComplete && !shouldReduceMotion;
  const coreIsActive = introRunning || activeGroup !== null;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const timeout = window.setTimeout(() => setIntroComplete(true), 2400);
    return () => window.clearTimeout(timeout);
  }, [isInView, shouldReduceMotion]);

  const stateFor = (group: FlowGroup): "idle" | "active" | "muted" => {
    if (activeGroup === null) return "idle";
    return activeGroup === group ? "active" : "muted";
  };
  const outputState = activeGroup === null ? "idle" : "active";

  return (
    <section
      ref={sectionRef}
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
              {[
                ["institution-1.svg", "left-[20.62%] top-[17.1%] h-[40%] w-[15.17%]"],
                ["institution-2.svg", "left-[20.62%] top-[24%] h-[33.05%] w-[14.59%]"],
                ["institution-3.svg", "left-[20.62%] top-[30.75%] h-[26.27%] w-[14.75%]"],
                ["institution-4.svg", "left-[20.62%] top-[37.8%] h-[19.31%] w-[14.75%]"],
                ["institution-5.svg", "left-[20.62%] top-[44.6%] h-[12.53%] w-[11.42%]"],
              ].map(([name, className], index) => (
                <FlowAsset
                  key={name}
                  name={name}
                  className={className}
                  state={stateFor("institution")}
                  trace={!shouldReduceMotion && (introRunning || activeGroup === "institution")}
                  traceDelay={introRunning ? 0.14 + index * 0.055 : index * 0.035}
                />
              ))}

              {[
                ["vendor-1.svg", "left-[19.78%] top-[57%] h-[16%] w-[13%] -scale-y-100"],
                ["vendor-2.svg", "left-[20.11%] top-[57%] h-[22.44%] w-[13%] -scale-y-100"],
                ["vendor-3.svg", "left-[20.11%] top-[57.17%] h-[28.52%] w-[14.5%] -scale-y-100"],
              ].map(([name, className], index) => (
                <FlowAsset
                  key={name}
                  name={name}
                  className={className}
                  state={stateFor("vendor")}
                  trace={!shouldReduceMotion && (introRunning || activeGroup === "vendor")}
                  traceDelay={introRunning ? 0.32 + index * 0.065 : index * 0.045}
                />
              ))}

              <FlowAsset
                name="output-lead.svg"
                className="left-[62.7%] top-[50.09%] h-[0.18%] w-[11.42%]"
                state={outputState}
                trace={!shouldReduceMotion && (introRunning || activeGroup !== null)}
                traceDelay={introRunning ? 0.92 : activeGroup === "validation" || activeGroup === "report" ? 0 : 0.34}
              />
              <FlowAsset
                name="output-bus.svg"
                className="left-[73.96%] top-[25.13%] h-[52.87%] w-[6.42%]"
                state={outputState}
                trace={!shouldReduceMotion && (introRunning || activeGroup !== null)}
                traceDelay={introRunning ? 1.12 : activeGroup === "validation" || activeGroup === "report" ? 0.08 : 0.5}
              />

              {[16.14, 22.79, 29.44, 36.09, 42.74].map((top) => (
                <FlowAsset
                  key={`institution-endpoint-${top}`}
                  name="source-endpoint.svg"
                  className="left-[19.65%] h-[2.1%] w-[1.01%]"
                  style={{ top: `${top}%` }}
                  state={stateFor("institution")}
                />
              ))}
              {[70.84, 77.49, 84.14].map((top) => (
                <FlowAsset
                  key={`vendor-endpoint-${top}`}
                  name="source-endpoint.svg"
                  className="left-[19.77%] h-[2.1%] w-[1.01%]"
                  style={{ top: `${top}%` }}
                  state={stateFor("vendor")}
                />
              ))}
              {[24.17, 76.69].map((top) => (
                <FlowAsset
                  key={`output-endpoint-${top}`}
                  name="output-endpoint.svg"
                  className="left-[79.83%] h-[2.1%] w-[1.01%]"
                  style={{ top: `${top}%` }}
                  state={outputState}
                />
              ))}

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

              <motion.span
                aria-hidden="true"
                className="absolute left-[36.45%] top-[21.26%] z-[2] aspect-square w-[25.15%]"
                initial={false}
                animate={
                  coreIsActive && !shouldReduceMotion
                    ? { scale: [1, 1.025, 1], rotate: [0, 2.5, 0], filter: "drop-shadow(0 5px 14px rgba(58,68,85,0.08))" }
                    : { scale: 1, rotate: 0, filter: "drop-shadow(0 0 0 rgba(58,68,85,0))" }
                }
                transition={{ duration: introRunning ? 0.8 : 0.55, delay: introRunning ? 0.62 : 0, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/bridging/lines/assurance-rings.svg" alt="" fill sizes="302px" loading="eager" unoptimized />
              </motion.span>

              <motion.div
                className="absolute left-[41.99%] top-[32.7%] z-10 aspect-square w-[14.09%] text-center"
                initial={false}
                animate={
                  coreIsActive && !shouldReduceMotion
                    ? { scale: [1, 1.04, 1], filter: "drop-shadow(0 12px 24px rgba(58,68,85,0.12))" }
                    : { scale: 1, filter: "drop-shadow(0 0 0 rgba(58,68,85,0))" }
                }
                transition={{ duration: introRunning ? 0.72 : 0.5, delay: introRunning ? 0.68 : 0, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/bridging/lines/core-surface.svg" alt="" fill sizes="170px" loading="eager" unoptimized />
                <span className="absolute left-[27.3%] top-[17.7%] h-[35.7%] w-[44.4%]">
                  <Image src="/bridging/icons/assurance-mark.svg" alt="" fill sizes="75px" loading="eager" unoptimized />
                </span>
                <p className="absolute inset-x-[24%] top-[59.7%] text-[14px] font-medium leading-[1.05] text-[#515151]">
                  Independent Assurance Layer
                </p>
              </motion.div>

              {controls.map((control) => (
                <motion.div
                  key={control.label}
                  tabIndex={0}
                  onPointerEnter={() => {
                    setActiveGroup("controls");
                    setActiveControl(control.label);
                  }}
                  onPointerLeave={() => {
                    setActiveGroup(null);
                    setActiveControl(null);
                  }}
                  onFocus={() => {
                    setActiveGroup("controls");
                    setActiveControl(control.label);
                  }}
                  onBlur={() => {
                    setActiveGroup(null);
                    setActiveControl(null);
                  }}
                  initial={false}
                  animate={{
                    y: activeControl === control.label ? -4 : 0,
                    scale:
                      activeControl === control.label
                        ? 1.04
                        : introRunning && !shouldReduceMotion
                          ? [1, 1.055, 1]
                          : 1,
                    opacity:
                      activeGroup !== null && activeGroup !== "controls"
                        ? 0.7
                        : activeControl && activeControl !== control.label
                          ? 0.75
                          : 1,
                  }}
                  transition={{
                    duration: introRunning ? 0.45 : 0.28,
                    delay: introRunning ? 0.76 + controls.indexOf(control) * 0.08 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`${control.className} absolute z-20 flex flex-col items-center gap-2 text-center outline-none focus-visible:ring-2 focus-visible:ring-slate-300`}
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#e6e6e6] bg-white shadow-[0_3px_10px_rgba(30,37,48,0.04)] transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_10px_24px_rgba(30,37,48,0.1)]">
                    <AssetIcon name={control.icon} size={29} />
                  </span>
                  <span className="text-[12px] font-medium leading-[1.1] text-[#515151]">{control.label}</span>
                </motion.div>
              ))}

              <OutputStack
                title="VALIDATING OUTPUT"
                items={validationItems}
                group="validation"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="right-[3.2%] top-[4.7%]"
                introRunning={introRunning}
                introOffset={1.18}
              />
              <OutputStack
                title="Assurance Report"
                subtitle="Audit-ready evidence"
                items={reportItems}
                group="report"
                activeGroup={activeGroup}
                setActiveGroup={setActiveGroup}
                className="right-[3.2%] top-[51%]"
                introRunning={introRunning}
                introOffset={1.42}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

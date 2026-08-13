"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ShieldCheckIcon } from "@/components/ui/shield-check";
import { CompassIcon } from "@/components/ui/compass";
import { GraduationCapIcon } from "@/components/ui/graduation-cap";
import { BlocksIcon } from "@/components/ui/blocks";

const capabilities = [
  {
    title: "AI Assurance & Validation",
    icon: ShieldCheckIcon,
    description: "Our flagship capability. We evaluate AI systems for reliability, safety, and compliance against global standards. We provide the evidence needed to deploy with confidence.",
    tags: ["Risk Assessment", "Model Validation", "Compliance"],
  },
  {
    title: "AI Consulting & Strategy",
    icon: CompassIcon,
    description: "Strategic guidance to navigate the complex AI landscape. We help organizations identify high-value use cases, build roadmaps, and establish robust AI governance models.",
    tags: ["Governance", "Roadmaps", "Use Case Discovery"],
  },
  {
    title: "Koderea Academy",
    icon: GraduationCapIcon,
    description: "Practitioner-led learning experiences designed to upskill enterprise teams in practical AI engineering and responsible governance.",
    tags: ["Corporate Training", "Workshops", "Upskilling"],
  },
  {
    title: "AI Software Solutions",
    icon: BlocksIcon,
    description: "Targeted, selective software engineering to integrate AI capabilities securely within your existing enterprise architecture.",
    tags: ["Integration", "Custom Engineering", "Deployment"],
  },
];

const panelVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 28,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -20,
  }),
};

export function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const shouldReduceMotion = useReducedMotion();

  const activateTab = (index: number) => {
    if (index === activeTab) return;

    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const selectAndFocusTab = (index: number) => {
    activateTab(index);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (index + 1) % capabilities.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = (index - 1 + capabilities.length) % capabilities.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = capabilities.length - 1;
        break;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectAndFocusTab(nextIndex);
    }
  };

  return (
    <section id="capabilities" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          className="mb-16 md:mb-24"
        >
          <h2 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
            Our Capabilities
          </h2>
          <p className="max-w-2xl text-xl leading-[1.3] text-muted">
            A comprehensive ecosystem designed to guide your organization from initial strategy to secure, validated deployment.
          </p>
        </motion.div>

        <div className="grid min-w-0 grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-24">
          <LayoutGroup id="capability-tabs">
            <div role="tablist" aria-label="Koderea capabilities" aria-orientation="vertical" className="flex flex-col gap-2 xl:col-span-5">
              {capabilities.map((cap, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cap.title}
                    ref={(element) => {
                      tabRefs.current[idx] = element;
                    }}
                    id={`capability-tab-${idx}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`capability-panel-${idx}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => activateTab(idx)}
                    onKeyDown={(event) => handleTabKeyDown(event, idx)}
                    className="relative isolate flex items-center gap-4 rounded-2xl border border-transparent p-4 text-left transition-colors duration-300 hover:bg-slate-100/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  >
                    {isActive && (
                      <motion.span
                        layoutId={shouldReduceMotion ? undefined : "capability-tab-highlight"}
                        className="absolute inset-0 -z-10 rounded-2xl border border-slate-100 bg-paper shadow-sm"
                        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38, mass: 0.7 }}
                      />
                    )}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper text-muted">
                      {isActive && (
                        <motion.span
                          layoutId={shouldReduceMotion ? undefined : "capability-icon-highlight"}
                          className="absolute inset-0 rounded-xl bg-foreground"
                          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38, mass: 0.7 }}
                        />
                      )}
                      <cap.icon
                        aria-hidden="true"
                        size={20}
                        className={`relative h-5 w-5 transition-colors duration-300 motion-reduce:pointer-events-none ${isActive ? "text-background" : "text-muted"}`}
                      />
                    </div>
                    <span className={`relative text-lg font-medium transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted"}`}>
                      {cap.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="flex min-w-0 items-center xl:col-span-7">
            <div className="w-full overflow-hidden rounded-3xl border border-slate-100 bg-paper p-8 shadow-sm focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-foreground md:min-h-[32rem] md:p-12">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={activeTab}
                  id={`capability-panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`capability-tab-${activeTab}`}
                  tabIndex={0}
                  custom={direction}
                  variants={shouldReduceMotion ? undefined : panelVariants}
                  initial={shouldReduceMotion ? false : "enter"}
                  animate={shouldReduceMotion ? undefined : "center"}
                  exit={shouldReduceMotion ? undefined : "exit"}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="focus-visible:outline-none"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-light text-accent">
                    {React.createElement(capabilities[activeTab].icon, {
                      "aria-hidden": true,
                      size: 32,
                      className: shouldReduceMotion ? "pointer-events-none" : undefined,
                    })}
                  </div>
                  <h3 className="mb-6 text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-foreground">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="mb-8 text-xl leading-[1.3] text-muted">
                    {capabilities[activeTab].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {capabilities[activeTab].tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-100 bg-background px-4 py-2 text-sm font-medium text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

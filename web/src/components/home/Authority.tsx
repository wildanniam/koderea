"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MicIcon, type MicIconHandle } from "@/components/ui/mic";
import { BookTextIcon, type BookTextIconHandle } from "@/components/ui/book-text";
import { UsersIcon, type UsersIconHandle } from "@/components/ui/users";

type AuthorityIconHandle = MicIconHandle | BookTextIconHandle | UsersIconHandle;

export function Authority() {
  const shouldReduceMotion = useReducedMotion();
  const iconRefs = useRef<Array<AuthorityIconHandle | null>>([]);

  const items = [
    {
      icon: MicIcon,
      title: "Industry Speaking",
      desc: "Sharing insights on responsible AI adoption and risk frameworks at regional technology conferences.",
    },
    {
      icon: BookTextIcon,
      title: "Methodology First",
      desc: "Our assurance processes are built on globally recognized AI risk management frameworks (e.g., NIST AI RMF).",
    },
    {
      icon: UsersIcon,
      title: "In-House Training",
      desc: "We equip enterprise teams with the critical skills needed to evaluate, deploy, and govern AI safely.",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
            Authority & Methodology
          </h2>
          <p className="max-w-2xl text-xl leading-[1.3] text-muted">
            We don’t just implement technology. We establish the governance, capability, and validation frameworks required for sustainable AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.08fr_1fr_1fr]">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: idx * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => {
                if (!shouldReduceMotion) iconRefs.current[idx]?.startAnimation();
              }}
              onHoverEnd={() => iconRefs.current[idx]?.stopAnimation()}
              className="group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-paper p-7 shadow-[0_1px_2px_rgba(30,37,48,0.03)] transition-[border-color,box-shadow] duration-500 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(30,37,48,0.09)] md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-foreground transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
                <item.icon
                  ref={(handle) => {
                    iconRefs.current[idx] = handle;
                  }}
                  aria-hidden="true"
                  size={26}
                  className={shouldReduceMotion ? "pointer-events-none" : undefined}
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-foreground">{item.title}</h3>
                <p className="mt-4 leading-[1.3] text-muted">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

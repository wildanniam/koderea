"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Ready to secure your AI adoption?
          </h2>
          <p className="text-lg text-white/60">
            Start a conversation with our advisory team to discuss your validation, compliance, or strategy needs.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="mailto:info@koderea.id"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-foreground transition-transform hover:scale-105 motion-reduce:hover:scale-100"
          >
            Contact us at info@koderea.id
          </a>
        </motion.div>
      </div>
    </section>
  );
}

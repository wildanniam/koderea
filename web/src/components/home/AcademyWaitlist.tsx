"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { GraduationCapIcon } from "@/components/ui/graduation-cap";

export function AcademyWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="academy" aria-labelledby="academy-heading" className="border-t border-slate-100 bg-paper px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-16 w-16 bg-accent-light rounded-full flex items-center justify-center text-accent mb-8"
        >
          <GraduationCapIcon aria-hidden="true" size={32} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
        </motion.div>

        <motion.h2
          id="academy-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          className="mb-6 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]"
        >
          Koderea Academy
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1 }}
          className="mb-12 max-w-2xl text-xl leading-[1.3] text-muted"
        >
          Our practitioner-led curriculum is currently under development. Join the waitlist to be notified when our first cohorts on AI Engineering and Governance open for registration.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2 }}
          className="w-full max-w-md"
        >
          {isSubmitted ? (
            <div role="status" aria-live="polite" className="rounded-3xl border border-slate-100 bg-background p-6 text-left">
              <p className="font-semibold text-foreground">Waitlist preview complete.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                This demo form does not send or store your email. To register your interest now, contact{" "}
                <a className="font-medium text-foreground underline underline-offset-4" href="mailto:info@koderea.id?subject=Koderea%20Academy%20Waitlist">
                  info@koderea.id
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setEmail("");
                  setIsSubmitted(false);
                }}
                className="mt-4 text-sm font-medium text-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Enter another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left">
              <label htmlFor="academy-email" className="mb-2 block text-sm font-medium text-foreground">
                Email address
              </label>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                <input
                  id="academy-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-describedby="academy-form-note"
                  placeholder="you@company.com"
                  className="h-12 min-w-0 flex-1 rounded-full border border-slate-100 bg-background px-6 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:rounded-r-none"
                />
                <button
                  type="submit"
                  className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-accent focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:rounded-l-none"
                >
                  Join Waitlist
                  <ArrowRightIcon aria-hidden="true" size={16} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
                </button>
              </div>
              <p id="academy-form-note" className="mt-3 text-center text-xs leading-relaxed text-muted">
                Demo only: submitting previews the confirmation state. No email is sent or stored.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

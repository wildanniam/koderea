"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right";
import { MenuIcon } from "@/components/ui/menu";
import { XIcon } from "@/components/ui/x";

const navigation = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#assurance", label: "Assurance" },
  { href: "#academy", label: "Academy" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const hasSurface = isScrolled || isMobileMenuOpen;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && isMobileMenuOpen) {
      closeMobileMenu();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onKeyDown={handleKeyDown}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b px-6 py-5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 md:px-12 lg:px-24 ${
        hasSurface
          ? "border-black/5 bg-background/85 shadow-[0_8px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link href="/" onClick={closeMobileMenu} className="text-xl font-bold tracking-tight">
          KODEREA
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          Contact
        </Link>
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-black/20 hover:bg-accent-light"
        >
          Start a conversation
          <ArrowUpRightIcon aria-hidden="true" size={16} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={`${isMobileMenuOpen ? "Close" : "Open"} navigation menu`}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition-colors hover:border-black/20 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:hidden"
        >
          {isMobileMenuOpen ? (
            <XIcon aria-hidden="true" size={20} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
          ) : (
            <MenuIcon aria-hidden="true" size={20} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile primary navigation"
          className="absolute inset-x-0 top-full border-b border-black/5 bg-background px-6 py-5 shadow-sm md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Start a conversation
              <ArrowUpRightIcon aria-hidden="true" size={16} className={shouldReduceMotion ? "pointer-events-none" : undefined} />
            </Link>
          </div>
        </nav>
      )}
    </motion.header>
  );
}

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { MenuIcon } from "@/components/ui/menu";
import { XIcon } from "@/components/ui/x";

const navigation = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#assurance", label: "Assurance" },
  { href: "#academy", label: "Academy" },
  { href: "#contact", label: "Contact" },
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
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-6 py-5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 md:px-10 ${
        hasSurface
          ? "border-slate-100/80 bg-background/88 shadow-[0_8px_30px_rgba(12,15,18,0.04)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="/"
          onClick={closeMobileMenu}
          aria-label="Koderea home"
          className="inline-flex shrink-0 items-center"
        >
          <Image
            src="/brand/logo-koderea.svg"
            alt="Koderea"
            width={191}
            height={48}
            priority
            className="h-7 w-auto"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 text-center text-sm font-medium uppercase leading-[1.1] tracking-[0.02em] text-slate-700 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={`${isMobileMenuOpen ? "Close" : "Open"} navigation menu`}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-paper text-foreground transition-colors hover:border-slate-300 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:hidden"
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
          className="absolute inset-x-0 top-full border-b border-slate-100 bg-background px-6 py-5 shadow-sm md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-slate-100/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </motion.header>
  );
}

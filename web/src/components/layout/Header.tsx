"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MenuIcon } from "@/components/ui/menu";
import { XIcon } from "@/components/ui/x";

type DropdownName = "solutions" | "resource";

const primaryLinks = [
  { href: "/product", label: "Product" },
  { href: "/academy", label: "Academy" },
  { href: "/events", label: "Event" },
];

const dropdowns = {
  solutions: {
    label: "Solutions",
    eyebrow: "Industries",
    width: "w-[162px]",
    items: [
      { href: "/solutions/healthcare", label: "Healthcare", icon: "/navigation/healthcare.svg" },
      { href: "/solutions/government", label: "Government", icon: "/navigation/government.svg" },
      { href: "/solutions/fintech", label: "Fintech", icon: "/navigation/fintech.svg" },
    ],
  },
  resource: {
    label: "Resource",
    width: "w-[126px]",
    items: [
      { href: "/resources/about", label: "About us", icon: "/navigation/about.svg" },
      { href: "/resources/press", label: "Press", icon: "/navigation/press.svg" },
      { href: "/resources/blog", label: "Blog", icon: "/navigation/blog.svg" },
    ],
  },
} as const;

const desktopOrder: Array<{ type: "link"; index: number } | { type: "dropdown"; name: DropdownName }> = [
  { type: "link", index: 0 },
  { type: "dropdown", name: "solutions" },
  { type: "link", index: 1 },
  { type: "link", index: 2 },
  { type: "dropdown", name: "resource" },
];

const navItemClass =
  "relative inline-flex items-center gap-2 py-2 text-sm font-medium leading-[1.1] tracking-[0.02em] text-[#010101] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#010101] after:transition-transform after:duration-200 hover:text-slate-500 hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700";

function DesktopDropdown({
  name,
  openDropdown,
  setOpenDropdown,
}: {
  name: DropdownName;
  openDropdown: DropdownName | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<DropdownName | null>>;
}) {
  const config = dropdowns[name];
  const isOpen = openDropdown === name;

  const closeWhenFocusLeaves = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
      onFocus={() => setOpenDropdown(name)}
      onBlur={closeWhenFocusLeaves}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${name}-menu`}
        onClick={() => setOpenDropdown((current) => (current === name ? null : name))}
        className={navItemClass}
      >
        {config.label}
        <Image
          src="/navigation/chevron-down.svg"
          alt=""
          width={16}
          height={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${name}-menu`}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.985 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute right-0 top-[calc(100%+0.75rem)] rounded-lg border border-[#f3f3f4] bg-[#fcfcfc] p-3 shadow-[0_16px_40px_rgba(12,15,18,0.09)] ${config.width}`}
          >
            {"eyebrow" in config && (
              <p className="mb-5 text-xs font-semibold uppercase leading-[1.5] tracking-[0.04em] text-[#adadad]">
                {config.eyebrow}
              </p>
            )}
            <div className="flex flex-col gap-1">
              {config.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="group flex items-center gap-3 rounded-md px-1 py-2 text-base font-normal leading-[1.2] text-[#010101] transition-[background-color,color,transform] duration-200 hover:translate-x-0.5 hover:bg-slate-100/55 hover:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<DropdownName | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return;

    if (openDropdown) setOpenDropdown(null);
    if (isMobileMenuOpen) {
      closeMobileMenu();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      onKeyDown={handleKeyDown}
      className="fixed inset-x-0 top-0 z-50 flex h-[69px] items-center justify-between border-b border-[#f3f3f4] bg-paper/95 px-6 backdrop-blur-md md:px-10"
    >
      <Link
        href="/"
        onClick={closeMobileMenu}
        aria-label="Koderea home"
        className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
      >
        <Image
          src="/brand/logo-koderea.svg"
          alt="Koderea"
          width={123}
          height={28}
          priority
          className="h-7 w-auto"
        />
      </Link>

      <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
        {desktopOrder.map((item) => {
          if (item.type === "dropdown") {
            return (
              <DesktopDropdown
                key={item.name}
                name={item.name}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            );
          }

          const link = primaryLinks[item.index];
          return (
            <Link key={link.href} href={link.href} className={navItemClass}>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuOpen}
        aria-label={`${isMobileMenuOpen ? "Close" : "Open"} navigation menu`}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-paper text-foreground transition-colors hover:border-slate-300 hover:bg-slate-100/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 md:hidden"
      >
        {isMobileMenuOpen ? (
          <XIcon aria-hidden="true" size={20} />
        ) : (
          <MenuIcon aria-hidden="true" size={20} />
        )}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile primary navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full max-h-[calc(100svh-69px)] overflow-y-auto border-b border-[#f3f3f4] bg-paper px-6 py-5 shadow-[0_18px_40px_rgba(12,15,18,0.08)] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col">
              {desktopOrder.map((item) => {
                if (item.type === "link") {
                  const link = primaryLinks[item.index];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-slate-100/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                    >
                      {link.label}
                    </Link>
                  );
                }

                const config = dropdowns[item.name];
                const isOpen = openMobileGroup === item.name;
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-${item.name}-menu`}
                      onClick={() => setOpenMobileGroup((current) => (current === item.name ? null : item.name))}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-slate-100/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                    >
                      {config.label}
                      <Image
                        src="/navigation/chevron-down.svg"
                        alt=""
                        width={16}
                        height={16}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`mobile-${item.name}-menu`}
                          initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 flex flex-col border-l border-slate-100 py-1 pl-3">
                            {config.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-slate-700 transition-colors hover:bg-slate-100/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                              >
                                <Image src={subItem.icon} alt="" width={20} height={20} />
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

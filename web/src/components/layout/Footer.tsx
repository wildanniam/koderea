import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const navigation = [
    { href: "/product", label: "Product" },
    { href: "/solutions/healthcare", label: "Solutions" },
    { href: "/academy", label: "Academy" },
    { href: "/events", label: "Event" },
    { href: "/resources/about", label: "Resource" },
  ];

  return (
    <footer className="bg-foreground text-white/60 py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Image
            src="/brand/logo-koderea.svg"
            alt="Koderea"
            width={123}
            height={28}
            className="mb-3 h-7 w-auto brightness-0 invert"
          />
          <p className="text-sm">AI Advisory & Solutions Provider</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs">
        <p>© {new Date().getFullYear()} Koderea. All rights reserved.</p>
      </div>
    </footer>
  );
}

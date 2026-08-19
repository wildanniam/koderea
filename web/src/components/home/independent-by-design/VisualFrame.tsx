"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

const ASSET_BASE = "/home/independent-by-design";

/**
 * Shared shell for the three Section 5 illustrations.
 *
 * Provides the radial `#1A1A1A -> #010101` field, the masked pixel texture,
 * and the low-opacity noise overlay described in the asset map. Children are
 * placed on top with absolute percentage coordinates so the whole canvas
 * scales proportionally with the bento tile.
 */
export function VisualFrame({
  children,
  className,
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      style={{
        background:
          "radial-gradient(120% 120% at 62% 50%, #1A1A1A 0%, #0B0B0B 55%, #010101 100%)",
        ...style,
      }}
    >
      {/* Masked monochrome pixel texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `url(${ASSET_BASE}/texture.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: `url(${ASSET_BASE}/pixels.svg)`,
          maskImage: `url(${ASSET_BASE}/pixels.svg)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
      {/* Subtle noise overlay (Figma opacity 5%) */}
      <Image
        src={`${ASSET_BASE}/noise-effect-frame627340.png`}
        alt=""
        fill
        sizes="522px"
        className="object-cover opacity-[0.05]"
        priority={false}
      />
      {children}
    </div>
  );
}

export const assetUrl = (name: string) => `${ASSET_BASE}/${name}`;

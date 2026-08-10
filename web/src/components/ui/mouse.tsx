"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface MouseIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MouseIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WHEEL_VARIANTS: Variants = {
  normal: { opacity: 1, translateY: 0 },
  animate: {
    opacity: [1, 0.35, 1],
    translateY: [0, 3, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const MouseIcon = forwardRef<MouseIconHandle, MouseIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) onMouseEnter?.(event);
        else controls.start("animate");
      },
      [controls, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) onMouseLeave?.(event);
        else controls.start("normal");
      },
      [controls, onMouseLeave],
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="7" width="14" x="5" y="2" />
          <motion.path
            animate={controls}
            d="M12 6v4"
            initial="normal"
            variants={WHEEL_VARIANTS}
          />
        </svg>
      </div>
    );
  },
);

MouseIcon.displayName = "MouseIcon";

export { MouseIcon };

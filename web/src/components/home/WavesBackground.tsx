"use client";

import React, { useEffect, useRef } from "react";

export function WavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      // Set actual size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003; // Speed of the waves

      // Configuration for the lines (Silk effect)
      const lines = 8;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // The color is incredibly subtle for "Quiet Confidence" (black with 2-4% opacity)
        ctx.strokeStyle = `rgba(0, 0, 0, ${0.015 + (i * 0.003)})`;
        ctx.lineWidth = 1.5; // Slightly thicker for retina screens, but very transparent

        for (let x = 0; x <= canvas.width; x += 20) {
          // Complex sine wave function to make it look organic and fluid like silk
          const y =
            (canvas.height / 2) +
            Math.sin(x * 0.0015 + time + i * 0.3) * (canvas.height * 0.25) +
            Math.sin(x * 0.0008 - time * 0.5 + i * 0.5) * (canvas.height * 0.15);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}

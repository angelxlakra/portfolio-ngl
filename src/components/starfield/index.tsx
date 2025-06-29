"use client";

import { useEffect, useRef, useState } from "react";
import Star from "./star";
import { randomIntFromInterval } from "./utils";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const Starfield = ({
  style = {},
  size = 400,
  ...rest
}: {
  style?: object;
  size?: number;
}) => {
  const [bounds, setBounds] = useState({
    width: typeof window !== "undefined" ? window.innerWidth + 1000 : 2520,
    height: typeof window !== "undefined" ? window.innerHeight + 1000 : 1580,
    depth: 500,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? window?.innerWidth / 2 : 2520,
    y: typeof window !== "undefined" ? window?.innerHeight / 2 : 1580,
  });
  // Add a vanishing point ref for smooth interpolation
  const vanishingRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? window?.innerWidth / 2 : 2520,
    y: typeof window !== "undefined" ? window?.innerHeight / 2 : 1580,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setBounds({
        width: window.innerWidth,
        height: window.innerHeight,
        depth: 500,
      });
      // Also update mouse and vanishing point center
      mouseRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      vanishingRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize stars only once
  useEffect(() => {
    const stars: Star[] = [];
    for (let i = 0; i < size; i++) {
      stars.push(
        new Star(
          randomIntFromInterval(
            -1 * (bounds.width / 2 - 20),
            bounds.width / 2 - 20
          ),
          randomIntFromInterval(
            -1 * (bounds.height / 2 - 20),
            bounds.height / 2 - 20
          ),
          bounds,
          randomIntFromInterval(1, 500)
        )
      );
    }
    starsRef.current = stars;
  }, [bounds, size]);

  // Animation loop
  useEffect(() => {
    let animationFrameId: number;
    // Lerp function
    const lerp = (start: number, end: number, amt: number) =>
      start + (end - start) * amt;
    const animate = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = bounds.width + 1000;
        canvas.height = bounds.height + 1000;
        canvas.style.position = "fixed";
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Smoothly move vanishing point toward mouse
          vanishingRef.current.x = lerp(
            vanishingRef.current.x,
            mouseRef.current.x,
            0.1
          );
          vanishingRef.current.y = lerp(
            vanishingRef.current.y,
            mouseRef.current.y,
            0.1
          );
          const marginX = bounds.width * 0.15; // 15% margin on each side
          const marginY = bounds.height * 0.15;
          vanishingRef.current.x = clamp(
            vanishingRef.current.x,
            marginX,
            bounds.width - marginX
          );
          vanishingRef.current.y = clamp(
            vanishingRef.current.y,
            marginY,
            bounds.height - marginY
          );
          starsRef.current.forEach((star) => star.update(vanishingRef.current));
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [bounds]);

  return (
    <div style={{ overflow: "hidden", height: "300vh", ...style }} {...rest}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Starfield;

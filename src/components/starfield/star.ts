/**
 * Star particle class for creating animated starfield effects
 * Each star represents a single particle in a space-themed background animation
 */

import { calcDiagonal, randomIntFromInterval } from "./utils";
import gsap from "gsap";

export default class Star {
  // Current x position of the star (screen space coordinates)
  x: number;
  // Current y position of the star (screen space coordinates)
  y: number;
  // Distance from center for trail start (unprojected diagonal)
  ud: number;
  // Unprojected/origin x position of the star (for movement calculation and trail effect)
  ux: number;
  // Unprojected/origin y position of the star (for movement calculation and trail effect)
  uy: number;
  // Radius of the star (base size for rendering)
  radius: number;
  // Starting x position (for reset or reference purposes)
  sx: number;
  // Starting y position (for reset or reference purposes)
  sy: number;
  // Movement boundary (screen dimensions to keep star within view)
  bounds: { width: number; height: number };
  // Velocity in x direction (affects star size and movement speed)
  vx: number;
  // Current diagonal distance from center (used for movement)
  cd: number;
  // Opacity of the star
  opacity: number;
  // Scale of the star
  scale: number;

  /**
   * Creates a new star particle
   * @param x - Initial x coordinate
   * @param y - Initial y coordinate
   * @param bounds - Screen dimensions {width, height}
   * @param cd - Custom data parameter (currently unused)
   */
  constructor(
    x: number,
    y: number,
    bounds: { width: number; height: number },
    cd: number
  ) {
    // Initialize current position (rounded to integers for crisp rendering)
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    // Set unprojected position to current position initially
    this.ux = this.x;
    this.uy = this.y;
    // Set base radius for star size
    this.radius = 1;
    // Store starting position for potential reset functionality
    this.sx = this.x;
    this.sy = this.y;
    // Store screen bounds for positioning calculations
    this.bounds = bounds;
    // Initialize velocity (affects star size and movement)
    this.vx = 1;
    // Store custom data (used for diagonal distance from center)
    this.cd = cd;
    // Initialize unprojected diagonal (distance from center for trail start)
    this.ud = cd;
    this.opacity = 0;
    this.scale = 0;

    gsap.to(this, { opacity: 1, duration: 3, ease: "power2.out", delay: 9 });
    gsap.to(this, { scale: 1, duration: 2, ease: "back.out(2)", delay: 9 });
  }

  /**
   * Renders the star particle on the canvas
   * Draws both the star itself and a motion trail for visual effect
   * @param vanishingPoint - The current vanishing point (center of projection)
   */
  draw(vanishingPoint: { x: number; y: number }) {
    // Get the canvas element and its 2D rendering context
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      // Calculate screen-centered coordinates for current position
      const x = Math.floor(vanishingPoint.x + this.x);
      const y = Math.floor(vanishingPoint.y + this.y);
      // Calculate screen-centered coordinates for unprojected position (trail start)
      const ux = Math.floor(vanishingPoint.x + this.ux);
      const uy = Math.floor(vanishingPoint.y + this.uy);

      const maxDistance = calcDiagonal(this.bounds.width, this.bounds.height);

      const distance = calcDiagonal(this.x, this.y);

      const normalizedDistance = distance / maxDistance;

      ctx.save();
      ctx.globalAlpha = this.opacity;
      // Draw the star as a filled white circle
      ctx?.beginPath();
      ctx.fillStyle = "white";
      // Size varies with velocity - faster stars appear larger (depth effect)
      ctx?.arc(
        x,
        y,
        this.radius + normalizedDistance * 1.5 * this.scale,
        0,
        Math.PI * 2,
        false
      );
      ctx?.fill();
      ctx?.closePath();

      // Draw motion trail from unprojected to current position
      ctx?.beginPath();
      ctx.strokeStyle = "#ffe"; // Light yellow trail color
      ctx.lineWidth = this.radius * this.vx * 0.2; // Trail width matches star size
      ctx.moveTo(x, y); // Start at current position
      ctx.lineTo(ux, uy); // End at unprojected position
      ctx.stroke();
      ctx.closePath();

      ctx.restore();
    }
  }

  /**
   * Updates the star's position and velocity, and redraws it.
   * Handles both movement and reset when the star moves out of bounds.
   * @param vanishingPoint - The current vanishing point (center of projection)
   */
  update(vanishingPoint: { x: number; y: number }) {
    // If the star is out of the visible bounds, reset its position and properties
    if (
      Math.abs(this.x) > this.bounds.width / 2 ||
      Math.abs(this.y) > this.bounds.height / 2
    ) {
      // Randomize new position within the field (with a margin)
      this.x = randomIntFromInterval(
        (-1 * this.bounds.width) / 2 - 20,
        this.bounds.width / 2 - 20
      );
      this.y = randomIntFromInterval(
        (-1 * this.bounds.height) / 2 - 20,
        this.bounds.height / 2 - 20
      );
      // Reset unprojected position to new position
      this.ux = this.x;
      this.uy = this.y;
      // Reset velocity
      this.vx = 1;
      // Recalculate diagonal distance from center for new position
      this.cd = calcDiagonal(this.x, this.y);
      // Reset trail start distance
      this.ud = this.cd;
      this.opacity = 0;
      this.scale = 0;

      gsap.to(this, { opacity: 1, scale: 1, duration: 3, ease: "power2.out" });
    } else {
      // Calculate the distance from the center (hypotenuse)
      const h = calcDiagonal(this.x, this.y);
      // Calculate normalized direction (sin/cos) from center to current position
      const sin = this.x / h;
      const cos = this.y / h;
      // Move the star outward by increasing the hypotenuse (distance from center)
      this.cd = h + this.vx;
      // Calculate a slightly shorter distance for the trail's start
      this.ud = h - 0.5 * this.vx;
      // Update unprojected (trail start) position
      this.ux = sin * this.ud;
      this.uy = cos * this.ud;
      // Update current position to new location along the direction
      this.x = this.cd * sin;
      this.y = this.cd * cos;
      // Gradually increase velocity for acceleration effect
      this.vx += 0.03;
    }

    // Draw the star at its new position
    this.draw(vanishingPoint);
  }
}

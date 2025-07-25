import { useEffect, useRef } from "react";
import Star from "./star";
import { startStarfield } from "./star-new";
import gsap from "gsap";

const Starfield = ({
    style = {},
    size = 400,
    animateStars = false,
    ...rest
  }: {
    style?: object;
    size?: number;
    animateStars?: boolean;
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        startStarfield(canvas, {colorPalette: ['#ffffff', '#a8d0ff', '#ffe9a7', '#f0f8ff'], speed: 1, background: "#002"})
        gsap.fromTo(canvas, { opacity: 0 }, {opacity: 1, duration: 1.5, delay: 6, ease: "power2.out"})
    }, [])

    return (
        <div style={{ overflow: "hidden", height: "100vh", ...style }} {...rest}>
          <canvas ref={canvasRef} className="starCanvas" />
        </div>
      );
}

export default Starfield;
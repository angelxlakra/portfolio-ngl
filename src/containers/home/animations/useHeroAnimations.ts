import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import React from "react";

const useHeroAnimations = ({
  scope,
}: {
  scope: React.RefObject<HTMLDivElement | null>;
}) => {
  useGSAP(
    () => {
      gsap.registerPlugin(DrawSVGPlugin);
      gsap.fromTo(
        ".svg-circle",
        { drawSVG: "0", rotateZ: 90, transformOrigin: "center center" },
        {
          drawSVG: "100%",
          duration: 6,
          ease: "power1.inOut",
        }
      );

      gsap.to(".svg-circle", {
        strokeWidth: 0.3,
        strokeOpacity: 0.2,
        duration: 3,
        delay: 6,
        ease: "power3.Out",
      });

      gsap.to("#moonGradient stop", {
        stopOpacity: 1,
        duration: 3,
        delay: 4,
        ease: "power1.inOut",
      });

      gsap.fromTo(
        ".hero-image",
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1,
          delay: 3.2,
          ease: "power3.inOut",
        }
      );

      gsap.fromTo(
        ".nav-link",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          delay: 3.3,
          ease: "power3.inOut",
        }
      );

      const heroTextAnimations = [
        {
          delay: 0.5,
          duration: 1,
        },
        { delay: 1.2, duration: 1 },
        { delay: 1.5, duration: 1 },
        { delay: 2, duration: 1 },
        { delay: 3.2, duration: 1 },
      ];

      heroTextAnimations.forEach((animation, index) => {
        gsap.fromTo(
          `.hero-text-${index + 1}`,
          { opacity: 0 },
          { opacity: 1, ...animation, ease: "power1.inOut" }
        );
      });

      gsap.fromTo(
        ".hero-text-6",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          delay: 3.4,
          ease: "power3.inOut",
        }
      );

      const iconsAnimations = [
        {
          delay: 3.8,
          duration: 1,
        },
        { delay: 4.2, duration: 1 },
        { delay: 4.7, duration: 1 },
      ];

      const icons = document.querySelectorAll(".icons-item");

      iconsAnimations.forEach((animation, index) => {
        gsap.fromTo(
          icons[index],
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(100% at 50% 50%)",
            ...animation,
            ease: "power1.inOut",
          }
        );
      });

      gsap.fromTo(
        ".scene",
        {rotateY: 0, rotateZ: 10 },
        {rotateY: 360,  rotateZ: 10, duration: 30, delay: 1, ease: "linear" , repeat: -1}
      )

      gsap.fromTo(".moon", {y: 0, scale: 1}, {y: 1200, scale: 2.5, duration: 7, delay: 5, ease: "power1.inOut" })
      gsap.fromTo(".moon", {rotate: 0}, {rotate: 360, duration: 14, delay: 7, ease: "linear" , repeat: -1})
    },
    { scope, dependencies: [] }
  );
};



export default useHeroAnimations;

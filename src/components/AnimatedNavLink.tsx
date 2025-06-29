"use client";

import Link from "next/link";
import React, { useState } from "react";
import { easeInOut, easeOut, motion } from "motion/react";

const AnimatedNavLink = ({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href}>
        <motion.h3 className="text-2xl relative z-10 text-slate-300/100">
          <span>{text} </span>
          <motion.span
            className={`text-[24.4px] absolute text-green-600`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            variants={{
              noHover: { opacity: 0, top: 0, left: 0 },
              hover: { opacity: 1, top: 1, left: 1.5 },
            }}
            animate={isHovered ? "hover" : "noHover"}
            transition={{
              opacity: { duration: 1 },
              top: { duration: 1 },
              left: { duration: 1 },
              ease: easeOut,
            }}
          >
            {text}
          </motion.span>
        </motion.h3>
      </Link>
      <svg
        className="absolute bottom-0 left-0 w-full h-2 pointer-events-none"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 10 15 Q 25 5 40 15 Q 55 25 70 15 Q 85 5 90 15"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            pathLength: { duration: 0.6, ease: easeInOut },
            opacity: { duration: 0.3 },
          }}
        />
        {/* Pencil tip effect */}
        <motion.circle
          cx="90"
          cy="15"
          r="2"
          fill="#fbbf24"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            scale: { duration: 0.3, delay: 0.3 },
            opacity: { duration: 0.3, delay: 0.3 },
          }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedNavLink;

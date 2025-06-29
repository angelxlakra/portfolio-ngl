"use client";

import Starfield from "@/components/starfield";
import React from "react";
import { easeInOut, motion } from "motion/react";
import AnimatedNavLink from "@/components/AnimatedNavLink";

const Page = () => {
  return (
    <div className="relative">
      <div className="h-[100vh] w-[100vw] overflow-hidden relative">
        <Starfield
          style={{
            background: "#002",
          }}
        />
      </div>
      <div className="z-10 absolute top-0 left-0">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
          <div className="relative h-[750px] w-[750px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 750 750"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="375"
                cy="375"
                r="370"
                fill="none"
                stroke="rgba(148, 163, 184, 0.1)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 6, delay: 0.5 }}
              />
              <motion.circle
                cx="375"
                cy="375"
                r="370"
                fill="none"
                stroke="#94a3b8"
                strokeWidth={5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 5, ease: easeInOut, delay: 0.5 },
                  opacity: { duration: 1, delay: 0.5 },
                }}
              />
              <motion.circle
                cx="375"
                cy="375"
                r="370"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeOpacity="0.8"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: easeInOut,
                  delay: 2,
                }}
              />
            </svg>
            <motion.div
              animate={{ background: "rgba(98, 116, 142, 0.2)" }}
              transition={{
                delay: 5.5,
                duration: 3,
              }}
              className="flex flex-col justify-center items-center bg-transparent  h-[750px] w-[750px]  rounded-full  relative"
            >
              <div className="flex justify-center font-bold text-xl gap-x-6 mb-10 uppercase text-slate-300">
                <AnimatedNavLink href="#work" text="Work" color="red" />
                <AnimatedNavLink href="#about" text="about" color="green" />
                <AnimatedNavLink href="#contact" text="contact" color="blue" />
              </div>
              <div className="text-6xl text-slate-500 font-bold">
                <h1>
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 1.5,
                      x: 0,
                      y: 0,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                      position: "static",
                      left: "auto",
                      top: "auto",
                      translateX: "0%",
                      translateY: "0%",
                    }}
                    transition={{ ease: easeInOut, duration: 1 }}
                    className="text-slate-200"
                  >
                    Hi.
                  </motion.span>{" "}
                  <motion.span
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    I&apos;m{" "}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="relative inline-block text-slate-200"
                  >
                    <span className="relative">Angel </span>
                    <span className="text-[60.8px] absolute top-[3px] left-[2px] w-[500px] text-purple-600">
                      Angel
                    </span>
                  </motion.span>{" "}
                  <motion.span
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="relative inline-block text-slate-200"
                  >
                    <span className="relative"> Lakra!</span>
                    <span className="text-[60.8px] absolute top-[3px] left-[2px] w-[500px] text-purple-600">
                      Lakra!
                    </span>
                  </motion.span>
                </h1>
                <motion.h1
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 4 }}
                  className="text-5xl text-center text-slate-300"
                >
                  <span className="relative inline-block text-slate-200">
                    <span>Software </span>
                    <span className="text-[49px] absolute top-[2px] left-[1px] text-orange-600">
                      Software
                    </span>
                  </span>{" "}
                  <span className="relative inline-block text-slate-200">
                    <span>Developer</span>
                    <span className="text-[49px] absolute top-[2px] left-[1px] text-yellow-500">
                      Developer.
                    </span>
                  </span>
                </motion.h1>
              </div>
              <div className="opacity-0 mt-10">Dummy</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

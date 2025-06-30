"use client";

import Starfield from "@/components/starfield";
import React from "react";
import { easeInOut, easeOut, motion } from "motion/react";
import AnimatedNavLink from "@/components/AnimatedNavLink";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative max-w-screen min-h-screen overflow-x-hidden">
      <div className="h-screen w-screen overflow-hidden fixed">
        <Starfield
          style={{
            background: "#002",
          }}
        />
      </div>
      <div className="z-10 absolute top-0 left-0">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="relative h-[1000px] w-[1000px] flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="500"
                cy="500"
                r="370"
                fill="none"
                stroke="rgba(148, 163, 184, 0.1)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 6, delay: 0.5 }}
              />
              <motion.circle
                cx="500"
                cy="500"
                r="370"
                fill="none"
                stroke="#94a3b8"
                strokeWidth={5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, rotate: "90deg" }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 5, ease: easeInOut, delay: 0.5 },
                  opacity: { duration: 1, delay: 0.5 },
                }}
              />
              {/* <motion.circle
                cx="500"
                cy="500"
                r="375"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeLinecap="round"
                strokeOpacity="0.8"
                strokeDasharray="300 300"
                strokeDashoffset="0"
                initial={{ opacity: 1, scale: 1, rotate: "160deg" }}
                animate={{
                  opacity: [1, 1, 1, 1],
                  scale: [0.98, 1.02, 1.05, 0.98],
                  rotate: ["160deg", "200deg", "240deg", "280deg"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 8,
                }}
              /> */}
            </svg>
            <motion.div
              animate={{ background: "rgba(98, 116, 142, 0.2)" }}
              transition={{
                delay: 5.5,
                duration: 3,
              }}
              className="flex flex-col items-center bg-transparent  h-[750px] w-[750px]  rounded-full  relative"
            >
              <motion.div
                className="mb-7 mt-12 rounded-full overflow-hidden"
                initial={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                }}
                animate={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
                transition={{ duration: 1, delay: 5.8, ease: easeInOut }}
              >
                <Image
                  src="https://ik.imagekit.io/mkujdvvsu/Portfolio/Hero.png?updatedAt=1751274512422"
                  alt="hero"
                  width="200"
                  height="200"
                />
              </motion.div>
              <div className="flex justify-center font-bold text-xl gap-x-6 mb-6 uppercase text-slate-300 font-fraunces-bold">
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5, duration: 0.3, ease: easeInOut }}
                >
                  <AnimatedNavLink href="#work" text="Work" color="red" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5.3, duration: 0.3, ease: easeInOut }}
                >
                  <AnimatedNavLink href="#about" text="about" color="green" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5.6, duration: 0.3, ease: easeInOut }}
                >
                  <AnimatedNavLink
                    href="#contact"
                    text="contact"
                    color="blue"
                  />
                </motion.div>
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
                    className="inline-block"
                    animate={{
                      x: [0, 3, 5, 4, 0, -3, -5, -4, 0],
                      y: [0, 1, 0, -1, 0, 1, 0, -1, 0],
                      rotate: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      delay: 5,
                      duration: 6,
                      ease: "linear",
                    }}
                  >
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
                  </motion.span>
                </h1>
                <motion.h1
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 4 }}
                  className="text-5xl text-center text-slate-300"
                >
                  <motion.span
                    className="inline-block"
                    animate={{
                      x: [0, -3, -5, -4, 0, 3, 5, 4, 0],
                      y: [0, -1, 0, 1, 0, -1, 0, 1, 0],
                      rotate: [0, -1, -1.5, -1, 0, 1, 1.5, 1, 0],
                    }}
                    transition={{
                      delay: 5,
                      duration: 10,
                      ease: "linear",
                      repeat: Infinity,
                    }}
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
                  </motion.span>
                </motion.h1>
              </div>
              <motion.div
                className="mt-3 text-slate-400 text-xl font-semibold text-center font-fraunces"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 1, ease: easeOut }}
              >
                Developer by day, stargazer by night.
                <br /> Let’s build something out of this world.
              </motion.div>
              <div className="flex mt-5 absolute bottom-25">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 5.6, ease: easeInOut }}
                >
                  <Image
                    src="https://ik.imagekit.io/mkujdvvsu/Portfolio/react.png?updatedAt=1751274512323"
                    alt="react"
                    width={100}
                    height={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 5.7, ease: easeInOut }}
                >
                  <Image
                    src="https://ik.imagekit.io/mkujdvvsu/Portfolio/image.png?updatedAt=1751274819655"
                    alt="react"
                    width={100}
                    height={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 5.8, ease: easeInOut }}
                >
                  <Image
                    src="https://ik.imagekit.io/mkujdvvsu/Portfolio/tailwind.png?updatedAt=1751275324728"
                    alt="react"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-screen w-screen mx-40">
          <h1 className="font-fraunces-bold-italic text-[500px] text-slate-500 opacity-85 ">
            work
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;

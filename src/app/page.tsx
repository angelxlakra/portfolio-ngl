"use client";

import Starfield from "@/components/starfield/index-new";
import React, { useRef, useState } from "react";
import AnimatedNavLink from "@/components/AnimatedNavLink";
import Image from "next/image";
import useHomeAnimations from "@/containers/home/animations/useHeroAnimations";
import WorkCard from "@/containers/home/WorkCard";

type Work = {
  title: string;
  mockup: string;
  illustration: string;
  description: string;
  url: string;
  type: "CLIENT" | "PERSONAL";
}

const WORKS: Work[] = [
  {
    title: "antigravity",
    mockup: "https://ik.imagekit.io/mkujdvvsu/Portfolio/agproject-mockup.png?updatedAt=1752899534376",
    illustration: "https://ik.imagekit.io/mkujdvvsu/Portfolio/agproject(1).png?updatedAt=1752899534376",
    description: "AgProject is a web application that allows users to create and manage their projects.",
    url: "https://agproject.com",
    type: "CLIENT",
  },
]

const TECH_STACKS = [
  {
    name: "React",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/React.png?updatedAt=1752910410453",
  },
  {
    name: "Next",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/Next.png?updatedAt=1752910410562",
  },
  {
    name: "TypeScript",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/TS.png?updatedAt=1752910410621",
  },
  {
    name: "React",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/React.png?updatedAt=1752910410453",
  },
  {
    name: "Next",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/Next.png?updatedAt=1752910410562",
  },
  {
    name: "TypeScript",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/TS.png?updatedAt=1752910410621",
  },
  {
    name: "React",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/React.png?updatedAt=1752910410453",
  },
  {
    name: "Next",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/Next.png?updatedAt=1752910410562",
  },
  {
    name: "TypeScript",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/TS.png?updatedAt=1752910410621",
  },
  {
    name: "React",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/React.png?updatedAt=1752910410453",
  },
  {
    name: "Next",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/Next.png?updatedAt=1752910410562",
  },
  {
    name: "TypeScript",
    image: "https://ik.imagekit.io/mkujdvvsu/Portfolio/TS.png?updatedAt=1752910410621",
  },
]

const Page = () => {
  const [animateStars, setAnimateStars] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  useHomeAnimations({ scope: container });

  // const startStarsAnimation = () => {
  //   setAnimateStars(true);
  // };

  // const stopStarsAnimation = () => {
  //   setAnimateStars(false);
  // };
  return (
    <div>
      <div
        className="relative max-w-screen min-h-screen overflow-x-hidden"
        ref={container}
      >
        <div className="h-screen w-screen overflow-hidden fixed">
          <Starfield
            animateStars={animateStars}
            style={{
              background: "#002",
            }}
          />
        </div>
        <div className="h-[200px] w-screen fixed bottom-0 z[50]" style={{ zIndex: 50, backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))" }}>

        </div>
        <div className="z-10 absolute top-0 left-0">
          <div className="w-[100vw] h-[100vh] flex justify-center items-center perspective-[800px]">
            <div className="relative h-[1000px] w-[1000px] justify-center flex items-center flex-col">
              {/* moon */}
              <div className="absolute inset-0 z-20 translate-z-0 moon">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="moonGradient" cx="38%" cy="38%" r="65%">
                      <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0" />
                      <stop offset="60%" stopColor="#64748b" stopOpacity="0" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                    </radialGradient>
                    <filter
                      id="moonShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="30"
                        dy="40"
                        stdDeviation="30"
                        floodColor="#000"
                        floodOpacity="0.3"
                      />
                    </filter>
                  </defs>
                  <circle
                    className="circle-solid"
                    cx="500"
                    cy="500"
                    r="370"
                    fill="url(#moonGradient)"
                    stroke="rgba(148, 163, 184, 0.1)"
                    strokeWidth="2"
                  />
                  <circle
                    className="svg-circle"
                    cx="500"
                    cy="500"
                    r="370"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth={5}
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* text content */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">

                <div className="flex flex-col items-center bg-transparent h-[750px] w-[750px] rounded-full relative z-21">
                  <div className="mb-7 mt-12 rounded-full overflow-hidden hero-image">
                    <Image
                      src="https://ik.imagekit.io/mkujdvvsu/Portfolio/Hero.png?updatedAt=1751274512422"
                      alt="hero"
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className="flex justify-center font-bold text-xl gap-x-6 mb-6 uppercase text-slate-300 font-fraunces-bold">
                    <div className="nav-link">
                      <AnimatedNavLink href="#work" text="Work" color="red" />
                    </div>
                    <div className="nav-link">
                      <AnimatedNavLink href="#about" text="about" color="green" />
                    </div>
                    <div className="nav-link">
                      <AnimatedNavLink
                        href="#contact"
                        text="contact"
                        color="blue"
                      />
                    </div>
                  </div>
                  <div className="text-6xl text-slate-500 font-bold">
                    <h1>
                      <span className="text-slate-200 hero-text-1">Hi.</span>{" "}
                      <span className="hero-text-2">I&apos;m </span>
                      <span className="inline-block">
                        <span className="relative inline-block text-slate-200 hero-text-3">
                          <span className="relative">Angel </span>
                          <span className="text-[60.8px] absolute top-[3px] left-[2px] w-[500px] text-purple-600">
                            Angel
                          </span>
                        </span>{" "}
                        <span className="relative inline-block text-slate-200 hero-text-4">
                          <span className="relative"> Lakra!</span>
                          <span className="text-[60.8px] absolute top-[3px] left-[2px] w-[500px] text-purple-600">
                            Lakra!
                          </span>
                        </span>
                      </span>
                    </h1>
                    <h1 className="text-5xl text-center text-slate-300 hero-text-5">
                      <span className="inline-block">
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
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 text-slate-300 text-xl font-semibold text-center font-fraunces hero-text-6">
                    Developer by day, stargazer by night.
                    <br /> Let&apos;s build something out of this world.
                  </div>
                </div>
                {/* <div className="mt-5 absolute bottom-25 border border-red-300 z-[100] w-screen h-[100px]">
                  <div className="flex relative">
                  <div className="icons-item" style={{ transform: `rotateY(${0}deg)`}}>
                  <div className="relative border border-black">
                  <Image
                          src="https://ik.imagekit.io/mkujdvvsu/Portfolio/React.png?updatedAt=1752910410453"
                          alt="react"
                          width={100}
                          height={100}
                          className="absolute transform rotate-y-20 translate-x-[-10px]"
                        />
                      </div>
                    </div>
                    <div className="icons-item" style={{ transform: `rotateY(${20}deg)`}}>
                      <div className="relative">
                        <Image
                          src="https://ik.imagekit.io/mkujdvvsu/Portfolio/Next.png?updatedAt=1752910410562"
                          alt="react"
                          width={100}
                          height={100}
                          className="absolute transform -rotate-y-20 translate-x-[10px]"
                        />
                      </div>
                    </div>
                    <div className="icons-item" style={{ transform: `rotateY(${340}deg)`}}>
                      <div className="relative">
                        <Image
                          src="https://ik.imagekit.io/mkujdvvsu/Portfolio/TS.png?updatedAt=1752910410621"
                          alt="react"
                          width={100}
                          height={100}
                          className="absolute transform rotate-y-10 translate-x-[-5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* tech stack banner */}

              {/* <div className="scene transform-3d relative w-[300px] h-[300px]">
                {TECH_STACKS.map((techStack, index) => (
                  <div key={`${index}-${techStack.name}`}
                    className="icons-item  flex flex-col items-center justify-center absolute"
                    style={{ transform: `rotateY(${index * 60}deg) translateZ(400px)` }}
                  >
                    <Image
                      src={techStack.image}
                      alt={techStack.name}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="h-screen w-screen md:mx-20">
            <h1 className="font-fraunces-bold-italic text-[500px] text-slate-500 opacity-85 " >
              work
            </h1>
            <div className="grid grid-cols-2 gap-24 w-[80vw] -mt-72">
              {WORKS.map((work) => (
                <WorkCard key={work.title} {...work} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

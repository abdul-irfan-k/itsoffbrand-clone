"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import ProjectList from "./ProjectList";

const ProjectContainer = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "end end"],
    smooth: 10,
  });

  const containerScale = useTransform(scrollYProgress, [0, 1], [0.9, 0.7]);

  const containerZTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [1500, 4000]
  );

  const paragraphTranslate = useTransform(
    scrollYProgress,
    [0, 0.02, 0.4, 0.42],
    ["100%", "0%", "0%", "100%"]
  );

  return (
    <div
      className="relative w-screen h-[300vh] bg-[#1d1d1d] text-slate-50 flex  items-start  "
      ref={container}
      style={{ position: "relative" }}
    >
      <div
        className="sticky top-[1vh]  mx-auto w-full "
        style={{
          width: "40vw",
          perspective: "4000px",
        }}
      >
        <motion.div
          className="relative grid grid-cols-8 gap-[1.25rem] "
          style={{
            scale: containerScale,
            translateZ: containerZTransform,
            perspective: "4000px",
          }}
        >
          <ProjectList scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>
      <div className="fixed  gap-3 left-[2%]  bottom-[10%] flex flex-col  text-6xl font-medium">
        <div className="overflow-hidden">
          <motion.div style={{ translateY: paragraphTranslate }}>
            ELEVATING
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ translateY: paragraphTranslate }}>
            BRANDS IN
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ translateY: paragraphTranslate }}>
            UNEXPECTED
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ translateY: paragraphTranslate }}>
            WAYS.
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute"> */}
      {/* </div> */}
    </div>
  );
};

export default ProjectContainer;

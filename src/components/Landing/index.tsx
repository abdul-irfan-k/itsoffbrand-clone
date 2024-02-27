"use client";

import React, { useEffect, useRef, useState } from "react";
import LandingIcon from "../icons/LandingIcon";
import Canvas from "../Canvas";
import { useMotionValue, useTransform, motion } from "framer-motion";

interface LandingProps {
  children: React.ReactNode;
}
const Landing = ({ children }: LandingProps) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // const motionValues = { width: useMotionValue(0), height: useMotionValue(0) };
  // const widthTransform = useTransform(motionValues.width,[0,])

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
  }, []);

  const svgPathRef = useRef<SVGPathElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!svgPathRef.current || !canvasContainerRef.current) return;
  }, [svgPathRef.current, canvasContainerRef.current]);

  return (
    <div >
      <div className="z-10">{isPageLoaded && children}</div>
      {/* {!isPageLoaded && ( */}
      <div className="relative z-[-10]">
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center  ">
          <div className="w-[30%] aspect-square ">
            <Canvas svgPathRef={svgPathRef} isPageLoaded={isPageLoaded} />
            <motion.div
              variants={{
                active: {
                  opacity: 1,
                },
                notActive: {
                  opacity: 0,
                },
              }}
              initial="active"
              animate={!isPageLoaded ? "active" : "notActive"}
            >
              <LandingIcon ref={svgPathRef} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* )} */}
    </div>
  );
};

export default Landing;

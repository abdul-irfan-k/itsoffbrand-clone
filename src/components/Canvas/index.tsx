"use client";
import React, { useRef, useEffect } from "react";
import { CanvasAnimator } from "./canvas";
import { useScroll, useTransform, motion } from "framer-motion";


const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window == undefined) return;
    const canvas = canvasRef.current;
    if (!canvas || !canvasContainerRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvasRef.current.width = canvasContainerRef.current.clientWidth;
    canvasRef.current.height = canvasContainerRef.current.clientHeight;
    const test = new CanvasAnimator(
      ctx,
      canvasContainerRef.current.getBoundingClientRect().width,
      canvasContainerRef.current.getBoundingClientRect().width,
      // canvasContainerRef.current.getBoundingClientRect().height
    );

    return () => {};
  }, [canvasRef.current]);

  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.19, 0.2, 0.21, 0.25, 0.3, 0.4, 0.44, 0.46, 0.52],
    [1, 2, 2, 1.5, 1.5, 0.1, 0.1, 1, 1, 1.5, 1.5, 0.4]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.07, 0.1, 0.17, 0.2, 0.21, 0.4, 0.44, 0.47, 0.52],
    [
      "0%",
      "100%",
      "100%",
      "-100%",
      "-100%",
      "0%",
      "0%",
      "-100%",
      "-100%",
      "-125%",
    ]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0.2, 0.211, 0.23, 0.27, 0.36, 0.37, 0.47, 0.52],
    ["0%", "70%", "70%", "40%", "40%", "0%", "0%", "-100%"]
  );

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center   ">
        <motion.div
          className="relative w-[40vw]  aspect-square block  rounded-full overflow-hidden  mx-auto rotate z-[-1]"
          // style={{ scale, x: translateX, y: translateY }}
          style={{
            scale: scale,
            x: translateX , 
            y: translateY 
          }}
          ref={canvasContainerRef}
        >
          <div
            className="relative w-[40vw] aspect-square rounded-full  "
            // style={{ animation: "rotateX 10s infinite linear" }}
          >
            <canvas
              ref={canvasRef}
              // onClick={(e) => {
              //   console.log("e", scrollYProgress);
              // }}
            />
            ;
          </div>
        </motion.div>
    </div>
  );
};

export default Canvas;

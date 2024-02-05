"use client";
import React, { useRef, useEffect } from "react";
import { CanvasAnimator } from "./canvas";

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
    const test = new CanvasAnimator(ctx, window.innerWidth, window.innerHeight);
  }, [canvasRef.current]);

  return (
    <div className="relative w-full h-screen flex items-center  ">
      <div
        className="relative w-[40%]  aspect-square block bg-red-300 mx-auto"
        ref={canvasContainerRef}
      >
        <canvas ref={canvasRef} />;
      </div>
    </div>
  );
};

export default Canvas;

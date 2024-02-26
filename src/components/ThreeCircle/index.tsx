"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeCircle = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window == undefined) return;
    if (!canvasContainerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 85;

    const geometry = new THREE.SphereGeometry(30, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color:
        "red",
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    scene.add(camera);
    // Render the scene and camera
    renderer.render(scene, camera);

    canvasContainerRef.current?.appendChild(renderer.domElement);
    // renderScene()
  }, [canvasContainerRef.current]);

  return (
    <div className="relative w-full h-screen flex items-center  ">
      <div
        className="relative w-[40%]  aspect-square block  mx-auto"
        ref={canvasContainerRef}
      >
        {/* <canvas ref={canvasRef} /> */}
      </div>
    </div>
  );
};

export default ThreeCircle;

"use client";
import React, { useEffect, useRef } from "react";
//@ts-ignore
import * as THREE from 'three';


const ThreeScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!containerRef.current)return 
    if (typeof window !== "undefined") {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 'red' });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const renderScene = () => {
            // cube.rotation.x += 0.01;
            cube.rotation.z += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
          };


          renderScene()
    }
  }, [containerRef.current]);

  return <div ref={containerRef} />;
};

export default ThreeScreen;

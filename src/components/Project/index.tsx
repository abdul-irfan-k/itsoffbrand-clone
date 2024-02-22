"use client";
import React, { useRef } from "react";
import Video from "../Shared/Video";
import { useScroll, motion, useTransform } from "framer-motion";

const projects: Array<project> = [
  { url: "OFF_siteclips_2.mp4" },
  { url: "OFF_siteclips_4.mp4" },
  { url: "OFF_siteclips_5.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_11.mp4" },
  { url: "OFF_siteclips_13.mp4" },
  { url: "OFF_siteclips_14.mp4" },
  { url: "OFF_siteclips_7.mp4" },
  { url: "OFF_siteclips_11.mp4" },
];
// translate(-24.0408%, -72.7957%) translate3d(0px, 0px, -3770.78px) rotateX(-36.835deg)

const ProjectContainer = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const containerScale = useTransform(scrollYProgress, [0, 1], [0.9, 0.7]);
  const containerZTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [1500, 6000]
  );

  const translateRightSpeed3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "180%"]
  );
  const translateRightSpeed2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "90%"]
  );
  const translateRightSpeed1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["30%", "80%"]
  );

  const translateLeftSpeed3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "-180%"]
  );
  const translateLeftSpeed2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-90%"]
  );
  const translateLeftSpeed1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-30%", "-80%"]
  );

  const translateTopSpeed1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-9%", "-80%"]
  );
  const translateTopSpeed2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0%", "-110%"]
  );
  const translateTopSpeed3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "-140%"]
  );
  const translateBottomSpeed1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["9%", "80%"]
  );
  const translateBottomSpeed2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "110%"]
  );
  const translateBottomSpeed3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "140%"]
  );

  const trans = [
    { z: "-1176.66", x: translateRightSpeed1, y: translateTopSpeed2 },
    { z: "-3944.67", x: translateBottomSpeed1, y: translateTopSpeed1 },
    { z: "-5504.65", x: translateBottomSpeed2, y: translateTopSpeed1 },
    { z: "-1369.42", x: translateRightSpeed2, y: translateTopSpeed2 },
    { z: "-4828.63", x: translateRightSpeed1, y: translateTopSpeed1 },
    { z: "-2777.02", x: translateRightSpeed2, y: translateTopSpeed1 },
    { z: "-1914.92", x: translateRightSpeed2, y: translateTopSpeed1 },
    { z: "-631.006", x: translateRightSpeed3, y: translateTopSpeed3 },
    { z: "-916.672", x: translateLeftSpeed2, y: translateTopSpeed2 },
    { z: "-775.701", x: translateLeftSpeed2, y: translateTopSpeed2 },
    { z: "-1124.19", x: translateLeftSpeed1, y: translateTopSpeed3 },
    { z: "-4449.95", x: translateRightSpeed1, y: translateTopSpeed1 },
    { z: "-5958.03", x: translateRightSpeed2, y: translateTopSpeed1 },
    { z: "-483.364", x: translateRightSpeed3, y: translateTopSpeed3 },
    { z: "-1782.64", x: translateRightSpeed1, y: translateTopSpeed2 },
    { z: "-5261.55", x: translateRightSpeed2, y: translateTopSpeed2 },
    { z: "-1435.88", x: translateRightSpeed1, y: translateTopSpeed2 },
    { z: "-4286.44", x: translateLeftSpeed1, y: translateTopSpeed1 },
    { z: "-2126.23", x: translateLeftSpeed1, y: translateTopSpeed1 },
    { z: "-3712.8", x: translateLeftSpeed1, y: translateTopSpeed1 },
    { z: "-4035.84", x: translateRightSpeed1, y: translateTopSpeed2 },
    { z: "-4501.96", x: translateRightSpeed2, y: translateTopSpeed2 },
    { z: "-3550", x: translateRightSpeed1, y: translateTopSpeed1 },
    { z: "-4375.3", x: translateRightSpeed3, y: translateTopSpeed2 },
    { z: "-3232.65", x: translateLeftSpeed2, y: translateBottomSpeed1 },
    { z: "-2362.98", x: translateLeftSpeed2, y: translateBottomSpeed2 },
    { z: "-733.66", x: translateRightSpeed1, y: translateBottomSpeed1 },
    { z: "-4360.55", x: translateLeftSpeed2, y: translateBottomSpeed1 },
    { z: "-4747.02", x: translateLeftSpeed1, y: translateTopSpeed1 },
    { z: "-1064.6", x: translateRightSpeed2, y: translateTopSpeed2 },
    { z: "-3320.01", x: translateRightSpeed3, y: translateBottomSpeed2 },
    { z: "-1743.81", x: translateRightSpeed3, y: translateBottomSpeed3 },
    { z: "-4544.66", x: translateLeftSpeed2, y: translateBottomSpeed1 },
    { z: "-2555.54", x: translateLeftSpeed3, y: translateBottomSpeed1 },
    { z: "-5861.88", x: translateRightSpeed1, y: translateTopSpeed1 },
    { z: "-4641.32", x: translateRightSpeed1, y: translateTopSpeed1 },
    { z: "-2240.72", x: translateRightSpeed3, y: translateBottomSpeed2 },
    { z: "-147.191", x: translateRightSpeed2, y: translateBottomSpeed2 },
    { z: "-1692.58", x: translateTopSpeed3, y: translateRightSpeed3 },
    { z: "-2456.48", x: translateRightSpeed3, y: translateBottomSpeed2 },
    { z: "-1892.15", x: translateLeftSpeed3, y: translateBottomSpeed2 },
    { z: "-3714.26", x: translateLeftSpeed1, y: translateBottomSpeed1 },
    { z: "-4867.79", x: translateRightSpeed1, y: translateBottomSpeed3 },
    { z: "-542.001", x: translateBottomSpeed3, y: translateRightSpeed2 },
    { z: "-3066.54", x: translateLeftSpeed2, y: translateBottomSpeed1 },
    { z: "-1361.98", x: translateRightSpeed3, y: translateBottomSpeed1 },
    { z: "-986.363", x: translateLeftSpeed1, y: translateBottomSpeed2 },
    { z: "-4679.52", x: translateRightSpeed1, y: translateBottomSpeed1 },
  ];

  return (
    <div
      className="relative w-screen h-[200vh] bg-black text-slate-50 flex  items-start "
      ref={container}
      style={{ position: "relative" }}
    >
      <div
        className="sticky top-[50vh]  mx-auto"
        style={{
          width: "40vw",
          perspective: "4000px",
        }}
      >
        <motion.div
          className="relative grid grid-cols-8 gap-[1.25rem] "
          style={{
            scale: containerScale,
            //   transform: " translate3d(0px, 0px, 1841.58px) ",
            translateZ: containerZTransform,
          }}
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                style={{
                  transformOrigin: "50% 0%",
                  // transform: trans[index],
                  height: "5em",
                  aspectRatio: "14/9",
                  translateZ: trans[index].z,
                  translateX: trans[index].x,
                  translateY: trans[index].y,
                }}
              >
                <Video
                  src={"/Asset/Video/" + project.url}
                  autoPlay
                  muted
                  loop
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectContainer;

interface project {
  url: string;
}

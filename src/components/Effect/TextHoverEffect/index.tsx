"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import {
  sildeBottomToNormal,
  sildeLeftToNormal,
  sildeNormalToRight,
  sildeNormalToTop,
  widthAnimation,
} from "./anim";

interface TextHoverEffectProps {
  children: React.ReactNode;
  wordGap?: string;
  rightIcon?: React.ReactNode;
  isContainUnderLineAnimation?: boolean;
}

const TextHoverEffect = ({
  children,
  wordGap,
  rightIcon,
  isContainUnderLineAnimation,
}: TextHoverEffectProps) => {
  const words = children?.toString().split(" ");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={"items-center relative flex " + (wordGap ? wordGap : "gap-3")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words != undefined &&
        words.map((word, index) => {
          return (
            <div className="flex overflow-hidden" key={index}>
              {word
                .toString()
                .split("")
                .map((character, i) => {
                  const customDelay = i % 2 == 0 ? i * 0.05 : 0.15 + i * 0.05;
                  return (
                    <div key={index} className="relative">
                      <motion.div
                        className="relative"
                        variants={sildeNormalToTop}
                        custom={customDelay}
                        animate={isHovered ? "active" : "notActive"}
                        transition={{ ease: "easeInOut" }}
                      >
                        {character}
                      </motion.div>
                      <motion.div
                        className="absolute top-0 left-0"
                        variants={sildeBottomToNormal}
                        custom={customDelay}
                        animate={isHovered ? "active" : "notActive"}
                        transition={{ ease: "easeInOut" }}
                      >
                        {character}
                      </motion.div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      {rightIcon != undefined && (
        <div className="relative overflow-hidden">
          <motion.div
            className="relative"
            variants={sildeNormalToRight}
            animate={isHovered ? "active" : "notActive"}
            transition={{ ease: "easeInOut" }}
          >
            {rightIcon}
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={sildeLeftToNormal}
            animate={isHovered ? "active" : "notActive"}
            transition={{ ease: "easeInOut" }}
          >
            {rightIcon}
          </motion.div>
        </div>
      )}

      {isContainUnderLineAnimation && (
        <motion.div
          className="absolute h-[2px] bottom-0 bg-neutral-300 rounded-full left-0"
          variants={widthAnimation}
          animate={isHovered ? "active" : "notActive"}
          transition={{ ease: "easeInOut" }}
        ></motion.div>
      )}
    </div>
  );
};

export default TextHoverEffect;

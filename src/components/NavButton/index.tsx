"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  initialSlideDown,
  navBarWidthAnimation,
  navButtonAnimationVariants,
} from "./anim";
import { FaArrowRight } from "react-icons/fa";
import TextHoverEffect from "../Effect/TextHoverEffect";

const Navbar = () => {
  const [isNavButtonClicked, setIsNavButtonClicked] = useState(false);
  return (
    <div className="fixed bottom-5 flex items-end w-full h-auto uppercase ">
      <motion.div
        className="absolute right-5 gap-2 w-[3.3%] aspect-square  bg-[#1d1d1d]  rounded-md flex flex-col items-center  justify-center z-[60]"
        onClick={() => setIsNavButtonClicked(!isNavButtonClicked)}
        variants={{
          active: {
            border: "none",
          },
          notActive:{
            border:"1px solid rgb(115 115 115 / var(--tw-border-opacity)) "
          }
        }}
        animate={isNavButtonClicked ? "active":"notActive"}
      >
        <motion.span
          className="absolute w-[60%] h-[3px] bg-neutral-200 rounded-md block"
          variants={navButtonAnimationVariants}
          animate={isNavButtonClicked ? "active" : "notActive"}
          custom={45}
        ></motion.span>
        <motion.span
          className="absolute w-[60%] h-[3px] bg-neutral-200 rounded-md block"
          animate={isNavButtonClicked ? "activeMiddleElement" : "notActive"}
          variants={navButtonAnimationVariants}
        ></motion.span>
        <motion.span
          className="absolute w-[60%] h-[3px] bg-neutral-200 rounded-md block"
          animate={isNavButtonClicked ? "active" : "notActive"}
          custom={-45}
          variants={navButtonAnimationVariants}
        ></motion.span>
      </motion.div>

      <motion.div
        className="absolute px-5 py-5 right-5  bottom-0 w-[16%]  block border-[1px] text-neutral-200 border-neutral-500 bg-[#1d1d1d  "
        variants={navBarWidthAnimation}
        initial="initial"
        animate={isNavButtonClicked ? "active" : "notActive"}
      >
        <div className="gap-2 flex flex-col text-lg">
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={1}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                Home
              </TextHoverEffect>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={2}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                About-us
              </TextHoverEffect>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={3}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                work
              </TextHoverEffect>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={4}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                service
              </TextHoverEffect>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={5}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                contact
              </TextHoverEffect>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={initialSlideDown}
              custom={6}
              animate={isNavButtonClicked ? "active" : "notActive"}
              initial="initial"
            >
              <TextHoverEffect
                isContainUnderLineAnimation
                rightIcon={<FaArrowRight className="text-[14px]" />}
                wordGap="justify-between"
              >
                manifesto
              </TextHoverEffect>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-10 mb-20"
          initial="notActive"
          animate={isNavButtonClicked ? "active" : "notActive"}
          variants={{
            notActive: { margin: 0 },
            active: {
              margin: "2.5rem 0 5rem 0",
            },
          }}
        >
          <div className="gap-3 flex items-center">
            <div className="overflow-hidden">
              <motion.div
                variants={initialSlideDown}
                custom={7}
                animate={isNavButtonClicked ? "active" : "notActive"}
                initial="initial"
              >
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                  wordGap="justify-between"
                >
                  pricary
                </TextHoverEffect>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={initialSlideDown}
                custom={8}
                animate={isNavButtonClicked ? "active" : "notActive"}
                initial="initial"
              >
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                  wordGap="justify-between"
                >
                  careers
                </TextHoverEffect>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;

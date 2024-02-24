import React from "react";
import TextHoverEffect from "../Effect/TextHoverEffect";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#1d1d1d] text-slate-50 h-screen">
      <div className="px-20 py-40 gap-20 flex ">
        <div className="w-[60%] gap-2 flex flex-col text-8xl font-medium">
          <span>HOW ABOUT</span>
          <span>WE DO A THING</span>
          <div className="flex items-center">
            <span>OR TWO,</span>
            <div className="px-6 py-2 rounded-full border-[1px] border-neutral-400 text-xl">
              <TextHoverEffect wordGap="gap-1">GET IN TOUCH</TextHoverEffect>
            </div>
          </div>
          <span>TO+GETHER</span>
        </div>

        <div className="flex justify-between text uppercase">
          <div className="gap-6 flex flex-col ">
            <span className="text-neutral-400">SITEMAP</span>
            <div className="gap-3 flex flex-col text-neutral-200">
              <div className="gap-2 flex items-center">
                <TextHoverEffect isContainUnderLineAnimation  rightIcon={<FaArrowRight />}>home</TextHoverEffect>
              </div>

              <div className="gap-2 flex items-center">
                <TextHoverEffect isContainUnderLineAnimation rightIcon={<FaArrowRight />}  wordGap="gap-1">about us</TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect isContainUnderLineAnimation rightIcon={<FaArrowRight />} >work</TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect isContainUnderLineAnimation rightIcon={<FaArrowRight />} >service</TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect isContainUnderLineAnimation rightIcon={<FaArrowRight />} >contact</TextHoverEffect>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;

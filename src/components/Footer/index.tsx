import React from "react";
import TextHoverEffect from "../Effect/TextHoverEffect";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-20 py-5 w-full bg-[#1d1d1d] text-slate-50 ">
      <div className=" py-40 gap-20 flex ">
        <div className="w-[60%] gap-2 flex flex-col text-8xl font-medium">
          <span>HOW ABOUT</span>
          <span>WE DO A THING</span>
          <div className="flex items-center">
            <span>OR TWO,</span>
            <div className="px-6 py-2 rounded-full border-[1px] border-neutral-400 text-xl">
              <TextHoverEffect
                wordGap="gap-1"
                rightIcon={<FaArrowRight className="text-[15px]" />}
              >
                GET IN TOUCH
              </TextHoverEffect>
            </div>
          </div>
          <span>TO+GETHER</span>
        </div>

        <div className="flex justify-between w-[40%] uppercase">
          <div className="gap-6 flex flex-col ">
            <span className="text-neutral-400">SITEMAP</span>
            <div className="gap-3 flex flex-col text-neutral-300">
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  home
                </TextHoverEffect>
              </div>

              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                  wordGap="gap-1"
                >
                  about us
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  work
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  service
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  contact
                </TextHoverEffect>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col ">
            <span className="text-neutral-400">connect</span>
            <div className="gap-3 flex flex-col text-neutral-300">
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  twitter
                </TextHoverEffect>
              </div>

              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                  wordGap="gap-1"
                >
                  awwards
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  fwa
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center ">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight className="text-[14px]" />}
                >
                  instagram
                </TextHoverEffect>
              </div>
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight />}
                >
                  linkedin
                </TextHoverEffect>
              </div>
            </div>
          </div>
          <div className="gap-6 flex flex-col ">
            <span className="text-neutral-400">office</span>
            <div className="gap-3 flex flex-col text-neutral-300">
              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight />}
                >
                  london
                </TextHoverEffect>
              </div>

              <div className="gap-2 flex items-center">
                <TextHoverEffect
                  isContainUnderLineAnimation
                  rightIcon={<FaArrowRight />}
                  wordGap="gap-1"
                >
                  glasgow
                </TextHoverEffect>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end text-base uppercase ">
        <div>
          <TextHoverEffect
            isContainUnderLineAnimation
            rightIcon={<FaArrowRight />}
            wordGap="gap-1"
          >
            privacy
          </TextHoverEffect>
        </div>

        <div className="ml-20">
          <TextHoverEffect
            isContainUnderLineAnimation
            rightIcon={<FaArrowRight />}
            wordGap="gap-1"
          >
            careers
          </TextHoverEffect>
        </div>
        <div className="ml-auto text-7xl font-medium">
          off+brand
        </div>
      </div>
    </div>
  );
};

export default Footer;

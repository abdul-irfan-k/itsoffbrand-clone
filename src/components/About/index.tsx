import React from "react";
import TextHoverEffect from "../Effect/TextHoverEffect";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className=" py-20  text-neutral-200">
      <div className="flex flex-col w-fit mx-auto uppercase text-6xl">
        <span className="mx-auto">with emotion+</span>
        <span>innovation, we push the </span>
        <span>boundaries of digital </span>
        <span>creativity.</span>
      </div>

      <div className="flex mt-40">
        <div className="ml-40 w-[20%] flex flex-col  uppercase text-lg">
          <span>
            we are a scotish born global digital marketing, branding & web
            design agency
          </span>
          <TextHoverEffect
            isContainUnderLineAnimation
            rightIcon={<FaArrowRight className="text-[14px]" />}
            wordGap="justify-between"
          >
            about-us
          </TextHoverEffect>
        </div>

        <div className="ml-40 w-[30%] text-base">
          <span>
            Every brand has a story, from startups finding their voice to titans
            refaining their legacy. We ensure that tale shines brilliantly. With
            a blend of rapid iteration and collective spirit. we empower you to
            reshapre your digital narrative
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

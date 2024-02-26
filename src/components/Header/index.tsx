import React from "react";
import TextHoverEffect from "../Effect/TextHoverEffect";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../NavBar";

const Header = () => {
  return (
    <div className="fixed py-5 w-screen top-0 left-0 z-[30] ">
      <div className="px-5  w-full flex items-center uppercase">
        <span className="text-4xl font-medium">off+brand</span>
        <div className="gap-3 ml-auto flex items-center text-lg ">
          <div className="px-6 py-2 rounded-full border-[1px] border-neutral-500 ">
            <TextHoverEffect
              rightIcon={<FaArrowRight className="text-[14px]" />}
            >
              manifesto
            </TextHoverEffect>
          </div>
          <div className="px-6 py-2 rounded-full border-[1px] border-neutral-500 bg-[#1d1d1d]">
            <TextHoverEffect
              rightIcon={<FaArrowRight className="text-[14px]" />}
            >
              contact
            </TextHoverEffect>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;

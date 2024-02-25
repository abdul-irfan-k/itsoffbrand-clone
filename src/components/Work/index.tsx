import Image from "next/image";
import React from "react";
import TextHoverEffect from "../Effect/TextHoverEffect";
import { FaArrowRight } from "react-icons/fa";

const Work = () => {
  return (
    <div className="mt-40 relative px-5 w-full h-screen  text-neutral-300 uppercase">
      <div className="sticky top-[10%] flex flex-col">
        <span>featured work</span>
        <div className="mt-2 px-6 py-2 rounded-full border-[1px] border-neutral-500 bg-[#1d1d1d] w-fit">
          <TextHoverEffect rightIcon={<FaArrowRight className="text-[14px]" />}>
            All work
          </TextHoverEffect>
        </div>
      </div>
      <div className="gap-5 ml-auto flex w-[65%] ">
        <div className="gap-5 relative flex flex-col w-full">
          <div className="relative w-full aspect-square block rounded-md overflow-hidden">
            <Image src={"/Asset/Image/2.jpg"} alt="image" fill />
            <div className="absolute bottom-5 left-5">asdfg</div>
          </div>
          <div className="relative w-full aspect-square rounded-md overflow-hidden">
            <Image src={"/Asset/Image/3.jpg"} alt="image" fill />
            <div className="absolute bottom-5 left-5">asdfg</div>
          </div>
        </div>
        <div className="gap-5 relative flex flex-col w-full translate-y-[-10%]">
          <div className="relative w-full aspect-square rounded-md overflow-hidden">
            <Image src={"/Asset/Image/2.jpg"} alt="image" fill />
            <div className="absolute bottom-5 left-5">asdfg</div>
          </div>
          <div className="relative w-full aspect-square rounded-md overflow-hidden">
            <Image src={"/Asset/Image/3.jpg"} alt="image" fill />
            <div className="absolute bottom-5 left-5">asdfg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

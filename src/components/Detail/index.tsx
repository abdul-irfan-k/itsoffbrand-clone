"use client"
import React from "react";
import Icon from "./Icon";
import { useScroll } from "framer-motion";

const Detail = () => {
  const {} = useScroll()

  return (
    <div className=" w-full h-screen bg-[#1d1d1d]  ">
      <div className=" w-full flex items-center justify-center mix-blend-lighten">
        <div className="relative w-screen">
          <div className=" w-full h-screen flex items-center justify-center aspect-square z-[2] bg-black mix-blend-multiply">
            <div className="w-[30%] aspect-square">
              <Icon />
            </div>
          </div>

          <div
            className="absolute top-0 w-full h-screen  "
            style={{
              backgroundImage:
                "linear-gradient(  255deg,  #facb0e,  #f06ba8 30%,  #78bae6 65%,  #fff)",
              zIndex: "-1",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(  255deg,  #f06ba8,  #facb0e 30%,  #78bae6 65%,  #fff)",
                animation: "bgAnim 5s infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

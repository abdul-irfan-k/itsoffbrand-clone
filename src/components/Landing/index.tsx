"use client";

import React, { useEffect, useState } from "react";
import LandingIcon from "../icons/LandingIcon";

interface LandingProps {
  children: React.ReactNode;
}
const Landing = ({ children }: LandingProps) => {
  const [isPageLoaded, setIsPageLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
  }, []);
  return (
    <div>
      {/* <div className="top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
        <div className="w-[30%] aspect-square ">
          <LandingIcon />
        </div>
      </div> */}
      {isPageLoaded && children}
    </div>
  );
};

export default Landing;

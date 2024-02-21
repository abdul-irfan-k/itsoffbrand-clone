"use client";

import LandingIcon from "../icons/LandingIcon";

const Landing = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[30%] aspect-square ">

      <LandingIcon />
      </div>
    </div>
  );
};

export default Landing;

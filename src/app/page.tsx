import Canvas from "@/components/Canvas";
import Detail from "@/components/Detail";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ProjectContainer from "@/components/Project";
import ThreeScreen from "@/components/ThreeScreen";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* <Landing /> */}
      {/* <h1>three js </h1> */}
      {/* <ThreeScreen /> */}
      {/* <Canvas /> */}
      <Hero />
      <div className="block h-[150vh] w-screen bg-[#1d1d1d]"></div>
      {/* <ProjectContainer /> */}

     <Detail />

    </div>
  );
};

export default Homepage;

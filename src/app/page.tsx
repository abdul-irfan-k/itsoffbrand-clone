import Canvas from "@/components/Canvas";
import Landing from "@/components/Landing";
import ProjectContainer from "@/components/Project";
import ThreeScreen from "@/components/ThreeScreen";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative">
      {/* <Landing /> */}
      {/* <h1>three js </h1> */}
      {/* <ThreeScreen /> */}
      {/* <Canvas /> */}
      <div className="block h-[150vh] w-screen bg-neutral-700"></div>
      <ProjectContainer />

      <div className="block h-screen w-screen bg-neutral-700"></div>
    </div>
  );
};

export default Homepage;

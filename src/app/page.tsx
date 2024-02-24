import Canvas from "@/components/Canvas";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ProjectContainer from "@/components/Project";
import ThreeScreen from "@/components/ThreeScreen";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative overflow-x-clip">
      <Landing>
        <Header />
        {/* <h1>three js </h1> */}
        {/* <ThreeScreen /> */}
        {/* <Canvas /> */}
        <Hero />
        {/* <div className="relative block h-[150vh] w-screen bg-[#1d1d1d] mix-blend-screen"></div> */}
        {/* <ProjectContainer /> */}

        <Detail />

        {/* <div className="relative block h-[450vh] w-screen bg-[#1d1d1d] text-slate-50 mix-blend-screen"> */}
        <Footer />
        {/* </div> */}
      </Landing>
    </div>
  );
};

export default Homepage;

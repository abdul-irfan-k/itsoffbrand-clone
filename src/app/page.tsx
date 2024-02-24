import About from "@/components/About";
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
        {/* <ThreeScreen /> */}
        {/* <Canvas /> */}
        <Hero />
        <About />
        {/* <div className="relative block h-[150vh] w-screen bg-[#1d1d1d] mix-blend-screen"></div> */}
        {/* <ProjectContainer /> */}

        <Detail />

         <Footer />
      </Landing>
    </div>
  );
};

export default Homepage;

import About from "@/components/About";
import Awwards from "@/components/Awwards";
import Canvas from "@/components/Canvas";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import ProjectContainer from "@/components/Project";
import ThreeCircle from "@/components/ThreeCircle";
import ThreeScreen from "@/components/ThreeScreen";
import Work from "@/components/Work";
import React from "react";


const Homepage = () => {
  return (
    <div className="relative overflow-x-clip">
      <Landing>
        {/* <ThreeCircle /> */}
        <Canvas />
        <Header />
        <Hero />
        <About />
        <Work />
        <ProjectContainer />
<Awwards />
        <Detail />

         <Footer />
      </Landing>
    </div>
  );
};

export default Homepage;

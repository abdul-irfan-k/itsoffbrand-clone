"use client";
import React, { useRef } from "react";
import Icon from "./Icon";
import { useScroll, useTransform, motion } from "framer-motion";

const Detail = () => {
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: detailContainerRef,
    offset: ["start end", "end 0.6"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.95], [0.1, 15]);
  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.9, 0.9, 1],
    [0, 225, 225, 225]
  );

  const svgTransalteY = useTransform(
    scrollYProgress,
    [0.95, 0.951],
    ["0%", "-300%"]
  );
  const backgrondEffectZindex = useTransform(
    scrollYProgress,
    [0.945, 0.946],
    [-1, 4]
  );

  const textTranslate = useTransform(
    scrollYProgress,
    [0.02, 0.91],
    ["50%", "-50%"]
  );

  const wordTopTransalte = useTransform(
    scrollYProgress,
    [0.92, 0.95],
    ["0%", "-100%"]
  );
  const wordBottomTransalte = useTransform(
    scrollYProgress,
    [0.92, 0.95],
    ["0%", "100%"]
  );
  const { scrollYProgress: progressForBackground } = useScroll({
    target: detailContainerRef,
    offset: ["end 0.5", "end start"],
  });
  const backgroundScale = useTransform(progressForBackground, [0.1, 0.9], [1, 0.95]);

  return (
    <div
      className=" w-full   bg-[#1d1d1d] text-slate-50 "
      ref={detailContainerRef}
    >
      <div className=" w-full flex items-center justify-center mix-blend-lighten">
        <div className="relative w-screen">
          <div className="relative w-screen h-[700vh] flex flex-col  z-[2] items-start bg-black mix-blend-multiply">
            <motion.div className="sticky top-[5vh]  h-fit w-[30vw] aspect-square  mx-auto block">
              <motion.div style={{ scale, rotate, translateY: svgTransalteY }}>
                <Icon />
              </motion.div>
              {/* <div className="relative"> */}
              <motion.div
                className="absolute gap-6 flex  top-[60%]  left-[15vw] translate-y-[-50%] text-[#1d1d1d] text-5xl w-fit text-nowrap font-semibold"
                style={{ translateX: textTranslate }}
              >
                {"WHERE DIFFERENT IS THE STANDARD. CHOOSE OF+BRAND"
                  .split(" ")
                  .map((elm, index) => {
                    return (
                      <div className="overflow-hidden" key={index}>
                        <motion.div
                          style={{
                            translateY:
                              index % 2 == 0
                                ? wordTopTransalte
                                : wordBottomTransalte,
                          }}
                        >
                          {elm}
                        </motion.div>
                      </div>
                    );
                  })}
              </motion.div>
              {/* </div> */}
            </motion.div>
          </div>

          <motion.div
            className="absolute top-0 w-full h-full  "
            style={{
              backgroundImage:
                "linear-gradient(  255deg,  #facb0e,  #f06ba8 30%,  #78bae6 65%,  #fff)",
              zIndex: backgrondEffectZindex,
              borderRadius: "40px",
              scaleX: backgroundScale,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(  255deg,  #f06ba8,  #facb0e 30%,  #78bae6 65%,  #fff)",
                animation: "bgAnim 5s infinite",
                borderRadius: "40px",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

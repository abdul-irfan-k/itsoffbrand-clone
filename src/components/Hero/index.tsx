"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = heroContainer.current;
    if (!element) return;

    const hSelector = gsap.utils.selector(element);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "5% top",
        end: "bottom 30%",
        scrub: true,
      },
    });

    t1.to(hSelector(".f1"), { y: "100%" }, "<")
      .to(hSelector(".f2"), { y: "100%" }, 0.2)
      .to(hSelector(".f3"), { y: "100%" }, 0.4);

    t1.to(hSelector(".s1"), { y: "100%" }, 0.2);
    t1.to(hSelector(".s2"), { y: "100%" }, 0.3);
    t1.to(hSelector(".s3"), { y: "100%" });
    t1.to(hSelector(".s4"), { y: "100%" });
    t1.to(hSelector(".s5"), { y: "100%" });
    t1.to(hSelector(".s6"), { y: "100%" });
    t1.to(hSelector(".s7"), { y: "100%" });
    t1.to(hSelector(".s8"), { y: "100%" });

    t1.to(hSelector(".t1"), { y: "100%" }, 0);
    t1.to(hSelector(".t2"), { y: "100%" });
    t1.to(hSelector(".t3"), { y: "100%" });
    t1.to(hSelector(".t4"), { y: "100%" });
    t1.to(hSelector(".t5"), { y: "100%" });
    t1.to(hSelector(".t6"), { y: "100%" });
    t1.to(hSelector(".t7"), { y: "100%" });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "0% top",
        end: "bottom 50%",
        scrub: 1,
        // markers: true,
      },
    });
    t2.to(hSelector(".word1"), { x: "-30%", y: "-50%" });
    t2.to(hSelector(".word2"), { x: "-10%", y: "-50%" }, 0.02);
    t2.to(hSelector(".word3"), { x: "-10%", y: "-50%" }, 0.02);
  }, [heroContainer.current]);
  return (
    <div
      className=" h-[100vh] w-screen bg-[#1d1d1d] text-slate-50 flex items-center"
      ref={heroContainer}
    >
      <div className="gap-32 px-32  flex flex-col w-full text-8xl font-semibold">
        <div className="">
          <div className="word1 gap-4 text flex ">
            <Word word="A" />
            <Word
              word="DIFFERENT"
              characterClassNames={["", "", "", "", "", "f2", "f3", "", "f1"]}
            />
          </div>
        </div>
        <div className="text-right ">
          <div className="word2 flex justify-end ">
            <Word
              word="CREATIVE"
              characterClassNames={[
                "s1",
                "s4",
                "s5",
                "s7",
                "s8",
                "s3",
                "s2",
                "s6",
              ]}
            />
          </div>
        </div>
        <div className="">
          <div className="word3 text1 ml-20 flex">
            <Word
              word="APPROACH"
              characterClassNames={[
                "t5",
                "t3",
                "t2",
                "t6",
                "t1",
                "t6",
                "t4",
                "t7",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

interface WordProps {
  word: string;
  characterClassNames?: Array<string>;
}
const Word = ({ word, characterClassNames }: WordProps) => {
  const character = word.split("");
  return (
    <div className="flex ">
      {character.map((character, index) => {
        return (
          <div className="overflow-hidden" key={index}>
            <div
              className={
                !characterClassNames || characterClassNames[index] == undefined
                  ? ""
                  : characterClassNames[index]
              }
            >
              {character}
            </div>
          </div>
        );
      })}
    </div>
  );
};

"use client";

import { useEffect, useRef } from "react";
import Vivus from "vivus";

const LandingIcon = () => {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current) return;
    // new Vivus(svgRef.current, { duration: 200, type: "sync" });
  }, [svgRef.current]);
  return (
    <svg
      version="1.1"
      id="ob-load-img"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 162 162"
      style={{ background: "new 0 0 162 162" }}
      xmlSpace="preserve"
      ref={svgRef}
    >
      <g stroke="#A499B3" stroke-width="1">
        <linearGradient id={`animation-1`} x1="0.5" y1="1" x2="0.5" y2="0">
          {/* <stop offset="100%"  stopColor="red">
            <animate
              attributeName="offset"
              values="-5;1"
              repeatCount="1"
              dur="2s"
              begin="1s"

            />
          </stop> */}
          <stop offset="100%" stop-color="white">
            <animate
              attributeName="offset"
              values="0;1"
              repeatCount="1"
              dur="1s"
              begin="0s"
            />
          </stop>

          <stop offset="100%" stop-color="transparent">
            <animate
              attributeName="offset"
              values="0;1"
              repeatCount="1"
              dur="1s"
              begin="0s"
            />
          </stop>
        </linearGradient>
        <path
          d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={1}
          // fill="brown"
          fill={`url(#animation-1)`}
          style={{ transformOrigin: "bottom top" }}
        ></path>
      </g>
      <linearGradient id={`animation-2`} x1="0.5" y1="1" x2="0.5" y2="0">
        <stop offset="100%" stop-color="white">
          <animate
            attributeName="offset"
            values="0;1"
            repeatCount="1"
            dur="0.5s"
            begin="0s"
          />
        </stop>
        <stop offset="100%" stop-color="transparent">
          <animate
            attributeName="offset"
            values="0;1"
            repeatCount="1"
            dur="0.5s"
            begin="0s"
          />
        </stop>
      </linearGradient>
      <path
        id="ob-l-c"
        className="st-c"
        d="M146.1 134.4h-.7c-6.5 0-11.9 5.3-11.9 11.9v.7c0 6.7 5.5 12.2 12.2 12.2s12.2-5.5 12.2-12.2v-.7c0-6.6-5.2-11.9-11.8-11.9z"
        // style={{ strokeDasharray: 77.7264, strokeDashoffset: 77.7264 }}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={1}
        fill="url(#animation-2)"
      ></path>
    </svg>
  );
};

export default LandingIcon;

// import { useState, useEffect, useRef } from "react";

// function Main() {
//   const [key, setKey] = useState(new Date());

//   return (
//     <div className="main">
//       <button onClick={() => setKey(new Date())}>Rerender</button>
//       <Hexagon key={key} />
//     </div>
//   );
// }

// const lines = [
//   "M 0 0 H 60 V 60 H 0 V 0 ",
//   "M 40 70 H 100 V 130 H 40 V 70",
//   "M 80 140 H 140 V 200 H 80 V 140",
//   "M 80 0 H 140 V 60 H 80 V 0",
//   "M 120 70 H 180 V 130 H 120 V 70",
// ];

// function Hexagon() {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     new Vivus(svgRef.current, {
//       duration: 120,
//       type: "oneByOne",
//     });
//   });

//   function getLinearGradient(index) {
//     const delay = index * 0.4 + 0.5;
//     return (
//       <>
//         <linearGradient id={`animation-${index}`}>
//           <stop offset="0" stop-color="red">
//             <animate
//               dur="1s"
//               attributeName="offset"
//               fill="freeze"
//               begin={`${delay}s`}
//               from="0"
//               to="1"
//             />
//           </stop>
//           <stop offset="0" stop-color="#fff">
//             <animate
//               dur="1s"
//               attributeName="offset"
//               fill="freeze"
//               begin={`${delay}s`}
//               from="0"
//               to="1"
//             />
//           </stop>
//         </linearGradient>
//       </>
//     );
//   }

//   return (
//     <svg ref={svgRef} width="400" height="320" viewBox="20 -10 160 230">
//       <g stroke="#A499B3" stroke-width="1">
//         {lines.map((line, index) => {
//           return (
//             <>
//               {getLinearGradient(index)}
//               <path d={line} fill={`url(#animation-${index})`} />
//             </>
//           );
//         })}
//       </g>
//     </svg>
//   );
// }
// export default Main;

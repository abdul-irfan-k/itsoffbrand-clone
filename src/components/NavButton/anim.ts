import { Variants } from "framer-motion";

export const navButtonAnimationVariants: Variants = {
  active(custom) {
    return {
      rotate: `${custom}deg`,
      position: "absolute",
      top: "50%",
      //   translateY: "50%",
    };
  },
  notActive: {
    position: "relative",
    top: "0",
    translateY: "0",
  },
  activeMiddleElement: {
    opacity: 0,
    display: "none",
  },
};

export const initialSlideDown: Variants = {
  initial: {
    translateY: "-100%",
    opacity:0,
    display:"none"
  },
  active(custom) {
    return {
      translateY: "0%",
      opacity:1,
      display:"block",
      transition: { delay: 0.05 * custom},
    };
  },
  notActive: {
    translateY:"-100%",
    opacity:0,
    display:"none"
  },
};


export const navBarWidthAnimation:Variants = {
  initial:{
    width:"3.3%",
    aspectRatio:"1 / 1",
    height:"auto",
    padding:0
  },
  active:{
    width:"16%",
    padding:"1.25rem"
  },
  notActive:{
    width:"3.3%",
    aspectRatio:"1 / 1",
    height:"auto",
    padding:0
  }
}
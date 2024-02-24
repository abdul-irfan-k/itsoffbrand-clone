import { Variants } from "framer-motion";

export const sildeNormalToRight: Variants = {
    initial: {
      translateX: "0%",
    },
    active(custom) {
      return {
        translateX: "100%",
        transition: {
          delay: custom,
        },
      };
    },
    notActive(custom) {
      return {
        translateX: "0%",
        transition: {
          delay: custom,
        },
      };
    },
  };
  export const sildeLeftToNormal: Variants = {
    initial: {
      translateX: "-100%",
    },
    active(custom) {
      return {
        translateX: "0%",
        transition: {
          delay: custom,
        },
      };
    },
    notActive(custom) {
      return {
        translateX: "-100%",
        transition: {
          delay: custom,
        },
      };
    },
  };
export const sildeNormalToTop: Variants = {
    initial: {
      translateY: "0%",
    },
    active(custom) {
      return {
        translateY: "-100%",
        transition: {
          delay: custom,
        },
      };
    },
    notActive(custom) {
      return {
        translateY: "0%",
        transition: {
          delay: custom,
        },
      };
    },
  };
  export const sildeBottomToNormal: Variants = {
    initial: {
      translateY: "100%",
    },
    active(custom) {
      return {
        translateY: "0%",
        transition: {
          delay: custom,
        },
      };
    },
    notActive(custom) {
      return {
        translateY: "100%",
        transition: {
          delay: custom,
        },
      };
    },
  };
  export const widthAnimation: Variants = {
    initial: {
      width: "0%",
    },
    active(custom) {
      return {
        width: "100%",
        transition: {
          delay: custom,
        },
      };
    },
    notActive(custom) {
      return {
        width: "0%",
        transition: {
          delay: custom,
        },
      };
    },
  };
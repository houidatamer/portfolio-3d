import { Variants } from "framer-motion";

type TransitionType = "tween" | "spring" | "keyframes" | "inertia";

export const fadeIn = (
  direction = "",
  type: TransitionType = "spring",
  delay = 0,
  duration = 0.75
): Variants => {
  return {
    hidden: {
      x:
        direction === "right"
          ? 100
          : direction === "left"
          ? -100
          : 0,
      y:
        direction === "up"
          ? -100
          : direction === "down"
          ? 100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0.2,
    },
  },
});

// staggered container motion
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.1
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// slide in motion
export const slideIn = (
  direction: "left" | "right" | "up" | "down" | string,
  type: TransitionType = "tween",
  delay = 0,
  duration = 0.75
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

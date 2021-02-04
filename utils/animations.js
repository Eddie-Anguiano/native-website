export const parentStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

export const parentStaggerDelay = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
      duration: 0.5,
    },
  },
};

export const fadeUpIn = {
  initial: {
    y: "30px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

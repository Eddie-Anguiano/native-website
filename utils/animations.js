// Parent Variants

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

// enter variants

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

export const fadeLeftIn = {
  initial: {
    x: "30px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

// Hamburger Variant

export const hamburgerTop = {
  open: {
    rotate: 135,
    y: 11,
    transition: {
      ease: "easeIn",
    },
  },
};

export const hamburgerMiddle = {
  open: {
    x: "100%",
    transition: {
      ease: "easeIn",
    },
  },
};

export const hamburgerBottom = {
  closed: {},
  open: {
    rotate: -135,
    y: -12,
    transition: {
      ease: "easeIn",
    },
  },
};

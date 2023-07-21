export const tagsMotion = (
  index: number | undefined,
  duration: number | undefined
) => {
  return {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: duration ? duration : 0.3,
        type: "tween",
        delay: index ? index / 10 + 0.1 : 0,
        ease: "linear",
      },
    },
    exit: {
      scale: 0,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        type: "just",
        delay: index ? index / 10 + 0.1 : 0,
      },
    },
  };
};
export const viewFromLeft = (
  index: number | undefined,
  duration: number | undefined
) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
  };
};
export const viewFromRight = (
  index: number | undefined,
  duration: number | undefined
) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
  };
};
export const viewFromTop = (
  index: number | undefined,
  duration: number | undefined
) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
  };
};
export const viewFromDown = (
  index: number | undefined,
  duration: number | undefined
) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: "linear",
        duration: duration ? duration : 0.3,
        delay: index ? index / 10 + 0.1 : 0,
        type: "tween",
      },
    },
  };
};

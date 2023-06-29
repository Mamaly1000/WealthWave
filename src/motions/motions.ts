export const removingPageMotion = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};
export const BlogTagsOverlay = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.13,
      type: "tween",
    },
  },
  exit: {
    transition: {},
  },
};
export const BlogTagsInputs = (index: number) => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.13,
        delay: index / 10 + 0.1,
      },
    },
    exit: {
      x: 200,
      opacity: 0,
      transition: {
        type: "tween",
        duation: 0.3,
      },
    },
  };
};
export const modalMotion = {
  hidden: {
    borderRadius: "50%",
    opacity: 0,
    scale: 0,
  },
  visible: {
    borderRadius: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.12,
      type: "spring",
    },
  },
  exit: {
    borderRadius: "50%",
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

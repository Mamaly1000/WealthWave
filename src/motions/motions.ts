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
export const blogCardsMotions = (index: number) => {
  return {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index / 10 + 0.1,
        type: "tween",
        ease: "linear",
      },
    },
    hover: {
      y: -5,
      transition: {
        ease: "linear",
        duration: 0.1,
      },
    },
  };
};
export const componentViewMotion = {
  hidden: { y: 40, opacity: 0 },
  view: {
    y: 0,
    opacity: 1,
    transition: {
      dealy: 0.1,
      duration: 1,
      type: "tween",
      when: "beforeChidlren",
    },
  },
};
export const nftCardsMotion = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.13,
        delay: index / 10 + 0.1,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
};
export const newsCardMotion = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.13,
        type: "tween",
        delay: index / 10 + 0.1,
      },
    },
  };
};
export const commentsMotion = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    view: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.13,
        delay: index / 10 + 0.1,
        type: "tween",
      },
    },
  };
};

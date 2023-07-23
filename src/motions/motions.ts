export const removingPageMotion = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeInOut",
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
      duration: 0.5,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween" },
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
    borderRadius: "10px",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  exit: {
    borderRadius: "50%",
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.7,
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
      },
    },
    hover: {
      y: -5,
      transition: {
        ease: "linear",
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
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
  exit: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
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
        duration: 0.5,
        delay: index / 10 + 0.1,
        type: "tween",
        ease: "easeInOut",
      },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "tween",
      },
    },
  };
};
export const newsCardMotion = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 1,
    },
    view: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.13,
        type: "tween",
        delay: index / 10 + 0.1,
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      scale: 0,
      transition: {
        duration: 0.13,
        type: "tween",
        delay: 0,
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
export const cryptoRowMotion = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index / 10 + 0.1,
        type: "spring",
        ease: "linear",
        when: "beforeChildren",
        x: {
          duration: 0.6,
          type: "tween",
        },
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 1,
        delay: 1,
        type: "tween",
      },
    },
  };
};

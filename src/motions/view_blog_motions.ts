export const tagsMotions = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index / 10 + 0.8,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.13,
        type: "tween",
      },
    },
    hover: {
      scale: 1.1,
      marginInline: 10,
    },
  };
};
export const viewBlogActionButtons = (delayNum: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delayNum+.5,
        type: "tween",
        ease: "linear",
      },
    },
  };
};

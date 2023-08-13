export const newsMotion = (duration: number, delay: number, type: string) => {
  return {
    hidden: {
      opacity: 0,
    },
    side_hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        type,
      },
    },
    side_visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        type,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration,
        delay,
        type,
      },
    },
  };
};

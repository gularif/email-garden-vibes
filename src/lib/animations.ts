
export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const SLIDE_UP_ANIMATION = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export const SLIDE_IN_ANIMATION = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

export const SCALE_ANIMATION = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 }
};

export const STAGGER_ANIMATION = (delay: number = 0.05) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay }
});

export const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

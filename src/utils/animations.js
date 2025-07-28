// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const hoverTilt = {
  rotateY: 5,
  rotateX: 5,
  scale: 1.02,
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: { duration: 0.3, ease: "easeInOut" }
};

// Complex animations
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// Loading animations
export const loadingSpinner = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }
};

export const shimmerAnimation = {
  x: ["-100%", "100%"],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
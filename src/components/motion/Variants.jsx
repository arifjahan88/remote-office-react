import { motion } from "framer-motion";

const fadeInEffect = (direction, delay) => {
  return {
    hidden: {
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: direction === "none" ? undefined : 0,
      y: direction === "none" ? undefined : 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const zoomInEffect = (scale = 0.9, delay = 0.1) => {
  return {
    hidden: {
      scale: scale,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: delay,
        duration: 0.8,
      },
    },
  };
};

export const FadeIn = ({ children, direction = "up", delay = 0.1, className }) => {
  return (
    <>
      {/* Mobile/Tablet Version (Hidden on large screens) */}
      <div className={`lg:hidden ${className}`}>{children}</div>

      {/* Desktop Version (Hidden on small screens) */}
      <motion.div
        variants={fadeInEffect(direction, delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`hidden lg:block ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export const ZoomIn = ({ children, scale = 0.9, delay = 0.1, className }) => {
  return (
    <>
      {/* Mobile/Tablet Version (Hidden on large screens) */}
      <div className={`lg:hidden ${className}`}>{children}</div>

      {/* Desktop Version (Hidden on small screens) */}
      <motion.div
        variants={zoomInEffect(scale, delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`hidden lg:block ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

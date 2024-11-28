import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalPageEffect = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary">
      <div className="sticky inset-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalPageEffect;

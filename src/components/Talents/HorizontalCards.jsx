import { useRef, useState } from "react";
import HorizontalPageEffect from "../motion/HorizontalPageEffect";
import { motion, AnimatePresence } from "framer-motion";
import AllHorizontalCards from "./AllHorizontalCards";

const HorizontalCards = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const AllCards = AllHorizontalCards(ref);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === AllCards.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? AllCards.length - 1 : prev - 1));
  };

  const Cards = AllCards[currentTestimonial];
  return (
    <>
      <HorizontalPageEffect>
        {AllCards.map((card) => {
          return (
            <div ref={ref} key={card.id}>
              {card.component}
            </div>
          );
        })}
      </HorizontalPageEffect>

      {/* For Tab and Mobile View */}
      <div className="relative block lg:hidden -translate-x-5">
        <div>
          <motion.img
            src="/left-arrow.png"
            alt="Previous Testimonial"
            className="absolute right-12 -top-10 w-10 cursor-pointer bg-white p-2 rounded-lg"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src="/right-arrow.png"
            alt="Next Testimonial"
            className="absolute right-0 -top-10 w-10 cursor-pointer bg-white p-2 rounded-lg"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
      <div className="w-full overflow-hidden lg:hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={Cards.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          >
            {Cards.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default HorizontalCards;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample testimonial data (you can expand or replace this)
const testimonials = [
  {
    id: 1,
    quote:
      "In a rapidly growing sector with dynamic and fast paced needs emerging, it's been critical to our success to be able to adapt and scale our modern healthtech platform and this has required continuous recruitment in the areas of CX Design, Development & Support as we expand our teams to meet the needs of our customers. To this end Remote Office has become a trusted partner for the end-to-end experience in accessing global talents for hiring and supporting skilled team members. They're part of the team.",
    name: "Yianni Serpanos",
    title: "CEO & Founder, Coreplus",
    image: "/man-1.png",
  },
  {
    id: 2,
    quote:
      "Angus says “As the COO of a fast-growing tech startup based on the Gold Coast, I was grateful to be introduced to Diat and his team who assisted us with high-calibre developer candidates based overseas and managed completely by Remote Office. It was straight-forward to get started and RO was patient in working with us to find the right developer for our team. I would highly recommend.",
    name: "Angus Keck",
    title: "COO, Agunity",
    image: "/man-2.png",
  },
  {
    id: 3,
    quote:
      "We have been using Remote Office for two years and continue to be impressed with their excellent service and advice. We highly recommend them.",
    name: "Ash McMullen",
    title: "CEO, NGS",
    image: "/man-3.png",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="grid grid-cols-3 container text-primary my-[6rem] relative">
      <div className="text-5xl font-extrabold">Clients say</div>

      <div className="col-span-2 flex gap-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8 h-full md:h-[500px] overflow-hidden"
          >
            <div>
              <img src="/quate.png" alt="" className="max-w-36" />
            </div>
            <div className="space-y-14">
              <h4 className="text-2xl font-[500]">{testimonial.quote}</h4>
              <div className="flex items-center gap-5">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div>
        <motion.img
          src="/left-arrow.png"
          alt="Previous Testimonial"
          className="absolute left-0 bottom-0 cursor-pointer"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.img
          src="/right-arrow.png"
          alt="Next Testimonial"
          className="absolute right-0 bottom-0 cursor-pointer"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </section>
  );
};

export default Testimonial;

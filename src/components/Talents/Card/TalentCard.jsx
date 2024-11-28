import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "../../motion/Variants";
import { motion, useScroll, useSpring } from "framer-motion";

const TalentCard = ({
  title,
  description,
  children,
  steps = false,
  stepsData,
  teams = false,
  teamsRight = false,
}) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(Math.round(scaleX?.current * 100));

  // Use Intersection Observer to detect when component is in view
  const { ref, inView } = useInView({
    threshold: [0.7],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !inView) {
        setProgressWidth(0);
        return;
      }

      const cardElement = cardRef.current;
      const rect = cardElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the card has passed the top of the viewport
      const scrollProgress = Math.max(
        0,
        Math.min(100, ((windowHeight - rect.top) / rect.height) * 100)
      );

      setProgressWidth(scrollProgress);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  return (
    <div
      ref={(el) => {
        ref(el);
        cardRef.current = el;
      }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between pt-8 md:pt-16 lg:pt-32 ${
          teams ? "flex-col gap-10" : "flex-row gap-24"
        }`}
      >
        <FadeIn
          direction="up"
          className={`text-left flex flex-col gap-8 ${teams ? "max-w-full" : "w-full lg:w-[40%]"}`}
        >
          <h2 className={`font-bold ${teams ? "text-5xl font-extrabold mb-5" : "text-4xl"}`}>
            {title}
          </h2>
          <p className={`text-[#a9a9a9] ${teams && "text-white"} ${teamsRight && "text-black"}`}>
            {description}
          </p>
          {steps ? (
            <div className="mt-8">
              <div className="flex items-center justify-between pb-2">
                {/* Step Number */}
                <span className={`text-3xl font-bold text-blue-500 `}>{stepsData[0] || ""}</span>
                {/* Step Number */}
                <span className={`text-3xl font-bold text-gray-500 `}>{stepsData[1] || ""}</span>
              </div>
              <div className="flex items-center w-full">
                {/* Progress Bar */}
                <div className="flex-1 relative">
                  <div className="w-full h-[3px] bg-gray-300"></div>
                  <div
                    className="absolute top-0 left-0 h-[3px] bg-blue-500 transition-all duration-300"
                    style={{ width: `${Math.round(scaleX?.current * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <button
              className={`w-max flex items-center gap-3 font-bold hover:scale-90 duration-300 ${
                teams ? "hidden" : "block"
              }`}
            >
              Learn More <img src="/talents/learn.png" className="w-5" alt="learn" />
            </button>
          )}
        </FadeIn>
        <div className={`${teams ? "w-full" : "w-full md:w-[40%] relative"}`}>{children}</div>
      </div>
      {teams && (
        <button
          className={`w-max flex items-center gap-3 text-xl font-extrabold hover:scale-90 duration-300 mt-10`}
        >
          Learn More <img src="/talents/learn.png" className="w-5" alt="learn" />
        </button>
      )}
    </div>
  );
};

export default TalentCard;

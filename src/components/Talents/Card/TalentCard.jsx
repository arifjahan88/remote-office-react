import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TalentCard = ({ title, description, children, steps = false, stepsData }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const cardRef = useRef(null);

  // Use Intersection Observer to detect when component is in view
  const { ref, inView } = useInView({
    threshold: [0.7],
  });

  console.log(inView);

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
      <div className="flex items-center gap-24 justify-between pt-8 md:pt-16 lg:pt-32">
        <div className="text-left flex flex-col w-full md:w-[40%] gap-8">
          <h2 className="font-bold text-4xl">{title}</h2>
          <p className="text-[#a9a9a9]">{description}</p>
          {steps ? (
            <div>
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
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <button className="w-max flex items-center gap-3 font-bold hover:scale-90 duration-300">
              Learn More <img src="/talents/learn.png" className="w-5" alt="learn" />
            </button>
          )}
        </div>
        <div className="w-full md:w-[40%] relative">{children}</div>
      </div>
    </div>
  );
};

export default TalentCard;
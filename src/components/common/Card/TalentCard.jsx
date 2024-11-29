import { FadeIn } from "../../motion/Variants";

const TalentCard = ({
  title,
  description,
  children,
  steps = false,
  stepsData,
  teams = false,
  teamsRight = false,
  progressWidth = 0,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col items-center justify-between pt-8 md:pt-16 lg:pt-32 ${
          teams ? "flex-col gap-10" : "lg:flex-row gap-24"
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
              {/* Step Number */}
              <div className={`flex items-center justify-between pb-2`}>
                <span
                  className={`text-3xl font-bold ${
                    stepsData[0] === "03" ? "text-white" : "text-blue-500"
                  } `}
                >
                  {stepsData[0] || ""}
                </span>
                <span
                  className={`text-3xl font-bold ${
                    stepsData[1] === "04" && progressWidth < 100
                      ? "text-gray-500"
                      : stepsData[1] === "04" && progressWidth === 100
                      ? "text-white"
                      : progressWidth === 100
                      ? "text-blue-500"
                      : "text-gray-300"
                  }`}
                >
                  {stepsData[1] || ""}
                </span>
              </div>
              <div className="flex items-center w-full">
                {/* Progress Bar */}
                <div
                  className={`flex-1 relative ${
                    stepsData[0] === "03"
                      ? "[&>div:first-child]:bg-gray-500 [&>div:last-child]:bg-white"
                      : "[&>div:first-child]:bg-gray-300 [&>div:last-child]:bg-blue-500"
                  }`}
                >
                  <div className="w-full h-[3px]"></div>
                  <div
                    className={`absolute top-0 left-0 h-[4px] transition-all duration-300 `}
                    style={{ width: `${progressWidth}%` }}
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

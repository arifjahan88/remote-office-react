import { useEffect, useState } from "react";
import TalentCard from "../common/Card/TalentCard";
import { FadeIn, ZoomIn } from "../motion/Variants";

const AllHorizontalCards = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);

  const convertScrollValue = (min, max) => {
    return Math.min(Math.round(((min - window.scrollY) / (min - max)) * 100, 0), 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      if (scrollValue < 4240 || scrollValue > 6755) return;
      setProgress1(convertScrollValue(4240, 4840));
      setProgress2(convertScrollValue(4845, 5475));
      setProgress3(convertScrollValue(5480, 6070));
      setProgress4(convertScrollValue(6090, 6750));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [
    {
      id: 1,
      component: (
        <section className="bg-primary text-white min-h-screen w-screen">
          <div className="container min-h-screen grid place-content-center">
            <TalentCard
              title="Onboarding"
              description="We help you onboard the candidates by doing background checks, extending the offer, and installing our proprietary service culture pathway. We ensure a smooth and hassle-free transition for you and the candidates."
              steps={true}
              stepsData={["01", "02"]}
              progressWidth={progress1}
            >
              <ZoomIn scale={0.4} delay={0}>
                <img
                  src="/steps/step-11.png"
                  alt="Step 1"
                  className="rounded-xl lg:max-w-[448px] max-h-[495px] object-cover"
                />
              </ZoomIn>
              <FadeIn
                direction="left"
                delay={0.2}
                className="absolute h-44 top-[25%] right-auto bottom-auto left-[-40%]"
              >
                <img src="/steps/step-12.png" alt="Talents 2" className="relative h-full" />
              </FadeIn>
            </TalentCard>
          </div>
        </section>
      ),
    },
    {
      id: 2,
      component: (
        <section className="bg-white text-primary min-h-screen w-screen">
          <div className="container min-h-screen grid place-content-center">
            <TalentCard
              title="Compliance"
              description="We handle the compliance issues for you and the candidates. We make sure contracts are native and efficiently handled to safeguard integrity, confidentiality, continuity, and effectivity."
              steps={true}
              stepsData={["02", "03"]}
              progressWidth={progress2}
            >
              <ZoomIn
                scale={0.4}
                delay={0.1}
                className="rounded-xl max-w-[448px] max-h-[495px] object-cover overflow-hidden"
              >
                <img src="/steps/step-21.png" alt="steps 1" className="relative h-full" />
              </ZoomIn>
              <FadeIn
                className="absolute h-40 top-[5%] right-auto bottom-auto left-[-40%]"
                direction="left"
              >
                <img src="/steps/step-22.png" alt="steps 2" className="relative h-full" />
              </FadeIn>
            </TalentCard>
          </div>
        </section>
      ),
    },
    {
      id: 3,
      component: (
        <section className="bg-[#265FD1] text-white min-h-screen w-screen">
          <div className="container min-h-screen grid place-content-center">
            <TalentCard
              title="Team Management"
              description="We help you better manage your team with strategic consultation, sprint management, training and development, and reporting standard management. We suggest the best practices and tools to optimize your remote team’s performance and productivity."
              steps={true}
              stepsData={["03", "04"]}
              progressWidth={progress3}
            >
              <ZoomIn
                scale={0.4}
                className="rounded-xl max-w-[448px] max-h-[495px] object-cover overflow-hidden"
              >
                <img src="/steps/step-31.png" alt="steps 1" className="relative h-full" />
              </ZoomIn>
              <FadeIn
                className="absolute h-60 top-[25%] right-auto bottom-auto left-[-40%]"
                direction="left"
              >
                <img src="/steps/step-32.png" alt="steps 2" className="relative h-full" />
              </FadeIn>
            </TalentCard>
          </div>
        </section>
      ),
    },
    {
      id: 4,
      component: (
        <section className="bg-primary text-white min-h-screen w-screen">
          <div className="container min-h-screen grid place-content-center">
            <TalentCard
              title="HR Management"
              description="We take care of the entire HR Management for your remote team. We handle the contract fees, attendance, leaves, holiday calendars, performance evaluation, and appraisals. We ensure that your team is happy, motivated, and productive."
              steps={true}
              stepsData={["04"]}
              progressWidth={progress4}
            >
              <ZoomIn
                scale={0.4}
                className="rounded-xl max-w-[448px] max-h-[495px] object-cover overflow-hidden"
              >
                <img src="/steps/step-41.png" alt="steps 1" className="relative h-full" />
              </ZoomIn>
              <FadeIn
                className="absolute h-56 top-[10%] right-[-25%] bottom-auto left-auto"
                direction="right"
              >
                <img src="/steps/step-42.png" alt="steps 2" className="relative h-full" />
              </FadeIn>
            </TalentCard>
          </div>
        </section>
      ),
    },
  ];
};

export default AllHorizontalCards;

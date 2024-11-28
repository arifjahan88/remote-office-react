import HorizontalPageEffect from "../motion/HorizontalPageEffect";
import TalentCard from "./Card/TalentCard";

const HorizontalCards = () => {
  return (
    <HorizontalPageEffect>
      <section className="bg-primary text-white min-h-screen w-screen">
        <div className="container min-h-screen grid place-content-center">
          <TalentCard
            title="Onboarding"
            description="We help you onboard the candidates by doing background checks, extending the offer, and installing our proprietary service culture pathway. We ensure a smooth and hassle-free transition for you and the candidates."
            steps={true}
            stepsData={["01", "02"]}
          >
            <img
              src="/steps/step-11.png"
              alt="Step 1"
              className="rounded-xl max-w-[448px] max-h-[495px] object-cover"
            />
            <img
              src="/steps/step-12.png"
              alt="Talents 2"
              className="absolute h-44 top-[25%] right-auto bottom-auto left-[-40%]"
            />
          </TalentCard>
        </div>
      </section>
      <section className="bg-white text-primary min-h-screen w-screen">
        <div className="container min-h-screen grid place-content-center">
          <TalentCard
            title="Compliance"
            description="We handle the compliance issues for you and the candidates. We make sure contracts are native and efficiently handled to safeguard integrity, confidentiality, continuity, and effectivity."
            steps={true}
            stepsData={["02", "03"]}
          >
            <img
              src="/steps/step-21.png"
              alt="steps 1"
              className="rounded-xl max-w-[448px] max-h-[495px] object-cover"
            />
            <img
              src="/steps/step-22.png"
              alt="steps 2"
              className="absolute h-40 top-[5%] right-auto bottom-auto left-[-40%]"
            />
          </TalentCard>
        </div>
      </section>
      <section className="bg-[#265FD1] text-white min-h-screen w-screen">
        <div className="container min-h-screen grid place-content-center">
          <TalentCard
            title="Team Management"
            description="We help you better manage your team with strategic consultation, sprint management, training and development, and reporting standard management. We suggest the best practices and tools to optimize your remote team’s performance and productivity."
            steps={true}
            stepsData={["03", "04"]}
          >
            <img
              src="/steps/step-31.png"
              alt="steps 1"
              className="rounded-xl max-w-[448px] max-h-[495px] object-cover"
            />
            <img
              src="/steps/step-32.png"
              alt="steps 2"
              className="absolute h-60 top-[25%] right-auto bottom-auto left-[-40%]"
            />
          </TalentCard>
        </div>
      </section>
      <section className="bg-primary text-white min-h-screen w-screen">
        <div className="container min-h-screen grid place-content-center">
          <TalentCard
            title="HR Management"
            description="We take care of the entire HR Management for your remote team. We handle the contract fees, attendance, leaves, holiday calendars, performance evaluation, and appraisals. We ensure that your team is happy, motivated, and productive."
            steps={true}
            stepsData={["04"]}
          >
            <img
              src="/steps/step-41.png"
              alt="steps 1"
              className="rounded-xl max-w-[448px] max-h-[495px] object-cover"
            />
            <img
              src="/steps/step-42.png"
              alt="steps 2"
              className="absolute h-56 top-[10%] right-[-25%] bottom-auto left-auto"
            />
          </TalentCard>
        </div>
      </section>
    </HorizontalPageEffect>
  );
};

export default HorizontalCards;

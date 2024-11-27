import TalentCard from "./Card/TalentCard";

const VerticalCards = () => {
  return (
    <>
      <TalentCard
        title="Ad blueprint with credits + internal community"
        description="We provide you with a proven ad blueprint to attract the best talents for your business. Plus, you get free credits to post your jobs on popular platforms like LinkedIn, Indeed, and Monster. And as a bonus, you get access to our exclusive community of over 30,000 pre-vetted professionals from around the world."
      >
        <img src="/talents/credit-1.png" alt="Talents 1" className="rounded-xl max-w-full" />
        <img
          src="/talents/credit-2.png"
          alt="Talents 2"
          className="absolute h-80 top-[-10%] right-0 bottom-0 left-[-30%]"
        />
      </TalentCard>
      <TalentCard
        title="Screening, grading and assessment"
        description="We reach out to candidates who match your requirements and take them through a bespoke screening, grading, and assessment process. We use comprehensive and rigorous criteria to evaluate their skills, experience, and fit for your business. We ensure that only the best talents make it to the next stage."
      >
        <img src="/talents/assess-1.png" alt="Talents 1" className="rounded-xl max-w-full" />
        <img
          src="/talents/medium-2.png"
          alt="Talents 2"
          className="absolute h-40 top-auto right-auto bottom-[5%] left-[-20%]"
        />
        <img
          src="/talents/match-3.png"
          alt="Talents 2"
          className="absolute h-40 top-[35%] right-[-20%] bottom-auto left-auto"
        />
        <img
          src="/talents/multiple-image.png"
          alt="Talents 2"
          className="absolute h-24 top-[5%] right-auto bottom-auto left-[-30%]"
        />
      </TalentCard>
      <TalentCard
        title="Machine-led interview"
        description="Our platform allows the candidates to showcase their skills and personality conveniently and flexibly. We then evaluate their performance both by our hiring team and by you. This ensures that you only meet with candidates who match your preferences and expectations."
      >
        <img src="/talents/machine.png" alt="Talents 1" className="rounded-xl max-w-full" />
        <img
          src="/talents/score.png"
          alt="Talents 2"
          className="absolute h-40 top-auto right-auto bottom-[5%] left-[-20%]"
        />
      </TalentCard>
      <TalentCard
        title="Technical challenge"
        description="We assist you in conducting the technical test through our outlined discipline. We co-create a tailored challenge relevant to the skills you need. Our platform allows the candidates to complete the challenge in a realistic and interactive environment. This allows you to review the code quality, logic, and efficiency of"
      >
        <img src="/talents/challenge-1.png" alt="Talents 1" className="rounded-xl max-w-full" />
        <img
          src="/talents/challenge-2.png"
          alt="Talents 2"
          className="absolute h-[13rem] top-[10%] right-[-20%] bottom-auto left-auto"
        />
      </TalentCard>
      <TalentCard
        title="Client review"
        description="Our platform encapsulates all the data and feedback from the previous stages, so you can easily compare and evaluate the candidates. You only go for a face-to-face interview with the candidates that you feel have met all the criteria so far. This contributes to hiring the right fit at the right time."
      >
        <img src="/talents/review-1.png" alt="Talents 1" className="rounded-xl max-w-full" />
        <img
          src="/talents/review-2.png"
          alt="Talents 2"
          className="absolute h-[19rem] top-[15%] right-0 bottom-0 left-[-30%]"
        />
      </TalentCard>
    </>
  );
};

export default VerticalCards;

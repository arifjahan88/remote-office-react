import TalentCard from "../common/Card/TalentCard";

const Teams = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#265FD1] text-white pl-2 lg:pl-[10rem] pr-2 lg:pr-16 pb-8 md:pb-16 lg:pb-32">
        <TalentCard
          teams={true}
          title="Supercharge your team"
          description="You want to empower your current team of high performers by adding specialists with niche experience. Hand-pick the best resources to contribute to the project."
        >
          <img src="/team-1.png" alt="Talents 1" className="rounded-xl object-cover" />
        </TalentCard>
      </div>
      <div className="bg-secondary text-black pr-2 lg:pr-[10rem] pl-2 lg:pl-16">
        <TalentCard
          teams={true}
          teamsRight={true}
          title="Build your dream team"
          description="You need to build a team from scratch. You hand-pick resources that align with your vision and what your project needs. You scale the team as your project grows."
        >
          <img src="/team-2.png" alt="Talents 1" className="rounded-xl object-cover" />
        </TalentCard>
      </div>
    </section>
  );
};

export default Teams;

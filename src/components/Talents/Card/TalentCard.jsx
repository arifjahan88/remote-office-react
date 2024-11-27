const TalentCard = ({ title, description, children }) => {
  return (
    <>
      <div className="flex items-center gap-24 justify-between pt-8 md:pt-16 lg:pt-32">
        <div className="text-left flex flex-col w-full md:w-[40%] gap-8">
          <h2 className="font-bold text-4xl">{title}</h2>
          <p className="text-[#a9a9a9]">{description}</p>
          <button className="w-max flex items-center gap-3 font-bold hover:scale-90 duration-300">
            Learn More <img src="/talents/learn.png" className="w-5" alt="learn" />
          </button>
        </div>
        <div className="w-full md:w-[40%] relative">
          {children}
          
        </div>
      </div>
    </>
  );
};

export default TalentCard;

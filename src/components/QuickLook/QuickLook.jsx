const QuickLook = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container grid grid-cols-2 pt-[6rem] pb-[6rem] items-center justify-between gap-5">
        <div className="space-y-5">
          <img src="/look.png" alt="" />
          <h1 className="text-[3rem] font-extrabold leading-tight">
            Take a <br /> quick look <br /> at our platform
          </h1>
          <p>
            You want to empower your current team of high performers by adding specialists with
            niche experience. Hand-pick the best resources to contribute to the project.
          </p>
        </div>
        <div className="grid place-content-center">
          <img
            src="/steps/step-41.png"
            alt="steps 1"
            className="rounded-xl max-w-[448px] max-h-[495px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickLook;
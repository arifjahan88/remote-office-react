import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";

const Talents = () => {
  return (
    <>
      <section className="bg-primary text-white py-8 md:py-16 lg:py-24">
        <div className="container relative">
          <div className="sticky z-[2] top-[4.3rem] bg-primary">
            <h1 className="w-full md:w-[55%] py-8 text-5xl font-extrabold">
              Ensuring access to top vetted talents
            </h1>
          </div>
          <VerticalCards />
        </div>
        <h1 className="text-5xl font-extrabold pt-24 pb-12 container mx-auto">
          We are just getting started, there is <br /> more to come...
        </h1>
      </section>
      <HorizontalCards />
    </>
  );
};

export default Talents;

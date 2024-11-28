import { FadeIn } from "../motion/Variants";
import HorizontalCards from "./HorizontalCards";
import VerticalCards from "./VerticalCards";

const Talents = () => {
  return (
    <>
      <section className="bg-primary text-white py-8 md:py-16 lg:py-24">
        <div className="sticky z-[2] top-[4.3rem] bg-primary">
          <FadeIn direction="up">
            <h1 className="w-full max-w-7xl py-8 text-5xl font-extrabold mx-auto">
              Ensuring access to top vetted <br /> talents
            </h1>
          </FadeIn>
        </div>
        <div className="container relative">
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

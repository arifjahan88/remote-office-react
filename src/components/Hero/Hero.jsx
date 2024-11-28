import { TypeAnimation } from "react-type-animation";
import Button from "../common/Button";
import { TiltEffect } from "../motion/TiltEffect";
import { FadeIn } from "../motion/Variants";

const Hero = () => {
  return (
    <section className="container pt-24 lg:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:min-h-screen place-content-center text-center lg:text-left">
      <div>
        <h1 className="text-[4rem] font-extrabold leading-tight text-primary">
          Build and <br /> Manage Global <br />
          <TypeAnimation
            sequence={["Compliances", 2000, "HR Operations", 2000, "Remote Teams", 2000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>

        <FadeIn direction="left">
          <div className="text-2xl py-8 max-w-md lg:max-w-full mx-auto">
            We are an end-to-end remoteOps platform that solves all things global HR
          </div>
        </FadeIn>
        <Button text="Looking For Talent" />
        <div className="flex items-baseline justify-center lg:justify-start">
          <img src="/hero-arrow.png" alt="hero-arrow" />
          <button className="flex gap-2 bg-[#EDECA3] w-max px-2 py-1 rounded-xl items-center">
            <img src="/hero-i.png" alt="" className="w-5 h-auto object-cover inline-block" />
            <span>Pay Only For Result</span>
          </button>
        </div>
      </div>

      {/* Right Side Blob */}
      <div className="relative z-0">
        <TiltEffect className="relative lg:absolute">
          <img src="/blob.png" alt="blob" className="w-full" />
        </TiltEffect>

        <FadeIn
          direction="up"
          delay={1}
          className="absolute h-[25rem] lg:h-[250px] top-auto lg:top-[50%] right-0 lg:right-auto bottom-[-5%] lg:bottom-0 left-auto lg:left-[40%]"
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/asha-sharma.png" alt="asha" />
          </TiltEffect>
        </FadeIn>

        <FadeIn
          direction="up"
          className="absolute h-[25rem] lg:h-[250px] top-[-6%] lg:top-[20%] right-auto bottom-auto lg:bottom-0 left-0 lg:left-[5%] z-[-1] lg:z-[1]"
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/mighel.png" alt="mighel" />
          </TiltEffect>
        </FadeIn>
        <FadeIn
          direction="left"
          className="absolute h-[100px] top-[10%] right-0 bottom-0 left-auto hidden lg:block"
          delay={2}
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/multiple-image.png" alt="multiple" />
          </TiltEffect>
        </FadeIn>
        <FadeIn direction="none" delay={3} className="hidden lg:block">
          <img
            className="relative lg:absolute hover:scale-125 duration-300 z-[3] h-10 top-[10%] right-auto bottom-auto left-0"
            src="/talent-img.png"
            alt="talent"
          />
          <img
            className="relative lg:absolute hover:scale-125 duration-300 z-[3] h-10 top-[50%] right-0 bottom-0 left-auto"
            src="/virtual-hr.png"
            alt="virtual"
          />
          <img
            className="relative lg:absolute hover:scale-125 duration-300 z-[3] h-10 top-auto right-auto bottom-[20%] left-[0%]"
            src="/virtual-team.png"
            alt="team"
          />
          <img
            className="relative lg:absolute hover:scale-125 duration-300 z-[3] h-10 top-[40%] right-[0%] bottom-[0%] left-[30%]"
            src="/compiance.png"
            alt="compiance"
          />
        </FadeIn>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:hidden mb-10">
        {["Talent Acquisition", "Vrtual Hr", "Virtual Team Management", "Compliance"].map((i) => {
          return (
            <div
              key={i}
              className="bg-lightsecondary text-xl md:text-3xl font-bold text-gray-700 rounded-lg h-28 grid place-content-center"
            >
              {i}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

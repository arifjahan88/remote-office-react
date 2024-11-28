import { TypeAnimation } from "react-type-animation";
import Button from "../common/Button";
import { TiltEffect } from "../motion/TiltEffect";
import { FadeIn } from "../motion/Variants";

const Hero = () => {
  return (
    <section className="container pt-28 grid grid-cols-1 md:grid-cols-2 gap-24 min-h-screen place-content-center">
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
          <div className="text-2xl py-8">
            We are an end-to-end remoteOps platform that solves all things global HR
          </div>
        </FadeIn>
        <Button text="Looking For Talent" />
        <div className="flex items-baseline">
          <img src="/hero-arrow.png" alt="hero-arrow" />
          <button className="flex gap-2 bg-[#EDECA3] w-max px-2 py-1 rounded-xl items-center">
            <img src="/hero-i.png" alt="" className="w-5 h-auto object-cover inline-block" />
            <span>Pay Only For Result</span>
          </button>
        </div>
      </div>
      <div className="relative z-0">
        <TiltEffect className="absolute">
          <img src="/blob.png" alt="blob" />
        </TiltEffect>

        <FadeIn
          direction="up"
          delay={1}
          className="absolute h-[250px] top-[50%] right-auto bottom-0 left-[40%]"
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/asha-sharma.png" alt="asha" />
          </TiltEffect>
        </FadeIn>

        <FadeIn
          direction="up"
          className="absolute h-[250px] top-[20%] right-auto bottom-0 left-[5%]"
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/mighel.png" alt="mighel" />
          </TiltEffect>
        </FadeIn>
        <FadeIn
          direction="left"
          className="absolute h-[100px] top-[10%] right-0 bottom-0 left-auto"
          delay={2}
        >
          <TiltEffect className="relative h-full">
            <img className="h-full" src="/multiple-image.png" alt="multiple" />
          </TiltEffect>
        </FadeIn>
        <FadeIn direction="none" delay={3}>
          <img
            className="absolute hover:scale-125 duration-300 z-[3] h-10 top-[10%] right-auto bottom-auto left-0"
            src="/talent-img.png"
            alt="talent"
          />
          <img
            className="absolute hover:scale-125 duration-300 z-[3] h-10 top-[50%] right-0 bottom-0 left-auto"
            src="/virtual-hr.png"
            alt="virtual"
          />
          <img
            className="absolute hover:scale-125 duration-300 z-[3] h-10 top-auto right-auto bottom-[20%] left-[0%]"
            src="/virtual-team.png"
            alt="team"
          />
          <img
            className="absolute hover:scale-125 duration-300 z-[3] h-10 top-[40%] right-[0%] bottom-[0%] left-[30%]"
            src="/compiance.png"
            alt="compiance"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;

import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import SkillSet from "./Skillset";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="My Service and work i do" title="What all things I do" />

        <div className="relative">
          <SkillSet />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#contact"
          >
            Have a work for me? Contact!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

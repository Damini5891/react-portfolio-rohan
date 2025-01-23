import Experience from "./Experience";
import Heading from "./Heading";
import SkillsImg from "./SkillsImg";

const Skills = ({ className }) => {
  return (
    <div className={className} id="techstack">
      <Heading
        tag="Technologies i work with"
        title="Experience and TechStack"
      />
      <p className="body-1 max-w-3xl mx-auto text-n-2 text-center">
        My primary expertise lies in backend development and data analysis.
        Python is my go-to language, complemented by proficiency in R for
        statistical computing. I have extensive experience building APIs and web
        applications using frameworks like Django and Flask. Additionally, I
        possess professional experience with Java Springboot for
        enterprise-level development. My skillset also encompasses utilizing AWS
        for cloud infrastructure and services.
      </p>
      <SkillsImg />
      <Experience />
      <p className="text-center mt-4">
        Visit my{" "}
        <a className="text-purple-400" href="">
          Linkedin
        </a>{" "}
        for more details about me
      </p>
    </div>
  );
};

export default Skills;

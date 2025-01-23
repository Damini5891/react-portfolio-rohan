import awslogo from "../assets/skills/awslogo.png";
import cppicon from "../assets/skills/cppicon.png";
import cssicon from "../assets/skills/cssicon.png";
import dhangoicon from "../assets/skills/dhangoicon.png";
import giticon from "../assets/skills/giticon.png";
import htmlicon from "../assets/skills/htmlicon.png";
import jsicon from "../assets/skills/jsicon.png";
import mongodb from "../assets/skills/mongodb.svg";
import pythonicon from "../assets/skills/pythonicon.png";
import ricon from "../assets/skills/ricon.png";
import tableau from "../assets/skills/tableau.png";
import javaicon from "../assets/skills/javaicon.png";

const SkillIcon = ({ name, imageSrc }) => {
  return (
    <div className="p-2 mt-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-15 h-14 mr-6 mt-2 hover:scale-125 transition-all duration-500 cursor-pointer"
      />
    </div>
  );
};

const SkillsImg = () => {
  const skills = [
    { name: "Python", imageSrc: pythonicon },
    { name: "Django", imageSrc: dhangoicon },
    { name: "AWS", imageSrc: awslogo },
    { name: "C++", imageSrc: cppicon },
    { name: "Git", imageSrc: giticon },
    { name: "Java", imageSrc: javaicon },
    { name: "MongoDB", imageSrc: mongodb },
    { name: "R", imageSrc: ricon },
    { name: "Tableau", imageSrc: tableau },
    { name: "HTML", imageSrc: htmlicon },
    { name: "CSS", imageSrc: cssicon },
    { name: "JavaScript", imageSrc: jsicon },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <SkillIcon key={index} name={skill.name} imageSrc={skill.imageSrc} />
      ))}
    </div>
  );
};

export default SkillsImg;

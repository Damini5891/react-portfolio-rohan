import GlowCard from "./design/GlowCard";
import braincrowd from "../assets/experience/braincrowd.jpeg";
import cryptowex from "../assets/experience/cryptowex.png";
import invsto from "../assets/experience/invsto.png";
import lightning from "../assets/experience/lightning.jpg";
import GlowCard2 from "./design/GlowCard2";

const ExperienceContent = () => {
  const experiences = [
    {
      position: "Senior Software Developer",
      company: "Brain Crowd Software Private Limited",
      startDate: "Oct 2021",
      endDate: "Mar 2024",
      logo: braincrowd,
      work: [
        "Led Python Django backend development for My Vessel Spotter website.",
        "Made contributions to Java Spring Boot development for feature enhancement.",
        "Worked on Boxxport's backend to microservices architecture with Java Spring Boot.",
        "Integrated external APIs, payment gateways, and wallet systems.",
      ],
    },
    {
      position: "Software Developer Intern",
      company: "Invsto",
      startDate: "Feb 2020",
      endDate: "Jul 2021",
      logo: invsto,

      work: [
        "Led development of stock trading chatbot, increasing revenue by 30%.",
        "Orchestrated portfolio analyzer and stock screener platforms for company website.",
        "Utilized PostgreSQL, MySQL, Tableau, and other tools for data analysis.",
        "Developed and scaled data management procedures and pipelines to support growth.",
      ],
    },
    {
      position: "Marketing Analyst Intern",
      company: "Lightning Speed Event Services",
      startDate: "Mar 2018",
      endDate: "Mar 2020",
      logo: lightning,

      work: [
        "Organized residential events, boosting revenue by 67% through relationship-building..",
        "Transformed marketing with data-driven strategies.",
        "Implemented Python-based client-retention initiative.",
        "Utilized Python, Django and JS in agile framework to create user-friendly client sites.",
      ],
    },
    {
      position: "COO",
      company: "Crypto Wex",
      startDate: "Jan 2019",
      endDate: "Jan 2020",
      logo: cryptowex,
      work: [
        "Led agile development of flagship trading platform, ensuring top performance.",
        "Strengthened client relationships, resolving issues and addressing needs.",
        "Captivated investors with impactful presentations, securing financing.",
        "Directed preparation of KPI reports, enhancing trading performance metrics.",
      ],
    },
  ];

  const ExperienceCard = ({
    logo,
    position,
    company,
    startDate,
    endDate,
    work,
  }) => {
    return (
      <GlowCard>
        <div className="flex justify-center items-center">
          <div className="flex items-center rounded-md p-6 mb-6">
            <div>
              <img src={logo} alt={company} className="h-20 w-25 mr-6 mb-4" />
              <h3 className="text-n-2 text-lg font-semibold mb-2">{company}</h3>
              <p className="text-gray-600 mb-2">({position})</p>
              <p className="text-gray-600 mb-4">
                {startDate} - {endDate}
              </p>
              <ul className="list-disc list-inside">
                {work.map((item, index) => (
                  <li key={index} className="text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GlowCard>
    );
  };

  return (
    <GlowCard2>
      <div className="container mx-auto py-8">
        {experiences.map((exp, index) => {
          return (
            <ExperienceCard
              key={index}
              position={exp.position}
              company={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              work={exp.work}
              logo={exp.logo}
            />
          );
        })}
      </div>
    </GlowCard2>
  );
};

export default ExperienceContent;

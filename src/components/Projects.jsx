import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";
import Benefits from "./Benefits";

const Projects = () => (
  <Section className="overflow-hidden" id="projects">
    <div className="container md:pb-10">
      <Heading
        tag="PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST"
        title="What I've worked on"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="mb-10 my-6 mx-6">
                    <img
                      className="w-2/3  "
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>

                  <div className="mt-6">
                    <a href={item.link}>Github</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>

    <Benefits />
  </Section>
);

export default Projects;

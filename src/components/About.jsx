import rohan from "../assets/about/rohan.png";

export default function Component() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-20" id="about">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-10 md:px-6 lg:flex-row lg:items-start lg:gap-12 xl:max-w-3xl xl:gap-14 sm:gap-5 sm:px">
        <div className="space-y-4 lg:pr-8 lg:w-1/2 xl:space-y-5">
          <img
            alt="Rohan"
            className="rounded mx-auto overflow-hidden object-cover object-center"
            height="300"
            src={rohan}
            width="250"
          />
          <div className="space-y-2">
            <span className="inline-block text-xl font-bold tracking-tighter sm:text-3xl">
              Rohan Kumar
            </span>
            <span className="inline-block font-medium text-sm tracking-tight text-gray-500 md:text-xl ">
              Software Developer at Exponentia.ai
            </span>
          </div>
        </div>
        <div className="space-y-4 text-left lg:w-1/2 xl:space-y-5">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I am a developer proficient in{" "}
            <span className="text-purple-400">Python, Django and ML.</span> I
            specialize in crafting innovative solutions, from building
            applications to conducting advanced{" "}
            <span className="text-purple-400">Data Analysis.</span> Explore my
            projects to see how I leverage these skills to drive impactful
            results.
          </p>
        </div>
      </div>
    </section>
  );
}

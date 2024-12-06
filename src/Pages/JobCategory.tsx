import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div>
      <div className=" text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your
        Career journey Today!
      </div>
      <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none
       [&_button]:!bg-bright-sun-400 [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
      nextControlIcon={<IconArrowRight className="h-8 w-8"/>}
      previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide>
            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-400">
              <div className="p-2 bg-bright-sun-400 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-xl font-semibold text-mine-shaft-100 ">
              {category.name}
              </div>
              <div className="text-sm text-center font text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-lg text-bright-sun-400">
                {category.jobs}+ New job-posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
export default JobCategory;

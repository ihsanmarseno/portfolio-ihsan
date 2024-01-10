import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data.js";
import { FaGithub } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { MdConstruction } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const project = data.sort((a, b) => b.id - a.id);

  const displayedProjects = project.slice(0, 4);

  return (
    <div
      name="projects"
      className="w-full h-full text-gray-300 bg-[#0a192f] pt-[100px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="inline md:text-4xl text-3xl font-bold text-white border-b-4 border-[#FF5757]">
            Projects
          </p>
          <p className="py-4 text-sm md:text-lg">{`// Check out some of my recent projects`}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <style>{`
        .tippy-tooltip {
          background-color: rgb(31, 41, 55); /* Ganti dengan warna RGB yang diinginkan */
        }`}</style>
          {displayedProjects.map((item) => (
            <div
              key={item.id}
              className="shadow-lg shadow-[#040c16] container rounded-md content-div"
              data-aos="flip-left"
            >
              <div className="flex justify-between px-4 pt-4">
                <button className="bg-[#0a192f] text-white px-2 py-1 border border-white hover:bg-[#FF5757] hover:border-[#FF5757] text-sm">
                  {item.field}
                </button>
                <div className="flex items-center gap-2 cursor-pointer">
                  {item.github && (
                    <Tooltip
                      title="GitHub"
                      position="top"
                      arrow={true}
                      duration={300}
                      className="relative group "
                    >
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-6 h-6 group-hover:text-[#FF5757] transition-colors duration-300" />
                      </a>
                    </Tooltip>
                  )}

                  {item.live && (
                    <Tooltip
                      title="Live Web"
                      position="top"
                      arrow={true}
                      duration={300}
                      className="relative group "
                    >
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TbWorldShare className="w-6 h-6 group-hover:text-[#FF5757] transition-colors duration-300" />
                      </a>
                    </Tooltip>
                  )}

                  {!item.github && !item.live && (
                    <Tooltip
                      title="Under Construction"
                      position="top"
                      arrow={true}
                      duration={300}
                      className="relative group"
                    >
                      <div className="relative group ">
                        <MdConstruction className="w-6 h-6 group-hover:text-[#FF5757] transition-colors duration-300" />
                      </div>
                    </Tooltip>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between px-4 pt-4">
                <div>
                  <p className="inline text-lg font-semibold border-b-2 border-[#EAD196]">
                    {item.name}
                  </p>
                  <p className="text-sm md:text-base text-[#a5a2a2] py-2">
                    {item?.description}
                  </p>
                </div>
                <div className="absolute bottom-0 pb-4 items-center">
                  <div className="flex items-center gap-1 text-xs tracking-normal text-white">
                    <span>
                      <GrTechnology className="flex items-center justify-center" />
                    </span>
                    {item.technologies}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <Link
            to="/projects"
            className="bg-[#0a192f] flex items-center text-white px-4 py-2 border group border-white hover:bg-[#FF5757] hover:border-[#FF5757]"
          >
            View Full Projects
            <span className="duration-300 group-hover:-rotate-45">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

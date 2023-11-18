import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data.js";
import { FaGithub } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { GrTechnology } from "react-icons/gr";
import { MdConstruction } from "react-icons/md";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const project = data;

  const displayedProjects = showMore ? project : project.slice(0, 3);

  return (
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#0a192f] pt-20 lg:pt-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col item justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-[#FF5757]">
            Projects
          </p>
          <p className="py-4">{`// Check out some of my recent projects`}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <a href={item.github}>
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live}>
                      <TbWorldShare className="w-6 h-6" />
                    </a>
                  )}
                  {!item.github && !item.live && (
                    <MdConstruction className="w-6 h-6" />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between px-4 pt-4">
                <div>
                  <p className="inline text-lg font-semibold border-b-2 border-[#ea9a9a]">{item.name}</p>
                  <p className="text-sm text-[#a5a2a2] py-2">{item?.description}</p>
                </div>
                <div className="absolute bottom-0 pb-4">
                  <div className="flex items-center gap-1 text-xs tracking-tight text-white">
                    <span><GrTechnology /></span>
                    {item.technologies}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-[#0a192f] text-white px-4 py-2 border border-white hover:bg-[#FF5757] hover:border-[#FF5757]"
            onClick={() => setShowMore(!showMore)}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {showMore ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

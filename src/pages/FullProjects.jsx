import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data.js";
import { FaGithub } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { MdConstruction } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Projects = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useNavigate();

  useEffect(() => {
    AOS.init();
    const filteredData = selectedCategory
      ? data.filter((item) => item.field === selectedCategory)
      : data;

    setCurrentItems(filteredData);

    window.scrollTo({ top: 0, behavior: "smooth", duration: 500 });
  }, [selectedCategory]);

  const handleBack = (e) => {
    e.preventDefault();
    router(-1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div name="projects" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center min-h-screen">
        <div className="pb-8">
          <div className="flex py-4">
            <button
              href="/"
              className="flex items-center text-gray-300 hover:text-[#FF5757] hover:-rotate-45 duration-300"
              onClick={handleBack}
            >
              <HiArrowNarrowLeft className="w-6 h-6" />
            </button>
          </div>
          <p className="inline md:text-4xl text-3xl font-bold text-white border-b-4 border-[#FF5757]">
            Projects
          </p>
          <p className="pt-4">{`//There are ${data.length} projects that I have worked on in the front-end and UI/UX fields`}</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-4 text-base">
          <button
            className={`category-button ${
              selectedCategory === ""
                ? "active bg-[#EAD196] text-black px-4 py-2"
                : "border-2 group hover:bg-[#EAD196] hover:border-[#EAD196] py-2 px-4 hover:text-black"
            }`}
            onClick={() => handleCategoryChange("")}
          >
            All
          </button>
          <button
            className={`category-button ${
              selectedCategory === "Full-stack"
                ? "active bg-[#EAD196] text-black px-4 py-2"
                : "border-2 group hover:bg-[#EAD196] hover:border-[#EAD196] py-2 px-4 hover:text-black"
            }`}
            onClick={() => handleCategoryChange("Full-stack")}
          >
            Full-stack
          </button>
          <button
            className={`category-button ${
              selectedCategory === "Front-end Web"
                ? "active bg-[#EAD196] text-black px-4 py-2"
                : "border-2 group hover:bg-[#EAD196] hover:border-[#EAD196] py-2 px-4 hover:text-black"
            }`}
            onClick={() => handleCategoryChange("Front-end Web")}
          >
            Front-end Web
          </button>
          <button
            className={`category-button ${
              selectedCategory === "Front-end Mobile"
                ? "active bg-[#EAD196] text-black px-4 py-2"
                : "border-2 group hover:bg-[#EAD196] hover:border-[#EAD196] py-2 px-4 hover:text-black"
            }`}
            onClick={() => handleCategoryChange("Front-end Mobile")}
          >
            Front-end Mobile
          </button>
          <button
            className={`category-button ${
              selectedCategory === "UI/UX"
                ? "active bg-[#EAD196] text-black px-4 py-2"
                : "border-2 group hover:bg-[#EAD196] hover:border-[#EAD196] py-2 px-4 hover:text-black"
            }`}
            onClick={() => handleCategoryChange("UI/UX")}
          >
            UI/UX
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <style>{`
            .tippy-tooltip {
              background-color: rgb(31, 41, 55);
            }
          `}</style>
          {currentItems.map((item) => (
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
                <div className="absolute bottom-0 pb-4">
                  <div className="flex items-center gap-1 text-xs tracking-tight text-white">
                    <span>
                      <GrTechnology />
                    </span>
                    {item.technologies}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

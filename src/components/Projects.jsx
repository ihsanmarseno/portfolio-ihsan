import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data.js";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the animation duration
      once: true, // Animation will only occur once
    });
  }, []);

  const project = data;

  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-20 lg:pt-0">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-[#FF5757]">
            Projects
          </p>
          <p className="py-6">{`// Check out some of my recent projects`}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
              data-aos="fade-up" // Specify the AOS animation here
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl tracking-wider text-white font bold">{item.name}</span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Live
                    </button>
                  </a>
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

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useEffect } from "react";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full h-screen bg-[#0a192f]" name="home"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p
          className="text-2xl text-[#FF5757] font-semibold"
          data-aos="fade-up"
          data-aos-delay="200" 
        >
          Hello,
        </p>
        <p
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#f5f7ff]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Ihsan Tri Marseno
          <span className="text-[#FF5757] text-lg md:text-2xl"> {`'s here`}</span>
        </p>
        <p
          className="text-xl md:text-4xl font-bold text-[#2ea4ff]"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          {`Front-end and UI/UX Enthusiast.`}
        </p>
        <p
          className="text-[#e4e4ee] text-sm md:text-base pt-4 pb-2   max-w-[700px]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {`I'm a Informatics student at UPN Veteran Jakarta, with a current
          focus on front-end web development. Below is a showcase of my recent
          projects`}
        </p>
        <div>
          <Link to="projects" smooth={true} duration={800} offset={-90}>
            <button
              className="flex items-center px-6 py-2 my-2 text-white border-2 group hover:bg-[#FF5757] hover:border-[#FF5757]"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              View Projects
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

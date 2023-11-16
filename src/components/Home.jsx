import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-[#FF5757] font-semibold">Hello, </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ihsan Tri Marseno
          <span className="text-[#FF5757] text-2xl"> {`'s here`}</span>
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
          {`Front-end and UI/UX Enthusiast.`}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Computer Science student at UPN Veteran Jakarta, with a current
          focus on front-end web development. Below is a showcase of my recent
          projects
        </p>
        <div>
          <Link to="projects" smooth={true} duration={1000}>
            <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-[#FF5757] hover:border-[#FF5757]">
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

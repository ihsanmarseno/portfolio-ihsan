import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo from "../assets/photo-profile.png";

const About = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-center">
            <p className="inline text-4xl font-bold border-b-4 border-[#FF5757]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-4">
          <div className="text-4xl font-bold sm:text-right place-self-center" data-aos="fade-up" data-aos-delay="200">
            <img src={Photo} alt="Ihsan Tri Marseno" className="w-48 rounded-full md:w-full" />
          </div>
          <div className="flex items-center text-base lg:tracking-widest lg:text-lg" data-aos="fade-right" data-aos-delay="400">
            <p>
              {`I'm Ihsan Tri Marseno, a 20-year-old with a passion for carving my
              career path in front-end development and UI/UX. While my primary
              focus is on front-end, I'm intrigued by the dynamic world of
              UI/UX. During my leisure time, I dedicate myself to honing my
              skills in these domains, constantly seeking to refine and expand
              my knowledge`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

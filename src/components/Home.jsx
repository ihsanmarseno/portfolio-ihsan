import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      name="home"
      className="w-full h-screen bg-[#0a192f]"
    >
      {/* Container */}
      <motion.div
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <motion.p
          className="text-2xl text-[#FF5757] font-semibold"
          variants={textVariants}
        >
          Hello, 
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          variants={textVariants}
        >
          Ihsan Tri Marseno
          <span className="text-[#FF5757] text-2xl"> {`'s here`}</span>
        </motion.h1>
        <motion.h2
          className="text-4xl sm:text-4xl font-bold text-[#8892b0]"
          variants={textVariants}
        >
          {`Front-end and UI/UX Enthusiast.`}
        </motion.h2>
        <motion.p
          className="text-[#8892b0] py-4 max-w-[700px]"
          variants={textVariants}
        >
          I am a Computer Science student at UPN Veteran Jakarta, with a current
          focus on front-end web development. Below is a showcase of my recent
          projects
        </motion.p>
        <div>
          <Link to="projects" smooth={true} duration={1000}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-[#FF5757] hover:border-[#FF5757]"
            >
              View Projects
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

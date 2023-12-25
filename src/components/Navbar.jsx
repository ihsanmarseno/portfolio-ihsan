import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/marseno1.png";
import { Link } from "react-scroll";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Logo Image"
          className="cursor-pointer lg:w-[150px] md:w-[125px] w-[100px]"
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex md:items-center">
        <li className="text-base lg:text-lg">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-base lg:text-lg">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-base lg:text-lg">
          <Link to="skills" smooth={true} duration={500} offset={-100}>
            Skills
          </Link>
        </li>
        <li className="text-base lg:text-lg">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-base lg:text-lg">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        <div className="items-center hidden md:flex lg:hidden md:gap-5 md:ml-4">
          <Tooltip
            title="Linkedin"
            position="bottom"
            arrow={true}
            duration={300}
            className="group"
          >
            <a
              href="https://www.linkedin.com/in/ihsanmarseno/"
              className="mx-4 text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={20}
                className="group-hover:text-[#FF5757] transition-colors duration-300"
              />
            </a>
          </Tooltip>
          <Tooltip
            title="GitHub"
            position="bottom"
            arrow={true}
            duration={300}
            className="group"
          >
            <a
              href="https://github.com/ihsanmarseno"
              className="mx-4 text-gray-240"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={20}
                className="group-hover:text-[#FF5757] transition-colors duration-300"
              />
            </a>
          </Tooltip>
          <Tooltip
            title="Email"
            position="bottom"
            arrow={true}
            duration={300}
            className="group"
          >
            <a
              href="mailto:ihsanmarseno09@gmail.com"
              className="mx-4 text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail
                size={20}
                className="group-hover:text-[#FF5757] transition-colors duration-300"
              />
            </a>
          </Tooltip>
          <Tooltip
            title="CV"
            position="bottom"
            arrow={true}
            duration={300}
            className="group"
          >
            <a
              href="https://drive.google.com/file/d/1PSsrjvHyZ6vdsuITvVT-KO0d_1sY_YHp/view?usp=sharing"
              className="mx-4 text-gray-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillPersonLinesFill
                size={20}
                className="group-hover:text-[#FF5757] transition-colors duration-300"
              />
            </a>
          </Tooltip>
        </div>
      </ul>

      {/* Hamburger / Close button */}
      <motion.div
        onClick={toggleMobileNav}
        className="z-10 md:hidden"
        initial={false}
        animate={mobileNav ? "close" : "hamburger"}
      >
        <motion.div
          className="icon"
          variants={{
            hamburger: { rotate: 0 },
            close: { rotate: 180 },
          }}
        >
          {mobileNav ? <IoMdClose size={28} /> : <HiMiniBars3 size={28} />}
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-menu"
              initial="hide"
              animate="show"
              exit="hide"
              variants={{
                hide: {
                  x: "-100%",
                  opacity: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    staggerChildren: 0.25,
                  },
                },
                show: {
                  x: "0%",
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                  },
                },
              }}
              className="absolute top-0 left-0 w-full h-screen bg-[#ff5757] flex flex-col justify-center text-white items-center z-40"
            >
              {/* Close button for mobile */}
              <motion.div
                onClick={toggleMobileNav}
                variants={{
                  hide: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="cursor-pointer items-center justify-center"
                whileHover={{ scale: 1.1 }} // Scale animation on hover
                whileTap={{ scale: 0.9 }} // Scale animation on tap
              >
                <IoMdClose size={28} />
              </motion.div>

              {/* Mobile menu links */}
              <motion.ul
                variants={{
                  hide: { y: "25%", opacity: 0 },
                  show: { y: "0%", opacity: 1 },
                }}
                className="list-none space-y-2 items-center justify-center text-center"
              >
                <motion.li className="py-2 text-2xl ">
                  <Link onClick={toggleMobileNav} to="home" duration={500}>
                    Home
                  </Link>
                </motion.li>
                <motion.li className="py-2 text-2xl">
                  <Link onClick={toggleMobileNav} to="about" duration={500}>
                    About
                  </Link>
                </motion.li>
                <motion.li className="py-2 text-2xl">
                  <Link
                    onClick={toggleMobileNav}
                    to="skills"
                    duration={500}
                    offset={-20}
                  >
                    Skills
                  </Link>
                </motion.li>
                <motion.li className="py-2 text-2xl">
                  <Link onClick={toggleMobileNav} to="projects" duration={500}>
                    Projects
                  </Link>
                </motion.li>
                <motion.li className="py-2 text-2xl">
                  <Link
                    onClick={toggleMobileNav}
                    to="contact"
                    duration={500}
                    offset={-20}
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>

              {/* Social icons for mobile */}
              <motion.div
                variants={{
                  hide: { y: "25%", opacity: 0 },
                  show: { y: "0%", opacity: 1 },
                }}
                className="flex items-center gap-6 text-white"
              >
                <Tooltip
                  title="Linkedin"
                  position="bottom"
                  arrow={true}
                  duration={300}
                  className="group"
                >
                  <a
                    href="https://www.linkedin.com/in/ihsanmarseno/"
                    className="mx-4 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="group-hover:text-black" />
                  </a>
                </Tooltip>
                <Tooltip
                  title="GitHub"
                  position="bottom"
                  arrow={true}
                  duration={300}
                  className="group"
                >
                  <a
                    href="https://github.com/ihsanmarseno"
                    className="mx-4 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} className="group-hover:text-black" />
                  </a>
                </Tooltip>
                <Tooltip
                  title="Email"
                  position="bottom"
                  arrow={true}
                  duration={300}
                  className="group"
                >
                  <a
                    href="mailto:ihsanmarseno09@gmail.com"
                    className="mx-4 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiOutlineMail
                      size={30}
                      className="group-hover:text-black"
                    />
                  </a>
                </Tooltip>
                <Tooltip
                  title="CV"
                  position="bottom"
                  arrow={true}
                  duration={300}
                  className="group"
                >
                  <a
                    href="https://drive.google.com/file/d/1PSsrjvHyZ6vdsuITvVT-KO0d_1sY_YHp/view?usp=sharing"
                    className="mx-4 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFillPersonLinesFill
                      size={30}
                      className="group-hover:text-black"
                    />
                  </a>
                </Tooltip>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] lg:left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://www.linkedin.com/in/ihsanmarseno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://github.com/ihsanmarseno"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="mailto:ihsanmarseno09@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://drive.google.com/file/d/1PSsrjvHyZ6vdsuITvVT-KO0d_1sY_YHp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

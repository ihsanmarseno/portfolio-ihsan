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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
            >
              <BsFillPersonLinesFill
                size={20}
                className="group-hover:text-[#FF5757] transition-colors duration-300"
              />
            </a>
          </Tooltip>
        </div>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <HiMiniBars3 size={28} /> : null}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40"
        }
      >
        {/* Close button for mobile */}
        {nav && (
          <div onClick={handleClick}>
            <IoMdClose size={28} />
          </div>
        )}
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-20}
          >
            Contact
          </Link>
        </li>

        {/* Social icons for mobile */}
        <div className="flex items-center gap-6">
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
              <FaLinkedin size={30} className="group-hover:text-[#FF5757]" />
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
              className="mx-4 text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="group-hover:text-[#FF5757]"/>
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
              className="mx-4 text-gray-300"
            >
              <HiOutlineMail size={30} className="group-hover:text-[#FF5757]"/>
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
              className="mx-4 text-gray-300"
            >
              <BsFillPersonLinesFill size={30} className="group-hover:text-[#FF5757]"/>
            </a>
          </Tooltip>
        </div>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] lg:left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://www.linkedin.com/in/ihsanmarseno/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://github.com/ihsanmarseno"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="mailto:ihsanmarseno09@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://drive.google.com/file/d/1PSsrjvHyZ6vdsuITvVT-KO0d_1sY_YHp/view?usp=sharing"
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

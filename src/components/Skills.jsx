import { useState, useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Typescript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next.png';
import Figma from '../assets/figma.png';
import Canva from '../assets/canva.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    { id: 1, image: HTML, alt: 'HTML icon', label: 'HTML' },
    { id: 2, image: CSS, alt: 'CSS icon', label: 'CSS' },
    { id: 3, image: JavaScript, alt: 'JavaScript icon', label: 'JavaScript' },
    { id: 4, image: Typescript, alt: 'Typescript icon', label: 'Typescript' },
    { id: 5, image: ReactImg, alt: 'React icon', label: 'React Js' },
    { id: 6, image: GitHub, alt: 'GitHub icon', label: 'GitHub' },
    { id: 7, image: Node, alt: 'Node icon', label: 'Node Js' },
    { id: 8, image: Next, alt: 'Next icon', label: 'Next Js' },
    { id: 9, image: Tailwind, alt: 'Tailwind icon', label: 'Tailwind CSS' },
    { id: 10, image: Figma, alt: 'Figma icon', label: 'Figma' },
    { id: 11, image: Canva, alt: 'Canva icon', label: 'Canva' },
  ];

  const displayedSkills = showMore ? skillsData : skillsData.slice(0, 4);

  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300 pt-20 lg:pt-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='inline text-4xl font-bold border-b-4 border-[#FF5757] '>Skills</p>
          <p className='py-4'>{`// I leverage the following skills to create projects`}</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 pt-8 text-center sm:grid-cols-4'>
          {displayedSkills.map((skill) => (
            <div
              key={skill.id}
              className='shadow-md shadow-[#040c16]'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <img className='w-20 mx-auto' src={skill.image} alt={skill.alt} />
              <p className='my-4'>{skill.label}</p>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-4'>
          <button
            className='bg-[#0a192f] text-white px-4 py-2 border border-white hover:bg-[#FF5757] hover:border-[#FF5757]'
            onClick={() => setShowMore(!showMore)}
            data-aos='fade-up'
            data-aos-delay='300'
          >
            {showMore ? (
              <FaArrowUp />
            ) : (
              <FaArrowDown />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

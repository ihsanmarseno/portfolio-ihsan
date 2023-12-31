import { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Typescript from '../assets/typescript.png';
import Java from '../assets/java.webp';
import MySQL from '../assets/mysql.png';
import SQLite from '../assets/sqlite.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next.png';
import Bootstrap from '../assets/bootstrap.svg';
import daisyUI from '../assets/daisyui.png';
import Figma from '../assets/figma.png'; 
import Canva from '../assets/canva.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    { id: 1, image: HTML, alt: 'HTML icon', label: 'HTML' },
    { id: 2, image: CSS, alt: 'CSS icon', label: 'CSS' },
    { id: 3, image: JavaScript, alt: 'JavaScript icon', label: 'JavaScript' },
    { id: 4, image: Typescript, alt: 'Typescript icon', label: 'Typescript' },
    { id: 5, image: Java, alt: 'Java icon', label: 'Java' },
    { id: 6, image: MySQL, alt: 'MySQL icon', label: 'MySQL' },
    { id: 7, image: SQLite, alt: 'SQLite icon', label: 'SQLite' },
    { id: 8, image: ReactImg, alt: 'React icon', label: 'React Js' },
    { id: 9, image: GitHub, alt: 'GitHub icon', label: 'GitHub' },
    { id: 10, image: Node, alt: 'Node icon', label: 'Node Js' },
    { id: 11, image: Next, alt: 'Next icon', label: 'Next Js' },
    { id: 12, image: Tailwind, alt: 'Tailwind icon', label: 'Tailwind CSS' },
    { id: 13, image: Bootstrap, alt: 'Bootstrap icon', label: 'Bootstrap' },
    { id: 14, image: daisyUI, alt: 'daisyUI icon', label: 'daisyUI' },
    { id: 15, image: Figma, alt: 'Figma icon', label: 'Figma' },
    { id: 16, image: Canva, alt: 'Canva icon', label: 'Canva' },
  ];


  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] pt-20 lg:pt-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
        <div>
          <p className='inline md:text-4xl text-3xl font-bold border-b-4 border-[#FF5757] text-white'>Skills</p>
          <p className='py-4 text-sm text-gray-300 md:text-lg'>{`// I leverage the following skills to create projects`}</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 pt-8 text-center text-gray-300 sm:grid-cols-4'>
          {skillsData.map((skill) => (
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
      </div>
    </div>
  );
};

export default Skills;

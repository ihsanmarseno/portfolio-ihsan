import { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next.svg';
import Figma from '../assets/figma.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name='skills'
      className='w-full md:h-screen bg-[#0a192f] text-gray-300 pt-20 lg:pt-0'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='inline text-4xl font-bold border-b-4 border-[#FF5757] '>Skills</p>
          <p className='py-4'>{`// I leverage the following skills to create projects`}</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4'>
          {/* Add AOS attributes to each skill card */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='200'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='400'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='600'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='800'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>React Js</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='1000'>
            <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
            <p className='my-4'>GitHub</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='1200'>
            <img className='w-20 mx-auto' src={Node} alt='Node icon' />
            <p className='my-4'>Node Js</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='1400'>
            <img className='w-20 mx-auto' src={Next} alt='Next icon' />
            <p className='my-4'>Next Js</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='1600'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos='fade-up' data-aos-delay='1800'>
            <img className='w-20 mx-auto' src={Figma} alt='Figma icon' />
            <p className='my-4'>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

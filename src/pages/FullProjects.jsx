import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data.js";
import { FaGithub } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { MdConstruction } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Projects = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const router = useNavigate();

  useEffect(() => {
    AOS.init();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    window.scrollTo({ top: 0, behavior: 'smooth', duration:500 });
  }, [itemOffset, itemsPerPage, router]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleBack = (e) => {
    e.preventDefault();
    router(-1);
  };

  return (
    <div name="projects" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center min-h-screen">
        <div className="pb-8">
          <div className="flex py-4">
            <button
              href="/"
              className="flex items-center text-gray-300 hover:text-[#FF5757] hover:-rotate-45 duration-300"
              onClick={handleBack}
            >
              <HiArrowNarrowLeft className="w-6 h-6" />
            </button>
          </div>
          <p className="inline md:text-4xl text-3xl font-bold text-white border-b-4 border-[#FF5757]">
            Projects
          </p>
          <p className="py-4">{`//There are ${data.length} projects that I have worked on in the front-end and UI/UX fields`}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="shadow-lg shadow-[#040c16] container rounded-md content-div"
              data-aos="flip-left"
            >
              <div className="flex justify-between px-4 pt-4">
                <button className="bg-[#0a192f] text-white px-2 py-1 border border-white hover:bg-[#FF5757] hover:border-[#FF5757] text-sm">
                  {item.field}
                </button>
                <div className="flex items-center gap-2 cursor-pointer">
                  {item.github && (
                    <a href={item.github}>
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live}>
                      <TbWorldShare className="w-6 h-6" />
                    </a>
                  )}
                  {!item.github && !item.live && (
                    <MdConstruction className="w-6 h-6" />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between px-4 pt-4">
                <div>
                  <p className="inline text-lg font-semibold border-b-2 border-[#ea9a9a]">
                    {item.name}
                  </p>
                  <p className="text-sm md:text-base text-[#a5a2a2] py-2">
                    {item?.description}
                  </p>
                </div>
                <div className="absolute bottom-0 pb-4">
                  <div className="flex items-center gap-1 text-xs tracking-tight text-white">
                    <span>
                      <GrTechnology />
                    </span>
                    {item.technologies}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="flex items-center justify-center mt-8"
          pageClassName="mx-2" // Set margin between page items
          pageLinkClassName="text-white px-3 py-2 rounded hover:bg-[#FF5757] z-0"
          activeClassName="px-1 py-2 rounded z-100 bg-[#FF5757]"
          previousClassName="mx-2"
          nextClassName="mx-2"
          previousLinkClassName="text-white bg-gray-800 px-3 py-2 rounded hover:bg-[#FF5757]"
          nextLinkClassName="text-white bg-gray-800 px-3 py-2 rounded hover:bg-[#FF5757]"
        />
      </div>
    </div>
  );
};

export default Projects;

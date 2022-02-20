import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer	">
                  <Link to="about" spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} className="ml-3 text-xl">
                    Mohamed Jawhar Nabi
                  </Link>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">



                  <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <Link to="projects" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
                      Anciens projets
                    </Link>
                    <Link to="skills" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
                      Compétences
                    </Link>
                    <Link to="testimonials" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
                      Témoignages
                    </Link>
                  </nav>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-flex items-center bg-red-400 border-0 py-1 px-3 text-white focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer	">
                    Collaborer avec moi
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>





                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition duration-500 transform"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-10 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                <Link to="projects" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium	cursor-pointer	">
                  Anciens projets
                </Link>
                <Link to="skills" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium	cursor-pointer	">
                  Compétences
                </Link>
                <Link to="testimonials" spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className=" text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium	cursor-pointer">
                  Témoignages
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="bg-red-400 text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium cursor-pointer	">
                  Collaborer avec moi
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>

    // <header className="bg-gray-800 md:sticky top-0 z-20">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer	">
    //       <Link to="about" spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500} className="ml-3 text-xl">
    //         Mohamed Jawhar Nabi
    //       </Link>
    //     </a>
    //     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    //       <Link to="projects" spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500} className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
    //         Anciens projets
    //       </Link>
    //       <Link to="skills" spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500} className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
    //         Compétences
    //       </Link>
    //       <Link to="testimonials" spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500}
    //         className="mr-5  px-3 text-white hover:text-gray-100 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	">
    //         Témoignages
    //       </Link>
    //     </nav>
    //     <Link
    //       to="contact"
    //       spy={true}
    //       smooth={true}
    //       offset={-70}
    //       duration={500}
    //       className="inline-flex items-center bg-red-400 border-0 py-1 px-3 text-white focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer	">
    //       Collaborer avec moi
    //       <ArrowRightIcon className="w-4 h-4 ml-1" />
    //     </Link>
    //   </div>
    // </header>
  );
}

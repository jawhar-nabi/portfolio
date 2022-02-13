import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer	">
          <Link to="about" spy={true}
            smooth={true}
            offset={-70}
            duration={500} className="ml-3 text-xl">
            Mohamed Jawhar Nabi
          </Link>
        </a>
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
    </header>
  );
}

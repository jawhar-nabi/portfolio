import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import TypeAnimation from 'react-type-animation';


export default function About() {
  return (
    <div id="about">
      <div id="banner" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center "
        >
          {/* <TypeAnimation
            cursor={true}
            sequence={['<Bonjour> Je suis Mohamed Jawhar. </Bonjour>', 60000, '']}
            wrapper="h1"
            className="title-font sm:text-3xl text-3xl mb-3 font-medium base-text"
          />
          <TypeAnimation
            cursor={false}
            sequence={['J\'aime bien créer des solutions innovantes.', 20000, '']}
            wrapper="div"
            className=" base-text sm:text-2xl text-xl mt-2"
          /> */}
          <h1 className="title-font sm:text-3xl text-3xl mb-3 font-medium base-text">
            Bonjour, Je suis Mohamed Jawhar.
            <br className="hidden lg:inline-block" /> <div className="sm:text-2xl text-xl mt-2 base-text"> J'aime bien créer des solutions innovantes.</div>
          </h1>
          <p className="mb-8 leading-relaxed base-text ">
            Veux tu voir mes anciens projets? ou bien veux tu me contacter ? N'hèsite pas de cliquer dessous
          </p>
          <div className="flex justify-center">
            {/* <a
                  href="#contact"
                  className="inline-flex text-white text-center bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg transition duration-500 ease-in-out transform  hover:scale-110">
                  Me contacter
                </a> */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex text-white text-center bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg transition duration-500 ease-in-out transform  hover:scale-110	cursor-pointer">
              Me contacter
            </Link>

            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-center text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg transition duration-500 ease-in-out transform  hover:scale-110">
              Voir mes projets finis
            </a> */}
            <Link to="projects" spy={true}
              smooth={true}
              offset={-70}
              duration={500} className="ml-4 inline-flex text-center text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer	">
              Anciens projets
            </Link>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div> */}
        {/* <div className="lg:max-w-xs lg:w-full  md:w-1/2 w-5/6">
          <img
            className="  rounded-full"
            alt="hero"
            src="./pic.jpg"
          />
        </div> */}
      </div>
    </div>
  );

}

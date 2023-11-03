import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import portflio from "../assets/profile/profile.jpg";
function Home() {
  return (
    <div
      name="home"
      className="h-auto md:min-h-screen bg-gradient-to-b from-black via-black to-gray-500 flex justify-center"
    >
      <div className="mt-24 md:mt-14 lg:mt-0 max-w-screen-lg min-h-screen flex flex-col md:flex-row  justify-center items-center">
        <div className="px-6 mb-5 h-full flex flex-col justify-center items-start mx-auto">
          <h1 className="capitalize font-bold text-4xl md:text-5xl lg:text-7xl  text-white">
            I'm a frontend web developer
          </h1>
          <p className="pt-5 text-justify text-gray-500 text-xl ">
            I'm Frontend web Developer I have 1 year experience as a Web
            Developer I love to work on web application using Frontend
            Technology like React ,Tailwind, Redux etc.{" "}
          </p>
          <button className="group w-fit flex items-center text-white rounded-md px-4 py-2 my-8 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portflio
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <img
          className="w-1/2 h-1/2 md:w-2/5 md:h-2/5 sm:-mt-0 rounded-3xl mx-6 mb-5 2xl:w-72 2xl:h-72"
          src={portflio}
          alt="my protflio"
        />
      </div>
    </div>
  );
}

export default Home;

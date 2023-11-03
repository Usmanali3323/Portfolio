import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

function Experience() {
  const Technologies = [
    {
      id: 1,
      name: "html",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      name: "CSS",
      src: css,
      style: "shadow-blue-600",
    },
    {
      id: 3,
      name: "javascript",
      src: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      name: "react js",
      src: react,
      style: "shadow-blue-500",
    },
    {
      id: 5,
      name: "tailwind",
      src: tailwind,
      style: "shadow-sky-500",
    },
    {
      id: 6,
      name: "github",
      src: github,
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-500 to-black h-auto text-white"
    >
      <div className="max-w-screen-lg px-4">
        <div className="pt-28 px-4 mb-10 ">
          <div className="mb-10">
            <h1 className="text-4xl inline border-b-4 border-gray-500 pb-2 font-bold">
              Experience
            </h1>
          </div>
          <p> These are Technologies that I have worked with</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-16  ">
          {Technologies.map(({ id, src, name, style }) => {
            return (
              <div
                key={id}
                className={
                  "px-10 xsm:px-16 sm:px-24 md:px-16 lg:px-28 py-5 shadow-md" +
                  " " +
                  style
                }
              >
                <img src={src} />
                <p className="text-center mt-5 capitalize">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;

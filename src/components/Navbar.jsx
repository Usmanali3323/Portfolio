import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  let item = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portflio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="bg-black  px-5 py-3 flex justify-between items-center fixed w-full">
      <div>
        <h1 className="font-signature text-white text-5xl">Usman</h1>
      </div>
      <ul className="hidden md:flex ">
        {item.map(({ id, link }) => {
          return (
            <Link key={id} to={link} smooth={true}>
              <li
                key={id}
                className="px-5 cursor-pointer text-gray-500 hover:scale-105 duration-200 capitalize"
              >
                {link}
              </li>
            </Link>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-2 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col pb-10 justify-center items-center absolute top-14 left-0 h-auto w-full bg-gradient-to-b from-black to-gray-800  ">
          {item.map(({ id, link }) => {
            return (
              <Link
                key={id}
                to={link}
                smooth={true}
                duration={1000}
                onClick={() => setNav(!nav)}
              >
                <li className="py-4 capitalize cursor-pointer text-gray-500 text-4xl">
                  {link}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

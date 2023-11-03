import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function Social() {
  let sociaLink = [
    {
      id: 1,
      name: "Linkedin",
      Link: () => <AiFillLinkedin size={30} />,
      href: "https://www.linkedin.com/in/usman-ali-8aa5a223b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "GitHub",
      Link: () => <AiFillGithub size={30} />,
      href: "https://github.com/Usmanali3323/",
    },
    {
      id: 3,
      name: "Mail",
      Link: () => <HiMail size={30} />,
      href: "mailto:ua0318855@gmail.com",
    },
    {
      id: 4,
      name: "Download",
      Link: () => <BsFillPersonLinesFill size={30} />,
      href: "/Resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {sociaLink.map(({ id, name, Link, href, style, download }) => {
            return (
              <li
                key={id}
                className={
                  "flex justify-between items-center bg-gray-500 w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 cursor-pointer" +
                  " " +
                  style
                }
              >
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={href}
                  target="_blank"
                  download={download}
                >
                  <>
                    {name} <Link />{" "}
                  </>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* for small devices*/}
      <div className=" lg:hidden flex justify-center bg-gradient-to-b from-gray-500 to-black">
        <ul className="flex justify-center mb-10">
          {sociaLink.map(({ id, name, Link, href, style, download }) => {
            return (
              <li
                key={id}
                className={
                  "flex justify-between items-center  px-4  cursor-pointer" +
                  " " +
                  style
                }
              >
                <a
                  className="flex justify-between items-center  text-white"
                  href={href}
                  target="_blank"
                  download={download}
                >
                  <>
                    <Link />{" "}
                  </>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Social;

import React from "react";
const project = [
  {
    id: 1,
    src: "https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png",
    href: "https://victorious-ray-sandals.cyclic.cloud/",
    code: "https://github.com/Usmanali3323/e-commerce.git",
  },
  {
    id: 2,
    src: "https://tse3.mm.bing.net/th?id=OIP.oL1kXphJT9ufvSEwEMwxjAHaHa&pid=Api&P=0",
    href: "https://weatherapp-c50ba.firebaseapp.com/",
    code: "https://github.com/Usmanali3323/weather-app",
  },
];

function portflio() {
  return (
    <div
      name="portflio"
      className="pt-14 min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-500"
    >
      <div className="mt-40 px-6 sm:mt-0 max-w-screen-lg">
        <div className="text-white mb-10">
          <div className="mb-10">
            <h1 className="capitalize pb-2 text-4xl font-bold inline border-b-4 border-gray-500">
              portflio
            </h1>
          </div>
          <p>Check out some my work right here</p>
        </div>
        <div className="mt-6 grid grid-cols-1 px-4 lg:px-0 sm:grid-cols-2 gap-8 sm:gap:4 lg:gap-44  grid-flow-row sm:grid-flow-col">
          {project.map(({ id, src, href, code }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-500 rounded-md hover:scale-105 duration-300"
              >
                <img
                  src={src}
                  className="h-64 sm:h-64 md:h-72 lg:h-80 w-96 rounded-md"
                />
                <div className="flex justify-between">
                  <button className="w-1/2 m-6 p-2 text-white hover:border-2 hover:border-red-500">
                    <a href={href} className="" target="_blank">
                      <>Demo</>
                    </a>{" "}
                  </button>
                  <button className="w-1/2 m-6 p-2 text-white hover:border-2 hover:border-red-500">
                    <a href={code} target="_blank">
                      <>Code</>
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default portflio;

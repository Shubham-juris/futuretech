import React from "react";
import img from "../../assets/website/img2.jpg";
const Website = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10 mt-15">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={img}
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              {" "}
              Development And Programing
            </h2>
            <p className="text-gray-600 font-medium mt-10 text-center">
              App Websites,Database And Everything in Between
            </p>
            <p className="mt-4 text-gray-700 ">
              Development refers to the process of creating, improving, and
              maintaining software, applications, or systems. It involves
              designing, coding, testing, and deploying software solutions to
              meet specific user or business needs.
            </p>
            <button
              className="bg-gray-500 text-white mt-3 px-6 py-3 rounded-lg
             hover:bg-gray-600 focus:ring-2 focus:ring-blue-300 transition block mx-auto"
            >
              Tell us what you need
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;

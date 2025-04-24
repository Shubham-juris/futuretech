import React from "react";
import programming from "../assets/Programming/developer.jpg";
import img from "../assets/development/img.jpg";

const Development = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full px-4">
        <img
          src={programming}
          alt="Development"
          className="w-full h-auto max-w-full md:h-[400px] object-cover transition-transform duration-700 hover:scale-105 hover:shadow-xl"
        />
      </div>


      <div className="mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
          Development And Programming
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-4"></div>
      </div>

   
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="mt-6 max-w-lg text-center md:text-left animate__animated animate__fadeIn animate__delay-2s">
          <h4 className="text-xl font-semibold">
            App, Website, Database & Everything In Between
          </h4>
          <p className="mt-4 text-gray-700">
            Are you unhappy with your current level of IT support? Whether we
            helped build your applications or not, we're here to help maintain
            them. We provide desktop support, software support, maintenance,
            network infrastructure, and project management.
          </p>
        </div>
        <div className="text-center md:text-left animate__animated animate__fadeIn animate__delay-3s">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition transform hover:scale-105 duration-300">
            Tell us what you need
          </button>
        </div>
      </div>

  
      <div className="mt-20 text-center animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700">
          Pay Per Click Advertising
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-4"></div>
      </div>

   
      <div className="flex flex-col md:flex-row items-center mt-8 justify-center gap-8 px-4">
        <img
          src={img}
          alt="Development"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-[400px] transition-transform duration-700 hover:scale-105 hover:shadow-xl"
        />
        <div className="text-center md:text-left max-w-lg animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-xl sm:text-2xl font-semibold">
            We Offer Business Intelligence Solutions Including:
          </h2>

          <ul className="mt-4 text-gray-700 text-left list-disc list-inside">
            <li>Dashboard</li>
            <li>Report</li>
            <li>Live Notification</li>
            <li>Analytics</li>
            <li>Key Performance Indicators</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque enim odit odio. Ad atque, dolore imp.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition transform hover:scale-105 duration-300">
            FIND OUT HOW WE CAN HELP YOU
          </button>
        </div>
      </div>

     
      <div className="max-w-5xl mx-auto px-4 py-16"></div>
    </>
  );
};

export default Development;

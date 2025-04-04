import React from "react";

const Home = () => {
  return (
    <>
      {" "}
      <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(' https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-pink bg-opacity-50"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Professional Tech For <br /> Your Business
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
            Technology is the most effective way to change the world.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://images.freeimages.com/images/premium/previews/1227/12275386-development-graph.jpg"
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center"> IT Services</h2>
            <p className="text-gray-600 font-medium mt-2 text-center">
              SUPPORT | PROJECTS | INFRASTRUCTURE
            </p>
            <p className="mt-2 text-gray-700 text-center">
              Are you unhappy with your current level of IT support? Whether we
              helped build your applications or not, we're here to help maintain
              them. We provide desktop support, software support, maintenance,
              network infrastructure, and project management.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center">Marketing</h2>
            <p className="text-gray-600 font-medium mt-2 text-center">
              SOCIAL | DIGITAL ADS | DESIGN
            </p>
            <p className="mt-2 text-gray-700 text-center">
              If you have to coordinate between your web programmers and <br />
              your marketing team, then you're probably missing out on great
              <br />
              features that a single integrated solution can provide. we dot't
              <br /> just create a web side. we provide a complete digital
              solution for your brand.
            </p>
          </div>
          <img
            src="https://images.freeimages.com/images/premium/previews/1227/12275386-development-graph.jpg"
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://images.freeimages.com/images/premium/previews/1227/12275386-development-graph.jpg"
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center">Development</h2>
            <p className="text-gray-600 font-medium mt-2 text-center">
              WEBSITES | DASHBOARDS | AUTOMATION
            </p>
            <p className="text-gray-700 mt-2">
              Applications should make everyone's life easier. Our goal is to
              create quality solutions that simplify and automate your business.
              There isn’t always an app for that, but we can create one.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;

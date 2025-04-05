import React from "react";
import img from '../assets/website/img2.jpg'
import CommonButton from "../Components/CommonButton";

const Managed = () => {
  return (
    <>
      <div className="mt-10 text-center text-gray-500">
        <h2 className="text-3xl md:text-5xl font-semibold">Managed IT Service</h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 justify-center gap-8 px-4 md:px-16">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-xl font-semibold">Serving IT Services</h2>
          <p className="mt-2 text-gray-700">
            Are you unhappy with your current level of IT support? Whether we
            helped build your applications or not, we're here to help maintain
            them. We provide desktop support, software support, maintenance,
            network infrastructure, and project management.
          </p>
        </div>
        <img
          src={img}
          alt="Development"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-10 md:mt-30 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-500">
          Supporting IT Service
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </div>

      <div className="mt-10 md:mt-15 px-4 md:px-20 text-center md:text-left">
        <p className="text-lg font-semibold">
          Future tech is locally positioned to support IT infrastructure
        </p>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          voluptatem assumenda ducimus deleniti
        </p>
        <p className="text-gray-500">Have location outside of Anywhere? No problem.</p>
        <p className="text-gray-500">
          Our remote support and call center is currently providing technical
          IT support and service to clients.
        </p>
        <CommonButton />
      </div>

      <div className="mt-10 md:mt-30 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-600">
          Only The Service You Need
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </div>

      <p className="text-gray-500 px-4 md:px-30 mt-5 text-center md:text-left">
        Pick from any service we offer to build a custom bundle that fits your
        business's infrastructure and support needs.
      </p>
      <div className="text-center mt-5">
      <CommonButton/>
      </div>

<div className="bg-amber-100">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-10 md:mt-20 px-4 md:px-16">
        <div className="md:col-span-2 flex flex-col md:flex-row space-x-0 md:space-x-4">
          <div className="w-full md:w-1/2 text-center p-4">
            <h4 className="font-semibold text-xl md:text-2xl">Desktop And User Support</h4>
            <p className="text-center mt-4">
              Technical assistance for computer systems, software, and hardware.
              Includes troubleshooting, maintenance, and more.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 text-center">
            <h3 className="font-semibold text-xl md:text-2xl">Network Infrastructure</h3>
            <p className="text-center mt-4">
              Covers routers, switches, servers, cables, and connectivity.
            </p>
          </div>
        </div>
        <div className="text-center p-4">
          <h4 className="font-semibold text-xl md:text-2xl">Backup</h4>
          <p className="text-center mt-4">
            Protects against data loss, corruption, and system failures.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-10 md:mt-20 px-4 md:px-16">
        <div className="md:col-span-2 flex flex-col md:flex-row space-x-0 md:space-x-4">
          <div className="w-full md:w-1/2 text-center p-4">
            <h4 className="font-semibold text-xl md:text-2xl">Server Maintenance</h4>
            <p className="text-center mt-4">
              Regular updates, monitoring, and security to ensure server performance.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 text-center">
            <h3 className="font-semibold text-xl md:text-2xl">Project Management</h3>
            <p className="text-center mt-4">
              Planning, execution, and resource allocation for IT projects.
            </p>
          </div>
        </div>
        <div className="text-center p-4">
          <h4 className="font-semibold text-xl md:text-2xl">Anti-virus And Anti-Malware</h4>
          <p className="text-center mt-4">
            Security solutions to detect, prevent, and remove malicious software.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Managed;

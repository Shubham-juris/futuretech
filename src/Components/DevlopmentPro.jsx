
import React from "react";
import developmentProgramming from "../assets/developments/developments.jpg";
import CommonButton from "./CommonButton";
const DevlopmentPro = () => {
    return(
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
          <img
            src={developmentProgramming}
            alt="Server Room"
            className="w-105 h-65  shadow-xl"
          />
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Development and Programming.
            </h2>
            <h3 className="text-lg font-bold text-gray-700">
              Apps, Websites, Databases And Everything In Between.
            </h3>
            <p className="text-gray-600">
              Are you looking for a programmer for a small project, or an agency to
              plan, create, and deploy a larger project? In projects of any scale,
              our goal is to provide quality solutions that make your business
              operate more efficiently and effectively.
            </p>
            <CommonButton text="TELL US WHAT YOU NEED" />
          </div>
        </div>
      </div>
    )
}
export default DevlopmentPro;




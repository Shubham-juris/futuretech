import React from "react";
import { motion } from "framer-motion";
import itService from "../assets/itService/itservice.jpg";
import marketing from "../assets/marketing/marketing.jpg";
import developments from "../assets/developments/developments.jpg";
import bg from "../assets/homePageImage/bg.jpg";

const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const colorfulWords = [
  "Technology", "is", "the", "most", 
  "effective", "way", "to", "change", "the", "world."
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative text-center text-white px-4 sm:px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
          >
            <span className="block">Professional Tech For</span>
            <span className="block">Your Business</span>
          </motion.h1>

          <motion.div
            variants={staggerText}
            initial="hidden"
            animate="visible"
            className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto flex flex-wrap justify-center gap-2"
          >
            {colorfulWords.map((word, i) => (
              <motion.span
                key={i}
                variants={fadeInUp}
                className={`font-semibold ${
                  i < 4 ? "text-blue-500" : "text-yellow-400"
                }`}
                animate={{
                  opacity: [0, 1, 0],
                  transition: { repeat: Infinity, duration: 1.5, repeatType: "loop" },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 text-center py-8 sm:py-10">
        Services
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <img
            src={itService}
            alt="IT Services"
            className="w-full md:w-1/2 lg:w-2/5 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              IT Services
            </h2>
            <p className="text-gray-600 font-medium mt-2 text-sm sm:text-base">
              SUPPORT | PROJECTS | INFRASTRUCTURE
            </p>
            <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
              Are you unhappy with your current level of IT support? Whether we
              helped build your applications or not, we're here to help maintain
              them. We provide desktop support, software support, maintenance,
              network infrastructure, and project management.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <img
            src={marketing}
            alt="Marketing"
            className="w-full md:w-1/2 lg:w-2/5 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Marketing
            </h2>
            <p className="text-gray-600 font-medium mt-2 text-sm sm:text-base">
              SOCIAL | DIGITAL ADS | DESIGN
            </p>
            <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
              If you have to coordinate between your web programmers and your
              marketing team, you're probably missing out on great features that a
              single integrated solution can provide. We don’t just create a
              website — we provide a complete digital solution for your brand.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
          <img
            src={developments}
            alt="Development"
            className="w-full md:w-1/2 lg:w-2/5 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Development
            </h2>
            <p className="text-gray-600 font-medium mt-2 text-sm sm:text-base">
              WEBSITES | DASHBOARDS | AUTOMATION
            </p>
            <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
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
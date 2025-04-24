import React from "react";
import { motion } from "framer-motion";
import img from "../assets/website/img2.jpg";
import CommonButton from "../Components/CommonButton";

// Animation Variants
const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const sectionFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInWhenInView = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Managed = () => {
  const paragraphLines = [
    "Are you unhappy with your current level of IT support?",
    "Whether we helped build your applications or not, we're here to help maintain them.",
    "We provide desktop support, software support, maintenance, network infrastructure, and project management.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10"
    >
      {/* Title Section */}
      <motion.div
        className="mt-10 text-center text-gray-500"
        variants={sectionFadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">Managed IT Service</h2>
        <div className="w-12 sm:w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </motion.div>

      {/* Paragraph + Image */}
      <motion.div
        className="flex flex-col md:flex-row items-center mt-10 md:mt-20 justify-center gap-8"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-lg sm:text-xl font-semibold">Serving IT Services</h2>
          <motion.div
            variants={staggerText}
            initial="hidden"
            animate="visible"
            className="mt-2 text-gray-700"
          >
            {paragraphLines.map((line, lineIndex) => (
              <motion.div key={lineIndex} variants={fadeInUp} className="mb-4">
                {line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={fadeInUp}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <img
          src={img}
          alt="Development"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Supporting IT Service */}
      <motion.div
        className="mt-20 text-center"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-500">
          Supporting IT Service
        </h2>
        <div className="w-12 sm:w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </motion.div>

      <motion.div
        className="mt-10 px-2 md:px-8 text-center md:text-left"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg font-semibold">
          Future tech is locally positioned to support IT infrastructure
        </p>
        <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed max-w-prose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          voluptatem assumenda ducimus deleniti
        </p>
        <p className="text-gray-500 text-sm sm:text-base">Have location outside of Anywhere? No problem.</p>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          Our remote support and call center is currently providing technical
          IT support and service to clients.
        </p>
        <CommonButton />
      </motion.div>

      {/* Custom Bundle Section */}
      <motion.div
        className="mt-20 text-center"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-600">
          Only The Service You Need
        </h2>
        <div className="w-12 sm:w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </motion.div>

      <motion.p
        className="text-gray-500 px-2 md:px-10 mt-5 text-center md:text-left text-sm sm:text-base leading-relaxed max-w-prose"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Pick from any service we offer to build a custom bundle that fits your
        business's infrastructure and support needs.
      </motion.p>
      <motion.div
        className="text-center mt-5"
        variants={fadeInWhenInView}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CommonButton />
      </motion.div>

      {/* Services Grid */}
      <div className="bg-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-20">
          <motion.div
            className="md:col-span-2 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4"
            variants={fadeInWhenInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 text-center p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg md:text-2xl">Desktop And User Support</h4>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                Technical assistance for computer systems, software, and hardware.
                Includes troubleshooting, maintenance, and more.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 text-center bg-white rounded-lg shadow">
              <h3 className="font-semibold text-lg md:text-2xl">Network Infrastructure</h3>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                Covers routers, switches, servers, cables, and connectivity.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow"
            variants={fadeInWhenInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg md:text-2xl">Backup</h4>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Protects against data loss, corruption, and system failures.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-20">
          <motion.div
            className="md:col-span-2 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4"
            variants={fadeInWhenInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 text-center p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg md:text-2xl">Server Maintenance</h4>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                Regular updates, monitoring, and security to ensure server performance.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 text-center bg-white rounded-lg shadow">
              <h3 className="font-semibold text-lg md:text-2xl">Project Management</h3>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                Planning, execution, and resource allocation for IT projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow"
            variants={fadeInWhenInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg md:text-2xl">Anti-virus And Anti-Malware</h4>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Security solutions to detect, prevent, and remove malicious software.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Managed;

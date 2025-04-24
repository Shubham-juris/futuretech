import React from "react";
import { motion } from "framer-motion";
import Hardwares from "../assets/hardware/HardwareImg.jpg";
import wifi from "../assets/wifi/WirelessImg.jpg";

// Animation variants for staggering words
const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Stagger each word by 0.05 seconds
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Hardware = () => {
  // Words for the hardware section paragraph
  const hardwareParagraphWords = [
    "“Good",
    "enough”",
    "rarely",
    "is,",
    "and",
    "what",
    "you",
    "save",
    "up-front",
    "usually",
    "ends",
    "up",
    "costing",
    "more",
    "in",
    "the",
    "long-term.",
    "Your",
    "IT",
    "infrastructure",
    "is",
    "important,",
    "so",
    "don’t",
    "settle",
    "for",
    "an",
    "off-brand",
    "solution.",
    "Future",
    "Tech",
    "partners",
    "with",
    "quality",
    "hardware",
    "providers",
    "to",
    "ensure",
    "the",
    "equipment",
    "we",
    "recommend",
    "not",
    "only",
    "works",
    "—",
    "it",
    "lasts.",
  ];

  // Words for the wireless section first paragraph
  const wirelessParagraph1Words = [
    "A",
    "stable",
    "wireless",
    "connection",
    "offers",
    "the",
    "flexibility",
    "and",
    "convenience",
    "that",
    "wired",
    "setups",
    "can’t.",
    "Future",
    "Tech",
    "specializes",
    "in",
    "designing",
    "and",
    "installing",
    "wireless",
    "mesh",
    "networks",
    "that",
    "deliver",
    "fast,",
    "reliable",
    "coverage",
    "for",
    "any",
    "size",
    "business.",
  ];

  // Words for the wireless section second paragraph
  const wirelessParagraph2Words = [
    "We’re",
    "Open",
    "Mesh",
    "partners",
    "—",
    "using",
    "encrypted,",
    "self-healing",
    "networks",
    "with",
    "built-in",
    "failover.",
  ];

  // Words for the list items
  const listItems = [
    [
      "Flexible",
      "mounting",
      "for",
      "indoor",
      "and",
      "outdoor",
      "use",
    ],
    [
      "Cloud-connected",
      "for",
      "remote",
      "monitoring",
      "&",
      "control",
    ],
    [
      "Secure",
      "Guest",
      "WiFi",
      "with",
      "token-based",
      "access",
    ],
    [
      "Remote",
      "updates",
      "for",
      "minimal",
      "downtime",
    ],
    [
      "Automatic",
      "failover",
      "when",
      "a",
      "node",
      "goes",
      "down",
    ],
  ];

  return (
    <>
      {/* Hardware Section */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-12">
          Hardware matters.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              It’s OK to judge a computer by its cover.
            </h3>
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="text-gray-600 mb-4 text-sm sm:text-base"
            >
              {hardwareParagraphWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div>
            <img
              src={Hardwares}
              alt="Close-up view of server rack hardware"
              className="w-full max-h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-12 sm:my-16 border-t border-gray-200 w-11/12 mx-auto" />

      {/* Wireless Network Section */}
      <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-12">
          Wireless that works.
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Smarter, Simpler Networks.
            </h3>
            {/* First Paragraph Animation */}
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="mt-4 text-gray-600 text-sm sm:text-base"
            >
              {wirelessParagraph1Words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            {/* Second Paragraph Animation */}
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="mt-4 text-gray-600 text-sm sm:text-base"
            >
              {wirelessParagraph2Words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            {/* List Items Animation */}
            <motion.ul
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="mt-4 list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1"
            >
              {listItems.map((itemWords, itemIndex) => (
                <motion.li key={itemIndex} variants={fadeInUp}>
                  {itemWords.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      variants={fadeInUp}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="flex-1">
            <img
              src={wifi}
              alt="Mesh wireless networking setup"
              className="w-full max-h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hardware;

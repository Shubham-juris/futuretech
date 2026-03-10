import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Hardware", path: "/Hardware" },
    { name: "Managed Services", path: "/Managed" },
    { name: "Marketing", path: "/Marketing" },
    { name: "Development", path: "/Development" },
    { name: "Career", path: "/Career" },
    { name: "ContactUs", path: "/ContactUs" },
  ];
  return (
    <footer className="bg-black text-white pt-10 text-sm sm:text-base">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-700">
        <h2 className="text-base font-semibold mb-4 md:mb-0">Follow Us</h2>
        <div className="flex space-x-4 text-xl">
          {[
            {
              icon: faFacebookF,
              href: "https://www.facebook.com/futuretechsol/",
              color: "text-blue-600",
            },
            {
              icon: faTwitter,
              href: "https://x.com/future_tech_ca",
              color: "text-sky-400",
            },
            {
              icon: faInstagram,
              href: "https://www.instagram.com/future_tech.ca/",
              color: "text-pink-500",
            },
            {
              icon: faLinkedin,
              href: "https://linkedin.com",
              color: "text-blue-400",
            },
          ].map(({ icon, href, color }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform duration-300 ${color}`}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-gray-400">
        <div>
          <h6 className="uppercase font-bold mb-4 text-lg text-white">
            Future Tech
          </h6>
          <p className="leading-relaxed">
            Future Tech represents the innovation and advancement shaping
            tomorrow’s world — AI, blockchain, quantum computing, and more.
          </p>
        </div>
        <div>
          <h6 className="uppercase font-bold mb-4 text-lg text-white">
            Quick Links
          </h6>
          {links.map((item) => (
            <p key={item.name}>
              <Link
                to={item.path}
                className="hover:text-white transition duration-200"
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>

        <div>
          <h6 className="uppercase font-bold mb-4 text-lg text-white">
            Resources
          </h6>
          {["Hardware", "Marketing", "Development", "Help Center"].map(
            (item) => (
              <p key={item}>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  {item}
                </a>
              </p>
            )
          )}
        </div>

        <div>
          <h6 className="uppercase font-bold mb-4 text-lg text-white">
            Contact
          </h6>
          <p className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
     32 Westwinds Crescent NE #120, Calgary, AB T3J 5L3
          </p>
          <p className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@thefuturetech.ca
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (368) 299-7057
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://mdbootstrap.com/"
          className="text-white font-semibold hover:underline"
        >
          Future Tech
        </a>{" "}
        — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

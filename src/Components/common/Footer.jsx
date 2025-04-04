import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center text-lg-start mt-20">
      <section className="flex flex-col lg:flex-row items-center justify-between p-4 border-b border-gray-700">
        <div className="hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex space-x-4">
          {[
            "facebook-f",
            "twitter",
            "google",
            "instagram",
            "linkedin",
            "github",
          ].map((icon) => (
            <a key={icon} href="#" className="text-white hover:text-gray-400">
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto text-center md:text-left mt-5 px-6 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-bold mb-4 flex items-center">
              <i className="fas fa-gem mr-2"></i> Future Tech
            </h6>
            <p>
              Future Tech refers to advancements, innovations, and emerging
              trends in science and technology that are expected to shape the
              future.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-bold mb-4">Links</h6>
            {["Services", "About us"].map((product) => (
              <p key={product}>
                <a href="#" className="text-white hover:underline">
                  {product}
                </a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="uppercase font-bold mb-4">Useful Links</h6>
            {["Hardware", "Marketing", "Development", "Help"].map((link) => (
              <p key={link}>
                <a href="#" className="text-white hover:underline">
                  {link}
                </a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="uppercase font-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home mr-2"></i>Canada
            </p>
            <p>
              <i className="fas fa-envelope mr-2"></i> info@xyz.com
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i> + 01 234 567 88
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 text-xl ml-5"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 text-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 bg-gray-900">
        <a className="text-white font-bold" href="https://mdbootstrap.com/">
          Future Tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;

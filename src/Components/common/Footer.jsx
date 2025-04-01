import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black mt-120 text-white py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">Future Tech. All Rights Reserved.</h3>
                    <a href="mailto:support@thefutureTech.com" className="block text-gray-400 hover:text-white">
                        support@thefutureTech.com
                    </a>
                    <p className="text-gray-400">268-555-4514</p>
                </div>

                <div className="flex space-x-8 mr-15 mt-8">
                    <FontAwesomeIcon icon={faFacebook} className="text-4xl text-blue-600" />
                    <FontAwesomeIcon icon={faInstagram} className="text-4xl text-pink-600" />
                </div>

            </div>
        </div>
    );
};


export default Footer

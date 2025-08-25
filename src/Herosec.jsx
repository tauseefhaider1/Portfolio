import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

import abc from './assets/abc.jpeg';

const Herosec = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h4 className="text-xl font-light animate-fadeIn">Hello, It's Me</h4>
          <h2 className="text-6xl md:text-7xl font-extrabold animate-fadeIn">Tauseef Haider</h2>
          <h4 className="text-2xl font-medium text-blue-200 animate-fadeIn">And I'm a Frontend Developer</h4>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-4 animate-fadeIn">
            <button aria-label="Facebook" className="p-3 rounded-full border-2 border-blue-300 text-blue-300 hover:bg-white hover:text-blue-900 transition duration-300">
              <CiFacebook size={24} />
            </button>
            <button aria-label="Instagram" className="p-3 rounded-full border-2 border-pink-400 text-pink-400 hover:bg-white hover:text-pink-600 transition duration-300">
              <FaInstagram size={24} />
            </button>
            <button aria-label="Tiktok" className="p-3 rounded-full border-2 border-pink-600 text-pink-600 hover:bg-white hover:text-pink-900 transition duration-300">
              <FaTiktok size={24} />
            </button>
            <button aria-label="X/Twitter" className="p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-white hover:text-blue-900 transition duration-300">
              <FaTwitter size={24} />
            </button>
          </div>

          {/* Contact Button */}
          <button className="mt-6 px-10 py-3 text-lg font-medium rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-900 transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={abc}
            alt="Profile picture of Tauseef Haider"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Herosec;

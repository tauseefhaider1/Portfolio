import React from 'react';
import img1 from './assets/Capture11.PNG';
import img2 from './assets/Capture1.PNG';
import img3 from './assets/Capture2.PNG';

const Project = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white border-b-2 border-cyan-400 inline-block pb-2 animate-fadeIn">
          Featured Project
        </h2>

        {/* Project Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-3xl transition duration-500">
          
          {/* Title + Description */}
          <div className="p-8 border-b">
            <h3 className="text-3xl font-bold text-gray-900 animate-fadeIn">
              Pyari Walls Website
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg animate-fadeIn delay-100">
              A modern, responsive wallpaper showcase website built with 
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> React</span> and 
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Tailwind CSS</span>. 
              It highlights creative wall designs and provides users with an elegant, user-friendly browsing experience.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-3 gap-4 p-6">
            {/* Main Image */}
            <div className="col-span-2 transform hover:scale-105 transition duration-500">
              <img
                src={img1}
                alt="Main Preview"
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Side Images */}
            <div className="flex flex-col gap-4">
              <img
                src={img2}
                alt="Preview 1"
                className="w-full h-36 md:h-44 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
              />
              <img
                src={img3}
                alt="Preview 2"
                className="w-full h-36 md:h-44 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Footer with Links */}
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t gap-4 md:gap-0">
            <p className="text-gray-500 text-sm md:text-base animate-fadeIn">
              Built with <span className="font-semibold text-gray-700">React & Tailwind CSS</span>
            </p>
            <div className="flex gap-4 animate-fadeIn delay-100">
              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-2xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition transform duration-300"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/tauseefhaider1/Pyari-Walls.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-2xl shadow-lg hover:scale-105 hover:bg-black transition transform duration-300"
              >
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;

import React from 'react';

const About = () => {
  return (
    <div className="w-full flex justify-center py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white px-6 md:px-12">
      <div className="max-w-3xl space-y-8 text-center md:text-left">

        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 border-b-2 border-blue-400 inline-block pb-2 animate-fadeIn">
          About Me
        </h3>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 animate-fadeIn delay-100">
          I'm a <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Frontend Developer</span> 
          from Pakistan with a professional certificate in 
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Web Development from PNY Training</span>. 
          I enjoy creating <span className="italic text-gray-200">interactive and user-friendly</span> 
          web applications using modern technologies like 
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"> React</span> and 
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"> Tailwind CSS</span>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 animate-fadeIn delay-200">
          My focus is on <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">clean code</span> 
          and delivering <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">smooth user experiences</span>. 
          My ultimate goal is to grow into a 
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400"> Full-Stack Software Engineer</span> 
          while building <span className="underline decoration-blue-400 decoration-2">impactful projects</span>.
        </p>

      </div>
    </div>
  );
};

export default About;

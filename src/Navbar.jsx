import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-700 fixed w-full top-0 z-50">
      <div className="left text-white text-2xl">Portfolio</div>
      <div className="right">
        <ul className="flex gap-5 text-white">
          <li>
            <a 
              href="#home" 
              className="hover:text-blue-400 text-[18px] font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="hover:text-blue-400 text-[18px] font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="hover:text-blue-400 text-[18px] font-medium"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-blue-400 text-[18px] font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

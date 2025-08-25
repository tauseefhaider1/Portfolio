import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-700">
      <div className="left text-white text-2xl">Portfolio</div>
      <div className="right">
        <ul className="flex gap-3 text-white">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-bold text-[18px]" : "hover:text-blue-400 text-[18px]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-bold text-[18px]" : "hover:text-blue-400 text-[18px]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-bold text-[18px]" : "hover:text-blue-400 text-[18px]"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-bold text-[18px]" : "hover:text-blue-400 text-[18px]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

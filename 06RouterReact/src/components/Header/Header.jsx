import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="shadow-md w-full h-12 flex justify-around items-center">
        <div className="text-3xl">
          <Link to="#">
            Your <span className="text-orange-700">logo</span>
          </Link>
        </div>
        <div className="text-xl text-slate-700">
          <div className="flex gap-5">
            <NavLink
            to= "/"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
            to= "/about"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to= "/github"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Github
            </NavLink>
            <NavLink
              to= "/contact"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex gap-3">
          <Link className="border-2 h-fit px-3 py-1 rounded hover:bg-slate-200 transition-all">
            Sign In
          </Link>
          <Link className="h-fit bg-orange-500 text-white px-3 py-1 rounded hover hover:bg-orange-600 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;

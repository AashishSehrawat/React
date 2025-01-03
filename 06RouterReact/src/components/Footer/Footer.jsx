import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-around gap-4 mx-28 border-t-2 pt-2 px-5 pb-10 ">
        <div className="w-5/12 ">
          <Link to="#" className="text-4xl">
            Your <span className="text-orange-700">logo</span>
          </Link>
        </div>
        <div className="w-7/12 flex justify-evenly">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-bold">Resources</h2>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-orange-700 hover:text-orange-700 transition-all ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-orange-700 hover:text-orange-700 transition-all ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              About
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-bold">Follow Us</h2>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `text-orange-700 hover:text-orange-700 transition-all ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Github
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-orange-700 hover:text-orange-700 transition-all ${
                  isActive ? "text-orange-700" : "text-slate-700"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-bold">Legal</h2>
            <Link className="text-slate-700 hover:text-orange-700 transition-all">
              Privacy Policy
            </Link>
            <Link className="text-slate-700 hover:text-orange-700 transition-all">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
import { Form } from "react-router-dom";

export default Footer;

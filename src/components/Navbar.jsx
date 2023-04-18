import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-sans flex justify-between items-center bg-white max-w-7xl mx-auto mt-6">
      <div className="font-sans md:text-4xl text-3xl py-6 font-bold md:pl-0 pl-6">
        <Link to="/">
          Job<span className="text-indigo-500">Connect</span>
        </Link>
      </div>

      <div className="text-right flex flex-col md:flex-row md:justify-center md:items-center w-full md:w-auto">
        {/* bars cross buttons */}
        <div
          className="md:hidden text-2xl text-indigo-500 pr-4 "
          onClick={() => setOpen(!open)}
        >
          <button>
            <span>{open === true ? "X" : "☰"}</span>
          </button>
        </div>

        {/* link section */}
        <ul
          className={`flex flex-col md:flex-row p-4 ${
            open ? "" : "hidden md:flex"
          }`}
        >
          <ActiveLink to="/" className="md:pr-10 text-lg text-indigo-400">
            Home
          </ActiveLink>
          <ActiveLink
            to="/statistics"
            className="md:pr-10 text-xl text-gray-500"
          >
            Statistics
          </ActiveLink>
          <ActiveLink
            to="/appliedjobs"
            className="md:pr-10 text-lg text-gray-500"
          >
            Applied Jobs
          </ActiveLink>
          <ActiveLink to="/blog" className="md:pr-8 text-gray-500 text-lg">
            Blog
          </ActiveLink>
        </ul>
      </div>

      <button className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-500 my-5 px-4 py-3 rounded-md text-white font-semibold font-sans justify-center items-center">
        Start Applying
      </button>
    </nav>
  );
};

export default Navbar;

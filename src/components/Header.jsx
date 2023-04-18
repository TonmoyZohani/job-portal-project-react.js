import React from "react";
import img from "../assets/images/Profiling-amico.svg";

const Header = () => {
  return (
    <div className="bg-slate-50">
      <div className="md:pl-0 container max-w-7xl mx-auto h-4/5 flex justify-between py-24 pl-8">
        <div className="">
          <h1 className="font-sans text-3xl md:text-6xl flex-col space-y-3 items-center font-semibold">
            <p>One Step</p>
            <p> Closer To Your </p>
            <p className="text-indigo-400">Dream Job</p>
          </h1>

          <p className="md:max-w-md max-w-sm pt-6 text-gray-500 md:text-md text-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-md text-white font-semibold mt-6">
            <span className="font-sans">Get Started</span>
          </button>
        </div>
        <img src={img} className="hidden md:block w-200 h-96 pr-6 px-6" alt="" />
      </div>
    </div>
  );
};

export default Header;

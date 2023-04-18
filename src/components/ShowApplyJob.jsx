import React from "react";
import { Link } from "react-router-dom";

const ShowApplyJob = (props) => {
  const { id, company, img, title, location, salary, type } = props.job;

  return (
    <div className="flex justify-between border-2 border-slate-200 px-10 py-4 rounded-md">
      <div className="flex">
        <img
          src={img}
          className="w-44 h-44 object-cover rounded-md border border-indigo-200"
          alt=""
        />
        <div className="flex flex-col justify-center px-8">
          <h2 className="font-bold text-lg text-slate-600">{title}</h2>
          <p className="text-slate-500 font-semibold">{company}</p>
          <div className="space-x-4 mt-2">
            <button className="px-4 py-1 border border-indigo-500 rounded-md">
              <span className="text-indigo-400 font-sans font-semibold text-sm">
                {type[0]}
              </span>
            </button>
            <button className="px-4 py-1 border border-indigo-500 rounded-md">
              <span className="text-indigo-400 font-sans font-semibold text-sm">
                {type[1]}
              </span>
            </button>
          </div>

          <div className="flex mt-4 space-x-4 text-sm text-slate-500">
            <p>{location}</p>
            <p>{salary}</p>
          </div>
        </div>
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-purple-500 h-10 rounded-sm text-white font-semibold px-4 mt-28 text-sm">
        <Link to={`/appliedjobs/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default ShowApplyJob;

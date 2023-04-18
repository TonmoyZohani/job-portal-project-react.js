import React from "react";
import { Link, useParams } from "react-router-dom";

const Feature = (props) => {
  const { id, img, company, title, location, salary, type } = props.feature;

  return (
    <div>
      <div className="rounded-md md:px-20 md:py-10 px-2 py-2 flex md:flex-col border border-slate-300 justify-between">
        <div className="pl-2 md:pl-0">
          <img
            src={img}
            alt={title}
            className="bg-slate-300 rounded-md md:w-28 md:h-28 w-20 h-20 object-cover"
          />
          <div>
            <p className="text-left md:pt-6 pt-4 md:pl-0 w-4 md:w-auto font-semibold font-sans text-sm md:text-lg">
              {title}
            </p>
            <p className="text-gray-500 md:pl-0 text-sm md:text-md font-semibold font-sans mt-1 mb-4">
              {company}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="md:space-x-4 md:space-y-0 space-y-2 mt-2 flex flex-col md:flex-row items-center">
            <button className="px-1 md:px-4 py-1 border border-indigo-500 rounded-md">
              <span className="text-indigo-400 font-sans font-semibold text-sm">
                {type[0]}
              </span>
            </button>
            <button className="px-1 md:px-4 py-1 border border-indigo-500 rounded-md">
              <span className="text-indigo-400 font-sans font-semibold text-sm">
                {type[1]}
              </span>
            </button>
          </div>

          <div className="flex-col text-center md:text-left md:flex-row mt-3 text-gray-500 text-sm font-sans font-semibold">
            <p>
              {" "}
              <span className="text-indigo-400">Location: </span> {location}
            </p>
            <p>
              <span className="text-indigo-400">Salary: </span> {salary}
            </p>
          </div>
        </div>

        <Link to={`/appliedjobs/${id}`}>
          <button className="bg-gradient-to-r px-2 py-1 from-blue-500 to-purple-500 md:px-3 md:py-2 md:rounded-md rounded-sm text-white font-semibold md:mt-6 md:text-lg text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;

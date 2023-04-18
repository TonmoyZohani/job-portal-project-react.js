import React, { useState, useEffect } from "react";
import ShowApplyJob from "./ShowApplyJob";
import { getappliedJobs } from "../utilities/fakeDb";
import { useLoaderData, useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilter] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetch data and update allJobs
  useEffect(() => {
    fetch("features.json").then((res) =>
      res.json().then((data) => setAllJobs(data))
    );
  }, []);

  useEffect(() => {
    const appliedJobs = getappliedJobs();
    const appliedJobIdsStr = Object.keys(appliedJobs);
    const appliedJobIds = appliedJobIdsStr.map((id) => parseInt(id));
    const filteredJobs = allJobs.filter((job) =>
      appliedJobIds.includes(job.id)
    );

    setFilter(filteredJobs);
    setFilteredJobs(filteredJobs);
  }, [allJobs]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const showOnsiteJobs = () => {
    let onsiteJobs = filters.filter((job) => job.type[0] === "Onsite");
    setFilteredJobs(onsiteJobs);
  };

  const showRemoteJobs = () => {
    let remoteJobs = filters.filter((job) => job.type[0] === "Remote");
    setFilteredJobs(remoteJobs);
  };

  return (
    <div>
      <div className="w-full">
        <header className="text-center h-64 flex justify-center items-center bg-slate-100">
          <h2 className="font-sans font-bold text-2xl">Applied Jobs</h2>
        </header>

        {/* filter button */}

        <div className="container max-w-7xl mx-auto flex justify-between border-2 px-4">
          <div className="grid grid-cols-1 gap-6 mt-4 max-w-5xl">
            {filteredJobs.map((job) => (
              <ShowApplyJob key={job.id} job={job} />
            ))}
          </div>

          <div className="relative mt-4">
            <button
              className="bg-gray-200 font-semibold py-2 px-4 rounded-md text-indigo-500"
              onClick={toggleDropdown}
            >
              Filter Jobs
            </button>
            {showDropdown && (
              <div className="absolute bg-white rounded-md shadow-lg py-2">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => showRemoteJobs()}
                >
                  Remote
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => showOnsiteJobs()}
                >
                  Onsite
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

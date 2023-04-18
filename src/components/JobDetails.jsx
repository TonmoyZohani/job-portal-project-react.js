import React, { useState, useEffect,useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../utilities/fakeDb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

 let jobinfo = data.find((job) => job.id === parseInt(id));
 console.log(jobinfo);

  const {
    description,
    responsibility,
    requirements,
    experience,
    salary,
    title,
    phone,
    email,
    address,
  } = jobinfo;

  const applyJob = () => {
    addToDb(jobinfo.id);
    toast.success("Job application submitted successfully!");
  };

  return (
    <div className="w-full ">
      <ToastContainer />
      <div className="">
        <header className=" text-center  h-64 flex justify-center items-center bg-slate-100">
          <h2 className="font-sans font-bold text-2xl">Job Details</h2>
        </header>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mt-24">
            <div className="space-y-4 max-w-4xl">
              <p className="text-gray-500">
                <span className="font-semibold font-sans text-black ">
                  Job Description:
                </span>{" "}
                {description}
              </p>
              <p className="text-gray-500">
                <span className="font-semibold font-sans text-black">
                  Job Responsibility:
                </span>{" "}
                {responsibility}
              </p>
              <p className="text-gray-500">
                <p className="font-semibold font-sans text-black mb-4">
                  Educational Requirements:
                </p>
                {requirements}
              </p>
              <p className="text-gray-500">
                <p className="font-semibold font-sans text-black mb-4">
                  Experience:
                </p>
                {experience}
              </p>
            </div>

            <div className=" w-80 ">
              <div className="px-10 py-10 rounded-md bg-indigo-50">
                <div>
                  <h2 className="font-sans font-bold mb-4">Job Details</h2>
                  <div class="border-b border-gray-400 mb-4"></div>
                  <p className="mb-1 text-slate-500 text-sm">
                    {" "}
                    <span className="font-semibold text-slate-600">
                      Salary :
                    </span>{" "}
                    {salary}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {" "}
                    <span className="font-semibold text-slate-600">
                      Job Title :
                    </span>{" "}
                    {title}
                  </p>
                </div>
                <div>
                  <h2 className="font-sans font-bold my-4">
                    Contact Information
                  </h2>
                  <div class="border-b border-gray-400 mb-4"></div>
                  <p className="mb-1 text-slate-500 text-sm">
                    {" "}
                    <span className="font-semibold text-slate-600">
                      Phone :
                    </span>{" "}
                    {phone}
                  </p>
                  <p className="mb-1 text-slate-500 text-sm">
                    <span className="font-semibold text-slate-600 text-md">
                      Email :
                    </span>
                    {email}
                  </p>
                  <p className="text-slate-500 text-sm">
                    <span className="font-semibold text-slate-600 text-md">
                      Address :
                    </span>
                    {address}
                  </p>
                </div>
              </div>

              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 py-3 w-full rounded-md text-white font-semibold mt-4 hover:bg-gradient-to-r from-indio-600 duration-200"
                onClick={applyJob}
              >
                {/* <Link to="" className="font-sans"> */}
                Apply Now
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

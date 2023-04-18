import React, { useState, useEffect } from "react";
import Feature from "./Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [isShowAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  const handleAllJobs = () => {
    setShowAll(!isShowAll);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto ">
      <div className=" text-center pt-24">
        <h2 className="font-bold font-sans md:text-4xl text-2xl mb-4">
          Featured Jobs
        </h2>
        <p className="text-gray-500 md:text-lg text-sm px-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10">
        {isShowAll
          ? features.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))
          : features
              .slice(0, 4)
              .map((feature) => <Feature key={feature.id} feature={feature} />)}
      </div>

      <div className="flex justify-center">
        <button
          className={`${
            isShowAll && "hidden"
          } bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-md text-white font-semibold mt-6`}
          onClick={handleAllJobs}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Features;

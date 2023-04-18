import React from "react";
import img from "../assets/images/error.svg";

const Error = () => {
  return (
    <div className="max-w-7xl text-center mx-auto flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-indigo-500 my-10">
        SORRY PAGE NOT FOUND
      </h1>
      <img src={img} alt="" className="w-9/12 h-200" />
    </div>
  );
};

export default Error;

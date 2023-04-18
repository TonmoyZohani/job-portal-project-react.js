import React, { useState, useEffect } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-center bg-white max-w-7xl mx-auto">
      <div>
        <h2 className="font-bold font-sans md:text-4xl text-2xl mb-4">
          Job Category List
        </h2>
        <p className="text-gray-500 md:text-lg text-sm px-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 mt-10">
        {categories.map((category) => (
          <Category id={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

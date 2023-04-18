import React from "react";

const Category = (props) => {
  const { img, quantity, title } = props.category;

  return (
    <div className="bg-slate-100 rounded-md md:p-6 p-2">
      <img src={img} alt={title} className="bg-slate-300 p-2.5 rounded-md" />
      <p className="text-left pt-6 font-semibold font-sans">{title}</p>
      <p className="text-left pt-2 text-sm font-semibold font-sans text-gray-500">
        {quantity} Jobs Avialable
      </p>
    </div>
  );
};

export default Category;

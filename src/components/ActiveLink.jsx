import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "md:pr-10 text-lg text-indigo-400" : "md:pr-10 text-lg"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;

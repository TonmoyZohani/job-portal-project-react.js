import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footers from "./Footers";

const Route = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full mx-auto mb-4">
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  );
};

export default Route;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Route from "./components/Route.jsx";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import JobDetails from "./components/JobDetails";
import Error from "./components/Error";
import AppliedJobs from "./components/AppliedJobs";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "/appliedjobs/:id",
        element: <JobDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/features.json");
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

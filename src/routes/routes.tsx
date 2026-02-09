import { Navigate, type RouteObject } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/home-page";
import { JobDetailsPage } from "../pages/job-details-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "jobs/:jobId",
        element: <JobDetailsPage />,
      },
    ],
  },
];

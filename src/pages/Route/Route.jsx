import React from "react";
import { createBrowserRouter } from "react-router";
import Error404 from "../Error/Error404";

import AppDetails from "../AppDetails/AppDetails";
import Installation from "../Installation/Installation";
import Root from "../../components/Root/Root";
import Home from "../../components/Home/Home";
import AllApps from "../AllApps/AllApps";
const appsLoader = async () => {
  try {
    const response = await fetch("/appsData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch apps data");
    }
    return await response.json();
  } catch (error) {
    console.error("Loader error:", error);
    throw error;
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        path: "/",
        loader: appsLoader,
        Component: Home,
      },
      {
        path: "/apps",
        loader: appsLoader,
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: appsLoader,
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: appsLoader,
        Component: Installation,
      },
    ],
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App";
import "./styles/output/global.css";
import "./styles/output/print.css";
import ErrorElement from "./components/ErrorElement";

import HomePage from "./pages/Home";
import PartsPage from "./pages/Parts";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "", // default page
        element: <PartsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

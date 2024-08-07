import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Navbar from "./components/navbar";
import ErrorFile from "./pages/errorfile/errorfile";
import Home from "./pages/home/home";

const route = createBrowserRouter([
  {
    errorElement: <ErrorFile />,
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

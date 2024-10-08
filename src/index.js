import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ErrorFile from "./pages/errorfile/errorfile";
import Home from "./pages/home/home";
import Services from "./pages/servic/services";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Location from "./pages/location/location";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const route = createBrowserRouter([
  {
    errorElement: <ErrorFile />,
    element: <Layout />, // Layout with Navbar, Outlet, Footer
    children: [
      {
        path: "/",
        element: <Home />, // Home component content will go into the Outlet
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/locations",
        element: <Location />,
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

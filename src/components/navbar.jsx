import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navcolor, setnavcolor] = useState(
    "bg-gradient-to-r from-cyan-500 to-red-400"
  );
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setnavcolor((prevColor) =>
        prevColor === "bg-gradient-to-r from-cyan-500 to-red-400"
          ? "bg-gradient-to-r from-red-400 to-cyan-500"
          : "bg-gradient-to-r from-cyan-500 to-red-400"
      );
      console.log("navcolor updated:", navcolor);
    }, 2000);

    return () => clearInterval(colorInterval);
  }, [navcolor]);

  return (
    <div>
      <nav className={`p-2 ${navcolor} transition-colors animate-pulse `}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link to={"/"}>
              <div className="flex flex-row">
                <div className="w-10 m-0 p-0 mx-4">
                  <img src="logo1.png" alt="" />
                </div>
                <div className="mt-3">Mariyam Labs</div>
              </div>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <ul className="text-white lg:flex lg:justify-between">
              <li className="lg:ml-4">
                <Link
                  to={"/services"}
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200"
                >
                  Services
                </Link>
              </li>
              <li className="lg:ml-4">
                <Link
                  to={"/aboutus"}
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200"
                >
                  About Us
                </Link>
              </li>
              <li className="lg:ml-4">
                <Link
                  to={"/contactus"}
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200"
                >
                  Contact Us
                </Link>
              </li>
              <li className="lg:ml-4">
                <Link
                  to={"/locations"}
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="block lg:hidden bg-gradient-to-r from-red-400 to-cyan-500">
            <ul className="text-white">
              <li className="border-t border-white">
                <Link
                  to={"/aboutus"}
                  className="block px-4 py-2 hover:bg-blue-700"
                >
                  About Us
                </Link>
              </li>
              <li className="border-t border-white">
                <Link
                  to={"/contactus"}
                  className="block px-4 py-2 hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;

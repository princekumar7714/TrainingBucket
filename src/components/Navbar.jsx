import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoo from "../../src/assets/bucket-logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-12 rounded-2xl"
              src={logoo}
              alt="logo"
            />
            <Link to="/">
              <h1 className="font-bold text-2xl">
                <span className="text-orange-600 text-3xl">Training</span>
                -Bucket
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {[
              { name: "Corporate Training", path: "/corporate" },
              { name: "Upcoming Batches", path: "/batches" },
              { name: "Jobs", path: "/jobs" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link key={item.name} to={item.path}>
                <li className="px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {[
            { name: "Corporate Training", path: "/corporate" },
            { name: "Upcoming Batches", path: "/batches" },
            { name: "Jobs", path: "/jobs" },
            { name: "Blog", path: "/blog" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              <li className="px-6 py-2 w-full text-center rounded-xl hover:bg-blue-500 hover:text-white transition">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

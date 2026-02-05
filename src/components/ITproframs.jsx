import React, { useState } from "react";
import Cards from "./cards/Cards";
import itCourses from "../components/data/course.js";

function ITproframs() {
  const [activeCategory, setActiveCategory] = useState("All");

  // get unique categories
  const categories = ["All", ...new Set(itCourses.map(c => c.category))];

  // filter courses
  const filteredCourses =
    activeCategory === "All"
      ? itCourses
      : itCourses.filter(course => course.category === activeCategory);

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center text-center mt-13">
        <h1 className="text-blue-500 font-bold text-3xl mb-6">
          Top Trending IT Training Programs
        </h1>
        <p className="mb-6">
          Stay ahead in the rapidly growing tech world with our top trending IT
          courses.
        </p>
      </div>

      {/*  CATEGORY FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border font-medium transition
              ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🧩 COURSES CARDS */}
      <div className="flex flex-wrap justify-center gap-6 mb-3">
        {filteredCourses.map(course => (
          <Cards 
            key={course.id}
            image={course.image}
            title={course.title}
            duration={course.duration}
            mode={course.mode}
            rating={course.rating}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ITproframs;

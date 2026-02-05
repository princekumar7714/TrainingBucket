import React from "react";
import blog1 from "../assets/blog-img/blog1.webp";
import blog2 from "../assets/blog-img/blog2.webp";
import blog3 from "../assets/blog-img/blog3.webp";

function Blogs() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-10">
      
      {/* HEADING */}
      <h1 className="font-bold text-blue-500 text-2xl sm:text-3xl mt-2 text-center">
        Training Basket <span>Blog</span>
      </h1>

      <p className="mt-4 text-center max-w-2xl text-sm sm:text-base">
        Welcome to our digital haven of thought-provoking ideas, captivating
        stories, and expert insights.
      </p>

      {/* BLOG CARDS */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8 
        mt-10 
        w-full 
        max-w-7xl
      ">

        {/* CARD 1 */}
        <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
          <img className="w-full h-52 object-cover" src={blog1} alt="" />

          <h1 className="font-bold text-lg sm:text-xl mt-4 px-4">
            AWS Certification – What is AWS and Why is it Important?
          </h1>

          <div className="flex justify-end px-4 py-4">
            <button className="text-white px-4 py-2 bg-blue-500 rounded-2xl hover:bg-blue-600 transition">
              Learn More..
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
          <img className="w-full h-52 object-cover" src={blog2} alt="" />

          <h1 className="font-bold text-lg sm:text-xl mt-4 px-4">
            Why Employers Want Professionals with Cisco Certification?
          </h1>

          <div className="flex justify-end px-4 py-4">
            <button className="text-white px-4 py-2 bg-blue-500 rounded-2xl hover:bg-blue-600 transition">
              Learn More..
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
          <img className="w-full h-52 object-cover" src={blog3} alt="" />

          <h1 className="font-bold text-lg sm:text-xl mt-4 px-4">
            UpSkill Your Career and Get Job Ready with Summer Training
          </h1>

          <div className="flex justify-end px-4 py-4">
            <button className="text-white px-4 py-2 bg-blue-500 rounded-2xl hover:bg-blue-600 transition">
              Learn More..
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blogs;

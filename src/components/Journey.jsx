import React from "react";
import img1 from "../assets/journey-img/journey1.webp";
import img2 from "../assets/journey-img/journey2.webp";
import img3 from "../assets/journey-img/journey3.webp";
import img4 from "../assets/journey-img/journey4.webp";

function Journey() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      {/* Heading */}
      <h1 className="text-blue-500 font-bold text-2xl sm:text-3xl text-center">
        Our Journey So Far
      </h1>

      {/* Cards Container */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img src={img1} alt="" className="h-48 w-auto object-contain" />
          <h1 className="font-bold text-xl mt-4">Students Trained</h1>
          <p className="mt-2 text-gray-600">
            Training Bucket has Trained 2 Lakh+ Students.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img src={img2} alt="" className="h-48 w-auto object-contain" />
          <h1 className="font-bold text-xl mt-4">Students Placed</h1>
          <p className="mt-2 text-gray-600">
            50,000+ Trained Students have been happily placed.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img src={img3} alt="" className="h-48 w-auto object-contain" />
          <h1 className="font-bold text-xl mt-4">Workshops & Seminars</h1>
          <p className="mt-2 text-gray-600">
            Training Basket has delivered 25,000+ Workshops & Seminars.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img src={img4} alt="" className="h-48 w-auto object-contain" />
          <h1 className="font-bold text-xl mt-4">Google Reviews</h1>
          <p className="mt-2 text-gray-600">
            Training Basket is rated 4.5 Stars on a scale of 5.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Journey;

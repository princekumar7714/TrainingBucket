import React from "react";
import CardSwiper from "./cards/Cardswiper";

function Speaks() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-blue-500 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Success Speaks Louder Than Words
          </h1>

          <h2 className="mt-4 text-lg sm:text-xl font-semibold">
            Testimonials
          </h2>

          <p className="mt-6 text-sm sm:text-base text-gray-700 max-w-4xl leading-relaxed">
            Training Basket helps freshers and working professionals transform
            their careers through industry-ready IT training, career growth
            programs, and 100% Job Assistance.
            <br /><br />
            Watch our real video testimonials to see how our learners moved from
            classroom training to landing dream jobs in top companies.
          </p>
        </div>

        {/* SWIPER */}
        <div className="mt-12">
          <CardSwiper />
        </div>
      </div>
    </section>
  );
}

export default Speaks;

import React from "react";
import partner1 from "../assets/partner-img/partner-1.webp";
import partner2 from "../assets/partner-img/partner-2.webp";
import partner3 from "../assets/partner-img/partner-3.webp";
import partner4 from "../assets/partner-img/partner-4.webp";
import partner5 from "../assets/partner-img/partner-5.webp";

function Partners() {
  return (
    <section className="w-full bg-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-blue-500 font-bold text-2xl sm:text-3xl border-b-2 border-yellow-300 px-4 py-2 rounded-xl hover:bg-yellow-300 transition duration-500">
          Partners
        </h1>

        <h2 className="font-bold text-black text-lg sm:text-xl mt-4 text-center">
          Authorized IT Training Partnerships
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-700 text-sm sm:text-base text-center max-w-4xl leading-relaxed">
          At Training Basket, we take pride in our Authorized IT Training
          Partnerships with leading technology providers.
          <br /><br />
          Our collaborations ensure that you receive industry-recognized
          certifications, up-to-date course content, and hands-on training from
          certified experts.
          <br /><br />
          These partnerships empower us to deliver top-notch IT Training Courses,
          equipping learners with the skills needed to excel in today’s
          competitive job market.
        </p>

        {/* PARTNER LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 w-full max-w-6xl">
          {[partner1, partner2, partner3, partner4, partner5].map(
            (img, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="h-12 sm:h-16 object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Partners;

import React from "react";
import Videoplayer from "./Videoplayer";

function About() {
  return (
    <section className="bg-blue-100 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <h1 className="text-center text-blue-500 font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 lg:mb-12">
          About Us
        </h1>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-14">

          {/* VIDEO */}
          <div className="w-full lg:w-1/2">
            <Videoplayer />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              Training Basket is a global provider of advanced IT Training and
              Certification Programs for individuals and organizations. Our
              primary objective is to bridge the gap between corporations seeking
              skilled professionals and students aspiring to secure satisfying
              employment.
              <br /><br />
              At Training Basket, we understand the evolving needs of the IT
              industry and the importance of staying updated with the latest
              technologies and skills. Our comprehensive IT Certification
              Courses are designed to equip students and professionals with the
              knowledge and expertise required to excel in today's competitive
              job market.
              <br /><br />
              Remember, success is not a destination; it's a journey and we are
              here to walk that path with you. Dare to dream and strive for
              greatness—together, we will create a future that knows no bounds.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

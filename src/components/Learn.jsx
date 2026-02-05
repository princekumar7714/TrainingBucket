import React from "react";
import Learncard from "./cards/Learncard";
import courseAdvantages from "../components/data/Learndata.js";

function Learn() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* TITLE */}
        <h1 className="font-bold text-blue-500 text-center text-2xl sm:text-3xl lg:text-4xl mt-2">
          Why Learn With Training Bucket
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed">
          We offer most in-demand IT Certification Courses designed to help you
          gain industry-relevant skills to advance your career and stay ahead in
          the IT landscape.
          <br /><br />
          Our expert-led IT courses, hands-on learning approach, and real-world
          projects ensure you achieve your goals.
          <br /><br />
          Join us to experience high-quality IT Training that empowers you with
          the knowledge and confidence to succeed in the ever-evolving digital
          landscape.
        </p>

        {/* CARDS */}
        <div className="mt-10 lg:ml-0 ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {courseAdvantages.map((item) => (
            <Learncard
              key={item.id}
              image={item.image}
              advantage={item.advantage}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Learn;

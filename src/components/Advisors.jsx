import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Formbutton from "./button/Formbutton";

function Advisors() {
  return (
    <section id="advisor" className="w-full bg-blue-600 py-10 sm:py-16">
      <div className="w-full mx-auto bg-white rounded-2xl px-5 sm:px-10 py-10">

        {/* HEADING */}
        <h1 className="text-blue-500 w-full font-bold text-center text-2xl sm:text-3xl mb-8">
          Talk to our career advisors now
        </h1>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Do you need any advice for choosing the right career path in the IT
              industry? We’ve got your back. Our expert career advisors are here
              to help you!
              <br /><br />
              Whether you're looking to upskill, switch careers, or start your
              journey in the IT industry, we provide personalized guidance to
              match your goals.
              <br /><br />
              Please fill up the form and someone from our team will get in touch
              with you.
            </p>

            <h2 className="font-semibold text-lg mt-6">
              In a hurry? Call us now!
            </h2>

            {/* CALL BUTTON */}
            <button className="flex items-center mt-4 border rounded-2xl overflow-hidden w-full sm:w-72 hover:shadow-lg transition">
              <div className="bg-blue-500 p-4">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div className="px-4 text-left">
                <p className="text-sm text-gray-600">Call us on our helpline</p>
                <p className="font-bold text-gray-800">+91 90998 85533</p>
              </div>
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2 mr-20 md:mr-0">
            <Formbutton  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advisors;

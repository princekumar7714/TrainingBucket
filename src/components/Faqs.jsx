import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import faqs from "../assets/faqs-img/Faqs-img.png";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "What if I miss a class?",
      a: "You will never miss a lecture at Training Basket! You can watch the recorded session in your LMS or attend the missed session in another live batch."
    },
    {
      q: "What if I have queries after completing the course?",
      a: "You can access lifetime LMS content and get 24×7 support from our team."
    },
    {
      q: "How soon after signing up will I get access?",
      a: "LMS access is provided immediately after enrollment and is available for a lifetime."
    },
    {
      q: "Is this course suitable for me?",
      a: "Yes! Our courses are designed to make you job-ready for the current IT market."
    },
    {
      q: "Does Training Bucket provide placement assistance?",
      a: "More than 70% of learners report promotions, job changes, or new offers after completing our courses."
    },
    {
      q: "Can I attend a demo session before enrollment?",
      a: "Instead of demos, we provide complete learning with expert instructors and full support."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      
      {/* Headings */}
      <h1 className="text-blue-500 font-bold text-2xl sm:text-4xl text-center">
        Frequently Asked Questions
      </h1>
      <h2 className="font-black mt-3 border-b-2 border-yellow-400">
        FAQs
      </h2>

      {/* Content Wrapper */}
      <div className="mt-10 flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-7xl">

        {/* FAQ LIST */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 transition-all duration-300 bg-white"
            >
              {/* QUESTION */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-bold text-sm sm:text-base">
                  {item.q}
                </h3>
                <CiCirclePlus
                  className={`h-7 w-7 text-green-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={faqs}
            alt="FAQs"
            className="w-64 sm:w-80 lg:w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
}

export default Faqs;

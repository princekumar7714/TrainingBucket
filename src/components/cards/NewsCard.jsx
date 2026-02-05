import React from "react";

function NewsCard({ image, title, description, buttonText }) {
  return (
    <div className="
      relative 
      w-full max-w-sm sm:max-w-md lg:max-w-lg
      bg-white rounded-xl shadow-lg 
      p-5 sm:p-6 lg:p-7
      pt-14 sm:pt-16
    ">

      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="
          absolute top-1 left-1
          h-14 w-14 sm:h-16 sm:w-16
          rounded-full
          border-4 border-white
          shadow-md bg-white
        "
      />

      {/* TITLE */}
      <h1 className="font-bold text-lg sm:text-xl leading-snug mt-10">
        {title}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-3 text-sm sm:text-base">
        {description}
      </p>

      {/* BUTTON */}
      <div className="flex justify-end">
        <button
          className="
            mt-4
            bg-blue-500 text-white font-bold
            py-2 px-5 sm:px-6
            rounded-2xl
            text-sm sm:text-base
            hover:bg-blue-600 transition
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default NewsCard;

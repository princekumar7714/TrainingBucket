import React from "react";

function NetworkCard({ image, title, description }) {
  return (
    <div className="relative group">
      {/* GLOW BACKGROUND */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          bg-gradient-to-r from-blue-400 to-indigo-500
          opacity-0 blur-xl
          transition-all duration-500
          group-hover:opacity-30
        "
      ></div>

      {/* CARD */}
      <div
        className="
          relative
          flex flex-col items-center
          h-80 w-70
          rounded-2xl
          justify-center
          border border-gray-200
          shadow-lg
          p-4
          bg-white
          overflow-hidden
          transition-all duration-500 ease-out
          group-hover:-translate-y-3
          group-hover:shadow-2xl
          group-hover:border-blue-400
        "
      >
        {/* BACKGROUND SWEEP */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-br from-blue-50 to-indigo-100
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        ></span>

        {/* IMAGE */}
        <div
          className="
            relative z-10
            p-3
            border rounded-full
            bg-blue-50
            transition-all duration-500
            group-hover:scale-125
            group-hover:-rotate-6
            group-hover:shadow-md
          "
        >
          <img src={image} alt="" className="h-12 w-12 object-contain" />
        </div>

        {/* TITLE */}
        <h1
          className="
            relative z-10
            font-bold text-2xl p-4 text-center
            transition-all duration-500
            group-hover:text-blue-600
            group-hover:-translate-y-1
          "
        >
          {title}
        </h1>

        {/* DESCRIPTION */}
        <h4
          className="
            relative z-10
            p-2 text-center text-gray-600 text-sm
            transition-all duration-500
            group-hover:text-gray-700
            group-hover:translate-y-1
          "
        >
          {description}
        </h4>
      </div>
    </div>
  );
}

export default NetworkCard;

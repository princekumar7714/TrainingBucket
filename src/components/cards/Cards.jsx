import React from "react";
import { CiCalendar, CiUser } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import Button from "../button/Button";

function Cards({ course, image, title, duration, mode, rating, price, onViewProgram }) {
  const handleClick = () => {
    if (onViewProgram && course) {
      onViewProgram(course);
    } else if (onViewProgram) {
      onViewProgram({ image, title, duration, mode, rating, price });
    }
  };

  return (
    <div className="h-118 w-80 bg-white shadow-2xl rounded-2xl mt-5 ml-10 text-center">
      <img className="rounded-t-2xl w-full h-50 " src={image} alt={title} />

      <h1 className="text-blue-500 font-bold text-2xl mt-2">{title}</h1>

      <div className="flex items-center justify-evenly mt-4">
        <div className="flex gap-2">
          <CiCalendar className="h-7 w-7 text-gray-500" />
          <h2 className="text-[15px] text-gray-500">{duration}</h2>
        </div>
        <div className="flex gap-2">
          <CiUser className="h-6 w-6 text-gray-500" />
          <h3 className="text-[15px] text-gray-500">
            {Array.isArray(mode) ? mode.join(" / ") : mode}
          </h3>
        </div>
      </div>

      <h2 className="mt-3">{"⭐".repeat(Math.round(rating))}</h2>

      <div className="flex justify-center items-center mt-3">
        <FaRupeeSign className="text-blue-600 text-2xl" />
        <h2 className="text-blue-600 text-2xl font-bold">{price}</h2>
      </div>

      <Button onClick={handleClick}>VIEW PROGRAM</Button>
    </div>
  );
}

export default Cards;

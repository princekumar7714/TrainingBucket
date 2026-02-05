import React from "react";
import networkData from "../components/data/network.js";
import NetworkCard from "./cards/NetworkCard.jsx";

function Networks() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 py-10">

      {/* Heading */}
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-blue-500 text-center">
        MoU Signings: Fostering Education Networks
      </h1>

      {/* Description */}
      <p className="
        mt-4
        text-center
        text-sm sm:text-base lg:text-lg
        max-w-md sm:max-w-2xl lg:max-w-4xl
      ">
        Discover our commitment to fostering robust education networks through
        our array of MoU signings. These Memorandums of Understanding testify to
        our dedication to collaboration and knowledge exchange.
      </p>

      {/* Cards */}
      <div className="
        mt-10
        w-full
        flex
        flex-wrap
        justify-center
        gap-6 sm:gap-8 lg:gap-10
      ">
        {networkData.map((item) => (
          <NetworkCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </div>
  );
}

export default Networks;

import React from "react";
import Videoplayer2 from "./Videoplayer2";
import Videoplayer3 from "./Videpplayer3";

function Branch() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h1 className="font-bold text-blue-500 text-2xl sm:text-3xl">
          Branch Insights - Explore Our Training Basket Centers
        </h1>

        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          Step inside the realm of innovation and education as we take you on a
          virtual tour of our State-of-the-art Training Basket Centres.
        </p>

        {/* VIDEOS */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">

          {/* VIDEO CARD */}
          <div
            className="relative bg-cover bg-center w-full max-w-xl aspect-video rounded-2xl shadow-xl"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/63dad42faac77c57f552854d/64feb32b792262060b052a8a_Laptop%20(1)-p-500.webp')",
            }}
          >
            <Videoplayer2 />
          </div>

          <div
            className="relative bg-cover bg-center w-full max-w-xl aspect-video rounded-2xl shadow-xl"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/63dad42faac77c57f552854d/64feb32b792262060b052a8a_Laptop%20(1)-p-500.webp')",
            }}
          >
            <Videoplayer3 />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Branch;

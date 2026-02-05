import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Mentorcard from "./cards/Mentorcard";
import mentordata from "../components/data/mentor.js";

function Mentor() {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <div className="text-center max-w-3xl">
          <h1 className="text-blue-500 font-bold text-2xl sm:text-3xl lg:text-4xl">
            Meet Your Mentors
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Meet the experts who inspire, educate, and guide your career journey.
          </p>
        </div>

        {/* Swiper */}
        <div className="w-full mt-10">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
          >
            {mentordata.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <Mentorcard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="px-5 py-2 text-sm sm:text-base rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              ← Prev
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="px-5 py-2 text-sm sm:text-base rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentor;

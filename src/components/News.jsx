import React from "react";
import NewsCard from "./cards/NewsCard";
import news from "../components/data/News.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function News() {
  return (
    <div className="relative bg-blue-100 py-16 overflow-hidden">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">

        {/* LEFT BLUE SECTION */}
        <div className="bg-blue-500 w-full lg:w-1/2 rounded-2xl p-8 lg:p-12">
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            Training Basket in The News
          </h1>
          <p className="text-white mt-4 max-w-xl text-sm sm:text-base">
            We have always believed in the power of knowledge and the impact of
            quality education. As a trailblazer in the IT Training domain, we have
            garnered significant attention from various renowned media outlets.
          </p>
        </div>

        {/* RIGHT SWIPER SECTION */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            className="py-10"
          >
            {news.map((items) => (
              <SwiperSlide key={items.id} className="flex justify-center">
                <NewsCard
                  image={items.image}
                  title={items.title}
                  description={items.description}
                  buttonText={items.buttonText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

export default News;

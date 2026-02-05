import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5"



function CardSwiper() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">

      <Swiper 
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <Card1  title="MERN Stack"  />
        </SwiperSlide>

        <SwiperSlide>
          <Card2  title="Frontend Development" />
        </SwiperSlide>

        <SwiperSlide>
          <Card3 title="Backend Development" />
        </SwiperSlide>

        <SwiperSlide>
          <Card4 title="UI / UX Design" />
        </SwiperSlide>
        <SwiperSlide>
          <Card5 title="UI / UX Design" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default CardSwiper;

// CARD COMPONENT
// function Card({ title }) {
//   return (
//     <div className="h-64 bg-white rounded-xl shadow-xl flex items-center justify-center text-xl font-bold">
//       {title}
//     </div>
//   );
// }

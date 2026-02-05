import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import mentors from "../data/mentors";
import Mentorcard from "./Mentorcard";

function MentorSwiper() {
  return (
    <div className="relative px-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-10"
      >
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.id} className="flex justify-center">
            <Mentorcard {...mentor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MentorSwiper;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
function Slider() {
  return (
    <div className="w-full mx-auto pt-4   ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-[400px]"
      >
        <SwiperSlide className="relative h-full w-full">
          <Image
            src="/slide1.jpeg"
            alt="Slide 1"
            fill
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="relative h-full] w-full">
          <Image
            src="/slide2.jpeg"
            alt="Slide 2"
            fill
            className=" object-cover  rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

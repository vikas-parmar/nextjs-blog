"use client";
import img1 from "@/assets/slides/img3.jpg";
import img2 from "@/assets/slides/img2.png";
import img3 from "@/assets/slides/img1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="h-[70vh]"
    >
      <SwiperSlide className="w-full h-2/4">
        <Image src={img1} className="w-full object-cover" alt="" />
      </SwiperSlide>
     
      <SwiperSlide className="w-full h-2/4">
        <Image src={img2} className="w-full object-scale-down" alt="" />
      </SwiperSlide>
     
      <SwiperSlide className="w-full h-2/4">
        <Image src={img3} className="w-full object-bottom" alt="" />
      </SwiperSlide>

    </Swiper>
  );
};

export default Slider;

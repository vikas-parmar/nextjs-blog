"use client";
import img1 from "@/assets/slides/img4.jpg";
import img2 from "@/assets/slides/img2.jpg";
import img3 from "@/assets/slides/img1.jpg";
import img4 from "@/assets/slides/img3.jpg";

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
      className="h-auto max-h-96"
    >
      <SwiperSlide>
        <Image src={img1} className="w-full object-contain" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={img2} className="w-full object-contain" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={img3} className="w-full object-contain" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img4} className="w-full object-contain" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

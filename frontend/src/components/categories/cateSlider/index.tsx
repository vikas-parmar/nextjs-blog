"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CateCard from "../cateCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const CateSlider = () => {
  return (
    <section id="cateogories">
      <h1 className="heading-2 text-center p-4">Categories</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {categories.map((category, i) => {
          return (
            <SwiperSlide key={category.name}>
              <CateCard {...category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CateSlider;

const categories = [
  {
    name: "Category 1",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 2",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 3",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 4",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 5",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 6",
    path: "#",
    bgcolor: generate(),
  },
  {
    name: "Category 7",
    path: "#",
    bgcolor: generate(),
  },
];

//  function to generate random hex color for background
function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";

  for (var i = 0; i < 6; i++) {
    hexCode1 += hexValues1.charAt(
      Math.floor(Math.random() * hexValues1.length)
    );
  }
  return hexCode1;
}

function generate() {
  var gradient = `#${createHex()}`;
  return gradient;
}
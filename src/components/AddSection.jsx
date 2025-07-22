import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images import
import img1 from "../ads/img1.jpg";
import img2 from "../ads/img2.jpg";
import img3 from "../ads/img3.jpg";
import img6 from "../ads/img6.jpg";


const slides = [
  { img: img1, text: "Discover the latest collections with premium quality and unbeatable prices.", bgColor: "#f5e7da" },
  { img: img2, text: "Your style journey starts here. Explore now for amazing discounts and offers.", bgColor: "#e0f7f4" },
  { img: img3, text: "Exclusive arrivals and seasonal essentials just for you, shop smarter today.", bgColor: "#f9f1ec" },
  { img: img6, text: "Discover the latest collections with premium quality and unbeatable prices.", bgColor: "#f5e7da" },
 
];

const AddSection = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"// responsive height
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Full-width image */}
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Text positioned on top-left */}
              <div className="absolute top-6 left-6 md:top-8 md:left-12 flex flex-col items-start gap-2">
                <p className="text-gray-400 text-lg  font-bold max-w-[250px] break-words leading-tight">
                  {slide.text}
                </p>
                <button className="bg-gray-400 text-white text-xs md:text-sm px-3 py-1 rounded hover:bg-gray-500 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx="true">{`
        .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default AddSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Import your images from the ads folder
import ad0 from "../ads/add 0.jpg";
import ad1 from "../ads/add 1.jpg";
import ad2 from "../ads/add 2.jpg";
import ad3 from "../ads/add 3.jpg";
import ad4 from "../ads/add 4.jpg";
import ad5 from "../ads/add 5.jpg";
import ad6 from "../ads/add 6.jpg";
import ad7 from "../ads/add 7.jpg";

const AddSection = () => {
  const ads = [
     { id: 0, image: ad0 },
    { id: 1, image: ad1 },
    { id: 2, image: ad2 },
    { id: 3, image: ad3 },
    { id: 4, image: ad4 },
    { id: 5, image: ad5 },
    { id: 6, image: ad6 },
    { id: 7, image: ad7 },
  ];

  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded overflow-hidden"
      >
        {ads.map((ad) => (
          <SwiperSlide key={ad.id}>
            <img
              src={ad.image}
              alt={`Ad ${ad.id}`}
              className="w-full h-[450px] object-cover rounded shadow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AddSection;

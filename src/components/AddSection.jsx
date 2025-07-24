// src/components/AddSection.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Titles and descriptions for each slide
const categorySlides = [
  { title: "Stylish Bag", desc: "Carry your essentials with elegance and ease." },
  { title: "Men's Collection", desc: "Refined menswear for every occasion." },
  { title: "Women's Collection", desc: "Elegant styles for modern women." },
  { title: "Electronics", desc: "Smart gadgets that simplify your life." },
  { title: "Jewelry", desc: "Elegant jewelry to enhance your style." },
];

const AddSection = ({ scrollToProductList }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const ids = [1, 2, 19, 14];
        const productFetches = ids.map(id =>
          fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
        );

        // Fetch jewelry category separately
        const jewelryProduct = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
          .then(res => res.json())
          .then(data => data[0]);

        const fetchedProducts = await Promise.all(productFetches);
        setProducts([...fetchedProducts, jewelryProduct]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (products.length < 5) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[460px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white px-4 md:px-12 py-6 md:py-12 h-full">
              {/* Text */}
              <div className="flex-1 space-y-4 md:pr-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  {categorySlides[index].title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
                  {categorySlides[index].desc}
                </p>
                <button
                  onClick={scrollToProductList}
                  className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
                >
                  Shop Now →
                </button>
              </div>
              {/* Image */}
              <div className="flex-1 mt-4 md:mt-0 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-xs md:max-w-sm object-contain h-56 md:h-80"
                />
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

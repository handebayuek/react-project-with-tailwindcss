import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function HomePage() {
  const { data } = useFetch("../data.json");

  const bestsellers = data.filter((product) => product.isBestseller);

  return (
    <div className="mx-auto px-4">
      {/* Carousel */}
      <div className="relative mb-8 mt-16 flex justify-center">
        <Swiper
          direction="horizontal"
          modules={[Pagination, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="vertical-slide-carousel mt-6 h-[400px] w-full sm:h-[500px] md:w-10/12 2xl:w-8/12"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-between overflow-hidden">
              <div className="w-1/3 p-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Nourishing Cleanser
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Gently cleanses for refreshed, glowing skin.
                </p>
              </div>
              <div className="h-full w-[60%]">
                <img
                  src="image/Carousel1.jpg"
                  alt="Carousel 1"
                  className="h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-between overflow-hidden">
              <div className="w-1/3 p-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Hydrating Toner
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Balances and revitalizes for a healthy complexion.
                </p>
              </div>

              <img
                src="image/Carousel2.jpg"
                alt="Carousel 2"
                className="h-full w-2/3 rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-between overflow-hidden">
              <div className="w-1/3 p-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Vegan & Cruelty-Free
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Ethically made, supporting a clean and conscious beauty
                  routine.
                </p>
              </div>
              <img
                src="image/Carousel3.jpg"
                alt="Carousel 3"
                className="h-full w-2/3 rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg- container mx-auto border-t-2 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Slogan Section */}
          <div className="h-[220px] w-[230px] rounded-lg bg-white bg-gradient-to-r from-darkGreenColor via-navbarColor to-textColor p-1">
            <div className="flex h-full w-full flex-col items-center justify-between rounded-lg bg-white text-center">
              <h1 className="text-5xl font-bold text-darkGreenColor lg:text-6xl">
                99.8%
              </h1>
              <h1 className="text-2xl font-semibold text-accentColor">
                Organic.
              </h1>
              <h1 className="text-2xl font-semibold text-accentColor">100%</h1>
              <h1 className="text-2xl font-semibold text-darkColor">You.</h1>
            </div>
          </div>

          {/* Paragraph Section */}
          <div className="min-h-[150px] flex-1 rounded-lg border p-5 text-center text-base shadow-md sm:p-3 sm:text-2xl lg:text-3xl">
            <p className="text-textColor">
              Our products and the formulas that make them up work hard. They
              only contain ingredients that are essential to their
              effectiveness, never unnecessary extras and never irritating
              preservatives.
            </p>
          </div>
        </div>
      </div>

      {/* Bestseller Section */}
      <div className="mx-auto flex min-w-[500px] flex-wrap items-center justify-around gap-4 px-10 pb-8 pt-10">
        {bestsellers.slice(0, 3).map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="w-full max-w-[350px] rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="mb-3 inline-block rounded-md bg-deleteColor px-2 py-1 font-semibold text-white">
              Bestseller
            </div>
            <div className="w-full rounded-lg">
              <img
                src={product.image}
                alt={product.product_name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="text-lg font-bold">{product.product_name}</h3>
            <div className="flex items-center space-x-1">
              {Array.from({ length: product.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

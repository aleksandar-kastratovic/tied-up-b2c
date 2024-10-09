"use client";
import { Suspense, useEffect, useState } from "react";

import Aos from "aos";
import Link from "next/link";
import { Thumb } from "@/_components/shared";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const RecommendedProducts = ({ recommendedProducts, action4 }) => {
  const [products, setProducts] = useState(recommendedProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    Aos.init();
  });

  const getCategories = () => {
    categories?.map((category) => {
      return;
    });
  };

  return (
    <div
      data-aos="fade-right"
      className="max-sm:w-[95%] max-sm:mx-auto md:mx-5 lg:mx-[5rem] max-sm:mt-[5rem] md:mt-[5.625rem] overflow-visible"
    >
      <div className="max-lg:col-span-1 lg:col-span-4 2xl:col-span-4 4xl:col-span-5">
        <div className="relative flex flex-col justify-between max-lg:gap-3 lg:flex-row lg:items-center">
          <div>
            <p
              className={`max-md:text-[30px] text-[44px] font-bold text-[#de6a26] leading-normal`}
            >
              {action4}
            </p>
            {!pathname.includes("korpa") ? (
              <div className="flex items-center gap-3">
                <Link
                  className="max-md:text-[0.9rem] text-2xl underline text-[#171717] block font-light"
                  href={`/sekcija/preporuceno`}
                >
                  Pogledajte sve proizvode
                </Link>
              </div>
            ) : null}
          </div>
          <div className="flex flex-row max-md:hidden items-center gap-[30px]">
            {(categories ?? []).map((category) => {
              const { id, name } = category;
              return (
                <div
                  key={`category-${id}`}
                  onClick={() => {
                    setSelectedCategory(id);
                  }}
                >
                  <button
                    className={`font-light w-fit relative  text-2xl text-black ${
                      selectedCategory === id
                        ? "activeCategory"
                        : "activeCategoryHover"
                    }`}
                  >
                    {name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-sm:mt-[1rem] mt-[4rem]">
        <Swiper slidesPerView={4} spaceBetween={20}>
          {(products ?? [])?.map((item) => {
            if (item) {
              const { id } = item;
              return (
                <Suspense
                  key={`recommended-product-${id}`}
                  fallback={
                    <div
                      className={`aspect-square bg-slate-200 animate-pulse`}
                    />
                  }
                >
                  <SwiperSlide key={`slide-${id}`}>
                    <Thumb
                      id={id}
                      refreshWishlist={() => {}}
                      categoryId={"*"}
                      key={`thumb-${id}`}
                      section_data={{
                        categories: categories,
                        setCategories: setCategories,
                        selectedCategory: selectedCategory,
                        products: recommendedProducts,
                        setProducts: setProducts,
                      }}
                    />
                  </SwiperSlide>
                </Suspense>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProducts;

"use client";
import { Suspense, useEffect, useState } from "react";

import Aos from "aos";
import Link from "next/link";
import { Thumb } from "@/_components/shared";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useIsMobile } from "@/hooks/croonus.hooks";

const RecommendedProducts = ({ recommendedProducts, action4 }) => {
  const [products, setProducts] = useState(recommendedProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    Aos.init();
  });

  const is_mobile = useIsMobile();

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    if (id === "all_categories") {
      return setProducts(recommendedProducts);
    } else {
      let arr = [...recommendedProducts];
      let filtered = (arr || [])?.filter(
        (product) => product.categories?.[0]?.id === Number(id)
      );

      return setProducts(filtered);
    }
  };

  const renderCategories = () => {
    switch (is_mobile) {
      case true:
        return (
          <select
            className={`w-full rounded-md border border-gray-200 mb-3 focus:ring-2 focus:border-gray-200 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#b89980]`}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value={"all_categories"}>Sve kategorije</option>
            {(recommendedProducts ?? [])?.map((item) => {
              if (item?.id) {
                const { categories } = item;
                let category = {
                  name: categories?.[0]?.name,
                  id: categories?.[0]?.id,
                };
                return (
                  <option key={`category-${item.id}`} value={category?.id}>
                    {category?.name}
                  </option>
                );
              }
            })}
          </select>
        );
      case false:
        return (
          <div className={`flex items-center gap-3`}>
            {(recommendedProducts ?? [])?.map((item) => {
              if (item?.id) {
                const { categories } = item;
                let category = {
                  name: categories?.[0]?.name,
                  id: categories?.[0]?.id,
                };
                return (
                  <button
                    onClick={() => {
                      handleCategoryChange(category?.id);
                    }}
                    key={`category-${item.id}`}
                    className={
                      selectedCategory === category?.id
                        ? `font-light activeCategoryHover w-fit relative active-button  text-2xl activeCategory text-black`
                        : `font-light activeCategoryHover w-fit relative  text-2xl text-black`
                    }
                  >
                    {category?.name}
                  </button>
                );
              }
            })}
          </div>
        );
    }
  };

  return (
    <div
      data-aos="fade-right"
      className="max-sm:w-[95%] max-sm:mx-auto md:mx-5 lg:mx-[5rem] max-sm:mt-[5rem] md:mt-[5.625rem] overflow-visible"
    >
      <div className="max-lg:col-span-1 lg:col-span-4 2xl:col-span-4 4xl:col-span-5">
        <div className="relative flex flex-col justify-between max-lg:gap-3 lg:flex-row lg:items-center">
          <div className={`flex-1`}>
            <div
              className={`flex flex-col md:flex-row md:items-center justify-between w-full`}
            >
              <p
                className={`max-md:text-[30px] text-[44px] font-bold text-[#215352] leading-normal`}
              >
                {action4}
              </p>
              {renderCategories()}
            </div>
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
        <Swiper
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
        >
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

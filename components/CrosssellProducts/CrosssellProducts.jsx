"use client";
import { Suspense, useState } from "react";
import { Thumb } from "@/_components/shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useSuspenseQuery } from "@tanstack/react-query";
import { list } from "@/app/api/api";

const CrossSellProducts = ({ id }) => {
  const { data: cross_sell_products } = useSuspenseQuery({
    queryKey: ["cross_sell_products"],
    queryFn: async () => {
      return await list(`/product-details/cross-sell/${id}`)?.then(
        (response) => response?.payload?.items
      );
    },
  });

  const [loaded, setLoaded] = useState(false);

  if (cross_sell_products?.length > 0) {
    return (
      <>
        <div className="flex justify-between w-full items-center mt-10">
          <h5 className="text-[1.5rem] mb-3 font-bold max-md:text-[1.1rem] ">
            Možda će Vam biti potrebno
          </h5>
        </div>
        <Swiper
          onInit={() => setLoaded(true)}
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
          {loaded &&
            (cross_sell_products ?? [])?.map(({ id }) => {
              return (
                <SwiperSlide key={`slide-${id}`}>
                  <Suspense
                    fallback={
                      <div
                        className={`aspect-square bg-slate-200 animate-pulse col-span-1`}
                      />
                    }
                  >
                    <Thumb
                      refreshWishlist={() => {}}
                      id={id}
                      categoryId={"*"}
                    />
                  </Suspense>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </>
    );
  }
};
export default CrossSellProducts;

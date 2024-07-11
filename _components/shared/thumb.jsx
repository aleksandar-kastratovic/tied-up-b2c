"use client";
import {
  useAddToCart,
  useAddToWishlist,
  useIsInWishlist,
  useProductThumb,
  useRemoveFromWishlist,
} from "@/hooks/croonus.hooks";
import { Prices } from "@/_components/shared/prices";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import { deleteMethod, post } from "@/app/api/api";
import { toast } from "react-toastify";
import WishlistActive from "@/assets/Icons/heart-active.png";
import Wishlist from "@/assets/Icons/heart.png";

export const Thumb = ({
  id,
  categoryId = "*",
  refreshWishlist = () => {},
  productsPerViewMobile = 1,
}) => {
  const { data: product } = useProductThumb({
    id: id,
    categoryId: categoryId ?? "*",
  });
  const { mutate: addToWishlist, isSuccess: isAdded } = useAddToWishlist();
  const { mutate: removeFromWishlist, isSuccess: isRemoved } =
    useRemoveFromWishlist();
  const { data: wishlist, refetch } = useIsInWishlist({ id: id });

  const wishlist_data = {
    is_in_wishlist: wishlist?.exist,
    id: wishlist?.wishlist_item_id,
  };

  useEffect(() => {
    refetch();
    refreshWishlist();
  }, [isAdded, isRemoved]);

  const { mutate: addToCart, isSuccess: is_added_to_cart } = useAddToCart();

  const [navigationEnabled, setNavigationEnabled] = useState({
    enabled: false,
    id: null,
  });

  const [swiper, setSwiper] = useState(null);

  const handleSwiperNavigation = ({ id }) => {
    setNavigationEnabled({
      enabled: true,
      id: id,
    });
  };

  const renderDiscountPercentage = ({
    price: {
      discount: { campaigns },
    },
  }) => {
    let discounts = campaigns?.map(({ calc: { original, price } }) => {
      let price_num = Number(price);
      let original_num = Number(original);

      let discount = Math.round(
        ((original_num - price_num) / original_num) * 100
      );

      return (
        <p
          className={`bg-[#c23d27] px-[0.85rem] py-1 rounded-lg font-bold`}
        >{`- ${discount}%`}</p>
      );
    });

    return (
      <div
        className={`absolute right-2 top-2 z-[5] text-white text-[13px] flex flex-col gap-2`}
      >
        {discounts}
      </div>
    );
  };

  const renderStickers = ({ stickers }) => {
    let stickers_tmp = stickers?.map(({ name }, i) => {
      return (
        <p className={`bg-[#04b400] px-[0.85rem] py-1 rounded-lg font-bold`}>
          {name}
        </p>
      );
    });

    return (
      <div
        className={`absolute left-2 top-2 z-[5] text-white text-[13px] flex flex-col gap-2`}
      >
        {stickers_tmp}
      </div>
    );
  };

  return (
    <div
      className={`col-span-1 flex flex-col relative group aspect-2/3`}
      onMouseEnter={() => {
        handleSwiperNavigation({ id: product?.basic_data?.id_product });
      }}
      onMouseLeave={() => {
        handleSwiperNavigation({ id: null });
      }}
    >
      {product?.price?.discount?.active &&
        renderDiscountPercentage({ price: product?.price })}

      {product?.stickers?.length > 0 &&
        renderStickers({ stickers: product?.stickers })}

      <Link href={`/${product?.slug_path}`} className={`flex-1`}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={true}
          direction={"horizontal"}
          rewind={product?.image?.length > 1}
          navigation={
            navigationEnabled.enabled === true &&
            navigationEnabled.id === product?.basic_data?.id_product &&
            product?.image?.length > 1
          }
          breakpoints={{
            320: {
              navigation: {
                enabled: false,
              },
            },
            1024: {
              navigation: {
                enabled: true,
              },
              pagination: {
                enabled: false,
              },
              direction: "horizontal",
            },
          }}
          className={`categoryImageSwiper relative`}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {product?.image_data?.map(
            (
              { url, descriptions: { alt }, file_data: { height, width } },
              index
            ) => {
              return (
                <SwiperSlide key={index} className={`!overflow-hidden`}>
                  <Image
                    loading={`eager`}
                    src={convertHttpToHttps(url)}
                    alt={alt ?? product?.basic_data?.name}
                    sizes={
                      "(max-width: 639px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, (min-width: 1600px) 50vw"
                    }
                    width={width ?? 0}
                    height={height ?? 0}
                    priority={true}
                    className={`!w-full !h-full !object-cover group-hover:scale-110 transition-all duration-500`}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </Link>
      <div className="mt-auto pt-[0.813rem] flex items-center justify-between relative">
        <Link
          href={`/${product?.slug}`}
          className="max-md:text-[0.85] text-[0.813rem] relative max-md:leading-4 max-sm:line-clamp-1 group-hover:text-[#04b400]"
        >
          {product?.basic_data?.name}
        </Link>
        <div
          onClick={() => {
            if (wishlist_data?.is_in_wishlist) {
              removeFromWishlist({ id: wishlist_data?.id });
            } else {
              addToWishlist({ id: product?.basic_data?.id_product });
            }
          }}
          className={`max-md:hidden rounded-full p-1 favorites cursor-pointer `}
        >
          {wishlist_data?.is_in_wishlist ? (
            <Image
              alt="wishlist"
              src={WishlistActive}
              height={15}
              width={15}
              className="cursor-pointer hover:scale-110 transition-all duration-200"
            />
          ) : (
            <Image
              src={Wishlist}
              alt="wishlist"
              height={15}
              width={15}
              className={`cursor-pointer transition-all duration-500 hover:scale-110`}
            />
          )}
        </div>
      </div>
      <Prices price={product?.price} inventory={product?.inventory} />
    </div>
  );
};

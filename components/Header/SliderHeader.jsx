"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import LeftIcon from "../svg/LeftIcon";
import RightIcon from "../svg/RightIcon";

const SliderHeader = () => {
  const [swiper, setSwiper] = useState(null);
  const banners = [
    "Besplatna isporuka za iznos preko 5.000 RSD",
    "Besplatna isporuka za iznos preko 5.000 RSD",
  ];

  return (
    <div className=" max-w-[30%] justify-between flex items-center">
      <p className="text-xs font-light text-white bg-[#171612]">
        Besplatna isporuka za iznos preko 5.000 RSD
      </p>
    </div>
  );
};

export default SliderHeader;

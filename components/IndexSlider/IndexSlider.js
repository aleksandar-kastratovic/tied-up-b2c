"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

const IndexSlider = ({ banners, mobileBanners }) => {
  const [currentSlide, setCurrentSlide] = useState({
    index: 0,
    banner: banners[0]?.image,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [draggingIndex, setDraggingIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setCurrentSlide({
          index: draggingIndex,
          banner: banners[draggingIndex]?.image,
        });
        setIsDragging(false);
      }
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        event.preventDefault();
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const slideWidth = sliderRect.width / banners.length;
        const mouseX = event.clientX - sliderRect.left;
        let newIndex = Math.floor(mouseX / slideWidth);
        if (newIndex < 0) newIndex = 0;
        if (newIndex > banners.length - 1) newIndex = banners.length - 1;
        setDraggingIndex(newIndex);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, draggingIndex, banners]);

  const handleSlideChange = (index) => {
    setCurrentSlide({
      index: index,
      banner: banners[index]?.image,
    });
  };

  const handleMouseDown = (event, index) => {
    event.preventDefault();
    setDragStartIndex(index);
    setDraggingIndex(index);
    setIsDragging(true);
  };
  useEffect(() => {
    Aos.init();
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevState) => {
        const nextIndex = (prevState.index + 1) % banners.length;
        return {
          index: nextIndex,
          banner: banners[nextIndex]?.image,
        };
      });
    };
    intervalRef.current = setInterval(nextSlide, 5000);
    const handleInteraction = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 5000);
    };
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [banners]);

  return (
    <div
      data-aos="zoom-out"
      className="absolute w-screen block max-sm:h-[400px] md:h-[510px] lg:h-[690px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[800px]"
      ref={sliderRef}
    >
      <div className="relative h-full overflow-hidden">
        <div className=" items-center max-sm:h-[400px] justify-between h-full w-full">
          {banners.map((banner, index) => {
            const isActive = currentSlide?.index === index;

            return (
              <div
                key={index}
                className={
                  isActive
                    ? "relative w-full overflow-hidden h-full opacity-100 duration-[1000ms] transition-all ease-linear"
                    : "absolute w-full h-full overflow-hidden opacity-0 duration-[1000ms] transition-all ease-linear"
                }
              >
                <div className="relative max-sm:h-[400px] sm:h-full">
                  <Image
                    src={banner?.image}
                    alt={banner?.title}
                    width={1920}
                    height={1080}
                    className="bg-fixed w-full h-full object-cover"
                  />
                  <Link
                    href={`${banner?.url ?? `/stranica-u-izradi`}`}
                    target={banner?.target ?? "_self"}
                    className="absolute z-[49] top-0 left-0 w-full h-full bg-black transition-all duration-500 bg-opacity-40"
                  >
                    <div className="absolute flex flex-col items-center md:items-start justify-center md:justify-start max-sm:gap-[20px] gap-[10px] max-sm:top-[50%] top-[48%] text-center left-[8%] transform -translate-y-1/2">
                      {banner?.title && (
                        <h1 className="text-white max-sm:text-base text-xl font-thin">
                          {banner?.title}
                        </h1>
                      )}
                      {banner?.subtitle && (
                        <h2 className="text-white max-sm:text-xl text-[42px] font-semibold capitalize tracking-wider">
                          {banner?.subtitle}
                        </h2>
                      )}
                      {banner?.text && (
                          <p className="text-white text-left sm:max-w-[60%] max-sm:text-[0.925rem] text-base font-normal">
                            {banner?.text}
                          </p>
                      )}
                      {banner?.button && (
                        <button className="bg-transparent  hover:bg-white hover:text-black transition-all duration-300  text-white text-sm font-bold uppercase py-4 px-12 max-sm:px-2 max-sm:py-2 max-sm:flex max-sm:items-center max-sm:justify-center border border-white max-sm:w-[250px] mt-2">
                          {banner?.button}
                        </button>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative max-sm:hidden">
        <div className="absolute max-sm:-top-[1rem] md:-top-[2rem] xl:-top-[2rem] 2xl:-top-20  w-full flex items-center justify-center z-[50]">
          {banners?.map((banner, index) => (
            <div
              key={index}
              className={`${
                currentSlide?.index === index ? "bganimate" : "bg-white"
              } w-32 h-[3.5px]  mx-1 cursor-pointer`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}

          {banners?.map((banner, index) => (
            <div
              key={index}
              className="absolute flex gap-10 items-center bottom-6"
            >
              <i
                className="cursor-pointer fas fa-chevron-left text-white text-sm"
                onClick={
                  currentSlide?.index === 0
                    ? () => handleSlideChange(banners.length - 1)
                    : () => handleSlideChange(currentSlide?.index - 1)
                }
              ></i>
              <div>
                <h1 className="text-white">{`${currentSlide?.index + 1} / ${
                  banners?.length
                }`}</h1>
              </div>
              <i
                className="fas cursor-pointer fa-chevron-right text-white text-sm"
                onClick={
                  currentSlide?.index === banners.length - 1
                    ? () => handleSlideChange(0)
                    : () => handleSlideChange(currentSlide?.index + 1)
                }
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexSlider;

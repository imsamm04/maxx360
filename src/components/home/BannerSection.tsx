import { type JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "../ui";
// Import Swiper styles
import "swiper/swiper-bundle.css";

export interface IBannerSlide {
  id: number;
  title: string;
  subtitle: string;
  highlightText: string;
  highlightColor: string;
  buttonText: string;
  buttonStyle: string;
  backgroundImage: string;
  textColor: string;
}

export const BannerSection = ({ slides }: { slides: IBannerSlide[] }): JSX.Element => {
  return (
    <div className="w-full relative bg-background-primary h-[200px] sm:h-[320px] overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-left object-contain lg:object-cover"
                  alt={`Background ${slide.id}`}
                  src={slide.backgroundImage}
                />
              </div>

              {/* Background Overlay */}
              <div className="absolute inset-0  z-10"></div>

              {/* Content Container */}
              <div className="relative z-20 w-full max-w-[1280px] mx-auto">
                <div className="flex items-center">
                  {/* Left Content */}
                  <div className="max-w-[500px] text-left px-2 sm:px-6">
                    <div className="space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8">
                      <div className={`font-montserrat ${slide.textColor}`}>
                        <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl leading-4 xs:leading-5 sm:leading-6 mb-1 xs:mb-2 sm:mb-3 lg:mb-4 tracking-wide uppercase">
                          {slide.title}
                        </p>
                        <h1 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-tight">
                          {slide.subtitle}{" "}
                          <span className={slide.highlightColor}>
                            {slide.highlightText}
                          </span>
                        </h1>
                      </div>

                      <Button
                        className={`${slide.buttonStyle} px-2 py-2 sm:px-8 font-semibold tracking-wide shadow-lg hover:shadow-xl transition-shadow w-auto !h-8 sm:!h-10`}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

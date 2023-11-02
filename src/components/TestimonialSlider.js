import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../slider.css';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper';

import { testimonialsData } from "../data";
export default function TestimonialSlider() {
  return (
    <>
     <Swiper
        effect={'cube'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper absolute h-[500px] w-full sm:w-[500px]"
      >
        {testimonialsData.map((slide, index) => {
          // destructure slide
          const { image, message, name, web } = slide;
          return (
            // slide
            <SwiperSlide key={index}>
              <span className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-auto pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl">
                {/* avatar image */}
                <img style={{height:"5rem", width:"5rem"}} src={image} alt="" />
                {/* text */}
                <div>
                  <div className="text-lg text-primary font-bold">{name}</div>
                  <div className="mb-4 font-semibold text-accent-primary">
                    {web}
                  </div>
                  <p className="w-auto">{message}</p>
                </div>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

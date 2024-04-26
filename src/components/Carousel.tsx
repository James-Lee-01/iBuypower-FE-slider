'use client'

import Card from "../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import products from "../data/products.json";


export default function Carousel() {
  const swiperParams: SwiperOptions = {
    slidesPerView: 1.05,
    spaceBetween: 8,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2.05,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
    modules: [Navigation],
    navigation: {
      prevEl: '.prev-button',
      nextEl: '.next-button',
    },
  }

  return (
    <Swiper
      className="mySwiper"
      wrapperClass="swiper-wrapper"
      {...swiperParams} 
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="py-4"><Card product={product}/></SwiperSlide>
      ))}
    </Swiper>
  )
}
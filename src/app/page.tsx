'use client'
import Card from "../components/Card";
import ArrowButton from "../components/ArrowButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


export default function Home() {
  return (
    <main className="flex flex-col px-8 xs:px-6 md:px-8 lg:px-12 2xl:px-[140px]">
      <section className="title-section flex flex-col justify-center items-center mt-8 xs:mt-12 lg:mt-24 gap-1.5 text-center">
        <div className="main-title">
          <p className="font-gothamBold text-xl xs:text-2xl md:text-4xl lg:text-[46px] lg:leading-[51px]">Best Seller Gaming PC</p>
        </div>
        <div className="second-title">
          <p className="font-gothamBold md:text-2xl lg:text-[30px] lg:leading-[33px]">Prebuilt & Custom</p>
        </div>
      </section>

      <section className="arrow-button-group flex justify-end gap-3 ">
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </section>

      <section className="card-section">
        <div className="card-list flex items-center justify-center mt-5 mb-36">
          <>
      <Swiper
        slidesPerView={1.05}
        spaceBetween={8}
        slidesOffsetBefore={10}
        slidesOffsetAfter={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
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
        }}
        // modules={[Pagination]}
        className="mySwiper"
        wrapperClass="swiper-wrapper"
      >
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
        <SwiperSlide className="py-4"><Card/></SwiperSlide>
      </Swiper>
    </>
        </div>
      </section>
    </main>
  );
}

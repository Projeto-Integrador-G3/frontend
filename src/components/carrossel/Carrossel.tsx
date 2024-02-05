import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide01 from "./Slide01";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";

function Carrossel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide01 />
        </SwiperSlide>

        <SwiperSlide>
          <img className="swiper-slide-img"
            src='https://i.imgur.com/3nozuZ7.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide-img"
            src='https://i.imgur.com/Gj208Wc.png'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Carrossel
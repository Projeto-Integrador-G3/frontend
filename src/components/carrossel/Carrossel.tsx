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
            src='https://ik.imagekit.io/zcioxdl6o/Banner_para_site.png_ex=65d38f16&is=65c11a16&hm=f4b3999cb1ff7b5787a793f2e1f3ddc7b27b7a29480e3fc6eef2c4703684f5cb&?updatedAt=1707153950424'
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
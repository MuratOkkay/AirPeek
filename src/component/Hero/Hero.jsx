import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Heroİtem from "./Heroİtem";
import Günesli from "../../assets/giff/sun.gif";
import Bulutlu from "../../assets/giff/clouds.gif";
import Karli from "../../assets/giff/snow.gif";
import Yamurli from "../../assets/giff/storm.gif";

const Hero = () => {
  const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];

  return (
    <Swiper
      grabCursor
      centeredSlides
      slidesPerView="3"
      speed={600}
      effect="coverflow"
      loop
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      {cities.map((city) => (
        <SwiperSlide className="mt-15 sm:mt-50 lg:mt-30" key={city}>
          <Heroİtem city={city} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

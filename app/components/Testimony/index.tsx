import React from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function Testimony() {
  return (
    <div className={style.testimonyContainer}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <iframe
            width="280"
            height="460"
            src="https://youtube.com/embed/DeXTHrPcFyE"
            frameborder="0"
            allowFullScreen
            title="Hen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="280"
            height="460"
            src="https://youtube.com/embed/FTaSDskgXG0?si=QyecptNC7QN2oqU-"
            frameborder="0"
            allowFullScreen
            title="Hen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RznNdAJ89N8?si=i1QpXoLQk_vduYaJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oho4e7LjlYI?si=R2e8WV4_M6BNDV43"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Yki5GeJR8ic?si=TIs2xSqHjwwjrnPT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

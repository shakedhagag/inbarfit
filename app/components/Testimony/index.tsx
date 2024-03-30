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
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiper}
      >
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://www.youtube.com/embed/l_tNqDJ07r0?si=1IK4opCarGJG-C_M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://youtube.com/embed/DeXTHrPcFyE"
            title="Hen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://youtube.com/embed/FTaSDskgXG0?si=QyecptNC7QN2oqU-"
            title="Hen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://www.youtube.com/embed/RznNdAJ89N8?si=i1QpXoLQk_vduYaJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://www.youtube.com/embed/oho4e7LjlYI?si=R2e8WV4_M6BNDV43"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            style={{ height: "100%", width: "100%", minHeight: "460px" }}
            src="https://www.youtube.com/embed/Yki5GeJR8ic?si=TIs2xSqHjwwjrnPT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import React from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Testimony() {
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className={style.testimonyContainer}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="!absolute w-full h-full"
      >
        <SwiperSlide className="min-w-80 h-[26rem] md:!h-auto md:min-h-96">
          <YouTube
            videoId="l_tNqDJ07r0"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full flex-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube
            videoId="DeXTHrPcFyE"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube
            videoId="FTaSDskgXG0"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube
            videoId="RznNdAJ89N8"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube
            videoId="oho4e7LjlYI"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube
            videoId="Yki5GeJR8ic"
            opts={opts}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

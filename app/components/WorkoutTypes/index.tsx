import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function WorkoutTypes() {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className={styles.workoutImage}>
            <p className={styles.positioned}>Kickbox</p>
            <Image
              src={"/images/me.jpeg"}
              alt="me"
              fill={true}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.workoutImage}>
            <p className={styles.positioned}>Kickbox</p>
            <Image
              src={"/images/me.jpeg"}
              alt="me"
              fill={true}
              className={styles.img}
              title="Kickbox"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.workoutImage}>
            <p className={styles.positioned}>Kickbox</p>
            <Image
              src={"/images/me.jpeg"}
              alt="me"
              fill={true}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.workoutImage}>
            <p className={styles.positioned}>Kickbox</p>
            <Image
              src={"/images/me.jpeg"}
              alt="me"
              fill={true}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

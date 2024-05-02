import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Card from "../ui/Card";
import { useIsMobile } from "@/utils/useIsMobile";

export default function WorkoutTypes() {
  const isMobile = useIsMobile();
  useEffect(() => {}, [isMobile]);
  return (
    <div className="flex w-100  justify-center p-2 min-h-[40vh]">
      <Card
        images={[
          "/images/workoutTypes/kickbox1.JPG",
          "/images/workoutTypes/kickbox2.JPG",
        ]}
        header="Kickbox"
        className="w-full"
      />
      <Card
        images={[
          "/images/workoutTypes/pilates1.JPG",
          "/images/workoutTypes/pilates2.JPG",
        ]}
        header="Pilates"
        className="w-full"
      />
      <Card
        images={[
          "/images/workoutTypes/functional1.JPG",
          "/images/workoutTypes/functional2.JPG",
        ]}
        header="Functional"
        className="w-full"
      />
      {!isMobile && (
        <Card
          images={[
            "/images/workoutTypes/yoga1.JPG",
            "/images/workoutTypes/yoga1.JPG",
          ]}
          header="Yoga"
          className="w-full"
        />
      )}
      {/* <Swiper
        slidesPerView={4}
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
              src={"/images/me.JPEG"}
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
              src={"/images/me.JPEG"}
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
              src={"/images/me.JPEG"}
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
              src={"/images/me.JPEG"}
              alt="me"
              fill={true}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

import React, { Suspense, useEffect } from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import workoutTypes from "@/utils/workoutTypes";
import Image from "next/image";
interface ImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

interface ImportedImage {
  default: ImageData;
}

type ImportedImages = ImportedImage[];

const workoutNames: { [key: string]: string } = {
  functional: "פונקציונלי",
  kickbox: "קיקבוקס",
  pilates: "פילאטיס",
  yoga: "יוגה",
};
const extractWorkoutName = (src: string): string => {
  for (const key in workoutNames) {
    if (src.includes(key)) {
      return workoutNames[key];
    }
  }
  return "Unknown";
};

export default function WorkoutTypes() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = Math.min(-width / 2 - 8, -window.innerWidth + width);
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 70,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width]);
  return (
    <motion.div
      ref={ref}
      style={{ x: xTranslation }}
      className=" max-w-screen absolute left-0 flex items-center gap-4 "
    >
      {[
        ...(workoutTypes as ImportedImages),
        ...(workoutTypes as ImportedImages),
      ].map((img: ImportedImage, i: number) => {
        const workoutName = extractWorkoutName(img.default.src);

        return (
          <Suspense key={i} fallback={<>Loading...</>}>
            <Card className=" place-self-center  w-56 h-56 m-2 group" key={i}>
              <Image
                alt="image"
                fill
                src={img.default.src}
                className="object-cover group-hover:opacity-75"
                placeholder="blur"
                blurDataURL={img.default.blurDataURL}
                loading="lazy"
                sizes="(min-width: 480px ) 50vw,
          (min-width: 728px) 33vw,
          (min-width: 976px) 25vw,
          100vw"
              />
              <CardHeader className=" justify-center text-lg ">
                <div className="backdrop-blur-[1px] h-10  bg-gradient-to-b from-white/5 to to-white/15 opacity-60 absolute inset-0"></div>
                <span className="font-bold text-xl text-pink-900 relative">
                  {workoutName}
                </span>
              </CardHeader>
            </Card>
          </Suspense>
        );
      })}
    </motion.div>
  );
}

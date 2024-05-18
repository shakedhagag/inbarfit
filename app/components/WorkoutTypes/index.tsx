import React, { Suspense, useEffect } from "react";
import { Card } from "@nextui-org/react";
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
            </Card>
          </Suspense>
        );
      })}
    </motion.div>
  );
}

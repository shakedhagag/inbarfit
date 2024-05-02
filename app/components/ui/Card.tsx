import Image from "next/image";
import React from "react";

interface CardProps {
  images?: Array<string>;
  header?: string;
  className?: string;
  text?: string;
}

export default function Card({ images, header, className, text }: CardProps) {
  return (
    <div className={`group relative block bg-black w-full ${className}`}>
      {images && (
        <>
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            src={images ? images[0] : "/images/workoutTypes/kickbox1.JPG"}
            alt=""
            fill={true}
            width={0}
            height={0}
            unoptimized
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            src={images ? images[1] : "/images/workoutTypes/kickbox1.JPG"}
            alt=""
            width={0}
            height={0}
            fill={true}
            unoptimized
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-100"
            style={{ width: "100%", height: "100%" }}
          />
        </>
      )}

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white sm:text-2xl">{header}</p>
        {text && <p className="text-white">{text}</p>}
      </div>
    </div>
  );
}

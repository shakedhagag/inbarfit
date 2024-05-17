import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import YouTube, { YouTubeProps } from "react-youtube";
import { useIsMobile } from "@/utils/useIsMobile";

export default function Intro() {
  const isMobile = useIsMobile();

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Card
      dir="rtl"
      className="bg-pink-600/25 flex flex-col md:flex-row justify-center"
    >
      <Card className="min-w-80 h-[26rem] md:h-auto md:min-h-96">
        <YouTube
          videoId="zapogwvOVhI"
          opts={opts}
          className="w-full h-full"
          iframeClassName="w-full h-full"
        />
      </Card>
      <Container className="flex flex-col">
        <CardHeader className="">
          <h3 className="text-3xl">
            מזמינה אותך להצטרף אליי לסטודיו בוטיק בסביון 🌸
          </h3>
        </CardHeader>
        <CardBody
          dir="rtl"
          className="min-h-64 items-center justify-center break-normal lg:min-h-96 text-right"
        >
          <p className="text-xl md:text-2xl tracking-wide leading-8 text-balance">
            נעים להכיר אני ענבר זיכלינסקי קואצ'רית לאורח חיים בריא ומאמנת כושר
            מוסמכת, והבעלים של חברת OBIZ. הקמתי את הסטודיו כדי לתת לכל אחת מכן
            בית לאימונים, מקום בו תרגישו בנוח להתאמן ותהנו להגיע לכל אימון.
          </p>
        </CardBody>
      </Container>
    </Card>
  );
}

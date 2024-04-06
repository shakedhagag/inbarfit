import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Container } from "../ui/Container";

export default function AboutPoints() {
  return (
    <Container
      className="flex items-center justify-center
     bg-[rgb(244,169,181)] w-full h-full rounded-[15px_60px_10px_60px] "
    >
      <div className="flex flex-col justify-center p-2 text-l mr-2">
        <h6 className="text-xl">
          אימוני כושר אישיים בקבוצות קטנות
          <br />
          <p>(3-4 מתאמנות בקבוצה)</p>
        </h6>
        <ul className="list-disc mr-6">
          <li>אימונים פונקציונליים שעוזרים בחיזוק/חיטוב</li>
          <li>גמישות בשעות האימונים</li>
          <li>יחס אישי ומקצועי</li>
          <li>אווירה תומכת</li>
          <li>נוף לבריכה</li>
        </ul>
      </div>
      <div className=" w-full h-full p-2 overflow-hidden">
        <Image
          src={"/images/InbarSquat.jpg"}
          alt="intro image"
          width={0}
          height={0}
          style={{ height: "100%", width: "100%" }}
          className="object-cover shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px_40px_10px_40px]"
          unoptimized
        />
      </div>
    </Container>
  );
}

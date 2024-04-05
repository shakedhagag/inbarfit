import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Container } from "../ui/Container";

export default function AboutPoints() {
  return (
    <Container className="flex items-center bg-[rgb(244,169,181)] w-full h-full justify-center rounded-[100px_15px_100px_10px]">
      <div className="flex flex-col justify-center p-2">
        <h6>מזמינה אותך להצטרף אליי לסטודיו בוטיק בסביון 🌸</h6>
        <ul>
          <li>אימונים פונקציונליים שעוזרים בחיזוק/חיטוב</li>
          <li>גמישות בשעות האימונים</li>
          <li>יחס אישי ומקצועי</li>
          <li>אווירה תומכת</li>
          <li>נוף לבריכה</li>
        </ul>
      </div>
      <div className="relative overflow-hidden rounded-[0_40px_0_40px] m-[2%] md:w-[80%] md:h-[50vh]">
        <Image
          src={"/images/InbarSquat.jpg"}
          alt="intro image"
          width={0}
          height={0}
          style={{ height: "90%", width: "90%" }}
          className="object-cover object-center rounded-[0_40px_0_40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] m-[2%] md:w-[80%] md:h-[50vh]"
          unoptimized
        />
      </div>
    </Container>
  );
}

import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Container } from "../ui/Container";

export default function Intro() {
  return (
    <div className="flex items-center bg-[rgb(244,169,181)] h-[40vh] w-full  rounded-[15px_60px_10px_60px] whitespace-normal md:flex-col sm:flex-row md:h-auto p-4">
      <div className="relative w-full h-[90%] overflow-hidden rounded-[0_40px_0_40px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <iframe
          className="object-cover"
          style={{ width: "100%", height: "100%" }}
          src="https://youtube.com/embed/zapogwvOVhI?si=o79mt0Jp9I8Nflih"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media;  picture-in-picture"
        ></iframe>
      </div>
      <div className="flex flex-col items-start direction-rtl md:items-start p-2 text-pretty text-xl">
        {/* <p>
          סטודיו בוטיק המותאם במיוחד לנשים, פה תפגשי באימוני כושר אישיים מותאמים
          אישית ובקבוצות קטנות.
        </p>
        <p>אצלי תרגישי שמתייחסים אליך באופן אישי ומקדמים את המטרות שלך.</p> */}
        {/* <p>
          אנחנו נדאג שכל אימון יהיה מאתגר עבורך, מגוון ומותאם! אנחנו כאן כדי
          לקדם את הגרסה הטובה ביותר שלך!
        </p> */}
        <h6>מזמינה אותך להצטרף אליי לסטודיו בוטיק בסביון 🌸</h6>
        <div>
          <ul>
            <li>כאן נתייחס אליך באופן אישי ונקדם את המטרות שלך</li>
            <li>כאן תוכלי לגלות את ההנאה האמיתית באימונים</li>
            <li>כאן תצאי חטובה וחזקה יותר</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

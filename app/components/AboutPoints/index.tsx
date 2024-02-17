import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function AboutPoints() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.info}>
        <h6>מזמינה אותך להצטרף אליי לסטודיו בוטיק בסביון 🌸</h6>
        <ul>
          <li>אימונים פונקציונליים שעוזרים בחיזוק/חיטוב</li>
          <li>גמישות בשעות האימונים</li>
          <li>יחס אישי ומקצועי</li>
          <li>אווירה תומכת</li>
          <li>נוף לבריכה</li>
        </ul>
      </div>
      <div className={styles.ImgContainer}>
        <Image
          src={"/images/InbarSquat.jpg"}
          alt="intro image"
          fill={true}
          className={styles.img}
        />
      </div>
    </div>
  );
}

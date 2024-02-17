import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.ImgContainer}>
        <Image
          src={"/images/dumbell.jpg"}
          alt="intro image"
          fill={true}
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <p>
          סטודיו בוטיק המותאם במיוחד לנשים, פה תפגשי באימוני כושר אישיים מותאמים
          אישית ובקבוצות קטנות.
        </p>
        <p>
          אצלי תרגישי שמתייחסים אליך באופן אישי ומקדמים את המטרות שלך.
          {`\n`}
        </p>
        <p>
          אנחנו נדאג שכל אימון יהיה מאתגר עבורך, מגוון ומותאם! אנחנו כאן כדי
          לקדם את הגרסה הטובה ביותר שלך!
        </p>
      </div>
    </div>
  );
}

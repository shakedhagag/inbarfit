import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.ImgContainer}>
        <iframe
          className={styles.img}
          style={{ width: "100%", height: "100%" }}
          src="https://youtube.com/embed/zapogwvOVhI?si=o79mt0Jp9I8Nflih"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media;  picture-in-picture"
        ></iframe>
      </div>
      <div className={styles.info}>
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
        <div className={styles.list}>
          <ul>
            <li>
              המקום בו תגלי את ההנאה האמיתית באימון ותחכי לכל אימון בצפייה גדולה
            </li>
            <li>המקום שיודע איך להפוך אותך חטובה וחזקה יותר</li>
            <li>המקום שיתן לך פתרון, סוף סוף, להתמיד באימונים !</li>
            <li>
              המקום שתרגישי שמתייחסים אליך באופן אישי ומקדמים את המטרות שלך
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

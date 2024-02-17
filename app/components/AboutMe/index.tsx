import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CurlyBracket } from "@/public/icons";

export default function AboutMe() {
  return (
    <div className={styles.cvontainer}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeRight}>
          <div className={styles.curlyP}>
            <span className={styles.curlys}>
              <CurlyBracket />
            </span>
            <p>
              נעים להכיר אני ענבר זיכלינסקי קואצרית לאורח חיים בריא ומאמנת כושר
              מוסמכת לאימונים פונקציונלים וסטודיו, בוגרת קמפוס שיאים (מרכז
              הספורט של אוניברסיטת תל אביב) כיום אני בעלת סטודיו בוטיק בסביון
              המיועד לאימוני כושר פונקציונלים והבעלים של חברת OBIZ.
            </p>
          </div>
          <div className={styles.curlyP}>
            <span className={styles.curlys}>
              <CurlyBracket />
            </span>
            <p>
              דרך OBIZ והסטודיו אני עוזרת לאנשים, חברות וארגונים להטמיע אורח
              חיים בריא ולשפר את איכות החיים שלהם. אני מבצעת זאת דרך הרצאות,
              סדנאות וליווי אישי וקבוצתי. עזרתי למאות אנשים שניסו דיאטות שונות
              שלא צלחו לרדת במשקל וללמוד איך לשמור על זה אחת ולסגל שגרה של אורח
              חיים בריא.
            </p>
          </div>
          <div className={styles.curlyP}>
            <span className={styles.curlys}>
              <CurlyBracket />
            </span>
            <span>
              <p>
                אני מאמינה שאימונים זה משהו שהוא must to have ולא nice to have
                כלומר כל אחת ואחת מכן צריכה להתאמן, ובשביל להצליח להתמיד
                באימונים חייב 3 דברים עיקרים:
              </p>
              <ol>
                <li>שזה יהיה קרוב לבית</li>
                <li>שתרגישי שמתייחסים אליך והאימון מותאם אליך ולמטרות שלך</li>
                <li>שאת תהני באימון ותיהיה אווירה טובה</li>
              </ol>
            </span>
          </div>
        </div>
        <div className={styles.aboutMeLeft}>
          <Image
            src={"/images/me.jpeg"}
            alt="me"
            fill={true}
            className={styles.img}
          />
          <p className={styles.waitingForU}>מחכה לכן, ענבר ❤️</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

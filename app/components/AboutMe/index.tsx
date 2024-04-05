import React from "react";
import { Container } from "../ui/Container";
import Card from "../ui/Card";

export default function AboutMe() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex-auto">
          <Container>
            <p>
              נעים להכיר אני ענבר זיכלינסקי קואצרית לאורח חיים בריא ומאמנת כושר
              מוסמכת לאימונים פונקציונלים וסטודיו, בוגרת קמפוס שיאים (מרכז
              הספורט של אוניברסיטת תל אביב) כיום אני בעלת סטודיו בוטיק בסביון
              המיועד לאימוני כושר פונקציונלים והבעלים של חברת OBIZ.
            </p>
            <br />
            <p>
              דרך OBIZ והסטודיו אני עוזרת לאנשים, חברות וארגונים להטמיע אורח
              חיים בריא ולשפר את איכות החיים שלהם. אני מבצעת זאת דרך הרצאות,
              סדנאות וליווי אישי וקבוצתי. עזרתי למאות אנשים שניסו דיאטות שונות
              שלא צלחו לרדת במשקל וללמוד איך לשמור על זה אחת ולסגל שגרה של אורח
              חיים בריא.
            </p>
            <br />

            <p>
              אני מאמינה שאימונים זה משהו שהוא must to have ולא nice to have
              כלומר כל אחת ואחת מכן צריכה להתאמן, ובשביל להצליח להתמיד באימונים
              חייב 3 דברים עיקרים:
            </p>
            <ol>
              <li>שזה יהיה קרוב לבית</li>
              <li>שתרגישי שמתייחסים אליך והאימון מותאם אליך ולמטרות שלך</li>
              <li>שאת תהני באימון ותיהיה אווירה טובה</li>
            </ol>
          </Container>
        </div>
        <Card images={["/images/aboutMe.jpg", "/images/aboutMe2.JPG"]} />
        <div className="grid grid-cols-subgrid col-span-2">
          <Container className="relative mt-2 col-start-2">
            <p>מחכה לכן, ענבר ❤️</p>
          </Container>
        </div>
      </div>
    </div>
  );
}

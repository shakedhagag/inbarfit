import React from "react";
import { Container } from "../ui/Container";
import Card from "../ui/Card";

export default function AboutMe() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-2 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm">
          <Container>
            <p className="text-gray-800 mb-4 text-lg md:text-xl">
              נעים להכיר אני ענבר זיכלינסקי קואצרית לאורח חיים בריא ומאמנת כושר
              מוסמכת לאימונים פונקציונליים וסטודיו, בוגרת קמפוס שיאים (מרכז
              הספורט של אוניברסיטת תל אביב) כיום אני בעלת סטודיו בוטיק בסביון
              המיועד לאימוני כושר פונקציונלים והבעלים של חברת OBIZ.
            </p>
            <p className="text-gray-800 mb-4 text-lg md:text-xl">
              דרך OBIZ והסטודיו אני עוזרת לאנשים, חברות וארגונים להטמיע אורח
              חיים בריא ולשפר את איכות החיים שלהם. אני מבצעת זאת דרך הרצאות,
              סדנאות וליווי אישי וקבוצתי. עזרתי למאות אנשים שניסו דיאטות שונות
              שלא צלחו לרדת במשקל וללמוד איך לשמור על זה אחת ולסגל שגרה של אורח
              חיים בריא.
            </p>
            <p className="text-gray-800 mb-4 text-lg md:text-xl">
              אני מאמינה שאימונים זה משהו שהוא must to have ולא nice to have
              כלומר כל אחת ואחת מכן צריכה להתאמן, ובשביל להצליח להתמיד באימונים
              חייב 3 דברים עיקרים:
            </p>
            <ol className="text-gray-800 list-decimal mr-4 text-lg md:text-xl">
              <li>שזה יהיה קרוב לבית</li>
              <li>שתרגישי שמתייחסים אליך והאימון מותאם אליך ולמטרות שלך</li>
              <li>שאת תהני באימון ותיהיה אווירה טובה</li>
            </ol>
          </Container>
        </div>
        <Card
          className="min-h-screen h-full"
          images={["/images/aboutMe.jpg", "/images/aboutMe2.JPG"]}
        />
      </div>
      <div className="mt-2 p-4 text-center text-xl md:text-2xl">
        <span>מחכה לכן, ענבר ❤️</span>
      </div>
    </div>
  );
}

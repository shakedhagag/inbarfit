import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Intro() {
  return (
    <div className="">
      <Card dir="rtl" className="bg-pink-600/25 ">
        <div className="flex flex-col md:flex-row">
          <Card className="lg:min-h-80">
            <iframe
              className="object-cover"
              style={{ width: "100%", height: "100%" }}
              src="https://youtube.com/embed/zapogwvOVhI?si=o79mt0Jp9I8Nflih"
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media;  picture-in-picture"
            ></iframe>
          </Card>
          {/* <p>
          סטודיו בוטיק המותאם במיוחד לנשים, פה תפגשי באימוני כושר אישיים מותאמים
          אישית ובקבוצות קטנות.
        </p>
        <p>אצלי תרגישי שמתייחסים אליך באופן אישי ומקדמים את המטרות שלך.</p> */}
          {/* <p>
          אנחנו נדאג שכל אימון יהיה מאתגר עבורך, מגוון ומותאם! אנחנו כאן כדי
          לקדם את הגרסה הטובה ביותר שלך!
        </p> */}
          <div>
            <CardHeader className="py-4 ">
              <h3 className="text-2xl">
                מזמינה אותך להצטרף אליי לסטודיו בוטיק בסביון 🌸
              </h3>
            </CardHeader>
            <CardBody dir="rtl" className=" px-8 text-l text-right">
              <div>
                <ul className="list-disc">
                  <li>כאן נתייחס אליך באופן אישי ונקדם את המטרות שלך</li>
                  <li>כאן תוכלי לגלות את ההנאה האמיתית באימונים</li>
                  <li>כאן תצאי חטובה וחזקה יותר</li>
                </ul>
              </div>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  );
}

import React from "react";
import aboutPhoto from "@/public/images/pointsbg.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
export default function AboutPoints() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className=" border-none h-[300px] lg:h-[500px]"
    >
      <CardFooter className="justify-center flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 px-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <h4 className="text-white font-medium text-large">
          אימוני כושר אישיים בקבוצות קטנות
        </h4>
        <p className="text-tiny text-white/60 uppercase font-bold">
          (3-4 מתאמנות בקבוצה)
        </p>
        <ul className=" top-4 left-4 p-4 text-white list-disc space-y-2 ">
          <li className="text-shadow">
            אימונים פונקציונליים שעוזרים בחיזוק/חיטוב
          </li>
          <li className="text-shadow">גמישות בשעות האימונים</li>
          <li className="text-shadow">יחס אישי ומקצועי</li>
          <li className="text-shadow">אווירה תומכת</li>
          <li className="text-shadow">נוף לבריכה</li>
        </ul>
      </CardFooter>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={aboutPhoto.src}
      />
    </Card>
  );
}

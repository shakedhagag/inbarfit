import React from "react";
import aboutPhoto from "@/public/images/InbarSquat.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
export default function AboutPoints() {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute  z-10 top-1 flex-col !items-start">
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
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={aboutPhoto.src}
      />
    </Card>
  );
}

import React from "react";
import { Container } from "../ui/Container";
import {
  Card,
  Badge,
  CardBody,
  Button,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";

export const Offers = () => {
  return (
    <Container className="flex flex-col gap-4 items-center mt-16">
      <p className="text-5xl mb-4">אז מה אני מציעה?</p>
      <Card className="flex w-full items-center p-4">
        <CardBody className="flex-col md:flex-row justify-evenly gap-4">
          <div className="flex flex-col justify-between items-center gap-8 ">
            <Badge
              isOneChar
              content={<CheckIcon />}
              color="success"
              placement="bottom-right"
            >
              <p className="text-4xl text-center">אימונים אישיים</p>
            </Badge>
            {/* <ul className="text-gray-700 text-center space-y-2 marker:text-indigo-600"> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>אימון אישי בו נעבוד על הקשיים ועל התרומה שלנו לחברה</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
          <div className="flex flex-col justify-between items-center  gap-4">
            <Badge
              isOneChar
              content={<CheckIcon />}
              color="success"
              placement="bottom-right"
            >
              <p className="text-center text-4xl">ליווי לירידה במשקל</p>
            </Badge>
            {/* <ul className="text-gray-700 text-center space-y-2 marker:text-indigo-600"> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>אימון אישי בו נעבוד על הקשיים ועל התרומה שלנו לחברה</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
          <div className="flex flex-col justify-between items-center  gap-8">
            <Badge
              isOneChar
              content={<CheckIcon />}
              color="success"
              placement="bottom-right"
            >
              <p className="text-4xl text-center">קואצ׳ינג</p>
            </Badge>
            {/* <ul className="text-gray-700 text-center space-y-2 marker:text-indigo-600"> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>אימון אישי בו נעבוד על הקשיים ועל התרומה שלנו לחברה</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/*   <li className="flex items-center space-x-3 rtl:space-x-reverse"> */}
            {/*     <svg */}
            {/*       className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" */}
            {/*       aria-hidden="true" */}
            {/*       xmlns="http://www.w3.org/2000/svg" */}
            {/*       fill="none" */}
            {/*       viewBox="0 0 16 12" */}
            {/*     > */}
            {/*       <path */}
            {/*         stroke="currentColor" */}
            {/*         stroke-linecap="round" */}
            {/*         stroke-linejoin="round" */}
            {/*         stroke-width="2" */}
            {/*         d="M1 5.917 5.724 10.5 15 1.5" */}
            {/*       /> */}
            {/*     </svg> */}
            {/*     <span>למידת מיומנות חדשה, כמו יצירת כלים קרמיים או קידוד</span> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
        </CardBody>
        <CardFooter className="justify-center">
          <Button color="success">
            <Link className="" href="https://tinyurl.com/58jubfw8">
              <span className="text-sm text-white font-medium">
                לפרטים נוספים
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

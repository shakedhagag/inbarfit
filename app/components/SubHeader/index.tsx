import React from "react";
import styles from "./style.module.scss";

type SubHeaderProps = {
  title: string;
  id?: string;
};

export default function SubHeader({ title, id }: SubHeaderProps) {
  return (
    <div className="flex justify-center mt-2 " id={id ? id : ""}>
      <h1 className="text-pink-gradient text-center mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">
        {title}
      </h1>
    </div>
  );
}

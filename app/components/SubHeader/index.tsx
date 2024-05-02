import React from "react";
import styles from "./style.module.scss";

type SubHeaderProps = {
  title: string;
  id?: string;
};

export default function SubHeader({ title, id }: SubHeaderProps) {
  return (
    <div className="flex justify-center text-pink-800" id={id ? id : ""}>
      <h3 className="text-xl md:text-3xl  p-2">{title}</h3>
    </div>
  );
}

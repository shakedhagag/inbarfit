import React from "react";
import styles from "./style.module.scss";

type SubHeaderProps = {
  title: string;
  id?: string;
};

export default function SubHeader({ title, id }: SubHeaderProps) {
  return (
    <div className={styles.subHeaderStyle} id={id ? id : ""}>
      <h3>{title}</h3>
    </div>
  );
}

import React from "react";
import styles from "./style.module.scss";

type SubHeaderProps = {
  title: string;
};

export default function SubHeader({ title }: SubHeaderProps) {
  return (
    <div className={styles.subHeaderStyle}>
      <h3>{title}</h3>
    </div>
  );
}

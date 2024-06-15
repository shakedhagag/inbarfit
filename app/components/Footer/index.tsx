import React from "react";
import styles from "./styles.module.scss";
import SocialIcons from "../SocialIcons";
import SocialRow from "./SocialRow";
import GetInTouch from "./GetInTouch";

export default function Footer() {
  return (
    <footer className="bg-pink-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <GetInTouch />

        <SocialRow />
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/public/icons";

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <button className={styles.icon}>
        <Link href="https://www.instagram.com/inbarfitstudio/">
          <InstagramIcon />
        </Link>
      </button>
      <button className={styles.icon}>
        <Link href="https://tinyurl.com/58jubfw8">
          <WhatsAppIcon />
        </Link>
      </button>
      <button className={styles.icon}>
        <Link href="https://www.linkedin.com/in/inbar-zichlinskey/">
          <LinkedInIcon />
        </Link>
      </button>
      <button className={styles.icon}>
        <FacebookIcon />
      </button>
    </div>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftFooter}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.808070054811!2d34.873534474735266!3d32.04738612091705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d359b75c33435%3A0xfec0239ed0c895f!2sHaShikma%20St%2012%2C%20Savyon!5e0!3m2!1sen!2sil!4v1710610286228!5m2!1sen!2sil"
          width="280"
          height="150"
          frameBorder="0"
          aria-hidden="false"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          tabIndex={0}
        />
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.leftSide}>
          <p>טלפונים וכתובות</p>
          <p>טלפון: 054-2595888</p>
        </div>

        <div className={styles.rightSide}>
          <p>שעות פתיחה:</p>
          <p>א׳ - ה׳ בין השעות:</p>
          <p>08:00 - 21:00</p>
          <p>ו׳ בין השעות:</p>
          <p>08:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
}

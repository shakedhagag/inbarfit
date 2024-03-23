"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import { DumbellIcon } from "@/public/icons";
import SocialIcons from "@/app/components/SocialIcons";
import Intro from "./components/Intro";
import AboutPoints from "./components/AboutPoints";
import SubHeader from "./components/SubHeader";
import AboutMe from "./components/AboutMe";
import WorkoutTypes from "./components/WorkoutTypes";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className={styles.pageLayout}>
      <header>
        <div className={styles.backgroundContainer}>
          <div className={styles.titleWrapper}>
            {/* <DumbellIcon className={styles.icon} /> */}
            <h1 className={styles.fancy}>INBAR FIT</h1>
            <h2>STUDIO</h2>
            <div className={styles.subTitle}>
              <p>סטודיו בוטיק לאימוני נשים בסביון</p>
            </div>
            <div className={styles.contactButton}>
              <button>לפרטים נוספים</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.mainBody}>
          <SubHeader title="ברוכה הבאה" />
          <Intro />
          <SubHeader title="מידע כללי על הסטודיו" />
          <AboutPoints />
          <SubHeader title="קצת עליי" />
          <AboutMe />
          <SubHeader title="סוגי אימונים" />
          <WorkoutTypes />
          <SubHeader title="מתאמנות מספרות" />
          <Testimony />
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import Intro from "./components/Intro";
import AboutPoints from "./components/AboutPoints";
import SubHeader from "./components/SubHeader";
import AboutMe from "./components/AboutMe";
import WorkoutTypes from "./components/WorkoutTypes";
import Footer from "./components/Footer";
import Link from "next/link";
import { Offers } from "./components/Offers/Offers";
import Screenshots from "./components/Screenshots/Screenshots";
import Testimony from "./components/Testimony";
export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <div className={styles.pageLayout}>
      <header>
        <div className={styles.backgroundContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.fancy}>INBAR FIT</h1>
            <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <h2>STUDIO</h2>
              <div className={styles.subTitle}>
                <p>סטודיו בוטיק לאימוני נשים בסביון</p>
              </div>
            </div>
            <div className={styles.contactButton}>
              <Link href="https://tinyurl.com/58jubfw8">
                <button>לתיאום אימון היכרות</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-[100vw] ">
        <SubHeader title="ברוכה הבאה למקום האימונים שלך" />
        <Intro />
        <div className={styles.tesitmony} id="testimony">
          <SubHeader title="מתאמנות מספרות" />
          <Testimony />
        </div>
        <div className="relative h-[28rem] overflow-x-hidden max-w-screen py-8">
          <SubHeader title="תוצאות" />
          <Screenshots />
        </div>
        <SubHeader title="מידע כללי על הסטודיו" />
        <AboutPoints />
        <div className="workoutTypes relative h-96 overflow-x-hidden max-w-screen py-8">
          <SubHeader title="סוגי אימונים" />
          <WorkoutTypes />
        </div>
        <div className=" flex flex-col justify-between">
          <div className="mt-14">
            <SubHeader title="אז מה אני מציעה?" />
            <Offers />
          </div>
        </div>
        <div id="aboutMe">
          <SubHeader title="קצת עליי" />
          <AboutMe />
        </div>
      </main>
      <div className={styles.footerCont}>
        <Footer />
      </div>
    </div>
  );
}

"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import { Nav, navItems } from "./Nav";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialIcons from "../SocialIcons";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const burger = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 50,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsMenuActive(false);
        },
      },
      rotate: 360,
    });
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div
        ref={burger}
        onClick={() => {
          setIsMenuActive(!isMenuActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${
            isMenuActive ? styles.burgerActive : ""
          }`}
        ></div>
      </div>
      <div className="flex space-x-6 text-white w-full justify-between">
        <div className="flex justify-around lg:scale-100 md:scale-100 sm:scale-0 ">
          {[...navItems].reverse().map((data, index) => {
            return (
              <div key={index} className="m-2">
                <a>{data.title} </a>
                <div className={styles.indicator}></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-2">
        <SocialIcons />
      </div>
      <AnimatePresence mode="wait">{isMenuActive && <Nav />}</AnimatePresence>
    </div>
  );
}

"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styles from "./style.module.scss";
import { Nav, navItems } from "./Nav";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialIcons from "../SocialIcons";
import Link from "next/link";
import { useIsMobile } from "@/utils/useIsMobile";
import Gallery from "../Gallery/Gallery";

export default function Header() {
  const isMobile = useIsMobile();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const burger = useRef(null);
  const [isOpenGallery, setIsOpenGallery] = useState(false);

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

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuActive]);

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
      {!isMobile && (
        <div className="flex space-x-6 text-white w-full justify-between drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <div className="flex justify-around scale-0  md:scale-100  z-100 ">
            {[...navItems].map((data, index) => {
              return (
                <div className="relative group" key={index}>
                  <div className="hover-target p-4 hover:cursor-pointer hover:text-[#ff7999]">
                    {data.href === "/gallery" ? (
                      <button onClick={() => setIsOpenGallery(true)}>
                        גלריה
                      </button>
                    ) : (
                      <Link href={data.href} className="hover:text-[#ff7999]">
                        {data.title}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="absolute left-0 ml-2 md:mt-2">
        <SocialIcons />
      </div>
      <AnimatePresence mode="wait">{isMenuActive && <Nav />}</AnimatePresence>
      <Gallery isOpen={isOpenGallery} onClose={() => setIsOpenGallery(false)} />
    </div>
  );
}

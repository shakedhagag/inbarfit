import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "./Link";
import { menuSlide } from "../anim";
import Curve from "./Curve";
import Footer from "./Footer";

export const navItems = [
  { title: "דף הבית", href: "/" },
  { title: "קצת עליי", href: "/about" },
  { title: "גלריה", href: "/gallery" },
  { title: "צור קשר", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>ניווט</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <div key={index}>
                <Link
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></Link>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}

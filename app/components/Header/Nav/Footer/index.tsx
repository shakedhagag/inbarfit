import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://tinyurl.com/58jubfw8">WhatsApp</Link>
      <Link href="https://www.instagram.com/inbarfitstudio/">Instagram</Link>
      <Link href="https://www.linkedin.com/in/inbar-zichlinskey/">
        LinkedIn
      </Link>
    </div>
  );
}

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
    <div className="pr-2 mt-2 sm:flex sm:items-center sm:justify-between">
      <ul className="flex justify-center gap-6 sm:justify-end">
        <li>
          <button className="text-teal-700 transition hover:text-pink-700/75">
            <Link href="https://www.facebook.com/inbarzichlinskey">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </Link>
          </button>
        </li>

        <li>
          <button className="text-teal-700 transition hover:text-pink-700/75">
            <Link href="https://www.instagram.com/inbarzichlinskey/">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </Link>
          </button>
        </li>

        <li>
          <button className="text-teal-700 transition hover:text-pink-700/75">
            <Link href="https://tinyurl.com/58jubfw8">
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon />
            </Link>
          </button>
        </li>
        <li>
          <button className="text-teal-700 transition hover:text-pink-700/75">
            <Link href="https://www.linkedin.com/in/inbar-zichlinskey/">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

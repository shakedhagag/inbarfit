import React from "react";
import Link from "next/link";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/public/icons";
import { Image } from "@nextui-org/react";

function SocialRow() {
  return (
    <div className="mt-16">
      <div className="mt-16 sm:flex sm:items-end sm:justify-between">
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
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <Image src="/images/Logo.png" />
        </div>

        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
          כל הזכויות שמורות &copy;
        </p>
      </div>
    </div>
  );
}

export default SocialRow;

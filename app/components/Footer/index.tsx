import React from "react";
import styles from "./styles.module.scss";
import SocialIcons from "../SocialIcons";
import SocialRow from "./SocialRow";
import GetInTouch from "./GetInTouch";

export default function Footer() {
  return (
    <footer className="bg-pink-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <GetInTouch />

        {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Company History
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Meet the Team{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Employee Handbook
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Our Services</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Web Design{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Marketing{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Google Ads{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Resources</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Online Guides{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Conference Notes
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Forum{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Downloads{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  FAQs{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Support{" "}
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <SocialRow />
      </div>
    </footer>
  );
}

// <div className={styles.footerContainer}>
//   <div className={styles.leftFooter}>
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.808070054811!2d34.873534474735266!3d32.04738612091705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d359b75c33435%3A0xfec0239ed0c895f!2sHaShikma%20St%2012%2C%20Savyon!5e0!3m2!1sen!2sil!4v1710610286228!5m2!1sen!2sil"
//       width="250"
//       height="130"
//       frameBorder="0"
//       aria-hidden="false"
//       referrerPolicy="no-referrer-when-downgrade"
//       loading="lazy"
//       tabIndex={0}
//     />
//   </div>
//   <div className={styles.rightFooter}>
//     <div className={styles.leftSide}>
//       <p>טלפונים וכתובות</p>
//       <p>טלפון: 054-2595888</p>
//     </div>

//     <div className={styles.rightSide}>
//       <p>שעות פתיחה:</p>
//       <p>א׳ - ה׳ בין השעות:</p>
//       <p>08:00 - 21:00</p>
//       <p>ו׳ בין השעות:</p>
//       <p>08:00 - 17:00</p>
//     </div>
//   </div>
// </div>

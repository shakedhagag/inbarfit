import React from "react";

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-pink-300 p-6 shadow-lg sm:flex-row sm:justify-between text-right">
      <strong className="text-xl text-white sm:text-xl rtl">
        בואי לאימון נסיון ופגישת ייעוץ!
      </strong>
      <a
        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-pink-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="#"
      >
        <span className="text-sm font-medium"> למה את מחכה? </span>

        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

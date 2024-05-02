import type { Metadata } from "next";
import { Inter, Heebo, Noto_Sans_Hebrew } from "next/font/google";
import Header from "./components/Header";
import "./globals.scss";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
const heebo = Heebo({ subsets: ["hebrew"], weight: "500" });
const noto = Noto_Sans_Hebrew({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "InbarFit Studio",
  description: "Savyon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={(inter.className, noto.className)}>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

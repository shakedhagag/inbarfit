import type { Metadata } from "next";
import { Inter, Heebo, Noto_Sans_Hebrew, Varela_Round } from "next/font/google";
import Header from "./components/Header";
import "./globals.scss";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_Hebrew({ subsets: ["hebrew"] });
const varela = Varela_Round({ weight: "400", subsets: ["hebrew"] });

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
      <body className={varela.className}>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

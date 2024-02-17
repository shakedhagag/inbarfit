import type { Metadata } from "next";
import { Inter, Heebo, Noto_Sans_Hebrew } from "next/font/google";
import Header from "./components/Header";
import "./globals.scss";

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
    <html lang="en">
      <body className={(inter.className, noto.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}

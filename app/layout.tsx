import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "金刚般若波罗蜜经",
  description:
    "此经是释迦牟尼佛在祗树给孤独园为须菩提尊者所宣说的经典。佛在此阐述一切法空，指出一切事物本体皆具空性，若要成就无上正等正觉(即阿耨多罗三藐三菩提)，就要破除四相，破除我执、法执，乃至一切执著，应在“不执著一切”的基础下生起菩提心，广度众生。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

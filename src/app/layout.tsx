import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/layouts/editor/editor.css";

import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Workin by Duluin Help Center - Panduan Pengguna",
  description:
    "Pusat Bantuan Workin by Duluin Help Center - Temukan artikel panduan sesuai kebutuhan Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("theme-3", "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import CursorFollow from "./library/cursor-follow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varun Popli",
  description: "Varun Popli is a software engineer who builds beautiful, interactive, and data-driven web experiences that bring ideas to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <CursorFollow />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 selection:bg-rose-300 selection:text-rose-900">
          {children}
        </div>
      </body>
    </html>
  );
}

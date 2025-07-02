import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Kevin Lee - Full Stack Developer",
  description: "Computer Science graduate full stack, hybrid mobile, and iOS developer.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

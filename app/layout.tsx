import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gigi-DK Nails",
  description: "Sharing, saling and ordering Nails app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VSM School, Narora | Empowering Minds, Shaping Futures",
  description: "VSM School, Narora - A premier educational institution committed to excellence in academics, sports, and character development. Admissions open for 2026-27.",
  keywords: "VSM School, Narora, School Narora, Education Uttar Pradesh, CBSE School Narora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-zinc-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

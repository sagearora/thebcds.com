import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { anniversary } from '@/data/anniversary';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BCDS - Brant County Dental Society",
  description: `Celebrating ${anniversary.years} years of the Brant County Dental Society (${anniversary.founded}–${anniversary.year}). Connecting dental professionals and advancing dentistry across Ontario.`,
  keywords: ["dental", "dentistry", "ontario", "community", "professional development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

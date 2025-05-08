import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nova_Square } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const novaSquare = Nova_Square({
  variable: "--font-nova-square",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connor Holmes | Software Engineer",
  description: "Portfolio of Connor Holmes, Software Engineer based in Perth, Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${novaSquare.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

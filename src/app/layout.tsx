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
  metadataBase: new URL("https://connorholmes.software"),
  title: "Connor Holmes | Software Engineer",
  description:
    "Portfolio of Connor Holmes, Software Engineer based in Perth, Australia",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Connor Holmes | Software Engineer",
    description:
      "Portfolio of Connor Holmes, Software Engineer based in Perth, Australia",
    url: "https://connorholmes.software",
    siteName: "Connor Holmes Software",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Connor Holmes Software",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Connor Holmes | Software Engineer",
    description:
      "Portfolio of Connor Holmes, Software Engineer based in Perth, Australia",
  },
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

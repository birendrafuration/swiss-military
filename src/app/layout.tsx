import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "http://localhost:3000/logo.png",
  },
  title: "Swiss Military",

  description: "Swiss Military",

  openGraph: {
    title: "Swiss Military",

    description: "Swiss Military",
    images: [
      {
        url: "http://localhost:3000/logo.png",
        width: 100,
        height: 50,
        alt: "Swiss Military",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

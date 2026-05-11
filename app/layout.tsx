import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ReelHook — Hook & Title Optimizer for Short-Form Video Creators",
  description: "Generate 10 scroll-stopping hooks and 5 title variants for TikTok and YouTube Shorts, scored by predicted watch-through impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-background text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
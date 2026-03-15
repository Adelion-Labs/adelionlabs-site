import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Adelion Labs | Cloud Infrastructure & AI Integration",
  description:
    "Adelion Labs helps organizations modernize systems, improve digital experience, and integrate AI into business workflows.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Adelion Labs",
    description:
      "Cloud infrastructure, AI integration, and modern digital systems.",
    url: "https://adelionlabs.com",
    siteName: "Adelion Labs",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  }

};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

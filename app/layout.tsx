import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "보험스토어 | BohumStore",
  description: "보험 비교, 상담, 연금보험 안내 플랫폼",
  openGraph: {
    title: "보험스토어 | BohumStore",
    description: "보험 비교, 상담, 연금보험 안내 플랫폼",
    url: "https://bohumstore.net",
    images: [
      {
        url: "https://bohumstore.net/og-logo.png",
        width: 1200,
        height: 630,
        alt: "보험스토어 로고",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

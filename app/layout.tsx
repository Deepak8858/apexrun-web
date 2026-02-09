import type { Metadata } from "next";
import { Inter, Roboto_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApexRun — The AI-Native Performance Partner",
  description:
    "ApexRun bridges the gap between social running and AI coaching with a hybrid Flutter + Go + PostGIS architecture. A technical showcase featuring Claude-inspired warm aesthetics.",
  keywords: ["ApexRun", "AI Running", "Flutter", "Go", "PostGIS", "Gemini", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoCondensed.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

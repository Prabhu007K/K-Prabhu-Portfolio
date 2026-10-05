import { AppProviders } from "@/components/AppProviders";
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
  title: "K Prabhu | Portfolio",
  description:
    "Interactive portfolio of K Prabhu — developer, projects, experience, and contact.",
  openGraph: {
    title: "K Prabhu | Portfolio",
    description: "Interactive personal portfolio website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen min-h-[100svh] antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

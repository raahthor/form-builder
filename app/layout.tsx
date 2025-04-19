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
  title: "Form Builder",
  description: "A form builder web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` relative min-h-screen  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[url('/Sprinkle.svg')] bg-cover bg-no-repeat opacity-30"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koderea - AI Assurance & Validation",
  description: "Koderea helps organizations adopt AI with evidence, clarity, and local context.",
  icons: {
    icon: "/brand/icon-logo-koderea.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rethinkSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-slate-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

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
  metadataBase: new URL("https://www.koderea.id"),
  title: "Koderea - AI Assurance & Validation",
  description: "Koderea helps organizations adopt AI with evidence, clarity, and local context.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Koderea - AI Assurance & Validation",
    description:
      "Koderea helps organizations adopt AI with evidence, clarity, and local context.",
    url: "/",
    siteName: "Koderea",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koderea - AI Assurance & Validation",
    description:
      "Koderea helps organizations adopt AI with evidence, clarity, and local context.",
  },
  icons: {
    icon: [
      {
        url: "/brand/icon-logo-koderea.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/brand/icon-logo-koderea.svg",
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
      className={`${rethinkSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-slate-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

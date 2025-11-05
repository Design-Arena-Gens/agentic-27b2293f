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
  title: "PulseFlow AI | WhatsApp Sales Agent",
  description:
    "Automate WhatsApp lead response, qualification, and meeting booking with an AI sales agent that syncs every outcome back to your CRM.",
  openGraph: {
    title: "PulseFlow AI | WhatsApp Sales Agent",
    description:
      "Automate WhatsApp lead response, qualification, and meeting booking with an AI sales agent that syncs every outcome back to your CRM.",
    url: "https://agentic-27b2293f.vercel.app",
    siteName: "PulseFlow AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseFlow AI | WhatsApp Sales Agent",
    description:
      "Automate WhatsApp lead response, qualification, and meeting booking with an AI sales agent that syncs every outcome back to your CRM.",
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

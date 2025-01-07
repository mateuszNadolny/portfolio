import type { Metadata } from "next";
import { DM_Serif_Text, Noto_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import PlausibleProvider from "next-plausible";
import { Toaster } from "@/components/ui/toaster";

const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mateusz Nadolny | Fullstack Web Developer",
  description:
    "Custom Websites That Turn Visitors Into Customers—Designed Just for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="mnadolny.com" />
      </head>
      <body className={`${ibmPlexSans.className} min-h-screen bg-[#0f1010]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

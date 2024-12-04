import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/global/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/start-background";
import NavbarMobile from "@/components/global/navbar-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
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
      <body className={`${inter.className} max-w-screen max-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <NavbarMobile />
          <ShootingStars />
          <StarsBackground starDensity={0.0015} twinkleProbability={0} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { DM_Serif_Text, Noto_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactLenis } from "@/components/providers/lenis-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { DockNavbar } from "@/components/global/dock-navbar";
const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="language" content="en" />
        <title>
          Mateusz Nadolny - Websites for business - Custom Solutions for Your
          Business Needs | Web Developer - Web Designer
        </title>
        <meta
          name="description"
          content="Experienced freelance web developer and designer specializing in modern, responsive websites and tailored solutions to grow your business."
        />
        <meta
          name="keywords"
          content="websites, custom websites, wordpress, web page, landing page, business page, responsive websites, landing page for business, custom solutions, custom development, custom design, fullstack web developer, "
        />
        <meta name="author" content="Mateusz Nadolny" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Websites for Business - Custom Solutions for Your Business Needs | Mateusz Nadolny"
        />
        <meta
          property="og:description"
          content="Experienced freelance web developer and designer specializing in modern, responsive websites and tailored solutions to grow your business."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/mateuszNadolny/portfolio/refs/heads/main/public/mnadolny.png"
        />
        <meta property="og:url" content="https://mnadolny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Websites for business - Custom Solutions for Your Business Needs | Mateusz Nadolny"
        />
        <meta
          name="twitter:description"
          content="Experienced freelance web developer and designer specializing in modern, responsive websites and tailored solutions to grow your business."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/mateuszNadolny/portfolio/refs/heads/main/public/mnadolny.png"
        />
        <meta name="twitter:creator" content="@codeslav" />
        <link rel="canonical" href="https://mnadolny.com" />
        <GoogleAnalytics gaId="G-63FF8KCRGJ" />
      </head>
      <ReactLenis root>
        <body
          className={`${ibmPlexSans.className} min-h-screen max-w-screen bg-[#0f1010]`}
        >
          <DockNavbar />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}

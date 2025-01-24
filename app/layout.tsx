import { DM_Serif_Text, Noto_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactLenis } from "@/components/providers/lenis-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
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
        <title>
          Custom websites - Custom Solutions for Your Business Needs
        </title>
        <meta
          name="description"
          content="Creating websites that turn visitors into customers. Custom websites, custom design, custom development. | Mateusz Nadolny | Fullstack Web Developer"
        />
        <GoogleAnalytics gaId="G-63FF8KCRGJ" />
      </head>
      <ReactLenis root>
        <body
          className={`${ibmPlexSans.className} min-h-screen max-w-screen bg-[#0f1010]`}
        >
          <Navbar />
          {children}
          <Footer />

          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}

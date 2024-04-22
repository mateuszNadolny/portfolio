import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import Navbar from '@/components/global/navbar';
import NavbarMobile from '@/components/global/navbar-mobile';
import { ModeToggle } from '@/components/global/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nadolny.dev',
  description: 'Portfolio page of Mateusz Nadolny'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen h-svh max-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <NavbarMobile />
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Chakra_Petch } from 'next/font/google'

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Sidebar } from "./_components/Sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Valdez - Web Developer",
  description: "Site de Portfolio e Blog",
};

const chakra_petch = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={chakra_petch.className} suppressHydrationWarning={true}>
        <Header />
        <div className="wrapper-layout">
          <main>
            {children}
          </main>
        </div>
        <Footer />
        </body>
    </html>
  );
}

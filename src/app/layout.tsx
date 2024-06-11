import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'

import { Header } from "./_components/Header";
import { Sidebar } from "./_components/Sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Valdez - Web Developer",
  description: "Site de Portfolio e Blog",
};

const roboto_mono = Roboto_Mono({
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
      <body className={roboto_mono.className}>
        <Header />
        <div className="wrapper-layout">
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
        </body>
    </html>
  );
}

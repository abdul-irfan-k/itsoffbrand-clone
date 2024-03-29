import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmothScrollScrollProvider from "@/components/Provider/lenis-scroll-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmothScrollScrollProvider>{children}</SmothScrollScrollProvider>
      </body>
    </html>
  );
}

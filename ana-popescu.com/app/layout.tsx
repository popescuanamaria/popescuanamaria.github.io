import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-lg text-[#888888]">
        
        <TopBar />

        <div className="flex-1 h-full">{children}</div>
      
      </body>
    </html>
  );
}

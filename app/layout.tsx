import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnaMariaLuca",
  description: "Personal page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex h-full bg-zinc-50 dark:bg-[#202020]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

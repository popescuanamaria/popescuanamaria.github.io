import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./providers";

import ThemeSwitcher from "@/components/ThemeSwitcher";
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
          <header
            className="pointer-events-none relative z-50 flex flex-none flex-col"
            style={{
              height: "var(--header-high)",
              marginBottom: "var(--header-mb)",
            }}
          >
            <div
              className="top-0 z-10 h-16 pt-6"
              style={{
                position: "var(--header-position)",
              }}
            >
              <div
                className="sm:px-8 top-[var(--header-top, theme(spacing,6))] w-full"
                style={{
                  position: "var(--header-inner-position)",
                }}
              >
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4 justify-evenly">
                        <div className="flex flex-1">
                          <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                            <a
                              aria-label="Home"
                              className="pointer-events-auto"
                              href="/"
                            >
                              <img
                                alt="profile_img"
                                decoding="async"
                                data-nimg="1"
                                className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                style={{ color: "transparent" }}
                                sizes="2.25rem"
                                src="/profile/profile_image.jpeg"
                              ></img>
                              {/* <img alt="" fetchpriority="high" width="512" height="512" decoding="async" data-nimg="1" class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" style={{color: "transparent" }} sizes="2.25rem" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=3840&amp;q=75"> */}
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-1 justify-end">
                          {/*md:justify-center*/}
                          <nav className="pointer-events-auto">
                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/"
                                >
                                  Home
                                </a>
                              </li>
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/resume"
                                >
                                  Resume
                                </a>
                              </li>
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/sandbox"
                                >
                                  Projects
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="flex flex-1 justify-end">
                          <ThemeSwitcher />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {children}
          <footer className="mt-32 flex-none">
            <div className="sm:px-8">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          <a
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/home"
                          >
                            Home
                          </a>
                          <a
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/resume"
                          >
                            Resume
                          </a>
                          <a
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/projects"
                          >
                            Projects
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

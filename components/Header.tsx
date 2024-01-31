"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
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
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end">
                    <nav className="pointer-events-auto">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        {/* <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/"
                          >
                            Home
                          </a>
                        </li> */}
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
                            href="/projects"
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
  );
}

"use client";

export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {/* <a
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/"
                    >
                      Home
                    </a> */}
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
  );
}

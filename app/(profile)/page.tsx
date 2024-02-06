"use client";

import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { useTheme } from "next-themes";
import TopBar from "@/components/TopBar";

import posthog from "posthog-js";

import "../globals.css";

posthog.init("phc_Unm5AJVVvOPi4H9d7BAvC7fv0B9nnFJOggFI5CgV8bP", {
  api_host: "https://us.posthog.com",
});

const links = [
  { href: "/home", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
];

export default function Home() {
  posthog.capture("my event ana-popescu", { property: "value" });
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-full flex flex-col">
      <div
        className="flex-none"
        style={{ height: "var(--content-offset)" }}
      ></div>
      <main>
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Software engineer
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I am Ana-Maria, a software engineer who has recently moved
                    to Copenhagen, Denmark. I like the brain challenges of
                    engineering in my professional work and, in my free time, I
                    enjoy activities such as hiking, cycling, cooking, and
                    tending to plants.
                  </p>
                  <div className="mt-6 flex gap-6">
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on GitHub"
                      href="https://github.com/popescuanamaria"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="Follow on LinkedIn"
                      href="https://www.linkedin.com/in/anamaria-luca/"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img
                alt=""
                loading="lazy"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 640px) 18rem, 11rem"
                src="/profile/image2.jpeg"
                style={{ color: "transparent" }}
              ></img>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
              <img
                alt=""
                loading="lazy"
                width="3936"
                height="2624"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 640px) 18rem, 11rem"
                src="/profile/image3.jpeg"
                style={{ color: "transparent" }}
              ></img>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img
                alt=""
                loading="lazy"
                width="5760"
                height="3840"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 640px) 18rem, 11rem"
                src="/profile/image1.jpeg"
                style={{ color: "transparent" }}
              ></img>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="3000"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 640px) 18rem, 11rem"
                src="/profile/image5.jpeg"
                style={{ color: "transparent" }}
              ></img>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
              <img
                alt=""
                loading="lazy"
                width="4240"
                height="2384"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 640px) 18rem, 11rem"
                src="/profile/image4.jpeg"
                style={{ color: "transparent" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-2xl">
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      Since I was a kid, I loved to dig and solve problems. In
                      my work, I do the same — working hard to find not just a
                      solution, but the most efficient one. Throughout my work
                      experience, I&apos;ve worked in various fields within my
                      domain, and I believe that working on projects where
                      efficiency was the focal point has also positively
                      influenced my thinking and my aproach on daily activities.
                    </p>
                  </div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {/* <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          ></path>
                          <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          ></path>
                        </svg> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          />
                        </svg>

                        <span className="ml-3">Work</span>
                      </h2>
                      <ol className="mt-6 space-y-4">
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img
                              alt=""
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="h-7 w-7"
                              src="/profile/intel_logo.png"
                              style={{ color: "transparent" }}
                            ></img>
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Intel
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Software Engineer
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2016 until Present"
                            >
                              <time dateTime="2016">2016</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2024">Present</time>
                            </dd>
                          </dl>
                        </li>
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <img
                              alt=""
                              loading="lazy"
                              width="28"
                              height="28"
                              decoding="async"
                              data-nimg="1"
                              className="h-7 w-7"
                              src="/profile/movidius_logo.png"
                              style={{ color: "transparent" }}
                            ></img>
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Movidius
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Software Engineer
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2013 until 2016"
                            >
                              <time dateTime="2013">2013</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2016">2016</time>
                            </dd>
                          </dl>
                        </li>
                      </ol>
                      <a
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none border border-zinc-200 dark:border-zinc-700/50 bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6"
                        href="/resume"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

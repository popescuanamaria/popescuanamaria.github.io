"use client";

import { LinkedInIcon } from "@/components/Icons";
import TopBar from "@/components/TopBar";
import clsx from "clsx";

export default function Resume() {
  return (
    <div className="sm:px-8 mt-24 md:mt-28">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
                <article className="group relative flex flex-col items-start">
                  <h2 className="order-first mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      Software Engineer — Intel Corporation, Timisoara
                    </span>
                  </h2>
                  <p className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    November 2016 - Present
                  </p>
                  <ul className="relative z-10 mt-2 ml-3 list-disc text-sm text-zinc-600 dark:text-zinc-400">
                    <li>
                      Engineered the C++ model designed to simulate our
                      dedicated CNN (Convolutional Neural Network) hardware
                      block for verification purposes, with a specific emphasis
                      on byte-level transactions. The model was required to
                      simulate each sub-block, along with handling transactions
                      between sub-blocks and interactions between memory and the
                      CNN unit.
                    </li>
                    <li>
                      Integrated various computer vision hardware blocks into
                      our proprietary architecture, enhancing existing blocks
                      with additional features (e.g. Stereo, Matrix
                      Multiplication, Event Processing Unit). Conducted
                      low-level verification using SystemVerilog.
                    </li>
                    <li>
                      Extended our Python and C++ compiler for CNN models with
                      new operations. Integrated an arithmetic emulator for
                      reference result validation and utilized the compiler to
                      generate diverse datasets for power and performance
                      measurements on a specific neural network hardware block.
                    </li>
                    <li>
                      Actively mentored junior engineers across a wide spectrum
                      of tasks, including technical onboarding, coding and
                      debugging.
                    </li>
                  </ul>
                </article>

                <article className="group relative flex flex-col items-start">
                  <h2 className="order-first mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      Software Developer — Movidius, Timisoara
                    </span>
                  </h2>
                  <p className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    Octomber 2013 - November 2016
                  </p>
                  <ul className="relative z-10 mt-2 ml-3 list-disc text-sm text-zinc-600 dark:text-zinc-400">
                    <li>
                      Developed diverse image processing filters in C and
                      optimized them using assembly language for our Movidius
                      proprietary processor.
                    </li>
                    <li>
                      Collaborated closely with the support team to enhance
                      projects for diverse clients, incorporating new filters
                      and optimizing code in assembly language. Additionally,
                      provided on-site support for clients, ensuring seamless
                      integration and optimal performance of the implemented
                      enhancements.
                    </li>
                  </ul>
                </article>

                <article className="group relative flex flex-col items-start">
                  <h2 className="order-first mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      Software Developer Intern — Movidius, Timisoara
                    </span>
                  </h2>
                  <p className="relative z-10 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    July 2013 - Octomber 2013
                  </p>
                  <ul className="relative z-10 mt-2 ml-3 list-disc text-sm text-zinc-600 dark:text-zinc-400">
                    <li>
                      Participated in an HDR project utilizing a designated
                      image sensor. The objective was to achieve the
                      highest-quality image, and my responsibilities included
                      conducting research and analyzing outcomes in various
                      scenarios. This involved incorporating new implementations
                      for different filters in the pipeline, adjusting
                      parameters, and more.
                    </li>
                  </ul>
                </article>
              </div>

              <div className="space-y-4 lg:pl-16 xl:pl-24 order-first sm:order-last">
                <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <span className="">Contact</span>
                  </h2>
                  <ol className="mt-6 space-y-4">
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          />
                        </svg>
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2 mt-2">
                        <dt className="sr-only">Email Address</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                          <a href="mailto:luca.anamaria93@gmail.com">
                            luca.anamaria93@gmail.com
                          </a>
                        </dd>
                      </dl>
                    </li>
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          />
                        </svg>
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2 mt-2">
                        <dt className="sr-only">Phone Number</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                          +4550271499
                        </dd>
                      </dl>
                    </li>
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <LinkedInIcon />
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2 mt-2">
                        <dt className="sr-only">LinkedIn Link</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                          <a href="https://www.linkedin.com/in/anamaria-luca/">
                            LinkedIn
                          </a>
                        </dd>
                      </dl>
                    </li>
                  </ol>
                </div>

                <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <span className="">School</span>
                  </h2>
                  <ol className="mt-4 space-y-4">
                    <li className="flex gap-4">
                      <dl className="flex flex-auto flex-wrap gap-2">
                        <dt className="sr-only">School Name</dt>
                        <dd className="w-full flex-none text-sm uppercase text-zinc-900 dark:text-zinc-100">
                          Politehnica University of Timisoara
                        </dd>

                        <dt className="sr-only">Field</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                          Computer Science
                        </dd>

                        <dt className="sr-only">Date</dt>
                        <dd
                          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                          aria-label="2011 until 2015"
                        >
                          <time dateTime="2011">2011</time>
                          <span aria-hidden="true">—</span>
                          <time dateTime="2016">2015</time>
                        </dd>

                        <dt className="sr-only">Location</dt>
                        <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                          Timisoara, Romania
                        </dd>
                      </dl>
                    </li>
                  </ol>
                </div>

                <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
                  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <span className="">Technical skills</span>
                  </h2>
                  <ol className="mt-4 space-y-2">
                    <li className="text-xs text-zinc-500 dark:text-zinc-400">
                      <p>
                        <span className="font-semibold">
                          Programming languages:
                        </span>{" "}
                        C, C++, Python, Verilog, Assembly language
                      </p>
                    </li>
                    <li className="text-xs text-zinc-500 dark:text-zinc-400">
                      <p>
                        <span className="font-semibold">Version control:</span>{" "}
                        Git, SVN
                      </p>
                    </li>
                    <li className="text-xs text-zinc-500 dark:text-zinc-400">
                      <p>
                        <span className="font-semibold">
                          Deep Learning frameworks:
                        </span>{" "}
                        TensorFlow, PyTorch
                      </p>
                    </li>
                    <li className="font-semibold text-xs text-zinc-500 dark:text-zinc-400">
                      <p>Algorithm development and optimization</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

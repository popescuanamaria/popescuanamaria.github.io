"use client";

import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-lg text-[#888888]">
      <TopBar />

      <div className="flex-1 h-full">
        <div className="flex flex-col items-center gap-y-32 w-full h-full mt-32 font-thin">
          <div className="w-full flex flex-col sm:items-center text-justify gap-y-2 pl-3 pr-3 sm:max-w-4xl">
            <p>Hi! I am Ana Luca (Popescu), a Software Engineer. </p>
            <p>
              For more about my career, check out my{" "}
              <Link
                href="/resume"
                className="font-normal cursor-pointer hover:opacity-70"
              >
                {" "}
                resume
              </Link>
              .
            </p>
            <p>
              Contact me on{" "}
              <Link
                href="https://www.linkedin.com/in/anamaria-luca/"
                className="font-normal cursor-pointer hover:opacity-70"
              >
                LinkedIn
              </Link>{" "}
              or by{" "}
              <Link
                href="mailto:popescu.anamaria93@gmail.com"
                className="font-normal cursor-pointer hover:opacity-70"
              >
                {" "}
                email
              </Link>
              .
            </p>
          </div>

          <div className="w-full flex flex-col items-center sm:max-w-4xl">
            {/* <Link href="https://github.com/popescuanamaria">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/anamaria-luca/">
          <LinkedInIcon />
        </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

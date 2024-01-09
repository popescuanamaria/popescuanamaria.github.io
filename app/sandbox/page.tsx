"use client";

import Link from "next/link";
import { BackArrow } from "@/components/Icons";

export default function ProjectsMenu() {
  return (
    <div className="flex justify-center w-full text-lg text-[#888888]">
      <div className="flex flex-col items-start w-full pt-20 pl-20 gap-y-20">
        <div className="opacity-50 cursor-pointer">
          <Link href="/">
            <BackArrow />
          </Link>
        </div>
        <div className="pl-5">
          <ul className="list-disc">
            <li>
              <Link href="sandbox/storyline">Storyline</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

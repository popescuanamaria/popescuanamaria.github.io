"use client";

import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopBar() {
  //const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const isActiveResume = pathname == '/resume';
  const isActiveProjects = pathname == '/projects';

  return (
    
    <div className="flex flex-col items-center h-full">
      <div className="w-full border-b-4 border-[#888888] border-opacity-50 rounded max-w-5xl mt-5 ">
        <div className="flex justify-between ml-10 mr-10">
          <Link href="/" className="cursor-pointer">
            <img src="home.png" alt="Home icon" className="w-8 h-8" />
          </Link>
          <div className="flex gap-x-3 pt-3">
            <Link href="/resume" className="font-thin cursor-pointer hover:opacity-70 hover:font-normal">
              <p className={clsx("uppercase", isActiveResume ? "opacity-70 font-normal" : "")}>RESUME</p>
            </Link>
            <Link href="/projects" className="font-thin cursor-pointer hover:opacity-70 hover:font-normal">
              <p className={clsx("uppercase font-normal", isActiveProjects ? "opacity-70 font-bold": "")}>...</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

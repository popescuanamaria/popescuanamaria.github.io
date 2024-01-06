"use client";

import Link from "next/link";

export default function ProjectsMenu() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-start w-full pt-20 pl-20">
        <ul className="list-disc">
          <li>
            <Link href="sandbox/storyline">Storyline</Link>
          </li>
        </ul>
      </div>
  </div>
  );
}
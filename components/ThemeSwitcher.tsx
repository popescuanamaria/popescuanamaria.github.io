"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { LightButton, DarkButton } from "./Icons";

const ThemeSwicher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pointer-events-auto">{/* md:flex-1*/}
      <button
        type="button"
        aria-label="Switch to dark theme"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => (theme == 'dark') ? setTheme("light") : setTheme("dark")}
      >
        <LightButton />
        <DarkButton />
      </button>
    </div>
  );
};

export default ThemeSwicher;

"use client";

import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: ReactNode}) {
  const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return <>{children}</>
    }

  return <ThemeProvider attribute='class' defaultTheme='system' enableSystem>{children}</ThemeProvider>
}
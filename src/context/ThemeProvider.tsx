"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type Props ={
  children:React.ReactNode
}

export default function Providers({ children }:Props) {
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider enableSystem={true}>{children}</ThemeProvider>;
}
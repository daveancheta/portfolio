"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>{theme !== "light" ?
      <button className="cursor-none"
        onClick={() => setTheme('light')}>
        <Sun className="text-yellow-500 size-5 sm:size-6 text-center" />
      </button> :
      <button className="cursor-none"
        onClick={() => setTheme('dark')}>
        <Moon className="text-gray-800 size-5 sm:size-6 text-center" />
      </button>}
    </div>
  )
}

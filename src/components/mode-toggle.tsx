"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="">
      <button className={cn("cursor-none", theme !== "dark" && "hidden")}
        onClick={() => setTheme('light')}>
        <Sun className="text-yellow-500" />
      </button>
      <button className={cn("cursor-none", theme !== "light" && "hidden")}
        onClick={() => setTheme('dark')}>
        <Moon className="text-gray-800" />
      </button>
    </div>
  )
}

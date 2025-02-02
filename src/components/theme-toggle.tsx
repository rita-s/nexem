"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    )
}
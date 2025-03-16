"use client"

// Contexto para gerenciamento de tema
import type React from "react"
import { createContext, useState, useContext, useEffect, useCallback } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Verifica se há preferência salva no localStorage ou usa preferência do sistema
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme
      if (savedTheme) {
        return savedTheme
      }

      // Verifica preferência do sistema
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      }
    }
    return "light"
  })

  // Aplica a classe 'dark' ao elemento html quando o tema for dark
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement

      if (theme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }

      // Salva a preferência no localStorage
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}


"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Calculator, Home, BookOpen, Map, Sun, Moon, ChevronRight } from "lucide-react"
import HamburgerIcon from "./HamburgerIcon"
import { useTheme } from "@/contexts/ThemeContext"

const Topbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: "/", label: "Início", icon: <Home className="h-4 w-4 mr-2" /> },
    { path: "/calculadora", label: "Calculadora", icon: <Calculator className="h-4 w-4 mr-2" /> },
    { path: "/explicacoes", label: "Explicações", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { path: "/mapa-icms", label: "Mapa ICMS", icon: <Map className="h-4 w-4 mr-2" /> },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-gradient-primary text-txt-light shadow-lg sticky top-0 z-50 border-b border-primary/20 dark:border-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-secondary/90 p-1.5 rounded-lg shadow-md group-hover:shadow-lg transition-all">
              <Calculator className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-bold text-white">
              Conta<span className="text-secondary">Aí</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors flex items-center ${
                  isActive(item.path)
                    ? "text-secondary underline underline-offset-4 decoration-2"
                    : "text-txt-light/90 hover:text-secondary"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-secondary" />
              ) : (
                <Moon className="h-5 w-5 text-txt-light" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <HamburgerIcon isOpen={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-2 animate-in fade-in slide-in-from-top-5 duration-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center py-2 px-4 rounded-lg ${
                  isActive(item.path)
                    ? "bg-secondary/20 text-secondary font-medium"
                    : "text-txt-light/90 hover:bg-white/10 hover:text-secondary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronRight
                  className={`h-4 w-4 ml-auto ${isActive(item.path) ? "text-secondary" : "text-txt-light/60"}`}
                />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Topbar


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
    <header className="bg-vinho text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Calculator className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-dourado bg-clip-text text-transparent">
              ContaAi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors flex items-center ${
                  isActive(item.path) ? "text-dourado underline underline-offset-4" : "text-white/80 hover:text-dourado"
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
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
                className={`flex items-center py-2 px-4 rounded ${
                  isActive(item.path)
                    ? "bg-white/20 text-dourado"
                    : "text-white/80 hover:bg-white/10 hover:text-dourado"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Topbar


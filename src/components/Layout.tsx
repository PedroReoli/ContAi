"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "@/contexts/ThemeContext"
import { Home, Calculator, BookOpen, Map, Menu, X, Sun, Moon, ChevronRight } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6" />
              <span className="text-2xl font-bold">ContaAi</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors flex items-center ${
                    isActive(item.path)
                      ? "text-white underline underline-offset-4"
                      : "text-primary-foreground/80 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-primary-foreground/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2 space-y-2 animate-fadeIn">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center py-2 px-4 rounded ${
                    isActive(item.path)
                      ? "bg-primary-foreground/20 text-white"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-white"
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

      <main className="flex-grow bg-background">{children}</main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-primary" />
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} ContaAi - Calculadora de ICMS
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout


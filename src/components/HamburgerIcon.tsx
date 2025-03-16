"use client"

import type React from "react"

interface HamburgerIconProps {
  isOpen: boolean
  toggle: () => void
  className?: string
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggle, className = "" }) => {
  return (
    <button
      className={`relative w-8 h-8 flex justify-center items-center rounded-md hover:bg-primary-foreground/10 transition-all ${className}`}
      onClick={toggle}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
    >
      <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
        <span
          className={`bg-current h-0.5 w-full transform transition-all duration-300 origin-left ${
            isOpen ? "rotate-45 translate-x-px" : ""
          }`}
        />
        <span
          className={`bg-current h-0.5 w-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`bg-current h-0.5 w-full transform transition-all duration-300 origin-left ${
            isOpen ? "-rotate-45 translate-x-px" : ""
          }`}
        />
      </div>
    </button>
  )
}

export default HamburgerIcon


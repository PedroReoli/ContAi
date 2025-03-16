"use client"

import type React from "react"
import { motion } from "framer-motion"

interface HamburgerIconProps {
  isOpen: boolean
  toggle: () => void
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggle }) => {
  const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  }

  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  }

  return (
    <button
      className="p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
      onClick={toggle}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 flex flex-col justify-between items-center">
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full block"
          variants={topVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full block"
          variants={centerVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white rounded-full block"
          variants={bottomVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  )
}

export default HamburgerIcon


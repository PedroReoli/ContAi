"use client"

import type React from "react"
import { motion } from "framer-motion"

interface MapaHeaderProps {
  title: string
  description: string
}

const MapaHeader: React.FC<MapaHeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-secondary">{title}</h1>
      <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-3xl mx-auto">{description}</p>
    </motion.div>
  )
}

export default MapaHeader


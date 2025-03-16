"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calculator, BookOpen, Map, Save, ArrowRight } from "lucide-react"

export interface FeatureProps {
  title: string
  description: string
  iconType: string
  link: string
  index?: number
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, iconType, link, index = 0 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "calculator":
        return <Calculator className="h-8 w-8 text-vinho dark:text-dourado" />
      case "book":
        return <BookOpen className="h-8 w-8 text-vinho dark:text-dourado" />
      case "map":
        return <Map className="h-8 w-8 text-vinho dark:text-dourado" />
      case "save":
        return <Save className="h-8 w-8 text-vinho dark:text-dourado" />
      default:
        return <Calculator className="h-8 w-8 text-vinho dark:text-dourado" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link
        to={link}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 group border border-transparent hover:border-vinho/20 h-full"
      >
        <div className="mb-6 p-4 md:p-5 bg-vinho/10 rounded-full transform transition-transform group-hover:scale-110 group-hover:bg-vinho/20">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>
        <div className="mt-auto text-vinho dark:text-dourado flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="mr-1 font-medium">Saiba mais</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}

export default FeatureCard


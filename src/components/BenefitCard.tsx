"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, FileText, BarChart3 } from "lucide-react"

export interface BenefitProps {
  title: string
  description: string
  iconType: string
  index?: number
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, iconType, index = 0 }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "check":
        return <CheckCircle2 className="h-8 w-8 text-vinho dark:text-dourado" />
      case "clock":
        return <Clock className="h-8 w-8 text-vinho dark:text-dourado" />
      case "file":
        return <FileText className="h-8 w-8 text-vinho dark:text-dourado" />
      case "chart":
        return <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
      default:
        return <CheckCircle2 className="h-8 w-8 text-vinho dark:text-dourado" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-start bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 h-full"
    >
      <div className="mr-6 p-4 bg-vinho/10 rounded-full">{renderIcon()}</div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-vinho dark:text-dourado">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default BenefitCard


"use client"

import type React from "react"
import { useState, useEffect } from "react"
import CalculadoraICMS00 from "@/components/page-components/calculadora/CalculadoraICMS00"
import CalculadoraICMS10 from "@/components/page-components/calculadora/CalculadoraICMS10"
import CalculadoraICMS20 from "@/components/page-components/calculadora/CalculadoraICMS20"
import CalculadoraICMS51 from "@/components/page-components/calculadora/CalculadoraICMS51"
import CalculadoraICMS70 from "@/components/page-components/calculadora/CalculadoraICMS70"
import { isLocalStorageDisponivel } from "@/utils/storage"
import { motion } from "framer-motion"

const Calculadora: React.FC = () => {
  const [tipoICMS, setTipoICMS] = useState<string>("ICMS00")
  const [storageDisponivel, setStorageDisponivel] = useState(true)

  useEffect(() => {
    setStorageDisponivel(isLocalStorageDisponivel())
  }, [])

  const renderCalculadora = () => {
    switch (tipoICMS) {
      case "ICMS00":
        return <CalculadoraICMS00 storageDisponivel={storageDisponivel} />
      case "ICMS10":
        return <CalculadoraICMS10 storageDisponivel={storageDisponivel} />
      case "ICMS20":
        return <CalculadoraICMS20 storageDisponivel={storageDisponivel} />
      case "ICMS51":
        return <CalculadoraICMS51 storageDisponivel={storageDisponivel} />
      case "ICMS70":
        return <CalculadoraICMS70 storageDisponivel={storageDisponivel} />
      default:
        return <CalculadoraICMS00 storageDisponivel={storageDisponivel} />
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de ICMS</h1>
          <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-2xl mx-auto">
            Calcule facilmente os valores de ICMS para diferentes cenários fiscais
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8 bg-white/80 dark:bg-bg-darker/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-bg-medium/20 dark:border-bg-dark/30"
        >
          <h2 className="text-xl font-semibold mb-4">Selecione o tipo de ICMS:</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { id: "ICMS00", label: "ICMS 00" },
              { id: "ICMS10", label: "ICMS 10" },
              { id: "ICMS20", label: "ICMS 20" },
              { id: "ICMS51", label: "ICMS 51" },
              { id: "ICMS70", label: "ICMS 70" }
            ].map((tipo) => (
              <motion.button
                key={tipo.id}
                variants={item}
                onClick={() => setTipoICMS(tipo.id)}
                className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  tipoICMS === tipo.id 
                    ? "bg-gradient-primary text-txt-light shadow-md hover:shadow-lg transform hover:-translate-y-1" 
                    : "bg-bg-medium dark:bg-bg-dark text-txt-secondary dark:text-txt-muted hover:bg-bg-medium/70 dark:hover:bg-bg-dark/70 hover:text-txt-primary dark:hover:text-txt-light"
                }`}
              >
                {tipo.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl border border-bg-medium/20 dark:border-bg-dark/30 p-6 md:p-8"
        >
          {renderCalculadora()}
        </motion.div>
      </div>
    </div>
  )
}

export default Calculadora

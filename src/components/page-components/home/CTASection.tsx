"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calculator, ChevronRight } from "lucide-react"

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 mx-4 sm:mx-6 md:mx-12 lg:mx-20 rounded-3xl bg-primary/10 dark:bg-primary/15 shadow-xl">
      <motion.div
        className="text-center max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary dark:text-secondary">
          Pronto para simplificar seus cálculos fiscais?
        </h2>
        <p className="text-lg md:text-xl text-txt-secondary dark:text-txt-muted mb-12 leading-relaxed">
          Comece a usar o ContaAí hoje mesmo e economize tempo com cálculos precisos de ICMS. Sem instalações, sem
          complicações.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/calculadora" className="btn-primary text-lg px-10">
            <Calculator className="h-5 w-5" />
            Experimentar Agora
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CTASection


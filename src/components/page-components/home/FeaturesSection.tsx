"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Calculator, Map, FileText, History } from "lucide-react"

const FeaturesSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const features = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Calculadora ICMS",
      description: "Calcule rapidamente o ICMS para diferentes cenários fiscais com nossa calculadora intuitiva.",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Mapa de Alíquotas",
      description: "Visualize as alíquotas de ICMS em cada estado brasileiro através de um mapa interativo.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Tipos de ICMS",
      description: "Entenda os diferentes tipos de ICMS (00, 10, 20, 51, 70) e suas aplicações específicas.",
    },
    {
      icon: <History className="h-6 w-6" />,
      title: "Histórico de Cálculos",
      description: "Acesse facilmente seus cálculos anteriores para referência rápida e comparações.",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white/80 dark:bg-bg-darker/70 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-primary dark:text-secondary">
            Recursos do Conta.Aí
            <span className="section-title-underline"></span>
          </h2>
          <p className="text-txt-secondary dark:text-txt-muted max-w-2xl mx-auto mt-6 text-lg">
            Ferramentas poderosas para facilitar seu trabalho com cálculos de ICMS e entender melhor a tributação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 card-hover"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-primary dark:text-secondary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-secondary">{feature.title}</h3>
              <p className="text-txt-secondary dark:text-txt-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection


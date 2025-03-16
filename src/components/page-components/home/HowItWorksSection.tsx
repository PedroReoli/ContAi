"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation, useInView } from "framer-motion"
import { Calculator, FileText, BarChart3, History, ArrowRight, ChevronRight } from "lucide-react"

const HowItWorksSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const steps = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Escolha o tipo de ICMS",
      description: "Selecione entre ICMS 00, 10, 20, 51 ou 70 de acordo com sua operação fiscal.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Insira os valores",
      description: "Preencha o valor do produto, alíquota e outros campos relevantes para o cálculo.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Obtenha o resultado",
      description: "Visualize instantaneamente o valor do ICMS a ser recolhido e outros detalhes importantes.",
    },
    {
      icon: <History className="h-6 w-6" />,
      title: "Salve para referência",
      description: "Guarde seus cálculos para consulta futura ou para comparar diferentes cenários.",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>
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
          <h2 className="section-title text-txt-primary dark:text-txt-light">
            <span className="text-primary dark:text-secondary">Como Funciona</span>
            <span className="section-title-underline"></span>
          </h2>
          <p className="text-txt-secondary dark:text-txt-muted max-w-2xl mx-auto mt-6 text-lg">
            Calcular seu ICMS nunca foi tão simples. Siga estes passos para obter resultados precisos em segundos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 },
              }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="glass-card p-6 relative z-10 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-primary dark:text-secondary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-txt-primary dark:text-txt-light">{step.title}</h3>
                <p className="text-txt-secondary dark:text-txt-muted">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <ArrowRight className="h-8 w-8 text-primary/30 dark:text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/calculadora"
            className="inline-flex items-center gap-2 text-primary dark:text-secondary font-medium hover:underline"
          >
            Experimente agora
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection


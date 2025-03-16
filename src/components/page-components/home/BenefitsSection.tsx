"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Lightbulb, Clock, Shield, Zap } from "lucide-react"

const BenefitsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Fácil de Entender",
      description: "Interface intuitiva que simplifica conceitos complexos de ICMS, tornando-os acessíveis para todos.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Economize Tempo",
      description: "Reduza o tempo gasto em cálculos manuais e evite erros com nossa calculadora automatizada.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Conformidade Fiscal",
      description: "Mantenha-se em conformidade com a legislação tributária atual com cálculos precisos e atualizados.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Decisões Rápidas",
      description: "Tome decisões comerciais informadas com base em cálculos fiscais precisos e instantâneos.",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white/80 dark:bg-bg-darker/70 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>
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
            Por que usar o Conta.Aí?
            <span className="section-title-underline"></span>
          </h2>
          <p className="text-txt-secondary dark:text-txt-muted max-w-2xl mx-auto mt-6 text-lg">
            Descubra como nossa plataforma pode transformar sua experiência com cálculos tributários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 flex gap-6 card-hover"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-primary dark:text-secondary">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-secondary">{benefit.title}</h3>
                <p className="text-txt-secondary dark:text-txt-muted">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection


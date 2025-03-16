"use client"

import type React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Calculator, BookOpen, ChevronRight } from 'lucide-react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FeatureCard from "@/components/FeatureCard"
import BenefitCard from "@/components/BenefitCard"
import { features, benefits } from "@/data/featuresData"

const Home: React.FC = () => {
  // Animation controls
  const controls = useAnimation()
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.15)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(var(--secondary),0.15)_0%,transparent_70%)]"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Simplifique seus cálculos de ICMS
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-txt-secondary dark:text-txt-muted mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ContaAi é a ferramenta que profissionais e estudantes da área fiscal precisam para calcular e entender o
              ICMS de forma simples e eficiente.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/calculadora"
                className="bg-gradient-primary text-txt-light font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <Calculator className="h-5 w-5" />
                Começar a Calcular
              </Link>
              <Link
                to="/explicacoes"
                className="bg-gradient-secondary text-txt-primary dark:text-txt-light font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 mt-3 sm:mt-0"
              >
                <BookOpen className="h-5 w-5" />
                Aprender sobre ICMS
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white/80 dark:bg-bg-darker/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            ref={inViewRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Recursos do ContaAi
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
            <p className="text-txt-secondary dark:text-txt-muted max-w-2xl mx-auto mt-6 text-lg">
              Ferramentas poderosas para facilitar seu trabalho com cálculos de ICMS e entender melhor a tributação.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Por que usar o ContaAi?
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
            <p className="text-txt-secondary dark:text-txt-muted max-w-2xl mx-auto mt-6 text-lg">
              Descubra como nossa plataforma pode transformar sua experiência com cálculos tributários.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 mx-4 sm:mx-6 md:mx-12 lg:mx-20 rounded-3xl bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 shadow-2xl">
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
            Comece a usar o ContaAi hoje mesmo e economize tempo com cálculos precisos de ICMS. Sem instalações, sem
            complicações.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/calculadora"
              className="bg-gradient-primary text-txt-light font-medium py-4 px-10 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <Calculator className="h-5 w-5" />
              Experimentar Agora
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

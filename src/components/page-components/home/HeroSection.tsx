"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calculator, BookOpen, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.08)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(var(--secondary),0.08)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary dark:text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cálculos de ICMS <br className="hidden sm:block" />
              <span className="relative">
                simplificados
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30 dark:text-secondary/50"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-txt-secondary dark:text-txt-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Conta.Aí é a ferramenta que profissionais e estudantes da área fiscal precisam para calcular e entender o
              ICMS de forma simples e eficiente.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/calculadora" className="btn-primary group">
                <Calculator className="h-5 w-5" />
                Começar a Calcular
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link to="/explicacoes" className="btn-secondary">
                <BookOpen className="h-5 w-5" />
                Aprender sobre ICMS
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-txt-secondary dark:text-txt-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary dark:text-secondary" />
                <span>Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary dark:text-secondary" />
                <span>Sem cadastro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary dark:text-secondary" />
                <span>Atualizado</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 p-4">
              <div className="glass-card overflow-hidden p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary dark:text-secondary">Calculadora ICMS</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary text-sm font-medium">
                    ICMS 00
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-txt-secondary dark:text-txt-muted">
                      Valor do Produto
                    </label>
                    <div className="h-10 px-3 rounded-lg bg-bg-medium/50 dark:bg-bg-dark/50 border border-bg-medium dark:border-bg-dark flex items-center">
                      R$ 1.000,00
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-txt-secondary dark:text-txt-muted">Alíquota ICMS</label>
                    <div className="h-10 px-3 rounded-lg bg-bg-medium/50 dark:bg-bg-dark/50 border border-bg-medium dark:border-bg-dark flex items-center">
                      18%
                    </div>
                  </div>

                  <div className="pt-4 border-t border-bg-medium/30 dark:border-bg-dark/50">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Valor do ICMS:</span>
                      <span className="text-xl font-bold text-primary dark:text-secondary">R$ 180,00</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-2xl"></div>
                <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl"></div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-lg">
                <Calculator className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


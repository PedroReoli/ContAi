"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"

const TiposICMS: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>("icms00")

  const handleCardClick = (id: string) => {
    setActiveCard(activeCard === id ? null : id)
  }

  const tiposICMS = [
    {
      id: "icms00",
      title: "ICMS 00 - Tributação Normal",
      description: "Tributação integral sem redução de base de cálculo ou diferimento.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold">
          00
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
            O ICMS 00 representa a tributação normal do imposto, sem qualquer benefício fiscal. Nesta situação, o
            imposto é calculado integralmente sobre o valor da operação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Características</h4>
              <ul className="space-y-2 text-txt-secondary dark:text-txt-muted">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Tributação integral</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Sem redução de base de cálculo</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Sem diferimento</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Sem substituição tributária</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Valor do ICMS = Base de Cálculo × Alíquota
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
            <h4 className="text-xl font-semibold mb-3 text-txt-primary dark:text-txt-light">Exemplo Prático</h4>
            <p className="text-txt-secondary dark:text-txt-muted mb-3">
              Para um produto com valor de R$ 1.000,00, frete de R$ 100,00, sem IPI, em um estado com alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo = R$ 1.000,00 + R$ 100,00 = R$ 1.100,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Valor do ICMS = R$ 1.100,00 × 18% = R$ 198,00
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "icms10",
      title: "ICMS 10 - Substituição Tributária",
      description: "Tributação com cobrança do ICMS por substituição tributária.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold">
          10
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
            O ICMS 10 é utilizado em operações com substituição tributária, onde o imposto é recolhido antecipadamente
            pelo contribuinte substituto, em relação às operações subsequentes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Características</h4>
              <ul className="space-y-2 text-txt-secondary dark:text-txt-muted">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Tributação normal na operação própria</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Cobrança antecipada do imposto das etapas seguintes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Utilização de MVA (Margem de Valor Agregado)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Cálculo em duas etapas: ICMS próprio e ICMS-ST</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS Próprio = Base de Cálculo Própria × Alíquota Interna
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS Próprio
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
            <h4 className="text-xl font-semibold mb-3 text-txt-primary dark:text-txt-light">Exemplo Prático</h4>
            <p className="text-txt-secondary dark:text-txt-muted mb-3">
              Para um produto com valor de R$ 1.000,00, MVA de 40%, alíquota interna de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo Própria = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS Próprio = R$ 1.000,00 × 18% = R$ 180,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo ST = R$ 1.000,00 × (1 + 40%) = R$ 1.400,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS-ST = (R$ 1.400,00 × 18%) - R$ 180,00 = R$ 252,00 - R$ 180,00 = R$ 72,00
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "icms20",
      title: "ICMS 20 - Base de Cálculo Reduzida",
      description: "Tributação com redução na base de cálculo do imposto.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold">
          20
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
            O ICMS 20 é aplicado em operações com redução na base de cálculo do imposto, geralmente como um benefício
            fiscal concedido pelos estados para determinados produtos ou operações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Características</h4>
              <ul className="space-y-2 text-txt-secondary dark:text-txt-muted">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Redução na base de cálculo (não na alíquota)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Percentual de redução definido na legislação estadual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Mantém o crédito integral em alguns casos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Comum em produtos da cesta básica e medicamentos</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo Original = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo Reduzida = Base de Cálculo Original × (1 - Percentual de Redução)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Valor do ICMS = Base de Cálculo Reduzida × Alíquota
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
            <h4 className="text-xl font-semibold mb-3 text-txt-primary dark:text-txt-light">Exemplo Prático</h4>
            <p className="text-txt-secondary dark:text-txt-muted mb-3">
              Para um produto com valor de R$ 1.000,00, redução de 30% na base de cálculo, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo Original = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo Reduzida = R$ 1.000,00 × (1 - 30%) = R$ 700,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Valor do ICMS = R$ 700,00 × 18% = R$ 126,00
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "icms51",
      title: "ICMS 51 - Diferimento Parcial",
      description: "Tributação com diferimento parcial do imposto.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold">
          51
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
            O ICMS 51 é utilizado em operações com diferimento parcial do imposto, onde parte do pagamento do ICMS é
            postergada para etapas posteriores da cadeia comercial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Características</h4>
              <ul className="space-y-2 text-txt-secondary dark:text-txt-muted">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Parte do imposto é diferida (postergada)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Percentual de diferimento definido na legislação estadual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Comum em operações com produtos primários</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Transfere parte da carga tributária para etapas seguintes</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS da Operação = Base de Cálculo × Alíquota
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS Diferido = ICMS da Operação × Percentual de Diferimento
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS a Recolher = ICMS da Operação - ICMS Diferido
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
            <h4 className="text-xl font-semibold mb-3 text-txt-primary dark:text-txt-light">Exemplo Prático</h4>
            <p className="text-txt-secondary dark:text-txt-muted mb-3">
              Para um produto com valor de R$ 1.000,00, diferimento de 50%, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS da Operação = R$ 1.000,00 × 18% = R$ 180,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS Diferido = R$ 180,00 × 50% = R$ 90,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS a Recolher = R$ 180,00 - R$ 90,00 = R$ 90,00
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "icms70",
      title: "ICMS 70 - Redução de Base de Cálculo com ST",
      description: "Tributação com redução na base de cálculo e substituição tributária.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-bold">
          70
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
            O ICMS 70 combina a redução na base de cálculo com a substituição tributária. É utilizado em operações onde
            há um benefício fiscal de redução da base de cálculo, mas também existe a necessidade de recolhimento
            antecipado do imposto das etapas seguintes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Características</h4>
              <ul className="space-y-2 text-txt-secondary dark:text-txt-muted">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Redução na base de cálculo do ICMS próprio</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Substituição tributária para as operações subsequentes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Pode haver redução também na base de cálculo do ICMS-ST</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary dark:text-secondary shrink-0 mr-2" />
                  <span>Combina os benefícios do ICMS 20 com o mecanismo do ICMS 10</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h4 className="text-xl font-semibold mb-3 text-primary dark:text-secondary">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo Própria Reduzida = Base de Cálculo Própria × (1 - Percentual de Redução)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS Próprio = Base de Cálculo Própria Reduzida × Alíquota Interna
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                  ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS Próprio
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
            <h4 className="text-xl font-semibold mb-3 text-txt-primary dark:text-txt-light">Exemplo Prático</h4>
            <p className="text-txt-secondary dark:text-txt-muted mb-3">
              Para um produto com valor de R$ 1.000,00, redução de 20% na base de cálculo, MVA de 40%, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo Própria = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo Própria Reduzida = R$ 1.000,00 × (1 - 20%) = R$ 800,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS Próprio = R$ 800,00 × 18% = R$ 144,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                Base de Cálculo ST = R$ 1.000,00 × (1 + 40%) = R$ 1.400,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-bg-darker rounded border border-bg-medium/30 dark:border-bg-dark/50">
                ICMS-ST = (R$ 1.400,00 × 18%) - R$ 144,00 = R$ 252,00 - R$ 144,00 = R$ 108,00
              </p>
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            O ICMS possui diferentes formas de tributação, identificadas por códigos específicos na Nota Fiscal
            Eletrônica (NF-e). Cada código representa uma situação tributária diferente. Selecione os cards abaixo para
            entender cada tipo:
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {tiposICMS.map((tipo) => (
          <motion.div
            key={tipo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * tiposICMS.findIndex((t) => t.id === tipo.id) }}
          >
            <Card
              className={cn(
                "overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm",
                activeCard === tipo.id ? "ring-2 ring-primary dark:ring-secondary" : "",
              )}
            >
              <div className="h-2 bg-gradient-primary"></div>
              <div
                className="flex items-center gap-4 p-6 cursor-pointer bg-bg-medium/30 dark:bg-bg-dark/30"
                onClick={() => handleCardClick(tipo.id)}
              >
                {tipo.icon}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary dark:text-secondary">{tipo.title}</h3>
                  <p className="text-txt-secondary dark:text-txt-muted mt-1">{tipo.description}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 text-txt-muted transition-transform duration-300",
                    activeCard === tipo.id ? "rotate-180" : "",
                  )}
                />
              </div>

              {activeCard === tipo.id && (
                <CardContent className="p-6 border-t border-bg-medium/30 dark:border-bg-dark/50 animate-fadeIn">
                  {tipo.details}
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TiposICMS


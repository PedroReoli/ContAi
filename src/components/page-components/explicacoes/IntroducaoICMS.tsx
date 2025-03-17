"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, FileText, BarChart3, ArrowRight } from "lucide-react"

const IntroducaoICMS: React.FC = () => {
  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
                <Info className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">O que é ICMS?</CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Conceito e aplicação do imposto
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
              <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
                O <strong>Imposto sobre Circulação de Mercadorias e Serviços (ICMS)</strong> é um tributo estadual que
                incide sobre a movimentação de mercadorias e sobre prestações de serviços de transporte interestadual e
                intermunicipal e de comunicação, ainda que as operações se iniciem no exterior.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-6 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
              <h3 className="text-2xl font-semibold text-txt-primary dark:text-txt-light">
                Principais características
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Não-cumulatividade
                </h4>
                <p className="text-txt-secondary dark:text-txt-muted">
                  Compensa-se o valor devido em cada operação com o montante cobrado anteriormente, evitando a
                  tributação em cascata.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Competência Estadual
                </h4>
                <p className="text-txt-secondary dark:text-txt-muted">
                  Cada estado define suas próprias regras e alíquotas, resultando em diferentes tratamentos fiscais pelo
                  país.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Valor Agregado
                </h4>
                <p className="text-txt-secondary dark:text-txt-muted">
                  Incide sobre o valor agregado em cada etapa da circulação da mercadoria, não sobre o valor total.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Alíquotas Variáveis
                </h4>
                <p className="text-txt-secondary dark:text-txt-muted">
                  Possui diferentes alíquotas dependendo do tipo de produto, operação e localização geográfica.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
                <FileText className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">Base Legal</CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Fundamentação jurídica do ICMS
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex-1 p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Constituição Federal
                </h3>
                <p className="text-txt-secondary dark:text-txt-muted leading-relaxed">
                  O ICMS está previsto na Constituição Federal de 1988, no artigo 155, inciso II, que atribui aos
                  Estados e ao Distrito Federal a competência para instituir este imposto.
                </p>
              </div>

              <div className="flex-1 p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Lei Complementar
                </h3>
                <p className="text-txt-secondary dark:text-txt-muted leading-relaxed">
                  A regulamentação nacional do ICMS é feita pela <strong>Lei Complementar nº 87/1996</strong> (Lei
                  Kandir), que estabelece normas gerais sobre o imposto. Cada estado possui sua própria legislação
                  específica.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-6 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
              <h3 className="text-2xl font-semibold text-txt-primary dark:text-txt-light">
                Documentos fiscais relacionados
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
                <div className="mb-3 p-2 rounded-full bg-primary/10 dark:bg-primary/20 self-start">
                  <FileText className="h-5 w-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-txt-primary dark:text-txt-light">Nota Fiscal Eletrônica (NF-e)</h4>
                  <p className="text-sm text-txt-secondary dark:text-txt-muted mt-1">
                    Documento fiscal digital para operações comerciais
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
                <div className="mb-3 p-2 rounded-full bg-primary/10 dark:bg-primary/20 self-start">
                  <FileText className="h-5 w-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-txt-primary dark:text-txt-light">Guia de Recolhimento</h4>
                  <p className="text-sm text-txt-secondary dark:text-txt-muted mt-1">
                    Documento para pagamento do imposto
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
                <div className="mb-3 p-2 rounded-full bg-primary/10 dark:bg-primary/20 self-start">
                  <FileText className="h-5 w-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-txt-primary dark:text-txt-light">Livros Fiscais</h4>
                  <p className="text-sm text-txt-secondary dark:text-txt-muted mt-1">
                    Registros obrigatórios de entradas, saídas e apuração
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
                <div className="mb-3 p-2 rounded-full bg-primary/10 dark:bg-primary/20 self-start">
                  <FileText className="h-5 w-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-txt-primary dark:text-txt-light">SPED Fiscal</h4>
                  <p className="text-sm text-txt-secondary dark:text-txt-muted mt-1">
                    Sistema Público de Escrituração Digital
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
                <BarChart3 className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">
                  Fato Gerador e Base de Cálculo
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Quando e como o ICMS é calculado
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Fato Gerador
                </h3>
                <p className="text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
                  O fato gerador do ICMS ocorre no momento em que:
                </p>
                <ul className="space-y-3 text-txt-secondary dark:text-txt-muted">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Ocorre a saída de mercadoria do estabelecimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Inicia-se a prestação de serviço de transporte</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Ocorre o fornecimento de mercadorias com serviços</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Entra mercadoria importada no estabelecimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Adquire-se em licitação mercadorias ou bens importados</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-bg-darker shadow-md hover:shadow-lg transition-shadow border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Base de Cálculo
                </h3>
                <p className="text-txt-secondary dark:text-txt-muted mb-4 leading-relaxed">
                  A base de cálculo do ICMS é o valor da operação, incluindo:
                </p>
                <ul className="space-y-3 text-txt-secondary dark:text-txt-muted">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Valor da mercadoria ou serviço</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Frete (quando o transporte for por conta do adquirente)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Seguro</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Outras despesas cobradas do adquirente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>IPI (quando a operação for realizada entre não contribuintes)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>Descontos condicionais</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
              <h3 className="text-xl font-semibold mb-4 text-txt-primary dark:text-txt-light flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary dark:text-secondary" />
                Fórmula Básica
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50">
                  <p className="font-mono text-lg text-primary dark:text-secondary">
                    Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos Incondicionais
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50">
                  <p className="font-mono text-lg text-primary dark:text-secondary">
                    Valor do ICMS = Base de Cálculo × Alíquota
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default IntroducaoICMS


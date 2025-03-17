"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRight } from "lucide-react"
import FluxoICMSItem from "./FluxoICMSItem"

const InfograficosICMS: React.FC = () => {
  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
                <Info className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">
                  Entendendo o ICMS: Um Guia Prático
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Explore o fluxo do ICMS e suas particularidades
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
                    <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
                      O Imposto sobre Circulação de Mercadorias e Serviços (ICMS) é um tributo estadual que incide sobre
                      diversas operações. Abaixo, apresentamos um fluxo simplificado para ilustrar como o ICMS se aplica
                      em diferentes etapas.
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <FluxoICMSItem
                    title="Produtor Rural"
                    valor={500}
                    aliquota={18}
                    icmsRecolhido={90}
                    icmsCredito={0}
                    icmsAPagar={90}
                    isDiferido={true}
                  />

                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted" />
                  </div>

                  <div className="block md:hidden">
                    <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted rotate-90" />
                  </div>

                  <FluxoICMSItem
                    title="Indústria"
                    valor={1200}
                    aliquota={18}
                    icmsRecolhido={216}
                    icmsCredito={0}
                    icmsAPagar={216}
                    icmsDiferido={90}
                    isResponsavelDiferido={true}
                  />

                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted" />
                  </div>

                  <div className="block md:hidden">
                    <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted rotate-90" />
                  </div>

                  <FluxoICMSItem
                    title="Comércio"
                    valor={1800}
                    aliquota={18}
                    icmsRecolhido={324}
                    icmsCredito={216}
                    icmsAPagar={108}
                  />
                </div>

                <div className="p-6 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
                  <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Observações sobre Diferimento
                  </h3>
                  <ul className="space-y-3 text-txt-secondary dark:text-txt-muted">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                      <span>
                        No <strong>Diferimento</strong>, o pagamento do ICMS é adiado para uma etapa posterior da cadeia
                        comercial.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                      <span>
                        É comum em operações com produtos primários, como produtos agrícolas vendidos por produtores
                        rurais.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                      <span>
                        No exemplo acima, o produtor rural não recolhe o ICMS (R$ 90,00) que seria devido em sua
                        operação.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                      <span>
                        A indústria, ao adquirir o produto, torna-se responsável pelo recolhimento do imposto diferido,
                        além do seu próprio ICMS.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                      <span>
                        O diferimento é um benefício fiscal que visa simplificar a tributação e reduzir a carga
                        tributária em determinados setores.
                      </span>
                    </li>
                  </ul>
                </div>
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
        <Card className="overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
                <Info className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">
                  Substituição Tributária
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Entenda como funciona a substituição tributária no ICMS
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
                  <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
                    A Substituição Tributária (ST) é um mecanismo de arrecadação do ICMS onde a responsabilidade pelo
                    recolhimento do imposto é atribuída a um contribuinte diferente daquele que realiza o fato gerador.
                    Veja abaixo um exemplo prático:
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <FluxoICMSItem
                  title="Indústria"
                  valor={1000}
                  aliquota={18}
                  icmsRecolhido={180}
                  icmsCredito={0}
                  icmsAPagar={180}
                  icmsST={72}
                  isSubstituto={true}
                />

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted" />
                </div>

                <div className="block md:hidden">
                  <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted rotate-90" />
                </div>

                <FluxoICMSItem
                  title="Distribuidor"
                  valor={1400}
                  aliquota={18}
                  icmsRecolhido={252}
                  icmsCredito={252}
                  icmsAPagar={0}
                  isSubstituido={true}
                />

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted" />
                </div>

                <div className="block md:hidden">
                  <ArrowRight className="h-8 w-8 text-txt-muted dark:text-txt-muted rotate-90" />
                </div>

                <FluxoICMSItem
                  title="Varejista"
                  valor={1800}
                  aliquota={18}
                  icmsRecolhido={0}
                  icmsCredito={0}
                  icmsAPagar={0}
                  isSubstituido={true}
                />
              </div>

              <div className="p-6 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Observações sobre Substituição Tributária
                </h3>
                <ul className="space-y-3 text-txt-secondary dark:text-txt-muted">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>
                      Na <strong>Substituição Tributária</strong>, o contribuinte substituto (indústria) recolhe o ICMS
                      de toda a cadeia comercial.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>
                      O cálculo do ICMS-ST utiliza a <strong>Margem de Valor Agregado (MVA)</strong> para estimar o
                      valor final do produto.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>No exemplo acima, a indústria recolhe R$ 180,00 de ICMS próprio e R$ 72,00 de ICMS-ST.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>
                      Os contribuintes substituídos (distribuidor e varejista) não precisam recolher o ICMS, pois já foi
                      recolhido antecipadamente.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                    <span>A substituição tributária visa simplificar a fiscalização e reduzir a sonegação fiscal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default InfograficosICMS


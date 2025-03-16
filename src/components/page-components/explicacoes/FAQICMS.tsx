"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { HelpCircle, Plus, Minus } from "lucide-react"

const FAQICMS: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("faq1")

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const faqItems = [
    {
      id: "faq1",
      question: "Qual a diferença entre ICMS e IPI?",
      answer: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) e o IPI (Imposto sobre Produtos
            Industrializados) são impostos distintos que incidem sobre produtos, mas com características diferentes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Competência</h4>
              <p>O ICMS é estadual, enquanto o IPI é federal.</p>
            </div>
            <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Incidência</h4>
              <p>
                O ICMS incide sobre circulação de mercadorias e alguns serviços, enquanto o IPI incide apenas sobre
                produtos industrializados.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Seletividade</h4>
              <p>
                Ambos são seletivos, mas o IPI tem maior variação de alíquotas conforme a essencialidade do produto.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Cumulatividade</h4>
              <p>Ambos são não-cumulativos, permitindo o aproveitamento de créditos das operações anteriores.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "faq2",
      question: "O que é Substituição Tributária do ICMS?",
      answer: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            A Substituição Tributária (ST) é um regime especial de arrecadação do ICMS onde a responsabilidade pelo
            recolhimento do imposto é atribuída a um contribuinte diferente daquele que realiza o fato gerador.
          </p>
          <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 mt-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-3 text-primary dark:text-secondary">
              Modalidades de Substituição Tributária:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Substituição Tributária para frente:</span> O contribuinte inicial
                  (geralmente o fabricante ou importador) recolhe o ICMS de toda a cadeia comercial, antecipando o
                  imposto das operações subsequentes.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Substituição Tributária para trás:</span> O destinatário da mercadoria
                  fica responsável pelo recolhimento do ICMS devido pelo remetente.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Substituição Tributária concomitante:</span> Um terceiro fica
                  responsável pelo recolhimento do ICMS no mesmo momento da ocorrência do fato gerador.
                </div>
              </li>
            </ul>
          </div>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mt-4">
            A ST visa simplificar a fiscalização e reduzir a sonegação fiscal, concentrando a arrecadação em um número
            menor de contribuintes.
          </p>
        </>
      ),
    },
    {
      id: "faq3",
      question: "O que é MVA (Margem de Valor Agregado) no ICMS-ST?",
      answer: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            A Margem de Valor Agregado (MVA) é um percentual estabelecido pelos estados que representa a estimativa de
            quanto o valor do produto será majorado até chegar ao consumidor final.
          </p>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            Na Substituição Tributária, a MVA é utilizada para calcular a base de cálculo presumida do ICMS-ST,
            aplicando-se este percentual sobre o valor da operação própria.
          </p>
          <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 mt-2 hover:shadow-md transition-shadow">
            <p className="font-mono text-base text-primary dark:text-secondary">
              Base de Cálculo ST = (Valor da Operação Própria + IPI) × (1 + MVA)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">MVA por Estado</h4>
              <p>
                Cada estado define as MVAs aplicáveis aos produtos sujeitos à substituição tributária, geralmente por
                meio de protocolos ou convênios ICMS.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">MVA Ajustada</h4>
              <p>
                Existe também a MVA Ajustada, que é utilizada em operações interestaduais para equilibrar a diferença
                entre as alíquotas interna e interestadual.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "faq4",
      question: "O que é Diferimento do ICMS?",
      answer: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            O Diferimento do ICMS é um mecanismo que posterga o pagamento do imposto para uma etapa posterior da cadeia
            comercial. Em vez de ser recolhido no momento da ocorrência do fato gerador, o imposto é transferido para
            uma etapa futura.
          </p>
          <div className="p-5 rounded-xl bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 mt-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-3 text-primary dark:text-secondary">Características do Diferimento:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Postergação do pagamento:</span> O recolhimento do ICMS é adiado para um
                  momento posterior na cadeia comercial.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Aplicação comum:</span> Frequentemente utilizado em operações com
                  produtos primários, como produtos agrícolas.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Transferência de responsabilidade:</span> O adquirente da mercadoria
                  torna-se responsável pelo recolhimento do imposto diferido.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <div>
                  <span className="font-medium">Benefício fiscal:</span> Visa simplificar a tributação e reduzir a carga
                  tributária em determinados setores.
                </div>
              </li>
            </ul>
          </div>
          <p className="text-lg text-txt-secondary dark:text-txt-muted mt-4">
            O diferimento pode ser total (quando todo o imposto é postergado) ou parcial (quando apenas uma parte do
            imposto é diferida).
          </p>
        </>
      ),
    },
    {
      id: "faq5",
      question: "Como funciona o crédito de ICMS?",
      answer: (
        <>
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            O sistema de crédito do ICMS é baseado no princípio da não-cumulatividade, onde o contribuinte pode
            compensar o imposto pago nas operações anteriores com o valor devido nas operações subsequentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Débito de ICMS</h4>
              <p>
                É o valor do imposto incidente sobre as saídas de mercadorias ou prestações de serviços realizadas pelo
                contribuinte.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Crédito de ICMS</h4>
              <p>É o valor do imposto pago nas entradas de mercadorias ou aquisições de serviços pelo contribuinte.</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-bg-medium/30 dark:bg-bg-dark/30 border border-bg-medium/30 dark:border-bg-dark/50 mt-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-2 text-primary dark:text-secondary">Apuração do ICMS a Recolher</h4>
            <p className="font-mono text-base">ICMS a Recolher = Débitos de ICMS - Créditos de ICMS</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <span>Se o resultado for positivo, há imposto a recolher</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary"></div>
                <span>Se o resultado for negativo, há saldo credor que pode ser utilizado no período seguinte</span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-bg-medium/30 dark:border-bg-dark/50">
          <p className="text-lg text-txt-secondary dark:text-txt-muted leading-relaxed">
            Abaixo estão respostas para as perguntas mais frequentes sobre o ICMS. Clique em cada pergunta para expandir
            e ver a resposta detalhada.
          </p>
        </div>
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
                <HelpCircle className="h-8 w-8 text-primary dark:text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-primary dark:text-secondary">
                  Perguntas Frequentes
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-txt-secondary dark:text-txt-muted mt-2">
                  Respostas para as dúvidas mais comuns sobre o ICMS
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="border border-bg-medium/30 dark:border-bg-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className="py-4 px-5 flex justify-between items-center cursor-pointer bg-bg-medium/20 dark:bg-bg-dark/20"
                    onClick={() => handleToggle(item.id)}
                  >
                    <h3 className="text-lg font-medium text-txt-primary dark:text-txt-light hover:text-primary dark:hover:text-secondary">
                      {item.question}
                    </h3>
                    <div className="p-1 rounded-full bg-bg-medium/30 dark:bg-bg-dark/30">
                      {openItem === item.id ? (
                        <Minus className="h-5 w-5 text-primary dark:text-secondary" />
                      ) : (
                        <Plus className="h-5 w-5 text-txt-muted" />
                      )}
                    </div>
                  </div>
                  {openItem === item.id && (
                    <div className="p-5 animate-fadeIn bg-white/50 dark:bg-bg-darker/50">{item.answer}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default FAQICMS


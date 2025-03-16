"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, Info, BookOpen, FileText, HelpCircle, BarChart3 } from "lucide-react"

const Explicacoes: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
            Explicações sobre ICMS
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Entenda como funciona o Imposto sobre Circulação de Mercadorias e Serviços no Brasil
          </p>
        </div>

        <Tabs defaultTab="introducao" onChange={() => {}}>
          <TabList className="mb-10 flex justify-center border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
            <Tab
              id="introducao"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Introdução
            </Tab>
            <Tab
              id="tipos"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Tipos de ICMS
            </Tab>
            <Tab
              id="infograficos"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              Infográficos
            </Tab>
            <Tab
              id="faq"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </Tab>
          </TabList>

          <TabPanel id="introducao">
            <IntroducaoICMS />
          </TabPanel>

          <TabPanel id="tipos">
            <TiposICMS />
          </TabPanel>

          <TabPanel id="infograficos">
            <InfograficosICMS />
          </TabPanel>

          <TabPanel id="faq">
            <FAQICMS />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

// Componente de Introdução ao ICMS
const IntroducaoICMS: React.FC = () => {
  return (
    <div className="space-y-10">
      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <Info className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">O que é ICMS?</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Conceito e aplicação do imposto
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              O <strong>Imposto sobre Circulação de Mercadorias e Serviços (ICMS)</strong> é um tributo estadual que
              incide sobre a movimentação de mercadorias e sobre prestações de serviços de transporte interestadual e
              intermunicipal e de comunicação, ainda que as operações se iniciem no exterior.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <div className="h-6 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
            Principais características
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-vinho dark:text-dourado">Não-cumulatividade</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Compensa-se o valor devido em cada operação com o montante cobrado anteriormente, evitando a tributação
                em cascata.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-vinho dark:text-dourado">Competência Estadual</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Cada estado define suas próprias regras e alíquotas, resultando em diferentes tratamentos fiscais pelo
                país.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-vinho dark:text-dourado">Valor Agregado</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Incide sobre o valor agregado em cada etapa da circulação da mercadoria, não sobre o valor total.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-vinho dark:text-dourado">Alíquotas Variáveis</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Possui diferentes alíquotas dependendo do tipo de produto, operação e localização geográfica.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <FileText className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Base Legal</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Fundamentação jurídica do ICMS
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado">Constituição Federal</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                O ICMS está previsto na Constituição Federal de 1988, no artigo 155, inciso II, que atribui aos Estados
                e ao Distrito Federal a competência para instituir este imposto.
              </p>
            </div>

            <div className="flex-1 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado">Lei Complementar</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                A regulamentação nacional do ICMS é feita pela <strong>Lei Complementar nº 87/1996</strong> (Lei
                Kandir), que estabelece normas gerais sobre o imposto. Cada estado possui sua própria legislação
                específica.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <div className="h-6 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
            Documentos fiscais relacionados
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="mr-4 p-2 rounded-full bg-vinho/10 dark:bg-vinho/20">
                <FileText className="h-5 w-5 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Nota Fiscal Eletrônica (NF-e)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Documento fiscal digital para operações comerciais
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="mr-4 p-2 rounded-full bg-vinho/10 dark:bg-vinho/20">
                <FileText className="h-5 w-5 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Guia de Recolhimento</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Documento para pagamento do imposto</p>
              </div>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="mr-4 p-2 rounded-full bg-vinho/10 dark:bg-vinho/20">
                <FileText className="h-5 w-5 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Livros Fiscais</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Registros obrigatórios de entradas, saídas e apuração
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="mr-4 p-2 rounded-full bg-vinho/10 dark:bg-vinho/20">
                <FileText className="h-5 w-5 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">SPED Fiscal</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sistema Público de Escrituração Digital</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Fato Gerador e Base de Cálculo</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Quando e como o ICMS é calculado
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado flex items-center gap-2">
                <div className="h-4 w-1 rounded-full bg-vinho dark:bg-dourado"></div>
                Fato Gerador
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                O fato gerador do ICMS ocorre no momento em que:
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Ocorre a saída de mercadoria do estabelecimento</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Inicia-se a prestação de serviço de transporte</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Ocorre o fornecimento de mercadorias com serviços</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Entra mercadoria importada no estabelecimento</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Adquire-se em licitação mercadorias ou bens importados</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado flex items-center gap-2">
                <div className="h-4 w-1 rounded-full bg-vinho dark:bg-dourado"></div>
                Base de Cálculo
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                A base de cálculo do ICMS é o valor da operação, incluindo:
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Valor da mercadoria ou serviço</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Frete (quando o transporte for por conta do adquirente)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Seguro</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Outras despesas cobradas do adquirente</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>IPI (quando a operação for realizada entre não contribuintes)</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                  <span>Descontos condicionais</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Fórmula Básica</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-mono text-lg text-vinho dark:text-dourado">
                  Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos Incondicionais
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="font-mono text-lg text-vinho dark:text-dourado">
                  Valor do ICMS = Base de Cálculo × Alíquota
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente de Tipos de ICMS
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vinho/10 dark:bg-vinho/20 text-vinho dark:text-dourado font-bold">
          00
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            O ICMS 00 representa a tributação normal do imposto, sem qualquer benefício fiscal. Nesta situação, o
            imposto é calculado integralmente sobre o valor da operação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Características</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Tributação integral</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Sem redução de base de cálculo</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Sem diferimento</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Sem substituição tributária</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Valor do ICMS = Base de Cálculo × Alíquota
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Exemplo Prático</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Para um produto com valor de R$ 1.000,00, frete de R$ 100,00, sem IPI, em um estado com alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo = R$ 1.000,00 + R$ 100,00 = R$ 1.100,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vinho/10 dark:bg-vinho/20 text-vinho dark:text-dourado font-bold">
          10
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            O ICMS 10 é utilizado em operações com substituição tributária, onde o imposto é recolhido antecipadamente
            pelo contribuinte substituto, em relação às operações subsequentes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Características</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Tributação normal na operação própria</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Cobrança antecipada do imposto das etapas seguintes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Utilização de MVA (Margem de Valor Agregado)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Cálculo em duas etapas: ICMS próprio e ICMS-ST</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS Próprio = Base de Cálculo Própria × Alíquota Interna
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS Próprio
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Exemplo Prático</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Para um produto com valor de R$ 1.000,00, MVA de 40%, alíquota interna de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo Própria = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                ICMS Próprio = R$ 1.000,00 × 18% = R$ 180,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo ST = R$ 1.000,00 × (1 + 40%) = R$ 1.400,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vinho/10 dark:bg-vinho/20 text-vinho dark:text-dourado font-bold">
          20
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            O ICMS 20 é aplicado em operações com redução na base de cálculo do imposto, geralmente como um benefício
            fiscal concedido pelos estados para determinados produtos ou operações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Características</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Redução na base de cálculo (não na alíquota)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Percentual de redução definido na legislação estadual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Mantém o crédito integral em alguns casos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Comum em produtos da cesta básica e medicamentos</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo Original = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo Reduzida = Base de Cálculo Original × (1 - Percentual de Redução)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Valor do ICMS = Base de Cálculo Reduzida × Alíquota
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Exemplo Prático</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Para um produto com valor de R$ 1.000,00, redução de 30% na base de cálculo, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo Original = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo Reduzida = R$ 1.000,00 × (1 - 30%) = R$ 700,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vinho/10 dark:bg-vinho/20 text-vinho dark:text-dourado font-bold">
          51
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            O ICMS 51 é utilizado em operações com diferimento parcial do imposto, onde parte do pagamento do ICMS é
            postergada para etapas posteriores da cadeia comercial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Características</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Parte do imposto é diferida (postergada)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Percentual de diferimento definido na legislação estadual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Comum em operações com produtos primários</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Transfere parte da carga tributária para etapas seguintes</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS da Operação = Base de Cálculo × Alíquota
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS Diferido = ICMS da Operação × Percentual de Diferimento
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS a Recolher = ICMS da Operação - ICMS Diferido
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Exemplo Prático</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Para um produto com valor de R$ 1.000,00, diferimento de 50%, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                ICMS da Operação = R$ 1.000,00 × 18% = R$ 180,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                ICMS Diferido = R$ 180,00 × 50% = R$ 90,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vinho/10 dark:bg-vinho/20 text-vinho dark:text-dourado font-bold">
          70
        </div>
      ),
      details: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            O ICMS 70 combina a redução na base de cálculo com a substituição tributária. É utilizado em operações onde
            há um benefício fiscal de redução da base de cálculo, mas também existe a necessidade de recolhimento
            antecipado do imposto das etapas seguintes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Características</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Redução na base de cálculo do ICMS próprio</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Substituição tributária para as operações subsequentes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Pode haver redução também na base de cálculo do ICMS-ST</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-vinho dark:text-dourado shrink-0 mr-2" />
                  <span>Combina os benefícios do ICMS 20 com o mecanismo do ICMS 10</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">Fórmula de cálculo</h4>
              <div className="space-y-3">
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo Própria Reduzida = Base de Cálculo Própria × (1 - Percentual de Redução)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS Próprio = Base de Cálculo Própria Reduzida × Alíquota Interna
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)
                </p>
                <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS Próprio
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Exemplo Prático</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Para um produto com valor de R$ 1.000,00, redução de 20% na base de cálculo, MVA de 40%, alíquota de 18%:
            </p>
            <div className="space-y-2">
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo Própria = R$ 1.000,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo Própria Reduzida = R$ 1.000,00 × (1 - 20%) = R$ 800,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                ICMS Próprio = R$ 800,00 × 18% = R$ 144,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Base de Cálculo ST = R$ 1.000,00 × (1 + 40%) = R$ 1.400,00
              </p>
              <p className="font-mono text-sm p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
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
      <div className="p-6 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          O ICMS possui diferentes formas de tributação, identificadas por códigos específicos na Nota Fiscal Eletrônica
          (NF-e). Cada código representa uma situação tributária diferente. Selecione os cards abaixo para entender cada
          tipo:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {tiposICMS.map((tipo) => (
          <Card
            key={tipo.id}
            className={cn(
              "overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl",
              activeCard === tipo.id ? "ring-2 ring-vinho dark:ring-dourado" : "",
            )}
          >
            <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
            <div
              className="flex items-center gap-4 p-6 cursor-pointer bg-slate-50 dark:bg-slate-800/50"
              onClick={() => handleCardClick(tipo.id)}
            >
              {tipo.icon}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-vinho dark:text-dourado">{tipo.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{tipo.description}</p>
              </div>
              <ChevronDown
                className={cn(
                  "h-6 w-6 text-slate-400 transition-transform duration-300",
                  activeCard === tipo.id ? "rotate-180" : "",
                )}
              />
            </div>

            {activeCard === tipo.id && (
              <CardContent className="p-6 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
                {tipo.details}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

// Componente de Infográficos sobre ICMS
const InfograficosICMS: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="p-6 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Os infográficos abaixo ilustram o funcionamento do ICMS em diferentes cenários, ajudando a visualizar como o
          imposto é aplicado na cadeia comercial.
        </p>
      </div>

      {/* Infográfico 1: Fluxo básico do ICMS */}
      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">
                Fluxo Básico do ICMS na Cadeia Comercial
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Como o ICMS funciona em uma operação típica
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <FluxoICMSItem
                  title="Indústria"
                  valor={1000}
                  aliquota={18}
                  icmsRecolhido={180}
                  icmsCredito={0}
                  icmsAPagar={180}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Atacado"
                  valor={1500}
                  aliquota={18}
                  icmsRecolhido={270}
                  icmsCredito={180}
                  icmsAPagar={90}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Varejo"
                  valor={2000}
                  aliquota={18}
                  icmsRecolhido={360}
                  icmsCredito={270}
                  icmsAPagar={90}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Consumidor"
                  valor={2000}
                  aliquota={0}
                  icmsRecolhido={0}
                  icmsCredito={0}
                  icmsAPagar={0}
                  isConsumidor={true}
                />
              </div>

              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Observações
                </h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      O ICMS é um imposto <strong>não-cumulativo</strong>, ou seja, em cada etapa da cadeia, o valor a
                      ser pago é a diferença entre o débito da operação atual e o crédito das operações anteriores.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      O consumidor final é quem efetivamente arca com todo o valor do imposto, que foi sendo recolhido
                      ao longo da cadeia.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      No exemplo acima, o valor total do ICMS recolhido foi de R$ 360,00 (R$ 180,00 + R$ 90,00 + R$
                      90,00), que corresponde a 18% do valor final de R$ 2.000,00.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infográfico 2: Substituição Tributária */}
      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Substituição Tributária (ICMS-ST)</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Como funciona o recolhimento antecipado do ICMS
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <FluxoICMSItem
                  title="Indústria (Substituto)"
                  valor={1000}
                  aliquota={18}
                  icmsRecolhido={180}
                  icmsCredito={0}
                  icmsAPagar={180}
                  icmsST={252}
                  isSubstituto={true}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Atacado (Substituído)"
                  valor={1500}
                  aliquota={18}
                  icmsRecolhido={0}
                  icmsCredito={180}
                  icmsAPagar={0}
                  isSubstituido={true}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Varejo (Substituído)"
                  valor={2000}
                  aliquota={18}
                  icmsRecolhido={0}
                  icmsCredito={0}
                  icmsAPagar={0}
                  isSubstituido={true}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <FluxoICMSItem
                  title="Consumidor"
                  valor={2000}
                  aliquota={0}
                  icmsRecolhido={0}
                  icmsCredito={0}
                  icmsAPagar={0}
                  isConsumidor={true}
                />
              </div>

              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Observações sobre Substituição Tributária
                </h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      Na <strong>Substituição Tributária</strong>, o fabricante ou importador (substituto tributário)
                      recolhe antecipadamente o ICMS de toda a cadeia comercial.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      O cálculo do ICMS-ST utiliza uma <strong>Margem de Valor Agregado (MVA)</strong> presumida, que
                      estima quanto o produto será valorizado até chegar ao consumidor final.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      No exemplo acima, a indústria recolheu R$ 180,00 de ICMS próprio e R$ 252,00 de ICMS-ST,
                      totalizando R$ 432,00.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      Os contribuintes substituídos (atacado e varejo) não precisam recolher o ICMS sobre suas
                      operações, pois o imposto já foi recolhido antecipadamente.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infográfico 3: Diferimento */}
      <Card className="overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Diferimento do ICMS</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Como funciona o adiamento do recolhimento do imposto
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <FluxoICMSItem
                  title="Produtor Rural"
                  valor={500}
                  aliquota={18}
                  icmsRecolhido={0}
                  icmsCredito={0}
                  icmsAPagar={0}
                  isDiferido={true}
                />

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
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

                <div className="hidden md:block">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
                      className="text-slate-400 dark:text-slate-600"
                    />
                  </svg>
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

              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-vinho dark:text-dourado flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Observações sobre Diferimento
                </h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      No <strong>Diferimento</strong>, o pagamento do ICMS é adiado para uma etapa posterior da cadeia
                      comercial.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      É comum em operações com produtos primários, como produtos agrícolas vendidos por produtores
                      rurais.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      No exemplo acima, o produtor rural não recolhe o ICMS (R$ 90,00) que seria devido em sua operação.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      A indústria, ao adquirir o produto, torna-se responsável pelo recolhimento do imposto diferido,
                      além do seu próprio ICMS.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                    <span>
                      O diferimento é um benefício fiscal que visa simplificar a tributação e reduzir a carga tributária
                      em determinados setores.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente para o item do fluxo de ICMS
interface FluxoICMSItemProps {
  title: string
  valor: number
  aliquota: number
  icmsRecolhido: number
  icmsCredito: number
  icmsAPagar: number
  icmsST?: number
  icmsDiferido?: number
  isConsumidor?: boolean
  isSubstituto?: boolean
  isSubstituido?: boolean
  isDiferido?: boolean
  isResponsavelDiferido?: boolean
}

const FluxoICMSItem: React.FC<FluxoICMSItemProps> = ({
  title,
  valor,
  aliquota,
  icmsRecolhido,
  icmsCredito,
  icmsAPagar,
  icmsST,
  icmsDiferido,
  isConsumidor,
  isSubstituto,
  isSubstituido,
  isDiferido,
  isResponsavelDiferido,
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 w-full md:w-56 text-center shadow-lg transition-all hover:shadow-xl",
        isConsumidor && "bg-slate-50 dark:bg-slate-800/50",
        isSubstituto && "ring-2 ring-vinho dark:ring-dourado",
        isSubstituido && "ring-2 ring-dourado dark:ring-dourado/70",
        isDiferido && "border-dashed ring-2 ring-vinho dark:ring-dourado",
        isResponsavelDiferido && "ring-2 ring-vinho dark:ring-dourado",
      )}
    >
      <h4 className="font-semibold text-lg mb-3 text-slate-900 dark:text-slate-100">{title}</h4>
      <div className="space-y-2 text-sm">
        <p className="text-slate-700 dark:text-slate-300">
          Valor: <span className="font-medium text-slate-900 dark:text-slate-100">R$ {valor.toFixed(2)}</span>
        </p>
        {!isConsumidor && (
          <>
            <p className="text-slate-700 dark:text-slate-300">
              Alíquota: <span className="font-medium text-slate-900 dark:text-slate-100">{aliquota}%</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              ICMS Débito:{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">R$ {icmsRecolhido.toFixed(2)}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              ICMS Crédito:{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">R$ {icmsCredito.toFixed(2)}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              ICMS a Pagar:{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">R$ {icmsAPagar.toFixed(2)}</span>
            </p>

            {isSubstituto && icmsST && (
              <p className="text-vinho dark:text-dourado font-medium">ICMS-ST: R$ {icmsST.toFixed(2)}</p>
            )}

            {isSubstituido && <p className="text-dourado dark:text-dourado/80 font-medium">ICMS já recolhido por ST</p>}

            {isDiferido && (
              <p className="text-vinho dark:text-dourado font-medium">
                ICMS Diferido: R$ {((valor * aliquota) / 100).toFixed(2)}
              </p>
            )}

            {isResponsavelDiferido && icmsDiferido && (
              <p className="text-vinho dark:text-dourado font-medium">ICMS Diferido: R$ {icmsDiferido.toFixed(2)}</p>
            )}
          </>
        )}

        {isConsumidor && <p className="text-slate-500 dark:text-slate-400">Consumidor final arca com todo o ICMS</p>}
      </div>
    </div>
  )
}

// Componente de FAQ sobre ICMS
const FAQICMS: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const faqItems = [
    {
      id: "faq1",
      question: "Qual a diferença entre ICMS e IPI?",
      answer: (
        <>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) e o IPI (Imposto sobre Produtos
            Industrializados) são impostos distintos que incidem sobre produtos, mas com características diferentes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Competência</h4>
              <p>O ICMS é estadual, enquanto o IPI é federal.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Incidência</h4>
              <p>
                O ICMS incide sobre circulação de mercadorias e alguns serviços, enquanto o IPI incide apenas sobre
                produtos industrializados.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Seletividade</h4>
              <p>
                Ambos são seletivos, mas o IPI tem maior variação de alíquotas conforme a essencialidade do produto.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Cumulatividade</h4>
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
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            A Substituição Tributária (ST) é um regime especial de arrecadação do ICMS onde a responsabilidade pelo
            recolhimento do imposto é atribuída a um contribuinte diferente daquele que realiza o fato gerador.
          </p>
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mt-4">
            <h4 className="font-semibold mb-3 text-vinho dark:text-dourado">Modalidades de Substituição Tributária:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Substituição Tributária para frente:</span> O contribuinte inicial
                  (geralmente o fabricante ou importador) recolhe o ICMS de toda a cadeia comercial, antecipando o
                  imposto das operações subsequentes.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Substituição Tributária para trás:</span> O destinatário da mercadoria
                  fica responsável pelo recolhimento do ICMS devido pelo remetente.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Substituição Tributária concomitante:</span> Um terceiro fica
                  responsável pelo recolhimento do ICMS no mesmo momento da ocorrência do fato gerador.
                </div>
              </li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mt-4">
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
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            A Margem de Valor Agregado (MVA) é um percentual estabelecido pelos estados que representa a estimativa de
            quanto o valor do produto será majorado até chegar ao consumidor final.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Na Substituição Tributária, a MVA é utilizada para calcular a base de cálculo presumida do ICMS-ST,
            aplicando-se este percentual sobre o valor da operação própria.
          </p>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mt-2">
            <p className="font-mono text-base text-vinho dark:text-dourado">
              Base de Cálculo ST = (Valor da Operação Própria + IPI) × (1 + MVA)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">MVA por Estado</h4>
              <p>
                Cada estado define as MVAs aplicáveis aos produtos sujeitos à substituição tributária, geralmente por
                meio de protocolos ou convênios ICMS.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">MVA Ajustada</h4>
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
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            O Diferimento do ICMS é um mecanismo que posterga o pagamento do imposto para uma etapa posterior da cadeia
            comercial. Em vez de ser recolhido no momento da ocorrência do fato gerador, o imposto é transferido para
            uma etapa futura.
          </p>
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mt-4">
            <h4 className="font-semibold mb-3 text-vinho dark:text-dourado">Características do Diferimento:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Postergação do pagamento:</span> O recolhimento do ICMS é adiado para um
                  momento posterior na cadeia comercial.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Aplicação comum:</span> Frequentemente utilizado em operações com
                  produtos primários, como produtos agrícolas.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Transferência de responsabilidade:</span> O adquirente da mercadoria
                  torna-se responsável pelo recolhimento do imposto diferido.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <div>
                  <span className="font-medium">Benefício fiscal:</span> Visa simplificar a tributação e reduzir a carga
                  tributária em determinados setores.
                </div>
              </li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mt-4">
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
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            O sistema de crédito do ICMS é baseado no princípio da não-cumulatividade, onde o contribuinte pode
            compensar o imposto pago nas operações anteriores com o valor devido nas operações subsequentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Débito de ICMS</h4>
              <p>
                É o valor do imposto incidente sobre as saídas de mercadorias ou prestações de serviços realizadas pelo
                contribuinte.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Crédito de ICMS</h4>
              <p>É o valor do imposto pago nas entradas de mercadorias ou aquisições de serviços pelo contribuinte.</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mt-4">
            <h4 className="font-semibold mb-2 text-vinho dark:text-dourado">Apuração do ICMS a Recolher</h4>
            <p className="font-mono text-base">ICMS a Recolher = Débitos de ICMS - Créditos de ICMS</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
                <span>Se o resultado for positivo, há imposto a recolher</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-vinho dark:bg-dourado"></div>
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
      <div className="p-6 rounded-xl bg-gradient-to-br from-vinho/5 to-dourado/5 border border-slate-200 dark:border-slate-700">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Abaixo estão respostas para as perguntas mais frequentes sobre o ICMS. Clique em cada pergunta para expandir e
          ver a resposta detalhada.
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-xl">
        <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-vinho/10 dark:bg-vinho/20">
              <HelpCircle className="h-8 w-8 text-vinho dark:text-dourado" />
            </div>
            <div>
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Perguntas Frequentes</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Respostas para as dúvidas mais comuns sobre o ICMS
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <div
                  className="py-5 flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(item.id)}
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-vinho dark:hover:text-dourado">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-slate-400 transition-transform duration-300",
                      openItem === item.id ? "rotate-180" : "",
                    )}
                  />
                </div>
                {openItem === item.id && <div className="pb-5 pt-1 animate-fadeIn">{item.answer}</div>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Explicacoes


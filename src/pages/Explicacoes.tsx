"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const Explicacoes: React.FC = () => {
  return (
    <div className="container-app">
      <h1 className="mb-2">Explicações sobre ICMS</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Entenda como funciona o Imposto sobre Circulação de Mercadorias e Serviços no Brasil
      </p>

      <Tabs defaultTab="introducao">
        <TabList className="mb-8">
          <Tab id="introducao">Introdução</Tab>
          <Tab id="tipos">Tipos de ICMS</Tab>
          <Tab id="infograficos">Infográficos</Tab>
          <Tab id="faq">Perguntas Frequentes</Tab>
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
  )
}

// Componente de Introdução ao ICMS
const IntroducaoICMS: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>O que é ICMS?</CardTitle>
          <CardDescription>Conceito e aplicação do imposto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            O <strong>Imposto sobre Circulação de Mercadorias e Serviços (ICMS)</strong> é um tributo estadual que
            incide sobre a movimentação de mercadorias e sobre prestações de serviços de transporte interestadual e
            intermunicipal e de comunicação, ainda que as operações se iniciem no exterior.
          </p>

          <h3 className="text-lg font-semibold mt-4">Principais características:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              É um imposto <strong>não-cumulativo</strong>, compensando-se o valor devido em cada operação com o
              montante cobrado anteriormente
            </li>
            <li>
              É um tributo de <strong>competência estadual</strong>, ou seja, cada estado define suas próprias regras e
              alíquotas
            </li>
            <li>
              Incide sobre o <strong>valor agregado</strong> em cada etapa da circulação da mercadoria
            </li>
            <li>
              Possui <strong>diferentes alíquotas</strong> dependendo do tipo de produto e da operação
            </li>
            <li>
              Representa a <strong>principal fonte de receita</strong> dos estados brasileiros
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Base Legal</CardTitle>
          <CardDescription>Fundamentação jurídica do ICMS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            O ICMS está previsto na Constituição Federal de 1988, no artigo 155, inciso II, que atribui aos Estados e ao
            Distrito Federal a competência para instituir este imposto.
          </p>

          <p>
            A regulamentação nacional do ICMS é feita pela <strong>Lei Complementar nº 87/1996</strong> (Lei Kandir),
            que estabelece normas gerais sobre o imposto. Cada estado possui sua própria legislação específica sobre o
            ICMS, definindo alíquotas, benefícios fiscais e obrigações acessórias.
          </p>

          <h3 className="text-lg font-semibold mt-4">Documentos fiscais relacionados:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nota Fiscal Eletrônica (NF-e)</strong>: Documento fiscal digital emitido para documentar operações
              comerciais
            </li>
            <li>
              <strong>Guia de Recolhimento</strong>: Documento para pagamento do imposto
            </li>
            <li>
              <strong>Livros Fiscais</strong>: Registros obrigatórios de entradas, saídas e apuração do ICMS
            </li>
            <li>
              <strong>SPED Fiscal</strong>: Sistema Público de Escrituração Digital que substituiu os livros fiscais em
              papel
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fato Gerador e Base de Cálculo</CardTitle>
          <CardDescription>Quando e como o ICMS é calculado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fato Gerador</h3>
              <p className="mb-4">O fato gerador do ICMS ocorre no momento em que:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ocorre a saída de mercadoria do estabelecimento</li>
                <li>Inicia-se a prestação de serviço de transporte</li>
                <li>Ocorre o fornecimento de mercadorias com serviços</li>
                <li>Entra mercadoria importada no estabelecimento</li>
                <li>Adquire-se em licitação mercadorias ou bens importados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Base de Cálculo</h3>
              <p className="mb-4">A base de cálculo do ICMS é o valor da operação, incluindo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Valor da mercadoria ou serviço</li>
                <li>Frete (quando o transporte for por conta do adquirente)</li>
                <li>Seguro</li>
                <li>Outras despesas cobradas do adquirente</li>
                <li>IPI (quando a operação for realizada entre não contribuintes)</li>
                <li>Descontos condicionais</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-md mt-4">
            <h3 className="text-lg font-semibold mb-2">Fórmula Básica</h3>
            <p className="font-mono bg-background p-2 rounded">
              Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos Incondicionais
            </p>
            <p className="font-mono bg-background p-2 rounded mt-2">Valor do ICMS = Base de Cálculo × Alíquota</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente de Tipos de ICMS
const TiposICMS: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const handleCardClick = (id: string) => {
    setActiveCard(activeCard === id ? null : id)
  }

  const tiposICMS = [
    {
      id: "icms00",
      title: "ICMS 00 - Tributação Normal",
      description: "Tributação integral sem redução de base de cálculo ou diferimento.",
      details: (
        <>
          <p className="mb-4">
            O ICMS 00 representa a tributação normal do imposto, sem qualquer benefício fiscal. Nesta situação, o
            imposto é calculado integralmente sobre o valor da operação.
          </p>

          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Tributação integral</li>
            <li>Sem redução de base de cálculo</li>
            <li>Sem diferimento</li>
            <li>Sem substituição tributária</li>
          </ul>

          <h4 className="font-semibold mb-2">Fórmula de cálculo:</h4>
          <div className="bg-muted p-3 rounded-md">
            <p className="font-mono">
              Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
            </p>
            <p className="font-mono mt-2">Valor do ICMS = Base de Cálculo × Alíquota</p>
          </div>
        </>
      ),
    },
    {
      id: "icms10",
      title: "ICMS 10 - Substituição Tributária",
      description: "Tributação com cobrança do ICMS por substituição tributária.",
      details: (
        <>
          <p className="mb-4">
            O ICMS 10 é utilizado em operações com substituição tributária, onde o imposto é recolhido antecipadamente
            pelo contribuinte substituto, em relação às operações subsequentes.
          </p>

          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Tributação normal na operação própria</li>
            <li>Cobrança antecipada do imposto das etapas seguintes</li>
            <li>Utilização de MVA (Margem de Valor Agregado)</li>
            <li>Cálculo em duas etapas: ICMS próprio e ICMS-ST</li>
          </ul>

          <h4 className="font-semibold mb-2">Fórmula de cálculo:</h4>
          <div className="bg-muted p-3 rounded-md">
            <p className="font-mono">
              Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
            </p>
            <p className="font-mono mt-2">ICMS Próprio = Base de Cálculo Própria × Alíquota Interna</p>
            <p className="font-mono mt-2">Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)</p>
            <p className="font-mono mt-2">ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS Próprio</p>
          </div>
        </>
      ),
    },
    {
      id: "icms20",
      title: "ICMS 20 - Base de Cálculo Reduzida",
      description: "Tributação com redução na base de cálculo do imposto.",
      details: (
        <>
          <p className="mb-4">
            O ICMS 20 é aplicado em operações com redução na base de cálculo do imposto, geralmente como um benefício
            fiscal concedido pelos estados para determinados produtos ou operações.
          </p>

          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Redução na base de cálculo (não na alíquota)</li>
            <li>Percentual de redução definido na legislação estadual</li>
            <li>Mantém o crédito integral em alguns casos</li>
            <li>Comum em produtos da cesta básica e medicamentos</li>
          </ul>

          <h4 className="font-semibold mb-2">Fórmula de cálculo:</h4>
          <div className="bg-muted p-3 rounded-md">
            <p className="font-mono">
              Base de Cálculo Original = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
            </p>
            <p className="font-mono mt-2">
              Base de Cálculo Reduzida = Base de Cálculo Original × (1 - Percentual de Redução)
            </p>
            <p className="font-mono mt-2">Valor do ICMS = Base de Cálculo Reduzida × Alíquota</p>
          </div>
        </>
      ),
    },
    {
      id: "icms51",
      title: "ICMS 51 - Diferimento Parcial",
      description: "Tributação com diferimento parcial do imposto.",
      details: (
        <>
          <p className="mb-4">
            O ICMS 51 é utilizado em operações com diferimento parcial do imposto, onde parte do pagamento do ICMS é
            postergada para etapas posteriores da cadeia comercial.
          </p>

          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Parte do imposto é diferida (postergada)</li>
            <li>Percentual de diferimento definido na legislação estadual</li>
            <li>Comum em operações com produtos primários</li>
            <li>Transfere parte da carga tributária para etapas seguintes</li>
          </ul>

          <h4 className="font-semibold mb-2">Fórmula de cálculo:</h4>
          <div className="bg-muted p-3 rounded-md">
            <p className="font-mono">
              Base de Cálculo = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos + IPI
            </p>
            <p className="font-mono mt-2">ICMS da Operação = Base de Cálculo × Alíquota</p>
            <p className="font-mono mt-2">ICMS Diferido = ICMS da Operação × Percentual de Diferimento</p>
            <p className="font-mono mt-2">ICMS a Recolher = ICMS da Operação - ICMS Diferido</p>
          </div>
        </>
      ),
    },
    {
      id: "icms70",
      title: "ICMS 70 - Redução de Base de Cálculo com ST",
      description: "Tributação com redução na base de cálculo e substituição tributária.",
      details: (
        <>
          <p className="mb-4">
            O ICMS 70 combina a redução na base de cálculo com a substituição tributária. É utilizado em operações onde
            há um benefício fiscal de redução da base de cálculo, mas também existe a necessidade de recolhimento
            antecipado do imposto das etapas seguintes.
          </p>

          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Redução na base de cálculo do ICMS próprio</li>
            <li>Substituição tributária para as operações subsequentes</li>
            <li>Pode haver redução também na base de cálculo do ICMS-ST</li>
            <li>Combina os benefícios do ICMS 20 com o mecanismo do ICMS 10</li>
          </ul>

          <h4 className="font-semibold mb-2">Fórmula de cálculo:</h4>
          <div className="bg-muted p-3 rounded-md">
            <p className="font-mono">
              Base de Cálculo Própria = Valor do Produto + Frete + Seguro + Outras Despesas - Descontos
            </p>
            <p className="font-mono mt-2">
              Base de Cálculo Própria Reduzida = Base de Cálculo Própria × (1 - Percentual de Redução)
            </p>
            <p className="font-mono mt-2">ICMS Próprio = Base de Cálculo Própria Reduzida × Alíquota Interna</p>
            <p className="font-mono mt-2">Base de Cálculo ST = (Base de Cálculo Própria + IPI) × (1 + MVA)</p>
            <p className="font-mono mt-2">
              Base de Cálculo ST Reduzida = Base de Cálculo ST × (1 - Percentual de Redução ST)
            </p>
            <p className="font-mono mt-2">ICMS-ST = (Base de Cálculo ST Reduzida × Alíquota ST) - ICMS Próprio</p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-lg mb-6">
        O ICMS possui diferentes formas de tributação, identificadas por códigos específicos na Nota Fiscal Eletrônica
        (NF-e). Cada código representa uma situação tributária diferente. Clique nos cards abaixo para entender cada
        tipo:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiposICMS.map((tipo) => (
          <Card
            key={tipo.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-lg",
              activeCard === tipo.id ? "ring-2 ring-primary" : "",
            )}
            onClick={() => handleCardClick(tipo.id)}
          >
            <CardHeader>
              <CardTitle>{tipo.title}</CardTitle>
              <CardDescription>{tipo.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {activeCard === tipo.id && <div className="mt-2 animate-fadeIn">{tipo.details}</div>}

              {activeCard !== tipo.id && (
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCardClick(tipo.id)
                  }}
                >
                  Ver detalhes
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Componente de Infográficos sobre ICMS
const InfograficosICMS: React.FC = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg mb-6">
        Os infográficos abaixo ilustram o funcionamento do ICMS em diferentes cenários, ajudando a visualizar como o
        imposto é aplicado na cadeia comercial.
      </p>

      {/* Infográfico 1: Fluxo básico do ICMS */}
      <Card>
        <CardHeader>
          <CardTitle>Fluxo Básico do ICMS na Cadeia Comercial</CardTitle>
          <CardDescription>Como o ICMS funciona em uma operação típica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Observações:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    O ICMS é um imposto <strong>não-cumulativo</strong>, ou seja, em cada etapa da cadeia, o valor a ser
                    pago é a diferença entre o débito da operação atual e o crédito das operações anteriores.
                  </li>
                  <li>
                    O consumidor final é quem efetivamente arca com todo o valor do imposto, que foi sendo recolhido ao
                    longo da cadeia.
                  </li>
                  <li>
                    No exemplo acima, o valor total do ICMS recolhido foi de R$ 360,00 (R$ 180,00 + R$ 90,00 + R$
                    90,00), que corresponde a 18% do valor final de R$ 2.000,00.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infográfico 2: Substituição Tributária */}
      <Card>
        <CardHeader>
          <CardTitle>Substituição Tributária (ICMS-ST)</CardTitle>
          <CardDescription>Como funciona o recolhimento antecipado do ICMS</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Observações sobre Substituição Tributária:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Na <strong>Substituição Tributária</strong>, o fabricante ou importador (substituto tributário)
                    recolhe antecipadamente o ICMS de toda a cadeia comercial.
                  </li>
                  <li>
                    O cálculo do ICMS-ST utiliza uma <strong>Margem de Valor Agregado (MVA)</strong> presumida, que
                    estima quanto o produto será valorizado até chegar ao consumidor final.
                  </li>
                  <li>
                    No exemplo acima, a indústria recolheu R$ 180,00 de ICMS próprio e R$ 252,00 de ICMS-ST, totalizando
                    R$ 432,00.
                  </li>
                  <li>
                    Os contribuintes substituídos (atacado e varejo) não precisam recolher o ICMS sobre suas operações,
                    pois o imposto já foi recolhido antecipadamente.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infográfico 3: Diferimento */}
      <Card>
        <CardHeader>
          <CardTitle>Diferimento do ICMS</CardTitle>
          <CardDescription>Como funciona o adiamento do recolhimento do imposto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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
                    />
                  </svg>
                </div>

                <div className="block md:hidden my-4">
                  <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z"
                      fill="currentColor"
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

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Observações sobre Diferimento:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    No <strong>Diferimento</strong>, o pagamento do ICMS é adiado para uma etapa posterior da cadeia
                    comercial.
                  </li>
                  <li>
                    É comum em operações com produtos primários, como produtos agrícolas vendidos por produtores rurais.
                  </li>
                  <li>
                    No exemplo acima, o produtor rural não recolhe o ICMS (R$ 90,00) que seria devido em sua operação.
                  </li>
                  <li>
                    A indústria, ao adquirir o produto, torna-se responsável pelo recolhimento do imposto diferido, além
                    do seu próprio ICMS.
                  </li>
                  <li>
                    O diferimento é um benefício fiscal que visa simplificar a tributação e reduzir a carga tributária
                    em determinados setores.
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
        "bg-card border rounded-md p-4 w-full md:w-52 text-center",
        isConsumidor && "bg-muted",
        isSubstituto && "border-primary",
        isSubstituido && "border-secondary",
        isDiferido && "border-dashed border-primary",
        isResponsavelDiferido && "border-primary",
      )}
    >
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="space-y-1 text-sm">
        <p>
          Valor: <span className="font-medium">R$ {valor.toFixed(2)}</span>
        </p>
        {!isConsumidor && (
          <>
            <p>
              Alíquota: <span className="font-medium">{aliquota}%</span>
            </p>
            <p>
              ICMS Débito: <span className="font-medium">R$ {icmsRecolhido.toFixed(2)}</span>
            </p>
            <p>
              ICMS Crédito: <span className="font-medium">R$ {icmsCredito.toFixed(2)}</span>
            </p>
            <p>
              ICMS a Pagar: <span className="font-medium">R$ {icmsAPagar.toFixed(2)}</span>
            </p>

            {isSubstituto && icmsST && <p className="text-primary font-medium">ICMS-ST: R$ {icmsST.toFixed(2)}</p>}

            {isSubstituido && <p className="text-secondary font-medium">ICMS já recolhido por ST</p>}

            {isDiferido && (
              <p className="text-primary font-medium">ICMS Diferido: R$ {((valor * aliquota) / 100).toFixed(2)}</p>
            )}

            {isResponsavelDiferido && icmsDiferido && (
              <p className="text-primary font-medium">ICMS Diferido: R$ {icmsDiferido.toFixed(2)}</p>
            )}
          </>
        )}

        {isConsumidor && <p className="text-muted-foreground">Consumidor final arca com todo o ICMS</p>}
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
          <p>
            O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) e o IPI (Imposto sobre Produtos
            Industrializados) são impostos distintos que incidem sobre produtos, mas com características diferentes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Competência:</strong> O ICMS é estadual, enquanto o IPI é federal.
            </li>
            <li>
              <strong>Incidência:</strong> O ICMS incide sobre circulação de mercadorias e alguns serviços, enquanto o
              IPI incide apenas sobre produtos industrializados.
            </li>
            <li>
              <strong>Seletividade:</strong> Ambos são seletivos, mas o IPI tem maior variação de alíquotas conforme a
              essencialidade do produto.
            </li>
            <li>
              <strong>Cumulatividade:</strong> Ambos são não-cumulativos, permitindo o aproveitamento de créditos das
              operações anteriores.
            </li>
            <li>
              <strong>Base de cálculo:</strong> O IPI pode compor a base de cálculo do ICMS em algumas situações.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "faq2",
      question: "O que é Substituição Tributária do ICMS?",
      answer: (
        <>
          <p>
            A Substituição Tributária (ST) é um regime especial de arrecadação do ICMS onde a responsabilidade pelo
            recolhimento do imposto é atribuída a um contribuinte diferente daquele que realiza o fato gerador.
          </p>
          <p className="mt-2">Existem três modalidades de Substituição Tributária:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Substituição Tributária para frente:</strong> O contribuinte inicial (geralmente o fabricante ou
              importador) recolhe o ICMS de toda a cadeia comercial, antecipando o imposto das operações subsequentes.
            </li>
            <li>
              <strong>Substituição Tributária para trás:</strong> O destinatário da mercadoria fica responsável pelo
              recolhimento do ICMS devido pelo remetente.
            </li>
            <li>
              <strong>Substituição Tributária concomitante:</strong> Um terceiro fica responsável pelo recolhimento do
              ICMS no mesmo momento da ocorrência do fato gerador.
            </li>
          </ul>
          <p className="mt-2">
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
          <p>
            A Margem de Valor Agregado (MVA) é um percentual estabelecido pelos estados que representa a estimativa de
            quanto o valor do produto será majorado até chegar ao consumidor final.
          </p>
          <p className="mt-2">
            Na Substituição Tributária, a MVA é utilizada para calcular a base de cálculo presumida do ICMS-ST,
            aplicando-se este percentual sobre o valor da operação própria.
          </p>
          <div className="bg-muted p-3 rounded-md mt-2">
            <p className="font-mono">Base de Cálculo ST = (Valor da Operação Própria + IPI) × (1 + MVA)</p>
          </div>
          <p className="mt-2">
            Cada estado define as MVAs aplicáveis aos produtos sujeitos à substituição tributária, geralmente por meio
            de protocolos ou convênios ICMS.
          </p>
          <p className="mt-2">
            Existe também a MVA Ajustada, que é utilizada em operações interestaduais para equilibrar a diferença entre
            as alíquotas interna e interestadual.
          </p>
        </>
      ),
    },
    {
      id: "faq4",
      question: "O que é Diferimento do ICMS?",
      answer: (
        <>
          <p>
            O Diferimento do ICMS é um mecanismo que posterga (adia) o momento do recolhimento do imposto para uma etapa
            posterior da cadeia comercial.
          </p>
          <p className="mt-2">
            No diferimento, o pagamento do ICMS que seria devido em uma determinada operação é transferido para etapas
            subsequentes, sendo recolhido apenas quando ocorrer uma das seguintes situações:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Saída para consumidor final</li>
            <li>Saída para outro estado</li>
            <li>Saída para o exterior</li>
            <li>Utilização do produto como insumo em processo produtivo</li>
          </ul>
          <p className="mt-2">
            O diferimento é muito utilizado em operações com produtos primários (como produtos agrícolas) e visa
            simplificar a tributação e reduzir a carga tributária em determinados setores.
          </p>
        </>
      ),
    },
    {
      id: "faq5",
      question: "Como funciona o crédito de ICMS?",
      answer: (
        <>
          <p>
            O ICMS é um imposto não-cumulativo, o que significa que o contribuinte pode se creditar do imposto pago nas
            operações anteriores para abater do valor a recolher nas operações subsequentes.
          </p>
          <p className="mt-2">O sistema de crédito funciona da seguinte forma:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Débito:</strong> Quando o contribuinte vende uma mercadoria, gera um débito de ICMS (valor da
              venda × alíquota).
            </li>
            <li>
              <strong>Crédito:</strong> Quando o contribuinte compra mercadorias, insumos ou serviços tributados pelo
              ICMS, gera um crédito (valor da compra × alíquota).
            </li>
            <li>
              <strong>Apuração:</strong> Ao final do período de apuração (geralmente mensal), o contribuinte calcula a
              diferença entre débitos e créditos.
            </li>
            <li>
              <strong>Recolhimento:</strong> Se os débitos forem maiores que os créditos, o contribuinte deve recolher a
              diferença. Se os créditos forem maiores, o saldo pode ser utilizado em períodos futuros.
            </li>
          </ul>
          <p className="mt-2">
            Nem todos os produtos e serviços geram direito a crédito. A legislação estabelece restrições para o
            aproveitamento de créditos em determinadas situações.
          </p>
        </>
      ),
    },
    {
      id: "faq6",
      question: "Quais são as alíquotas do ICMS?",
      answer: (
        <>
          <p>
            As alíquotas do ICMS variam conforme o estado e o tipo de produto ou serviço. Existem alíquotas internas
            (dentro do mesmo estado) e interestaduais (entre estados diferentes).
          </p>
          <p className="mt-2">
            <strong>Alíquotas internas:</strong> São definidas por cada estado, geralmente variando entre 17% e 19%,
            podendo ser maiores para produtos considerados supérfluos ou menores para produtos essenciais.
          </p>
          <p className="mt-2">
            <strong>Alíquotas interestaduais:</strong> São definidas por resolução do Senado Federal:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              12% para operações entre estados das regiões Sul e Sudeste (exceto ES) destinadas a estados das mesmas
              regiões
            </li>
            <li>
              7% para operações de estados das regiões Sul e Sudeste (exceto ES) destinadas a estados das regiões Norte,
              Nordeste, Centro-Oeste e ao Espírito Santo
            </li>
            <li>4% para operações com produtos importados</li>
          </ul>
          <p className="mt-2">
            Alguns produtos possuem alíquotas específicas, como combustíveis, energia elétrica e comunicações, que
            geralmente têm alíquotas mais elevadas.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-lg mb-6">Confira abaixo as perguntas mais frequentes sobre o ICMS e suas respostas:</p>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div
              className={cn(
                "p-4 cursor-pointer flex justify-between items-center hover:bg-accent/50 transition-colors",
                openItem === item.id ? "border-b" : "",
              )}
              onClick={() => handleToggle(item.id)}
            >
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <div
                className="text-2xl transition-transform duration-200"
                style={{ transform: openItem === item.id ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </div>
            </div>

            {openItem === item.id && <div className="p-4 animate-fadeIn">{item.answer}</div>}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Explicacoes


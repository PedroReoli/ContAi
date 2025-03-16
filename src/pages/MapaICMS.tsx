"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { AlertTriangle, Info } from 'lucide-react'
import { motion } from "framer-motion"

// Dados das alíquotas de ICMS por estado
const dadosICMS = [
  { id: "AC", estado: "Acre", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "AL", estado: "Alagoas", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "AM", estado: "Amazonas", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "AP", estado: "Amapá", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "BA", estado: "Bahia", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "CE", estado: "Ceará", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "DF", estado: "Distrito Federal", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "ES", estado: "Espírito Santo", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "GO", estado: "Goiás", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "MA", estado: "Maranhão", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "MG", estado: "Minas Gerais", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 12, outros: 12 } },
  {
    id: "MS",
    estado: "Mato Grosso do Sul",
    aliquotaInterna: 17,
    aliquotaInterestadual: { sul_sudeste: 7, outros: 12 },
  },
  { id: "MT", estado: "Mato Grosso", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "PA", estado: "Pará", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "PB", estado: "Paraíba", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "PE", estado: "Pernambuco", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "PI", estado: "Piauí", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "PR", estado: "Paraná", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 12, outros: 12 } },
  { id: "RJ", estado: "Rio de Janeiro", aliquotaInterna: 20, aliquotaInterestadual: { sul_sudeste: 12, outros: 12 } },
  {
    id: "RN",
    estado: "Rio Grande do Norte",
    aliquotaInterna: 18,
    aliquotaInterestadual: { sul_sudeste: 7, outros: 12 },
  },
  { id: "RO", estado: "Rondônia", aliquotaInterna: 17.5, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "RR", estado: "Roraima", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  {
    id: "RS",
    estado: "Rio Grande do Sul",
    aliquotaInterna: 17,
    aliquotaInterestadual: { sul_sudeste: 12, outros: 12 },
  },
  { id: "SC", estado: "Santa Catarina", aliquotaInterna: 17, aliquotaInterestadual: { sul_sudeste: 12, outros: 12 } },
  { id: "SE", estado: "Sergipe", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
  { id: "SP", estado: "São Paulo", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 12, outros: 12 } },
  { id: "TO", estado: "Tocantins", aliquotaInterna: 18, aliquotaInterestadual: { sul_sudeste: 7, outros: 12 } },
]

// Dados de produtos com alíquotas especiais
const produtosEspeciais = [
  {
    nome: "Combustíveis",
    estados: [
      { id: "SP", estado: "São Paulo", aliquota: 25 },
      { id: "RJ", estado: "Rio de Janeiro", aliquota: 32 },
      { id: "MG", estado: "Minas Gerais", aliquota: 27 },
      { id: "RS", estado: "Rio Grande do Sul", aliquota: 25 },
      { id: "PR", estado: "Paraná", aliquota: 29 },
      { id: "SC", estado: "Santa Catarina", aliquota: 25 },
      { id: "BA", estado: "Bahia", aliquota: 28 },
      { id: "GO", estado: "Goiás", aliquota: 25 },
      { id: "DF", estado: "Distrito Federal", aliquota: 28 },
      { id: "MT", estado: "Mato Grosso", aliquota: 25 },
      { id: "MS", estado: "Mato Grosso do Sul", aliquota: 25 },
      { id: "ES", estado: "Espírito Santo", aliquota: 27 },
      { id: "PE", estado: "Pernambuco", aliquota: 29 },
      { id: "CE", estado: "Ceará", aliquota: 29 },
      { id: "PA", estado: "Pará", aliquota: 25 },
      { id: "MA", estado: "Maranhão", aliquota: 25 },
      { id: "PB", estado: "Paraíba", aliquota: 25 },
      { id: "PI", estado: "Piauí", aliquota: 25 },
      { id: "RN", estado: "Rio Grande do Norte", aliquota: 25 },
      { id: "AL", estado: "Alagoas", aliquota: 27 },
      { id: "SE", estado: "Sergipe", aliquota: 27 },
      { id: "AM", estado: "Amazonas", aliquota: 25 },
      { id: "RO", estado: "Rondônia", aliquota: 25 },
      { id: "TO", estado: "Tocantins", aliquota: 25 },
      { id: "AC", estado: "Acre", aliquota: 25 },
      { id: "AP", estado: "Amapá", aliquota: 25 },
      { id: "RR", estado: "Roraima", aliquota: 25 },
    ],
  },
  {
    nome: "Energia Elétrica",
    estados: [
      { id: "SP", estado: "São Paulo", aliquota: 25 },
      { id: "RJ", estado: "Rio de Janeiro", aliquota: 30 },
      { id: "MG", estado: "Minas Gerais", aliquota: 30 },
      { id: "RS", estado: "Rio Grande do Sul", aliquota: 25 },
      { id: "PR", estado: "Paraná", aliquota: 29 },
      { id: "SC", estado: "Santa Catarina", aliquota: 25 },
      { id: "BA", estado: "Bahia", aliquota: 27 },
      { id: "GO", estado: "Goiás", aliquota: 29 },
      { id: "DF", estado: "Distrito Federal", aliquota: 25 },
      { id: "MT", estado: "Mato Grosso", aliquota: 25 },
      { id: "MS", estado: "Mato Grosso do Sul", aliquota: 25 },
      { id: "ES", estado: "Espírito Santo", aliquota: 25 },
      { id: "PE", estado: "Pernambuco", aliquota: 25 },
      { id: "CE", estado: "Ceará", aliquota: 27 },
      { id: "PA", estado: "Pará", aliquota: 25 },
      { id: "MA", estado: "Maranhão", aliquota: 25 },
      { id: "PB", estado: "Paraíba", aliquota: 25 },
      { id: "PI", estado: "Piauí", aliquota: 25 },
      { id: "RN", estado: "Rio Grande do Norte", aliquota: 25 },
      { id: "AL", estado: "Alagoas", aliquota: 25 },
      { id: "SE", estado: "Sergipe", aliquota: 25 },
      { id: "AM", estado: "Amazonas", aliquota: 25 },
      { id: "RO", estado: "Rondônia", aliquota: 25 },
      { id: "TO", estado: "Tocantins", aliquota: 25 },
      { id: "AC", estado: "Acre", aliquota: 25 },
      { id: "AP", estado: "Amapá", aliquota: 25 },
      { id: "RR", estado: "Roraima", aliquota: 25 },
    ],
  },
  {
    nome: "Telecomunicações",
    estados: [
      { id: "SP", estado: "São Paulo", aliquota: 25 },
      { id: "RJ", estado: "Rio de Janeiro", aliquota: 29 },
      { id: "MG", estado: "Minas Gerais", aliquota: 27 },
      { id: "RS", estado: "Rio Grande do Sul", aliquota: 30 },
      { id: "PR", estado: "Paraná", aliquota: 29 },
      { id: "SC", estado: "Santa Catarina", aliquota: 25 },
      { id: "BA", estado: "Bahia", aliquota: 27 },
      { id: "GO", estado: "Goiás", aliquota: 29 },
      { id: "DF", estado: "Distrito Federal", aliquota: 28 },
      { id: "MT", estado: "Mato Grosso", aliquota: 25 },
      { id: "MS", estado: "Mato Grosso do Sul", aliquota: 25 },
      { id: "ES", estado: "Espírito Santo", aliquota: 25 },
      { id: "PE", estado: "Pernambuco", aliquota: 25 },
      { id: "CE", estado: "Ceará", aliquota: 25 },
      { id: "PA", estado: "Pará", aliquota: 25 },
      { id: "MA", estado: "Maranhão", aliquota: 25 },
      { id: "PB", estado: "Paraíba", aliquota: 25 },
      { id: "PI", estado: "Piauí", aliquota: 25 },
      { id: "RN", estado: "Rio Grande do Norte", aliquota: 25 },
      { id: "AL", estado: "Alagoas", aliquota: 25 },
      { id: "SE", estado: "Sergipe", aliquota: 25 },
      { id: "AM", estado: "Amazonas", aliquota: 25 },
      { id: "RO", estado: "Rondônia", aliquota: 25 },
      { id: "TO", estado: "Tocantins", aliquota: 25 },
      { id: "AC", estado: "Acre", aliquota: 25 },
      { id: "AP", estado: "Amapá", aliquota: 25 },
      { id: "RR", estado: "Roraima", aliquota: 25 },
    ],
  },
  {
    nome: "Bebidas Alcoólicas",
    estados: [
      { id: "SP", estado: "São Paulo", aliquota: 25 },
      { id: "RJ", estado: "Rio de Janeiro", aliquota: 25 },
      { id: "MG", estado: "Minas Gerais", aliquota: 25 },
      { id: "RS", estado: "Rio Grande do Sul", aliquota: 25 },
      { id: "PR", estado: "Paraná", aliquota: 29 },
      { id: "SC", estado: "Santa Catarina", aliquota: 25 },
      { id: "BA", estado: "Bahia", aliquota: 25 },
      { id: "GO", estado: "Goiás", aliquota: 25 },
      { id: "DF", estado: "Distrito Federal", aliquota: 25 },
      { id: "MT", estado: "Mato Grosso", aliquota: 25 },
      { id: "MS", estado: "Mato Grosso do Sul", aliquota: 25 },
      { id: "ES", estado: "Espírito Santo", aliquota: 25 },
      { id: "PE", estado: "Pernambuco", aliquota: 25 },
      { id: "CE", estado: "Ceará", aliquota: 25 },
      { id: "PA", estado: "Pará", aliquota: 25 },
      { id: "MA", estado: "Maranhão", aliquota: 25 },
      { id: "PB", estado: "Paraíba", aliquota: 25 },
      { id: "PI", estado: "Piauí", aliquota: 25 },
      { id: "RN", estado: "Rio Grande do Norte", aliquota: 25 },
      { id: "AL", estado: "Alagoas", aliquota: 25 },
      { id: "SE", estado: "Sergipe", aliquota: 25 },
      { id: "AM", estado: "Amazonas", aliquota: 25 },
      { id: "RO", estado: "Rondônia", aliquota: 25 },
      { id: "TO", estado: "Tocantins", aliquota: 25 },
      { id: "AC", estado: "Acre", aliquota: 25 },
      { id: "AP", estado: "Amapá", aliquota: 25 },
      { id: "RR", estado: "Roraima", aliquota: 25 },
    ],
  },
]

// Componente principal do Mapa ICMS
const MapaICMS: React.FC = () => {
  const [mapaCarregado, setMapaCarregado] = useState(false)
  const [erroCarregamento, setErroCarregamento] = useState(false)
  const [tipoAliquota, setTipoAliquota] = useState<string>("interna")
  const [estadoHover, setEstadoHover] = useState<string | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("padrao")

  // Verificar se o mapa foi carregado
  useEffect(() => {
    fetch("/brasil-states.json")
      .then((response) => {
        if (response.ok) {
          setMapaCarregado(true)
        } else {
          setErroCarregamento(true)
        }
      })
      .catch(() => {
        setErroCarregamento(true)
      })

    const timer = setTimeout(() => {
      if (!mapaCarregado) {
        setErroCarregamento(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [mapaCarregado])

  // Função para obter a cor do estado com base na alíquota
  const getColorScale = (aliquota: number) => {
    if (aliquota <= 7) return "#E0F2FE" // Azul muito claro
    if (aliquota <= 12) return "#BAE6FD" // Azul claro
    if (aliquota <= 17) return "#7DD3FC" // Azul médio claro
    if (aliquota <= 18) return "#38BDF8" // Azul médio
    if (aliquota <= 20) return "#0EA5E9" // Azul médio escuro
    if (aliquota <= 25) return "#0284C7" // Azul escuro
    if (aliquota <= 30) return "#0369A1" // Azul mais escuro
    return "#075985" // Azul muito escuro
  }

  // Função para obter a alíquota do estado com base no tipo selecionado
  const getAliquota = (stateId: string) => {
    if (produtoSelecionado) {
      const produto = produtosEspeciais.find((p) => p.nome === produtoSelecionado)
      if (produto) {
        const estadoProduto = produto.estados.find((e) => e.id === stateId)
        if (estadoProduto) {
          return estadoProduto.aliquota
        }
      }
    }

    const estado = dadosICMS.find((e) => e.id === stateId)
    if (!estado) return 0

    if (tipoAliquota === "interna") {
      return estado.aliquotaInterna
    } else if (tipoAliquota === "interestadual_sul_sudeste") {
      return estado.aliquotaInterestadual.sul_sudeste
    } else {
      return estado.aliquotaInterestadual.outros
    }
  }

  // Função para obter informações do tooltip
  const getTooltipContent = (stateId: string) => {
    const estado = dadosICMS.find((e) => e.id === stateId)
    if (!estado) return ""

    const aliquota = getAliquota(stateId)
    let tipoTexto = ""

    if (produtoSelecionado) {
      tipoTexto = `Alíquota para ${produtoSelecionado}`
    } else if (tipoAliquota === "interna") {
      tipoTexto = "Alíquota Interna"
    } else if (tipoAliquota === "interestadual_sul_sudeste") {
      tipoTexto = "Alíquota Interestadual (Sul/Sudeste)"
    } else {
      tipoTexto = "Alíquota Interestadual (Outros)"
    }

    return (
      <div className="p-4 bg-white dark:bg-bg-darker shadow-xl rounded-lg border border-bg-medium/20 dark:border-bg-dark/30 backdrop-blur-sm">
        <h3 className="font-bold text-lg text-txt-primary dark:text-txt-light">{estado.estado}</h3>
        <p className="text-txt-secondary dark:text-txt-muted mt-1">
          {tipoTexto}: <span className="font-semibold text-primary dark:text-secondary">{aliquota}%</span>
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mapa de Alíquotas de ICMS</h1>
          <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-3xl mx-auto">
            Visualize as alíquotas de ICMS aplicadas em cada estado brasileiro, incluindo alíquotas internas e
            interestaduais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-bg-medium/20 dark:border-bg-dark/30">
              <div className="p-6 border-b border-bg-medium/30 dark:border-bg-dark/50">
                <h2 className="text-2xl font-bold text-txt-primary dark:text-txt-light">Mapa do Brasil</h2>
                <p className="text-txt-secondary dark:text-txt-muted mt-1">
                  Passe o mouse sobre os estados para ver detalhes
                </p>
              </div>
              <div className="p-0">
                <div className="w-full h-[600px] relative bg-white dark:bg-bg-darker">
                  {/* Indicador de carregamento */}
                  {!mapaCarregado && !erroCarregamento && (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="animate-spin rounded-full h-10 w-10 border-4 border-bg-medium dark:border-bg-dark border-t-primary dark:border-t-secondary"></div>
                      <span className="ml-4 text-txt-secondary dark:text-txt-muted">Carregando mapa...</span>
                    </div>
                  )}

                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 800,
                      center: [-55, -15],
                    }}
                    className="z-10 relative"
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <ZoomableGroup>
                      <Geographies geography="/brasil-states.json">
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const stateId = geo.properties.sigla
                            const aliquota = getAliquota(stateId)
                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={getColorScale(aliquota)}
                                stroke="#FFFFFF"
                                strokeWidth={0.5}
                                style={{
                                  default: { outline: "none" },
                                  hover: { outline: "none", fill: "#38BDF8", stroke: "#FFFFFF", strokeWidth: 1.5 },
                                  pressed: { outline: "none" },
                                }}
                                onMouseEnter={() => {
                                  setEstadoHover(stateId)
                                }}
                                onMouseLeave={() => {
                                  setEstadoHover(null)
                                }}
                              />
                            )
                          })
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>

                  {erroCarregamento && (
                    <div className="absolute inset-0 bg-white dark:bg-bg-darker z-20 flex flex-col items-center justify-center p-6">
                      <div className="text-state-error mb-6">
                        <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
                        <p className="text-center font-medium text-lg">Não foi possível carregar o mapa interativo.</p>
                      </div>
                      <div className="border border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-6 w-full max-w-md">
                        <p className="mb-4 text-txt-secondary dark:text-txt-muted">
                          Você ainda pode consultar as alíquotas na tabela abaixo.
                        </p>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Brazil_Regions_Map.svg/800px-Brazil_Regions_Map.svg.png"
                          alt="Mapa do Brasil"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tooltip */}
                  {estadoHover && (
                    <div
                      className="absolute pointer-events-none z-30"
                      style={{
                        left: "50%",
                        top: "20px",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {getTooltipContent(estadoHover)}
                    </div>
                  )}
                </div>

                {/* Legenda */}
                <div className="p-6 border-t border-bg-medium/30 dark:border-bg-dark/50 bg-white dark:bg-bg-darker flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#E0F2FE" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">Até 7%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#BAE6FD" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">8% - 12%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#7DD3FC" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">13% - 17%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#38BDF8" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">18%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#0EA5E9" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">19% - 20%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#0284C7" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">21% - 25%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#0369A1" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">26% - 30%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#075985" }}></div>
                    <span className="text-sm text-txt-secondary dark:text-txt-muted">Acima de 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden mb-8 border border-bg-medium/20 dark:border-bg-dark/30">
              <div className="p-6 border-b border-bg-medium/30 dark:border-bg-dark/50">
                <h2 className="text-2xl font-bold text-txt-primary dark:text-txt-light">Filtros</h2>
                <p className="text-txt-secondary dark:text-txt-muted mt-1">Selecione o tipo de alíquota</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3 text-txt-primary dark:text-txt-light">Tipo de Alíquota</h3>
                    <div className="space-y-3">
                      <button
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                          tipoAliquota === "interna"
                            ? "bg-gradient-primary text-txt-light"
                            : "bg-bg-medium dark:bg-bg-dark text-txt-primary dark:text-txt-light hover:bg-primary/10 dark:hover:bg-primary/20"
                        }`}
                        onClick={() => {
                          setTipoAliquota("interna")
                          setProdutoSelecionado(null)
                        }}
                      >
                        Alíquota Interna
                      </button>
                      <button
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                          tipoAliquota === "interestadual_sul_sudeste"
                            ? "bg-gradient-primary text-txt-light"
                            : "bg-bg-medium dark:bg-bg-dark text-txt-primary dark:text-txt-light hover:bg-primary/10 dark:hover:bg-primary/20"
                        }`}
                        onClick={() => {
                          setTipoAliquota("interestadual_sul_sudeste")
                          setProdutoSelecionado(null)
                        }}
                      >
                        Interestadual (Sul/Sudeste)
                      </button>
                      <button
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                          tipoAliquota === "interestadual_outros"
                            ? "bg-gradient-primary text-txt-light"
                            : "bg-bg-medium dark:bg-bg-dark text-txt-primary dark:text-txt-light hover:bg-primary/10 dark:hover:bg-primary/20"
                        }`}
                        onClick={() => {
                          setTipoAliquota("interestadual_outros")
                          setProdutoSelecionado(null)
                        }}
                      >
                        Interestadual (Outros)
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3 text-txt-primary dark:text-txt-light">
                      Produtos com Alíquotas Especiais
                    </h3>
                    <div className="space-y-3">
                      {produtosEspeciais.map((produto) => (
                        <button
                          key={produto.nome}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                            produtoSelecionado === produto.nome
                              ? "bg-gradient-secondary text-txt-primary dark:text-txt-light"
                              : "bg-bg-medium dark:bg-bg-dark text-txt-primary dark:text-txt-light hover:bg-secondary/10 dark:hover:bg-secondary/20"
                          }`}
                          onClick={() => setProdutoSelecionado(produtoSelecionado === produto.nome ? null : produto.nome)}
                        >
                          {produto.nome}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-bg-medium/50 dark:bg-bg-dark/50 p-5 rounded-xl border border-bg-medium/30 dark:border-bg-dark/50">
                    <div className="flex items-start mb-3">
                      <Info className="h-5 w-5 text-secondary mt-0.5 mr-2" />
                      <h3 className="text-sm font-medium text-txt-primary dark:text-txt-light">Informações</h3>
                    </div>
                    <ul className="text-xs space-y-2 text-txt-secondary dark:text-txt-muted">
                      <li>
                        <span className="font-medium text-txt-primary dark:text-txt-light">Alíquota Interna:</span> Aplicada
                        em operações dentro do mesmo estado
                      </li>
                      <li>
                        <span className="font-medium text-txt-primary dark:text-txt-light">Alíquota Interestadual:</span>{" "}
                        Aplicada em operações entre estados diferentes
                      </li>
                      <li>
                        <span className="font-medium text-txt-primary dark:text-txt-light">Sul/Sudeste:</span> Operações
                        entre estados das regiões Sul e Sudeste (exceto ES)
                      </li>
                      <li>
                        <span className="font-medium text-txt-primary dark:text-txt-light">Outros:</span> Operações para
                        estados das regiões Norte, Nordeste, Centro-Oeste e ES
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-bg-medium/20 dark:border-bg-dark/30">
            <div className="p-6 border-b border-bg-medium/30 dark:border-bg-dark/50">
              <h2 className="text-2xl font-bold text-txt-primary dark:text-txt-light">Tabela de Alíquotas</h2>
              <p className="text-txt-secondary dark:text-txt-muted mt-1">Consulte as alíquotas de ICMS de todos os estados</p>
            </div>
            <div className="p-0">
              <div className="border-b border-bg-medium/30 dark:border-bg-dark/50">
                <div className="flex">
                  <button
                    className={`px-6 py-4 font-medium text-sm transition-colors ${
                      activeTab === "padrao"
                        ? "border-b-2 border-primary dark:border-secondary text-primary dark:text-secondary"
                        : "text-txt-secondary dark:text-txt-muted hover:text-txt-primary dark:hover:text-txt-light"
                    }`}
                    onClick={() => setActiveTab("padrao")}
                  >
                    Alíquotas Padrão
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-sm transition-colors ${
                      activeTab === "especiais"
                        ? "border-b-2 border-primary dark:border-secondary text-primary dark:text-secondary"
                        : "text-txt-secondary dark:text-txt-muted hover:text-txt-primary dark:hover:text-txt-light"
                    }`}
                    onClick={() => setActiveTab("especiais")}
                  >
                    Alíquotas Especiais
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "padrao" && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                            Estado
                          </th>
                          <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                            Alíquota Interna
                          </th>
                          <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                            Interestadual (Sul/Sudeste)
                          </th>
                          <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                            Interestadual (Outros)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dadosICMS.map((estado, index) => (
                          <tr
                            key={estado.id}
                            className={
                              index % 2 === 0 ? "bg-white dark:bg-bg-darker" : "bg-bg-medium/30 dark:bg-bg-dark/30"
                            }
                          >
                            <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 font-medium text-txt-primary dark:text-txt-light">
                              {estado.estado}
                            </td>
                            <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-txt-secondary dark:text-txt-muted">
                              {estado.aliquotaInterna}%
                            </td>
                            <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-txt-secondary dark:text-txt-muted">
                              {estado.aliquotaInterestadual.sul_sudeste}%
                            </td>
                            <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-txt-secondary dark:text-txt-muted">
                              {estado.aliquotaInterestadual.outros}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "especiais" && (
                  <div className="space-y-10">
                    {produtosEspeciais.map((produto) => (
                      <div key={produto.nome}>
                        <h3 className="font-medium text-txt-primary dark:text-txt-light mb-4 pb-2 border-b border-bg-medium/30 dark:border-bg-dark/50">
                          {produto.nome}
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                                  Estado
                                </th>
                                <th className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-left bg-bg-medium/50 dark:bg-bg-dark/50 font-medium text-txt-primary dark:text-txt-light">
                                  Alíquota
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {produto.estados.map((estado, index) => (
                                <tr
                                  key={estado.id}
                                  className={
                                    index % 2 === 0 ? "bg-white dark:bg-bg-darker" : "bg-bg-medium/30 dark:bg-bg-dark/30"
                                  }
                                >
                                  <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 font-medium text-txt-primary dark:text-txt-light">
                                    {estado.estado}
                                  </td>
                                  <td className="border border-bg-medium/30 dark:border-bg-dark/50 p-3 text-txt-secondary dark:text-txt-muted">
                                    {estado.aliquota}%
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-bg-medium/20 dark:border-bg-dark/30">
            <div className="p-6 border-b border-bg-medium/30 dark:border-bg-dark/50">
              <h2 className="text-2xl font-bold text-txt-primary dark:text-txt-light">Notas Importantes</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-txt-secondary dark:text-txt-muted text-base">
                <p>
                  As alíquotas apresentadas neste mapa são aproximadas e podem sofrer alterações. Consulte sempre a
                  legislação estadual atualizada para obter informações precisas.
                </p>
                <p>
                  Além das alíquotas padrão, existem diversos benefícios fiscais, reduções de base de cálculo e regimes
                  especiais que podem alterar a carga tributária efetiva em cada estado.
                </p>
                <p>
                  Para produtos importados, a alíquota interestadual é de 4%, conforme Resolução do Senado Federal nº
                  13/2012.
                </p>
                <p>
                  Alguns produtos possuem alíquotas diferenciadas em função da essencialidade, como medicamentos,
                  alimentos da cesta básica, veículos, etc.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MapaICMS

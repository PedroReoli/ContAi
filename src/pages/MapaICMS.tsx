"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { AlertTriangle, Info } from "lucide-react"

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
    if (aliquota <= 7) return "#F8FAFC" // Slate 50
    if (aliquota <= 12) return "#E2E8F0" // Slate 200
    if (aliquota <= 17) return "#B59B6A" // Dourado suave (mais claro)
    if (aliquota <= 18) return "#9A8359" // Dourado suave (mais escuro)
    if (aliquota <= 20) return "#6D4141" // Vinho (mais claro)
    if (aliquota <= 25) return "#4B2C2C" // Vinho profundo
    if (aliquota <= 30) return "#3A2222" // Vinho (mais escuro)
    return "#1E1E1E" // Preto fosco
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
      <div className="p-4 bg-white dark:bg-slate-800 shadow-xl rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{estado.estado}</h3>
        <p className="text-slate-600 dark:text-slate-300 mt-1">
          {tipoTexto}: <span className="font-semibold text-vinho dark:text-dourado">{aliquota}%</span>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
          Mapa de Alíquotas de ICMS
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
          Visualize as alíquotas de ICMS aplicadas em cada estado brasileiro, incluindo alíquotas internas e
          interestaduais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Mapa do Brasil</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Passe o mouse sobre os estados para ver detalhes
              </p>
            </div>
            <div className="p-0">
              <div className="w-full h-[600px] relative bg-white dark:bg-slate-800">
                {/* Indicador de carregamento */}
                {!mapaCarregado && !erroCarregamento && (
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-slate-200 dark:border-slate-700 border-t-vinho dark:border-t-dourado"></div>
                    <span className="ml-4 text-slate-600 dark:text-slate-400">Carregando mapa...</span>
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
                                hover: { outline: "none", fill: "#B59B6A", stroke: "#FFFFFF", strokeWidth: 1.5 },
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
                  <div className="absolute inset-0 bg-white dark:bg-slate-800 z-20 flex flex-col items-center justify-center p-6">
                    <div className="text-red-600 dark:text-red-400 mb-6">
                      <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-center font-medium text-lg">Não foi possível carregar o mapa interativo.</p>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 w-full max-w-md">
                      <p className="mb-4 text-slate-600 dark:text-slate-400">
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
              <div className="p-6 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-wrap justify-center gap-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#F8FAFC" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Até 7%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#E2E8F0" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">8% - 12%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#B59B6A" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">13% - 17%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#9A8359" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">18%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#6D4141" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">19% - 20%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#4B2C2C" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">21% - 25%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#3A2222" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">26% - 30%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#1E1E1E" }}></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Acima de 30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Filtros</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Selecione o tipo de alíquota</p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-slate-900 dark:text-slate-100">Tipo de Alíquota</h3>
                  <div className="space-y-3">
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                        tipoAliquota === "interna"
                          ? "bg-vinho text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-vinho/20 dark:hover:bg-vinho/40"
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
                          ? "bg-vinho text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-vinho/20 dark:hover:bg-vinho/40"
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
                          ? "bg-vinho text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-vinho/20 dark:hover:bg-vinho/40"
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
                  <h3 className="text-sm font-medium mb-3 text-slate-900 dark:text-slate-100">
                    Produtos com Alíquotas Especiais
                  </h3>
                  <div className="space-y-3">
                    {produtosEspeciais.map((produto) => (
                      <button
                        key={produto.nome}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                          produtoSelecionado === produto.nome
                            ? "bg-dourado text-slate-900"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-dourado/20 dark:hover:bg-dourado/40"
                        }`}
                        onClick={() => setProdutoSelecionado(produtoSelecionado === produto.nome ? null : produto.nome)}
                      >
                        {produto.nome}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start mb-3">
                    <Info className="h-5 w-5 text-dourado mt-0.5 mr-2" />
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">Informações</h3>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                    <li>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Alíquota Interna:</span> Aplicada
                      em operações dentro do mesmo estado
                    </li>
                    <li>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Alíquota Interestadual:</span>{" "}
                      Aplicada em operações entre estados diferentes
                    </li>
                    <li>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Sul/Sudeste:</span> Operações
                      entre estados das regiões Sul e Sudeste (exceto ES)
                    </li>
                    <li>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Outros:</span> Operações para
                      estados das regiões Norte, Nordeste, Centro-Oeste e ES
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Tabela de Alíquotas</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Consulte as alíquotas de ICMS de todos os estados</p>
          </div>
          <div className="p-0">
            <div className="border-b border-slate-200 dark:border-slate-700">
              <div className="flex">
                <button
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === "padrao"
                      ? "border-b-2 border-vinho dark:border-dourado text-vinho dark:text-dourado"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                  onClick={() => setActiveTab("padrao")}
                >
                  Alíquotas Padrão
                </button>
                <button
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === "especiais"
                      ? "border-b-2 border-vinho dark:border-dourado text-vinho dark:text-dourado"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
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
                        <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                          Estado
                        </th>
                        <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                          Alíquota Interna
                        </th>
                        <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                          Interestadual (Sul/Sudeste)
                        </th>
                        <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                          Interestadual (Outros)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dadosICMS.map((estado, index) => (
                        <tr
                          key={estado.id}
                          className={
                            index % 2 === 0 ? "bg-white dark:bg-slate-800" : "bg-slate-50 dark:bg-slate-800/50"
                          }
                        >
                          <td className="border border-slate-200 dark:border-slate-700 p-3 font-medium text-slate-900 dark:text-slate-100">
                            {estado.estado}
                          </td>
                          <td className="border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
                            {estado.aliquotaInterna}%
                          </td>
                          <td className="border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
                            {estado.aliquotaInterestadual.sul_sudeste}%
                          </td>
                          <td className="border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
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
                      <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                        {produto.nome}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr>
                              <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                                Estado
                              </th>
                              <th className="border border-slate-200 dark:border-slate-700 p-3 text-left bg-slate-50 dark:bg-slate-800/50 font-medium text-slate-900 dark:text-slate-100">
                                Alíquota
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {produto.estados.map((estado, index) => (
                              <tr
                                key={estado.id}
                                className={
                                  index % 2 === 0 ? "bg-white dark:bg-slate-800" : "bg-slate-50 dark:bg-slate-800/50"
                                }
                              >
                                <td className="border border-slate-200 dark:border-slate-700 p-3 font-medium text-slate-900 dark:text-slate-100">
                                  {estado.estado}
                                </td>
                                <td className="border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
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
      </div>

      <div className="mt-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Notas Importantes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base">
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
      </div>
    </div>
  )
}

export default MapaICMS


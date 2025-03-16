"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { cn } from "@/lib/utils"
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
    if (aliquota <= 7) return "#EDF2F7"
    if (aliquota <= 12) return "#CBD5E0"
    if (aliquota <= 17) return "#A0AEC0"
    if (aliquota <= 18) return "#718096"
    if (aliquota <= 20) return "#4A5568"
    if (aliquota <= 25) return "#2D3748"
    if (aliquota <= 30) return "#1A202C"
    return "#171923"
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
      <div className="p-3 bg-white shadow-lg rounded-md border">
        <h3 className="font-bold text-gray-800">{estado.estado}</h3>
        <p className="text-gray-600">
          {tipoTexto}: <span className="font-semibold text-gray-800">{aliquota}%</span>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mapa de Alíquotas de ICMS</h1>
        <p className="text-gray-600 max-w-3xl">
          Visualize as alíquotas de ICMS aplicadas em cada estado brasileiro, incluindo alíquotas internas e
          interestaduais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Card className="overflow-hidden shadow-sm border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Mapa do Brasil</CardTitle>
              <CardDescription>Passe o mouse sobre os estados para ver detalhes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px] relative bg-white">
                {/* Indicador de carregamento */}
                {!mapaCarregado && !erroCarregamento && (
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-800"></div>
                    <span className="ml-3 text-gray-600">Carregando mapa...</span>
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
                                hover: { outline: "none", fill: "#3182CE", stroke: "#FFFFFF", strokeWidth: 1 },
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
                  <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-4">
                    <div className="text-red-500 mb-4">
                      <AlertTriangle className="h-10 w-10 mx-auto mb-2" />
                      <p className="text-center font-medium">Não foi possível carregar o mapa interativo.</p>
                    </div>
                    <div className="border rounded p-4 w-full max-w-md">
                      <p className="mb-4 text-sm text-gray-600">
                        Você ainda pode consultar as alíquotas na tabela abaixo.
                      </p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Brazil_Regions_Map.svg/800px-Brazil_Regions_Map.svg.png"
                        alt="Mapa do Brasil"
                        className="w-full h-auto rounded"
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
              <div className="p-4 border-t bg-gray-50 flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#EDF2F7" }}></div>
                  <span className="text-sm text-gray-600">Até 7%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#CBD5E0" }}></div>
                  <span className="text-sm text-gray-600">8% - 12%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#A0AEC0" }}></div>
                  <span className="text-sm text-gray-600">13% - 17%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#718096" }}></div>
                  <span className="text-sm text-gray-600">18%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#4A5568" }}></div>
                  <span className="text-sm text-gray-600">19% - 20%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#2D3748" }}></div>
                  <span className="text-sm text-gray-600">21% - 25%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#1A202C" }}></div>
                  <span className="text-sm text-gray-600">26% - 30%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: "#171923" }}></div>
                  <span className="text-sm text-gray-600">Acima de 30%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-sm border-0 mb-8">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Filtros</CardTitle>
              <CardDescription>Selecione o tipo de alíquota</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-700">Tipo de Alíquota</h3>
                  <div className="space-y-2">
                    <button
                      className={cn(
                        "w-full text-left px-3 py-2 rounded text-sm transition-colors",
                        tipoAliquota === "interna"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                      onClick={() => {
                        setTipoAliquota("interna")
                        setProdutoSelecionado(null)
                      }}
                    >
                      Alíquota Interna
                    </button>
                    <button
                      className={cn(
                        "w-full text-left px-3 py-2 rounded text-sm transition-colors",
                        tipoAliquota === "interestadual_sul_sudeste"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                      onClick={() => {
                        setTipoAliquota("interestadual_sul_sudeste")
                        setProdutoSelecionado(null)
                      }}
                    >
                      Interestadual (Sul/Sudeste)
                    </button>
                    <button
                      className={cn(
                        "w-full text-left px-3 py-2 rounded text-sm transition-colors",
                        tipoAliquota === "interestadual_outros"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
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
                  <h3 className="text-sm font-medium mb-3 text-gray-700">Produtos com Alíquotas Especiais</h3>
                  <div className="space-y-2">
                    {produtosEspeciais.map((produto) => (
                      <button
                        key={produto.nome}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded text-sm transition-colors",
                          produtoSelecionado === produto.nome
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                        )}
                        onClick={() => setProdutoSelecionado(produtoSelecionado === produto.nome ? null : produto.nome)}
                      >
                        {produto.nome}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded border">
                  <div className="flex items-start mb-2">
                    <Info className="h-4 w-4 text-gray-500 mt-0.5 mr-2" />
                    <h3 className="text-sm font-medium text-gray-700">Informações</h3>
                  </div>
                  <ul className="text-xs space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Alíquota Interna:</span> Aplicada em operações dentro do mesmo
                      estado
                    </li>
                    <li>
                      <span className="font-medium">Alíquota Interestadual:</span> Aplicada em operações entre estados
                      diferentes
                    </li>
                    <li>
                      <span className="font-medium">Sul/Sudeste:</span> Operações entre estados das regiões Sul e
                      Sudeste (exceto ES)
                    </li>
                    <li>
                      <span className="font-medium">Outros:</span> Operações para estados das regiões Norte, Nordeste,
                      Centro-Oeste e ES
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card className="shadow-sm border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle>Tabela de Alíquotas</CardTitle>
            <CardDescription>Consulte as alíquotas de ICMS de todos os estados</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultTab="padrao">
              <TabList className="px-4 pt-4 border-b">
                <Tab id="padrao" className="px-4 py-2 font-medium">
                  Alíquotas Padrão
                </Tab>
                <Tab id="especiais" className="px-4 py-2 font-medium">
                  Alíquotas Especiais
                </Tab>
              </TabList>

              <TabPanel id="padrao" className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                          Estado
                        </th>
                        <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                          Alíquota Interna
                        </th>
                        <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                          Interestadual (Sul/Sudeste)
                        </th>
                        <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                          Interestadual (Outros)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dadosICMS.map((estado, index) => (
                        <tr key={estado.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border border-gray-200 p-2 font-medium text-gray-700">{estado.estado}</td>
                          <td className="border border-gray-200 p-2 text-gray-600">{estado.aliquotaInterna}%</td>
                          <td className="border border-gray-200 p-2 text-gray-600">
                            {estado.aliquotaInterestadual.sul_sudeste}%
                          </td>
                          <td className="border border-gray-200 p-2 text-gray-600">
                            {estado.aliquotaInterestadual.outros}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>

              <TabPanel id="especiais" className="p-4">
                <div className="space-y-8">
                  {produtosEspeciais.map((produto) => (
                    <div key={produto.nome}>
                      <h3 className="font-medium text-gray-800 mb-3 pb-1 border-b">{produto.nome}</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr>
                              <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                                Estado
                              </th>
                              <th className="border border-gray-200 p-2 text-left bg-gray-50 font-medium text-gray-700">
                                Alíquota
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {produto.estados.map((estado, index) => (
                              <tr key={estado.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border border-gray-200 p-2 font-medium text-gray-700">
                                  {estado.estado}
                                </td>
                                <td className="border border-gray-200 p-2 text-gray-600">{estado.aliquota}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="shadow-sm border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle>Notas Importantes</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3 text-gray-600 text-sm">
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MapaICMS


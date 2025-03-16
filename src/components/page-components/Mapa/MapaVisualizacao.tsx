"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface MapaVisualizacaoProps {
  getAliquota: (stateId: string) => number
  getColorScale: (aliquota: number) => string
  getTooltipContent: (stateId: string) => React.ReactNode
}

const MapaVisualizacao: React.FC<MapaVisualizacaoProps> = ({ getAliquota, getColorScale, getTooltipContent }) => {
  const [mapaCarregado, setMapaCarregado] = useState(false)
  const [erroCarregamento, setErroCarregamento] = useState(false)
  const [estadoHover, setEstadoHover] = useState<string | null>(null)

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

  return (
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
          <MapaLegenda />
        </div>
      </div>
    </motion.div>
  )
}

const MapaLegenda: React.FC = () => {
  return (
    <div className="p-6 border-t border-bg-medium/30 dark:border-bg-dark/50 bg-white dark:bg-bg-darker flex flex-wrap justify-center gap-6">
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#BFDBFE" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">Até 7%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#93C5FD" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">8% - 12%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#60A5FA" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">13% - 17%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#3B82F6" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">18%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#2563EB" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">19% - 20%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#1D4ED8" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">21% - 25%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#1E40AF" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">26% - 30%</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-5 mr-2 rounded" style={{ backgroundColor: "#1E3A8A" }}></div>
        <span className="text-sm text-txt-secondary dark:text-txt-muted">Acima de 30%</span>
      </div>
    </div>
  )
}

export default MapaVisualizacao


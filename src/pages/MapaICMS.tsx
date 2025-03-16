"use client"

import type React from "react"
import { useState } from "react"
import {
  MapaHeader,
  MapaVisualizacao,
  MapaFiltros,
  MapaTabela,
  MapaNotas,
  dadosICMS,
  produtosEspeciais,
} from "@/components/page-components/Mapa"

const MapaICMS: React.FC = () => {
  const [tipoAliquota, setTipoAliquota] = useState<string>("interna")
  const [produtoSelecionado, setProdutoSelecionado] = useState<string | null>(null)

  // Função para obter a cor do estado com base na alíquota
  const getColorScale = (aliquota: number) => {
    if (aliquota <= 7) return "#BFDBFE" // Azul muito claro
    if (aliquota <= 12) return "#93C5FD" // Azul claro
    if (aliquota <= 17) return "#60A5FA" // Azul médio claro
    if (aliquota <= 18) return "#3B82F6" // Azul médio
    if (aliquota <= 20) return "#2563EB" // Azul médio escuro
    if (aliquota <= 25) return "#1D4ED8" // Azul escuro
    if (aliquota <= 30) return "#1E40AF" // Azul mais escuro
    return "#1E3A8A" // Azul muito escuro
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
        <MapaHeader
          title="Mapa de Alíquotas de ICMS"
          description="Visualize as alíquotas de ICMS aplicadas em cada estado brasileiro, incluindo alíquotas internas e interestaduais."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <MapaVisualizacao
            getAliquota={getAliquota}
            getColorScale={getColorScale}
            getTooltipContent={getTooltipContent}
          />

          <MapaFiltros
            tipoAliquota={tipoAliquota}
            setTipoAliquota={setTipoAliquota}
            produtoSelecionado={produtoSelecionado}
            setProdutoSelecionado={setProdutoSelecionado}
            produtosEspeciais={produtosEspeciais}
          />
        </div>

        <MapaTabela dadosICMS={dadosICMS} produtosEspeciais={produtosEspeciais} />

        <MapaNotas />
      </div>
    </div>
  )
}

export default MapaICMS


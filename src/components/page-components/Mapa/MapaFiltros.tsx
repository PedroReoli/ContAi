"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Info } from "lucide-react"

interface ProdutoEspecial {
  nome: string
  estados: Array<{
    id: string
    estado: string
    aliquota: number
  }>
}

interface MapaFiltrosProps {
  tipoAliquota: string
  setTipoAliquota: (tipo: string) => void
  produtoSelecionado: string | null
  setProdutoSelecionado: (produto: string | null) => void
  produtosEspeciais: ProdutoEspecial[]
}

const MapaFiltros: React.FC<MapaFiltrosProps> = ({
  tipoAliquota,
  setTipoAliquota,
  produtoSelecionado,
  setProdutoSelecionado,
  produtosEspeciais,
}) => {
  return (
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
                  <span className="font-medium text-txt-primary dark:text-txt-light">Sul/Sudeste:</span> Operações entre
                  estados das regiões Sul e Sudeste (exceto ES)
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
  )
}

export default MapaFiltros


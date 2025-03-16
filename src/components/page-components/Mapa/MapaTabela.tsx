"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface DadoICMS {
  id: string
  estado: string
  aliquotaInterna: number
  aliquotaInterestadual: {
    sul_sudeste: number
    outros: number
  }
}

interface ProdutoEspecial {
  nome: string
  estados: Array<{
    id: string
    estado: string
    aliquota: number
  }>
}

interface MapaTabelaProps {
  dadosICMS: DadoICMS[]
  produtosEspeciais: ProdutoEspecial[]
}

const MapaTabela: React.FC<MapaTabelaProps> = ({ dadosICMS, produtosEspeciais }) => {
  const [activeTab, setActiveTab] = useState("padrao")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-12"
    >
      <div className="bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-bg-medium/20 dark:border-bg-dark/30">
        <div className="p-6 border-b border-bg-medium/30 dark:border-bg-dark/50">
          <h2 className="text-2xl font-bold text-txt-primary dark:text-txt-light">Tabela de Alíquotas</h2>
          <p className="text-txt-secondary dark:text-txt-muted mt-1">
            Consulte as alíquotas de ICMS de todos os estados
          </p>
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
  )
}

export default MapaTabela


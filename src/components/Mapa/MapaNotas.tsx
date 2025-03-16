"use client"

import type React from "react"
import { motion } from "framer-motion"

const MapaNotas: React.FC = () => {
  return (
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
              Alguns produtos possuem alíquotas diferenciadas em função da essencialidade, como medicamentos, alimentos
              da cesta básica, veículos, etc.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MapaNotas


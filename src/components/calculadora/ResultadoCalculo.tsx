import type React from "react"

interface ResultadoCalculoProps {
  resultado: {
    valorOperacao: number
    baseCalculo: number
    aliquota: number
    valorICMS: number
    [key: string]: any
  }
  campos?: {
    label: string
    key: string
    formatador?: (valor: any) => string
  }[]
}

const ResultadoCalculo: React.FC<ResultadoCalculoProps> = ({ resultado, campos }) => {
  const camposDefault = [
    {
      label: "Valor da Operação",
      key: "valorOperacao",
      formatador: (valor: number) => `R$ ${valor.toFixed(2)}`,
    },
    {
      label: "Base de Cálculo",
      key: "baseCalculo",
      formatador: (valor: number) => `R$ ${valor.toFixed(2)}`,
    },
    {
      label: "Alíquota",
      key: "aliquota",
      formatador: (valor: number) => `${valor.toFixed(2)}%`,
    },
    {
      label: "Valor do ICMS",
      key: "valorICMS",
      formatador: (valor: number) => `R$ ${valor.toFixed(2)}`,
    },
  ]

  const camposExibir = campos || camposDefault

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Resultado:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {camposExibir.map((campo, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600">{campo.label}:</p>
            <p className="font-medium">
              {campo.formatador ? campo.formatador(resultado[campo.key]) : resultado[campo.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultadoCalculo


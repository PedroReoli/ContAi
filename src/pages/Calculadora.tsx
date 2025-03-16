"use client"

import type React from "react"
import { useState, useEffect } from "react"
import CalculadoraICMS00 from "@/components/calculadora/CalculadoraICMS00"
import CalculadoraICMS10 from "@/components/calculadora/CalculadoraICMS10"
import CalculadoraICMS20 from "@/components/calculadora/CalculadoraICMS20"
import CalculadoraICMS51 from "@/components/calculadora/CalculadoraICMS51"
import CalculadoraICMS70 from "@/components/calculadora/CalculadoraICMS70"
import { isLocalStorageDisponivel } from "@/utils/storage"

const Calculadora: React.FC = () => {
  const [tipoICMS, setTipoICMS] = useState<string>("ICMS00")
  const [storageDisponivel, setStorageDisponivel] = useState(true)

  useEffect(() => {
    setStorageDisponivel(isLocalStorageDisponivel())
  }, [])

  const renderCalculadora = () => {
    switch (tipoICMS) {
      case "ICMS00":
        return <CalculadoraICMS00 storageDisponivel={storageDisponivel} />
      case "ICMS10":
        return <CalculadoraICMS10 storageDisponivel={storageDisponivel} />
      case "ICMS20":
        return <CalculadoraICMS20 storageDisponivel={storageDisponivel} />
      case "ICMS51":
        return <CalculadoraICMS51 storageDisponivel={storageDisponivel} />
      case "ICMS70":
        return <CalculadoraICMS70 storageDisponivel={storageDisponivel} />
      default:
        return <CalculadoraICMS00 storageDisponivel={storageDisponivel} />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Calculadora de ICMS</h1>

      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">Selecione o tipo de ICMS:</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTipoICMS("ICMS00")}
            className={`px-4 py-2 rounded-md ${
              tipoICMS === "ICMS00" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ICMS 00
          </button>
          <button
            onClick={() => setTipoICMS("ICMS10")}
            className={`px-4 py-2 rounded-md ${
              tipoICMS === "ICMS10" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ICMS 10
          </button>
          <button
            onClick={() => setTipoICMS("ICMS20")}
            className={`px-4 py-2 rounded-md ${
              tipoICMS === "ICMS20" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ICMS 20
          </button>
          <button
            onClick={() => setTipoICMS("ICMS51")}
            className={`px-4 py-2 rounded-md ${
              tipoICMS === "ICMS51" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ICMS 51
          </button>
          <button
            onClick={() => setTipoICMS("ICMS70")}
            className={`px-4 py-2 rounded-md ${
              tipoICMS === "ICMS70" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ICMS 70
          </button>
        </div>
      </div>

      {renderCalculadora()}
    </div>
  )
}

export default Calculadora


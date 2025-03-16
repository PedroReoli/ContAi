"use client"

import type React from "react"
import { useState } from "react"
import { formatCurrency, parseNumberBR } from "@/lib/utils"
import { calcularBaseIcms, calcularBaseIcmsST, calcularIcms10, calcularValorIcmsProprio } from "@/utils/calculadoraICMS"
import { salvarCalculo, type CalculoSalvo } from "@/utils/storage"
import PdfPreview from "@/components/PdfPreview"
import { Calculator, Save, FileText, AlertTriangle, CheckCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

interface CalculadoraProps {
  storageDisponivel: boolean
}

const CalculadoraICMS10: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  const [formData, setFormData] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    aliquotaIcmsProprio: "",
    aliquotaIcmsST: "",
    percentualMVA: "",
    valorIpi: "",
  })

  const [resultado, setResultado] = useState<{
    baseIcmsProprio: number
    valorIcmsProprio: number
    baseIcmsST: number
    valorIcmsST: number
  } | null>(null)

  const [salvando, setSalvando] = useState(false)
  const [mensagemSalvo, setMensagemSalvo] = useState<string | null>(null)
  const [showPdfPreview, setShowPdfPreview] = useState(false)
  const [calculoSalvo, setCalculoSalvo] = useState<CalculoSalvo | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calcular = () => {
    const valores = {
      valorProduto: parseNumberBR(formData.valorProduto || "0"),
      valorFrete: parseNumberBR(formData.valorFrete || "0"),
      valorSeguro: parseNumberBR(formData.valorSeguro || "0"),
      valorOutro: parseNumberBR(formData.valorOutro || "0"),
      valorDesconto: parseNumberBR(formData.valorDesconto || "0"),
      aliquotaIcmsProprio: parseNumberBR(formData.aliquotaIcmsProprio || "0"),
      aliquotaIcmsST: parseNumberBR(formData.aliquotaIcmsST || "0"),
      percentualMVA: parseNumberBR(formData.percentualMVA || "0"),
      valorIpi: parseNumberBR(formData.valorIpi || "0"),
    }

    const baseIcmsProprio = calcularBaseIcms(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
    )

    const valorIcmsProprio = calcularValorIcmsProprio(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
      valores.aliquotaIcmsProprio,
    )

    const baseIcmsST = calcularBaseIcmsST(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
      valores.percentualMVA,
      valores.valorIpi,
    )

    const valorIcmsST = calcularIcms10(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
      valores.percentualMVA,
      valores.aliquotaIcmsProprio,
      valores.aliquotaIcmsST,
      valores.valorIpi,
    )

    setResultado({
      baseIcmsProprio,
      valorIcmsProprio,
      baseIcmsST,
      valorIcmsST,
    })
  }

  const limpar = () => {
    setFormData({
      valorProduto: "",
      valorFrete: "",
      valorSeguro: "",
      valorOutro: "",
      valorDesconto: "",
      aliquotaIcmsProprio: "",
      aliquotaIcmsST: "",
      percentualMVA: "",
      valorIpi: "",
    })
    setResultado(null)
    setMensagemSalvo(null)
    setCalculoSalvo(null)
  }

  const salvar = () => {
    if (!resultado) return

    setSalvando(true)
    try {
      const valores = {
        valorProduto: parseNumberBR(formData.valorProduto || "0"),
        valorFrete: parseNumberBR(formData.valorFrete || "0"),
        valorSeguro: parseNumberBR(formData.valorSeguro || "0"),
        valorOutro: parseNumberBR(formData.valorOutro || "0"),
        valorDesconto: parseNumberBR(formData.valorDesconto || "0"),
        aliquotaIcmsProprio: parseNumberBR(formData.aliquotaIcmsProprio || "0"),
        aliquotaIcmsST: parseNumberBR(formData.aliquotaIcmsST || "0"),
        percentualMVA: parseNumberBR(formData.percentualMVA || "0"),
        valorIpi: parseNumberBR(formData.valorIpi || "0"),
      }

      const novoCalculo = salvarCalculo({
        tipo: "ICMS 10",
        descricao: `Produto: ${formatCurrency(valores.valorProduto)}`,
        valorBase: resultado.baseIcmsST,
        aliquota: valores.aliquotaIcmsST,
        resultado: resultado.valorIcmsST,
        detalhes: {
          ...valores,
          baseIcmsProprio: resultado.baseIcmsProprio,
          valorIcmsProprio: resultado.valorIcmsProprio,
          baseIcmsST: resultado.baseIcmsST,
          valorIcmsST: resultado.valorIcmsST,
        },
      })

      setCalculoSalvo(novoCalculo)
      setMensagemSalvo("Cálculo salvo com sucesso!")
      setTimeout(() => setMensagemSalvo(null), 3000)
    } catch (error) {
      setMensagemSalvo("Erro ao salvar o cálculo.")
    } finally {
      setSalvando(false)
    }
  }

  const handleGerarPdf = () => {
    if (!resultado) return

    // Se o cálculo já foi salvo, use-o para gerar o PDF
    if (calculoSalvo) {
      setShowPdfPreview(true)
      return
    }

    // Se não foi salvo, crie um objeto temporário para o PDF
    const valores = {
      valorProduto: parseNumberBR(formData.valorProduto || "0"),
      valorFrete: parseNumberBR(formData.valorFrete || "0"),
      valorSeguro: parseNumberBR(formData.valorSeguro || "0"),
      valorOutro: parseNumberBR(formData.valorOutro || "0"),
      valorDesconto: parseNumberBR(formData.valorDesconto || "0"),
      aliquotaIcmsProprio: parseNumberBR(formData.aliquotaIcmsProprio || "0"),
      aliquotaIcmsST: parseNumberBR(formData.aliquotaIcmsST || "0"),
      percentualMVA: parseNumberBR(formData.percentualMVA || "0"),
      valorIpi: parseNumberBR(formData.valorIpi || "0"),
    }

    const calculoTemp: CalculoSalvo = {
      id: "temp-" + Date.now(),
      tipo: "ICMS 10",
      descricao: `Produto: ${formatCurrency(valores.valorProduto)}`,
      valorBase: resultado.baseIcmsST,
      aliquota: valores.aliquotaIcmsST,
      resultado: resultado.valorIcmsST,
      data: new Date().toISOString(),
      detalhes: {
        ...valores,
        baseIcmsProprio: resultado.baseIcmsProprio,
        valorIcmsProprio: resultado.valorIcmsProprio,
        baseIcmsST: resultado.baseIcmsST,
        valorIcmsST: resultado.valorIcmsST,
      },
    }

    setCalculoSalvo(calculoTemp)
    setShowPdfPreview(true)
  }

  const handleClosePdfPreview = () => {
    setShowPdfPreview(false)
  }

  return (
    <div className="space-y-8">
      {showPdfPreview && calculoSalvo ? (
        <PdfPreview calculo={calculoSalvo} onClose={handleClosePdfPreview} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Valor do Produto (R$)"
              name="valorProduto"
              value={formData.valorProduto}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Valor do Frete (R$)"
              name="valorFrete"
              value={formData.valorFrete}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Valor do Seguro (R$)"
              name="valorSeguro"
              value={formData.valorSeguro}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Outros Valores (R$)"
              name="valorOutro"
              value={formData.valorOutro}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Valor do Desconto (R$)"
              name="valorDesconto"
              value={formData.valorDesconto}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Alíquota do ICMS Próprio (%)"
              name="aliquotaIcmsProprio"
              value={formData.aliquotaIcmsProprio}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Alíquota do ICMS ST (%)"
              name="aliquotaIcmsST"
              value={formData.aliquotaIcmsST}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Percentual MVA (%)"
              name="percentualMVA"
              value={formData.percentualMVA}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />

            <Input
              label="Valor do IPI (R$)"
              name="valorIpi"
              value={formData.valorIpi}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              variant="outline"
              onClick={limpar}
              className="px-6 py-3 rounded-xl border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Limpar
            </Button>

            <Button
              onClick={calcular}
              className="px-6 py-3 rounded-xl bg-vinho hover:bg-vinho-dark text-white flex items-center gap-2"
            >
              <Calculator className="h-4 w-4" />
              Calcular
            </Button>
          </div>

          {resultado && (
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-vinho dark:text-dourado" />
                  Resultado do Cálculo:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleGerarPdf}
                    className="px-4 py-2 rounded-lg bg-dourado hover:bg-dourado-dark text-slate-900 flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Gerar PDF
                  </Button>

                  {storageDisponivel && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={salvar}
                      isLoading={salvando}
                      disabled={salvando}
                      className="px-4 py-2 rounded-lg border-vinho dark:border-dourado text-vinho dark:text-dourado hover:bg-vinho/10 dark:hover:bg-dourado/10 flex items-center gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Salvar Cálculo
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Base de Cálculo do ICMS Próprio:</p>
                  <p className="font-medium text-xl text-slate-900 dark:text-slate-100 mt-1">
                    {formatCurrency(resultado.baseIcmsProprio)}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Valor do ICMS Próprio:</p>
                  <p className="font-medium text-xl text-slate-900 dark:text-slate-100 mt-1">
                    {formatCurrency(resultado.valorIcmsProprio)}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Base de Cálculo do ICMS ST:</p>
                  <p className="font-medium text-xl text-slate-900 dark:text-slate-100 mt-1">
                    {formatCurrency(resultado.baseIcmsST)}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border-2 border-vinho/20 dark:border-dourado/20 bg-vinho/5 dark:bg-dourado/5">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Valor do ICMS ST:</p>
                  <p className="text-2xl font-bold text-vinho dark:text-dourado mt-1">
                    {formatCurrency(resultado.valorIcmsST)}
                  </p>
                </div>
              </div>

              {mensagemSalvo && (
                <div
                  className={`mt-6 p-4 rounded-lg text-sm flex items-center gap-2 ${
                    mensagemSalvo.includes("Erro")
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {mensagemSalvo.includes("Erro") ? (
                    <AlertTriangle className="h-4 w-4" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  {mensagemSalvo}
                </div>
              )}
            </div>
          )}

          {!storageDisponivel && resultado && (
            <div className="mt-6 p-4 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-lg text-sm flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p>
                <strong>Nota:</strong> O armazenamento local (Local Storage) não está disponível no seu navegador. Você
                ainda pode gerar um PDF deste cálculo para armazenamento permanente.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default CalculadoraICMS10


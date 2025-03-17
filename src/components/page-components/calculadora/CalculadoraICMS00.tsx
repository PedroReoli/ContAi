"use client"

import type React from "react"
import { useState } from "react"
import { formatCurrency, parseNumberBR } from "@/lib/utils"
import { calcularBaseIcms, calcularIcms00 } from "@/utils/calculadoraICMS"
import { salvarCalculo, type CalculoSalvo } from "@/utils/storage"
import PdfPreview from "@/components/PdfPreview"
import { Calculator, Save, FileText, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

interface CalculadoraProps {
  storageDisponivel: boolean
}

const CalculadoraICMS00: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  const [formData, setFormData] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    aliquotaIcms: "",
    valorIpi: "",
  })

  const [resultado, setResultado] = useState<{
    baseIcms: number
    valorIcms: number
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
      aliquotaIcms: parseNumberBR(formData.aliquotaIcms || "0"),
      valorIpi: parseNumberBR(formData.valorIpi || "0"),
    }

    const baseIcms = calcularBaseIcms(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
      valores.valorIpi,
    )

    const valorIcms = calcularIcms00(
      valores.valorProduto,
      valores.valorFrete,
      valores.valorSeguro,
      valores.valorOutro,
      valores.valorDesconto,
      valores.aliquotaIcms,
      valores.valorIpi,
    )

    setResultado({ baseIcms, valorIcms })
  }

  const limpar = () => {
    setFormData({
      valorProduto: "",
      valorFrete: "",
      valorSeguro: "",
      valorOutro: "",
      valorDesconto: "",
      aliquotaIcms: "",
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
        aliquotaIcms: parseNumberBR(formData.aliquotaIcms || "0"),
        valorIpi: parseNumberBR(formData.valorIpi || "0"),
      }

      const novoCalculo = salvarCalculo({
        tipo: "ICMS 00",
        descricao: `Produto: ${formatCurrency(valores.valorProduto)}`,
        valorBase: resultado.baseIcms,
        aliquota: valores.aliquotaIcms,
        resultado: resultado.valorIcms,
        detalhes: {
          ...valores,
          baseIcms: resultado.baseIcms,
          valorIcms: resultado.valorIcms,
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
      aliquotaIcms: parseNumberBR(formData.aliquotaIcms || "0"),
      valorIpi: parseNumberBR(formData.valorIpi || "0"),
    }

    const calculoTemp: CalculoSalvo = {
      id: "temp-" + Date.now(),
      tipo: "ICMS 00",
      descricao: `Produto: ${formatCurrency(valores.valorProduto)}`,
      valorBase: resultado.baseIcms,
      aliquota: valores.aliquotaIcms,
      resultado: resultado.valorIcms,
      data: new Date().toISOString(),
      detalhes: {
        ...valores,
        baseIcms: resultado.baseIcms,
        valorIcms: resultado.valorIcms,
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
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Valor do Frete (R$)"
              name="valorFrete"
              value={formData.valorFrete}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Valor do Seguro (R$)"
              name="valorSeguro"
              value={formData.valorSeguro}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Outros Valores (R$)"
              name="valorOutro"
              value={formData.valorOutro}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Valor do Desconto (R$)"
              name="valorDesconto"
              value={formData.valorDesconto}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Alíquota do ICMS (%)"
              name="aliquotaIcms"
              value={formData.aliquotaIcms}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />

            <Input
              label="Valor do IPI (R$)"
              name="valorIpi"
              value={formData.valorIpi}
              onChange={handleChange}
              placeholder="0,00"
              className="bg-white dark:bg-bg-darker border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-secondary/30 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              variant="outline"
              onClick={limpar}
              className="px-6 py-3 rounded-xl border-bg-medium/50 dark:border-bg-dark/70 text-txt-primary dark:text-txt-light hover:bg-bg-medium/20 dark:hover:bg-bg-dark/30 transition-colors"
            >
              Limpar
            </Button>

            <Button
              onClick={calcular}
              className="px-6 py-3 rounded-xl bg-gradient-primary hover:shadow-lg text-txt-light flex items-center gap-2 transition-all duration-300"
            >
              <Calculator className="h-4 w-4" />
              Calcular
            </Button>
          </div>

          {resultado && (
            <div className="mt-8 p-6 bg-bg-light/50 dark:bg-bg-darker/50 backdrop-blur-sm rounded-xl border border-bg-medium/30 dark:border-bg-dark/50 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="text-xl font-semibold text-txt-primary dark:text-txt-light flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary dark:text-secondary" />
                  Resultado do Cálculo:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleGerarPdf}
                    className="px-4 py-2 rounded-lg bg-gradient-secondary hover:shadow-md text-txt-primary dark:text-txt-light flex items-center gap-2 transition-all duration-300"
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
                      className="px-4 py-2 rounded-lg border-primary/30 dark:border-secondary/30 text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 flex items-center gap-2 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      Salvar Cálculo
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-bg-darker p-5 rounded-xl border border-bg-medium/30 dark:border-bg-dark/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-txt-secondary dark:text-txt-muted">Base de Cálculo do ICMS:</p>
                  <p className="font-medium text-xl text-txt-primary dark:text-txt-light mt-1">
                    {formatCurrency(resultado.baseIcms)}
                  </p>
                </div>

                <div className="relative overflow-hidden bg-white dark:bg-bg-darker p-5 rounded-xl border-2 border-primary/20 dark:border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-txt-secondary dark:text-txt-muted">Valor do ICMS:</p>
                      <ArrowRight className="h-4 w-4 text-secondary/70" />
                    </div>
                    <p className="text-2xl font-bold text-primary dark:text-secondary mt-1">
                      {formatCurrency(resultado.valorIcms)}
                    </p>
                  </div>
                </div>
              </div>

              {mensagemSalvo && (
                <div
                  className={`mt-6 p-4 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300 ${
                    mensagemSalvo.includes("Erro")
                      ? "bg-state-error/10 text-state-error dark:bg-state-error/20"
                      : "bg-state-success/10 text-state-success dark:bg-state-success/20"
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
            <div className="mt-6 p-4 bg-state-warning/10 text-state-warning dark:bg-state-warning/20 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300">
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

export default CalculadoraICMS00


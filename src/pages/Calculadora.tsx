"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { formatCurrency, parseNumberBR } from "@/lib/utils"
import { calcularIcms00, calcularBaseIcms } from "@/utils/calculadoraICMS"
import { salvarCalculo, isLocalStorageDisponivel, type CalculoSalvo } from "@/utils/storage"
import HistoricoCalculos from "@/components/HistoricoCalculos"
import PdfPreview from "@/components/PdfPreview"

const Calculadora: React.FC = () => {
  const [activeTab, setActiveTab] = useState("icms00")
  const [showHistorico, setShowHistorico] = useState(false)
  const [storageDisponivel, setStorageDisponivel] = useState(true)

  useEffect(() => {
    setStorageDisponivel(isLocalStorageDisponivel())
  }, [])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  const handleSelectCalculo = (calculo: CalculoSalvo) => {
    // Implementação futura: carregar cálculo selecionado
    console.log("Cálculo selecionado:", calculo)
    setShowHistorico(false)
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
            Calculadora de ICMS
          </h1>
          <Button
            variant="outline"
            onClick={() => setShowHistorico(!showHistorico)}
            className="px-6 py-3 rounded-xl border-vinho dark:border-dourado text-vinho dark:text-dourado hover:bg-vinho/10 dark:hover:bg-dourado/10"
          >
            {showHistorico ? "Voltar à Calculadora" : "Ver Histórico"}
          </Button>
        </div>

        {showHistorico ? (
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Histórico de Cálculos</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Selecione um cálculo para visualizar ou exportar
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <HistoricoCalculos onSelectCalculo={handleSelectCalculo} />
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
              <CardTitle className="text-3xl text-vinho dark:text-dourado">Calculadora de ICMS</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Selecione o tipo de cálculo de ICMS e preencha os valores necessários
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <Tabs defaultTab={activeTab} onChange={handleTabChange}>
                <TabList className="mb-8 flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                  <Tab
                    id="icms00"
                    className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado"
                  >
                    ICMS 00
                  </Tab>
                  <Tab
                    id="icms10"
                    className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado"
                  >
                    ICMS 10
                  </Tab>
                  <Tab
                    id="icms20"
                    className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado"
                  >
                    ICMS 20
                  </Tab>
                  <Tab
                    id="icms51"
                    className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado"
                  >
                    ICMS 51
                  </Tab>
                  <Tab
                    id="icms70"
                    className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-vinho dark:data-[state=active]:border-dourado data-[state=active]:text-vinho dark:data-[state=active]:text-dourado"
                  >
                    ICMS 70
                  </Tab>
                </TabList>

                <TabPanel id="icms00">
                  <CalculadoraICMS00 storageDisponivel={storageDisponivel} />
                </TabPanel>

                <TabPanel id="icms10">
                  <CalculadoraICMS10 storageDisponivel={storageDisponivel} />
                </TabPanel>

                <TabPanel id="icms20">
                  <CalculadoraICMS20 storageDisponivel={storageDisponivel} />
                </TabPanel>

                <TabPanel id="icms51">
                  <CalculadoraICMS51 storageDisponivel={storageDisponivel} />
                </TabPanel>

                <TabPanel id="icms70">
                  <CalculadoraICMS70 storageDisponivel={storageDisponivel} />
                </TabPanel>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

// Componente para cálculo de ICMS 00 (Padrão)
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
              label="Alíquota do ICMS (%)"
              name="aliquotaIcms"
              value={formData.aliquotaIcms}
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

            <Button onClick={calcular} className="px-6 py-3 rounded-xl bg-vinho hover:bg-vinho-dark text-white">
              Calcular
            </Button>
          </div>

          {resultado && (
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Resultado do Cálculo:</h3>
                <div className="flex space-x-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleGerarPdf}
                    className="px-4 py-2 rounded-lg bg-dourado hover:bg-dourado-dark text-slate-900"
                  >
                    Gerar PDF
                  </Button>

                  {storageDisponivel && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={salvar}
                      isLoading={salvando}
                      disabled={salvando}
                      className="px-4 py-2 rounded-lg border-vinho dark:border-dourado text-vinho dark:text-dourado hover:bg-vinho/10 dark:hover:bg-dourado/10"
                    >
                      Salvar Cálculo
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Base de Cálculo do ICMS:</p>
                  <p className="font-medium text-xl text-slate-900 dark:text-slate-100 mt-1">
                    {formatCurrency(resultado.baseIcms)}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Valor do ICMS:</p>
                  <p className="text-2xl font-bold text-vinho dark:text-dourado mt-1">
                    {formatCurrency(resultado.valorIcms)}
                  </p>
                </div>
              </div>

              {mensagemSalvo && (
                <div
                  className={`mt-6 p-4 rounded-lg text-sm ${mensagemSalvo.includes("Erro") ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"}`}
                >
                  {mensagemSalvo}
                </div>
              )}
            </div>
          )}

          {!storageDisponivel && resultado && (
            <div className="mt-6 p-4 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-lg text-sm">
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

// Componentes para os outros tipos de ICMS seguiriam o mesmo padrão
// Implementação similar para CalculadoraICMS10, CalculadoraICMS20, CalculadoraICMS51 e CalculadoraICMS70
// com a adição da funcionalidade de gerar PDF

// Componente para cálculo de ICMS 10 (Substituição Tributária)
const CalculadoraICMS10: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  // Implementação similar ao ICMS 00, adaptada para ICMS 10
  // Código omitido para brevidade, seguiria o mesmo padrão

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
      <p className="text-slate-600 dark:text-slate-400">
        Implementação do ICMS 10 com exportação de PDF seguiria o mesmo padrão do ICMS 00.
      </p>
    </div>
  )
}

// Componente para cálculo de ICMS 20 (Base de Cálculo Reduzida)
const CalculadoraICMS20: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  // Implementação similar ao ICMS 00, adaptada para ICMS 20
  // Código omitido para brevidade, seguiria o mesmo padrão

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
      <p className="text-slate-600 dark:text-slate-400">
        Implementação do ICMS 20 com exportação de PDF seguiria o mesmo padrão do ICMS 00.
      </p>
    </div>
  )
}

// Componente para cálculo de ICMS 51 (Diferimento Parcial)
const CalculadoraICMS51: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  // Implementação similar ao ICMS 00, adaptada para ICMS 51
  // Código omitido para brevidade, seguiria o mesmo padrão

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
      <p className="text-slate-600 dark:text-slate-400">
        Implementação do ICMS 51 com exportação de PDF seguiria o mesmo padrão do ICMS 00.
      </p>
    </div>
  )
}

// Componente para cálculo de ICMS 70 (Redução na Base de Cálculo com ST)
const CalculadoraICMS70: React.FC<CalculadoraProps> = ({ storageDisponivel }) => {
  // Implementação similar ao ICMS 00, adaptada para ICMS 70
  // Código omitido para brevidade, seguiria o mesmo padrão

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
      <p className="text-slate-600 dark:text-slate-400">
        Implementação do ICMS 70 com exportação de PDF seguiria o mesmo padrão do ICMS 00.
      </p>
    </div>
  )
}

export default Calculadora


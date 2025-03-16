"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { formatCurrency, formatDate, formatPercent } from "@/lib/utils"
import { type CalculoSalvo, recuperarCalculos, removerCalculo, limparHistorico } from "@/utils/storage"
import PdfPreview from "@/components/PdfPreview"
import {
  FileText,
  Trash2,
  Download,
  AlertTriangle,
  Clock,
  Tag,
  Percent,
  DollarSign,
  FileOutput,
  History,
} from "lucide-react"

interface HistoricoCalculosProps {
  onSelectCalculo?: (calculo: CalculoSalvo) => void
}

const HistoricoCalculos: React.FC<HistoricoCalculosProps> = ({ onSelectCalculo }) => {
  const [calculos, setCalculos] = useState<CalculoSalvo[]>([])
  const [confirmacaoLimpar, setConfirmacaoLimpar] = useState(false)
  const [showPdfPreview, setShowPdfPreview] = useState(false)
  const [calculoSelecionado, setCalculoSelecionado] = useState<CalculoSalvo | null>(null)
  const [gerandoHistoricoPdf, setGerandoHistoricoPdf] = useState(false)

  // Carrega os cálculos ao montar o componente
  useEffect(() => {
    carregarCalculos()
  }, [])

  // Função para carregar os cálculos do Local Storage
  const carregarCalculos = () => {
    const calculosSalvos = recuperarCalculos()
    setCalculos(calculosSalvos)
  }

  // Função para remover um cálculo específico
  const handleRemoverCalculo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation() // Evita que o clique propague para o card
    removerCalculo(id)
    carregarCalculos()
  }

  // Função para limpar todo o histórico
  const handleLimparHistorico = () => {
    if (confirmacaoLimpar) {
      limparHistorico()
      setCalculos([])
      setConfirmacaoLimpar(false)
    } else {
      setConfirmacaoLimpar(true)
      // Reseta o estado de confirmação após 3 segundos
      setTimeout(() => setConfirmacaoLimpar(false), 3000)
    }
  }

  // Formata a data para exibição
  const formatarData = (dataISO: string) => {
    try {
      return formatDate(new Date(dataISO))
    } catch (error) {
      return "Data inválida"
    }
  }

  // Função para gerar PDF de um cálculo específico
  const handleGerarPdf = (calculo: CalculoSalvo, e: React.MouseEvent) => {
    e.stopPropagation() // Evita que o clique propague para o card
    setCalculoSelecionado(calculo)
    setShowPdfPreview(true)
  }

  // Função para gerar PDF do histórico completo
  const handleGerarHistoricoPdf = () => {
    setGerandoHistoricoPdf(true)
    setShowPdfPreview(true)
  }

  // Função para fechar o preview do PDF
  const handleClosePdfPreview = () => {
    setShowPdfPreview(false)
    setCalculoSelecionado(null)
    setGerandoHistoricoPdf(false)
  }

  return (
    <div className="space-y-4">
      {showPdfPreview ? (
        <PdfPreview
          calculo={calculoSelecionado || undefined}
          calculos={gerandoHistoricoPdf ? calculos : undefined}
          onClose={handleClosePdfPreview}
        />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center">
              <History className="h-5 w-5 mr-2 text-primary" />
              <h2 className="text-xl font-semibold">Histórico de Cálculos</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={handleGerarHistoricoPdf}
                disabled={calculos.length === 0}
                className="flex items-center gap-1"
              >
                <FileOutput className="h-4 w-4" />
                Exportar Histórico
              </Button>
              <Button
                variant={confirmacaoLimpar ? "destructive" : "outline"}
                onClick={handleLimparHistorico}
                disabled={calculos.length === 0}
                className="flex items-center gap-1"
              >
                {confirmacaoLimpar ? (
                  <>
                    <AlertTriangle className="h-4 w-4" />
                    Confirmar Exclusão
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    Limpar Histórico
                  </>
                )}
              </Button>
            </div>
          </div>

          {calculos.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg border border-dashed">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground">Nenhum cálculo salvo ainda.</p>
              <p className="mt-2 text-sm text-muted-foreground">Os cálculos que você salvar aparecerão aqui.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {calculos.map((calculo) => (
                <Card
                  key={calculo.id}
                  className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden group"
                  onClick={() => onSelectCalculo && onSelectCalculo(calculo)}
                >
                  <CardHeader className="pb-2 bg-muted/30">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <CardTitle className="text-lg">{calculo.tipo}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => handleRemoverCalculo(calculo.id, e)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <CardDescription>{calculo.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          Base de Cálculo:
                        </span>
                        <span className="font-medium">{formatCurrency(calculo.valorBase)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Percent className="h-3 w-3 mr-1" />
                          Alíquota:
                        </span>
                        <span className="font-medium">{formatPercent(calculo.aliquota)}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-1 border-t">
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-primary" />
                          Resultado:
                        </span>
                        <span className="text-primary font-bold">{formatCurrency(calculo.resultado)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center bg-muted/20">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatarData(calculo.data)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleGerarPdf(calculo, e)}
                      className="flex items-center gap-1"
                    >
                      <Download className="h-3 w-3" />
                      Gerar PDF
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          <div className="bg-muted p-4 rounded-md text-sm mt-6 flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
            <p>
              <strong>Nota:</strong> Os cálculos são armazenados apenas no seu navegador (Local Storage). Você pode
              exportar seus cálculos em PDF para armazenamento permanente ou compartilhamento.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default HistoricoCalculos


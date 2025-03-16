"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import type { CalculoSalvo } from "@/utils/storage"
import { gerarPdfCalculo, gerarPdfMultiplosCalculos, salvarPdf, abrirPdf } from "@/utils/pdfGenerator"

interface PdfPreviewProps {
  calculo?: CalculoSalvo
  calculos?: CalculoSalvo[]
  onClose: () => void
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ calculo, calculos, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pdfDoc, setPdfDoc] = useState<any>(null)

  useEffect(() => {
    const gerarPreview = async () => {
      try {
        setIsLoading(true)

        // Gerar o PDF apropriado
        let doc
        if (calculo) {
          doc = gerarPdfCalculo(calculo)
        } else if (calculos && calculos.length > 0) {
          doc = gerarPdfMultiplosCalculos(calculos)
        } else {
          throw new Error("Nenhum dado fornecido para gerar o PDF")
        }

        setPdfDoc(doc)

        // Renderizar a primeira página no canvas
        const canvas = canvasRef.current
        if (canvas) {
          const pdfData = doc.output("datauristring")

          // Carregar o PDF no canvas (usando uma imagem como preview)
          const img = new Image()
          img.src = pdfData
          img.onload = () => {
            const ctx = canvas.getContext("2d")
            if (ctx) {
              canvas.width = 500
              canvas.height = 700
              ctx.fillStyle = "#f8f9fa"
              ctx.fillRect(0, 0, canvas.width, canvas.height)

              // Desenhar a imagem centralizada e dimensionada
              const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.8

              const x = (canvas.width - img.width * scale) / 2
              const y = (canvas.height - img.height * scale) / 2

              ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
              setIsLoading(false)
            }
          }
        }
      } catch (error) {
        console.error("Erro ao gerar preview do PDF:", error)
        setIsLoading(false)
      }
    }

    gerarPreview()
  }, [calculo, calculos])

  const handleDownload = () => {
    if (pdfDoc) {
      const filename = calculo
        ? `calculo-${calculo.tipo.toLowerCase().replace(/\s+/g, "-")}-${new Date().getTime()}`
        : `historico-calculos-${new Date().getTime()}`

      salvarPdf(pdfDoc, filename)
    }
  }

  const handleOpen = () => {
    if (pdfDoc) {
      abrirPdf(pdfDoc)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>
          {calculo ? `Preview do Relatório - ${calculo.tipo}` : "Preview do Relatório de Histórico"}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex justify-center">
          {isLoading ? (
            <div className="w-full h-[700px] flex items-center justify-center bg-muted rounded-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="border rounded-md shadow-sm overflow-hidden">
              <canvas ref={canvasRef} className="w-full max-w-[500px] h-auto" />
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <div className="space-x-2">
          <Button variant="secondary" onClick={handleOpen} disabled={isLoading}>
            Abrir PDF
          </Button>
          <Button onClick={handleDownload} disabled={isLoading}>
            Baixar PDF
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PdfPreview


import jsPDF from "jspdf"
import "jspdf-autotable"
import { formatCurrency, formatPercent, formatDate } from "@/lib/utils"
import type { CalculoSalvo } from "@/utils/storage"

// Adiciona o tipo para o jsPDF com autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

// Interface para os dados do relatório
interface RelatorioConfig {
  titulo?: string
  subtitulo?: string
  incluirLogo?: boolean
  incluirRodape?: boolean
  corPrimaria?: string
}

/**
 * Gera um PDF para um cálculo de ICMS
 */
export const gerarPdfCalculo = (calculo: CalculoSalvo, config: RelatorioConfig = {}): jsPDF => {
  // Configurações padrão
  const {
    titulo = "Relatório de Cálculo de ICMS",
    subtitulo = `${calculo.tipo} - ${formatDate(new Date(calculo.data))}`,
    incluirLogo = true,
    incluirRodape = true,
    corPrimaria = "#0066CC",
  } = config

  // Criar documento PDF
  const doc = new jsPDF()

  // Configurações de estilo
  const corTexto = "#333333"
  const corSecundaria = "#F5F5F5"
  const fontPrincipal = "helvetica"
  const margemEsquerda = 20
  const larguraPagina = doc.internal.pageSize.width

  // Adicionar cabeçalho
  doc.setFillColor(corPrimaria)
  doc.rect(0, 0, larguraPagina, 40, "F")

  // Adicionar logo (se solicitado)
  if (incluirLogo) {
    // Aqui seria adicionado um logo, mas como é um exemplo, vamos apenas adicionar um texto estilizado
    doc.setTextColor("#FFFFFF")
    doc.setFontSize(24)
    doc.setFont(fontPrincipal, "bold")
    doc.text("Conta.Aí", margemEsquerda, 20)

    doc.setFontSize(12)
    doc.setFont(fontPrincipal, "normal")
    doc.text("Calculadora de ICMS", margemEsquerda, 28)
  }

  // Adicionar título e subtítulo
  doc.setTextColor(corTexto)
  doc.setFontSize(18)
  doc.setFont(fontPrincipal, "bold")
  doc.text(titulo, margemEsquerda, 50)

  doc.setFontSize(14)
  doc.setFont(fontPrincipal, "normal")
  doc.text(subtitulo, margemEsquerda, 60)

  // Adicionar informações do cálculo
  doc.setFontSize(12)
  doc.setFont(fontPrincipal, "bold")
  doc.text("Informações do Cálculo:", margemEsquerda, 75)

  doc.setFont(fontPrincipal, "normal")
  doc.text(`Tipo de ICMS: ${calculo.tipo}`, margemEsquerda, 85)
  doc.text(`Descrição: ${calculo.descricao}`, margemEsquerda, 95)
  doc.text(`Data do Cálculo: ${formatDate(new Date(calculo.data))}`, margemEsquerda, 105)

  // Adicionar tabela com valores
  const dadosTabela = obterDadosTabelaPorTipo(calculo)

  doc.autoTable({
    startY: 115,
    head: [["Item", "Valor"]],
    body: dadosTabela,
    theme: "grid",
    headStyles: {
      fillColor: corPrimaria,
      textColor: "#FFFFFF",
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: corSecundaria,
    },
    margin: { left: margemEsquerda, right: margemEsquerda },
  })

  // Adicionar resultado final
  const finalY = (doc as any).lastAutoTable.finalY + 10

  doc.setFillColor(corPrimaria)
  doc.rect(margemEsquerda, finalY, larguraPagina - margemEsquerda * 2, 25, "F")

  doc.setTextColor("#FFFFFF")
  doc.setFontSize(14)
  doc.setFont(fontPrincipal, "bold")
  doc.text("Resultado Final:", margemEsquerda + 5, finalY + 10)

  doc.setFontSize(16)
  doc.text(`${calculo.tipo}: ${formatCurrency(calculo.resultado)}`, margemEsquerda + 5, finalY + 20)

  // Adicionar rodapé (se solicitado)
  if (incluirRodape) {
    const rodapeY = doc.internal.pageSize.height - 10

    doc.setDrawColor(corPrimaria)
    doc.setLineWidth(0.5)
    doc.line(margemEsquerda, rodapeY - 5, larguraPagina - margemEsquerda, rodapeY - 5)

    doc.setTextColor(corTexto)
    doc.setFontSize(10)
    doc.setFont(fontPrincipal, "normal")
    doc.text(`Gerado por Conta.Aí - Calculadora de ICMS em ${formatDate(new Date())}`, margemEsquerda, rodapeY)

    // Adicionar numeração de página
    doc.text(`Página 1 de 1`, larguraPagina - margemEsquerda - 20, rodapeY, { align: "right" })
  }

  return doc
}

/**
 * Obtém os dados da tabela com base no tipo de ICMS
 */
const obterDadosTabelaPorTipo = (calculo: CalculoSalvo): Array<[string, string]> => {
  const detalhes = calculo.detalhes || {}
  const dadosComuns: Array<[string, string]> = [
    ["Base de Cálculo", formatCurrency(calculo.valorBase)],
    ["Alíquota", formatPercent(calculo.aliquota)],
  ]

  // Dados específicos por tipo de ICMS
  switch (calculo.tipo) {
    case "ICMS 00":
      return [
        ...dadosComuns,
        ["Valor do Produto", formatCurrency(detalhes.valorProduto || 0)],
        ["Valor do Frete", formatCurrency(detalhes.valorFrete || 0)],
        ["Valor do Seguro", formatCurrency(detalhes.valorSeguro || 0)],
        ["Outros Valores", formatCurrency(detalhes.valorOutro || 0)],
        ["Valor do Desconto", formatCurrency(detalhes.valorDesconto || 0)],
        ["Valor do IPI", formatCurrency(detalhes.valorIpi || 0)],
      ]

    case "ICMS 10":
      return [
        ...dadosComuns,
        ["Valor do Produto", formatCurrency(detalhes.valorProduto || 0)],
        ["Percentual MVA", formatPercent(detalhes.percentualMVA || 0)],
        ["Base de Cálculo ICMS Próprio", formatCurrency(detalhes.baseIcmsProprio || 0)],
        ["Valor ICMS Próprio", formatCurrency(detalhes.valorIcmsProprio || 0)],
        ["Base de Cálculo ICMS-ST", formatCurrency(detalhes.baseIcmsST || 0)],
      ]

    case "ICMS 20":
      return [
        ...dadosComuns,
        ["Valor do Produto", formatCurrency(detalhes.valorProduto || 0)],
        ["Percentual de Redução", formatPercent(detalhes.percentualReducao || 0)],
        ["Base de Cálculo Original", formatCurrency(detalhes.baseIcmsOriginal || 0)],
        ["Base de Cálculo Reduzida", formatCurrency(detalhes.baseIcmsReduzida || 0)],
      ]

    case "ICMS 51":
      return [
        ...dadosComuns,
        ["Valor do Produto", formatCurrency(detalhes.valorProduto || 0)],
        ["Percentual de Diferimento", formatPercent(detalhes.percentualDiferimento || 0)],
        ["Valor ICMS da Operação", formatCurrency(detalhes.valorIcmsOperacao || 0)],
        ["Valor ICMS Diferido", formatCurrency(detalhes.valorIcmsDiferido || 0)],
      ]

    case "ICMS 70":
      return [
        ...dadosComuns,
        ["Valor do Produto", formatCurrency(detalhes.valorProduto || 0)],
        ["Percentual MVA", formatPercent(detalhes.percentualMVA || 0)],
        ["Percentual de Redução", formatPercent(detalhes.percentualReducao || 0)],
        ["Base de Cálculo ICMS Próprio", formatCurrency(detalhes.baseIcmsProprio || 0)],
        ["Valor ICMS Próprio", formatCurrency(detalhes.valorIcmsProprio || 0)],
        ["Base de Cálculo ICMS-ST", formatCurrency(detalhes.baseIcmsST || 0)],
      ]

    default:
      return dadosComuns
  }
}

/**
 * Gera um PDF com múltiplos cálculos (para histórico)
 */
export const gerarPdfMultiplosCalculos = (calculos: CalculoSalvo[], config: RelatorioConfig = {}): jsPDF => {
  // Configurações padrão
  const {
    titulo = "Relatório de Cálculos de ICMS",
    subtitulo = `Histórico de Cálculos - ${formatDate(new Date())}`,
    incluirLogo = true,
    incluirRodape = true,
    corPrimaria = "#0066CC",
  } = config

  // Criar documento PDF
  const doc = new jsPDF()

  // Configurações de estilo
  const corTexto = "#333333"
  const fontPrincipal = "helvetica"
  const margemEsquerda = 20
  const larguraPagina = doc.internal.pageSize.width

  // Adicionar cabeçalho
  doc.setFillColor(corPrimaria)
  doc.rect(0, 0, larguraPagina, 40, "F")

  // Adicionar logo (se solicitado)
  if (incluirLogo) {
    doc.setTextColor("#FFFFFF")
    doc.setFontSize(24)
    doc.setFont(fontPrincipal, "bold")
    doc.text("Conta.Aí", margemEsquerda, 20)

    doc.setFontSize(12)
    doc.setFont(fontPrincipal, "normal")
    doc.text("Calculadora de ICMS", margemEsquerda, 28)
  }

  // Adicionar título e subtítulo
  doc.setTextColor(corTexto)
  doc.setFontSize(18)
  doc.setFont(fontPrincipal, "bold")
  doc.text(titulo, margemEsquerda, 50)

  doc.setFontSize(14)
  doc.setFont(fontPrincipal, "normal")
  doc.text(subtitulo, margemEsquerda, 60)

  // Adicionar tabela com todos os cálculos
  const dadosTabela = calculos.map((calculo) => [
    calculo.tipo,
    calculo.descricao,
    formatCurrency(calculo.valorBase),
    formatPercent(calculo.aliquota),
    formatCurrency(calculo.resultado),
    formatDate(new Date(calculo.data)),
  ])

  doc.autoTable({
    startY: 70,
    head: [["Tipo", "Descrição", "Base de Cálculo", "Alíquota", "Resultado", "Data"]],
    body: dadosTabela,
    theme: "grid",
    headStyles: {
      fillColor: corPrimaria,
      textColor: "#FFFFFF",
      fontStyle: "bold",
    },
    styles: {
      fontSize: 10,
    },
    columnStyles: {
      0: { cellWidth: 25 },
      2: { cellWidth: 30 },
      3: { cellWidth: 20 },
      4: { cellWidth: 30 },
      5: { cellWidth: 30 },
    },
    margin: { left: margemEsquerda, right: margemEsquerda },
  })

  // Adicionar rodapé (se solicitado)
  if (incluirRodape) {
    const rodapeY = doc.internal.pageSize.height - 10

    doc.setDrawColor(corPrimaria)
    doc.setLineWidth(0.5)
    doc.line(margemEsquerda, rodapeY - 5, larguraPagina - margemEsquerda, rodapeY - 5)

    doc.setTextColor(corTexto)
    doc.setFontSize(10)
    doc.setFont(fontPrincipal, "normal")
    doc.text(`Gerado por Conta.Aí - Calculadora de ICMS em ${formatDate(new Date())}`, margemEsquerda, rodapeY)

    // Adicionar numeração de página
    doc.text(`Página 1 de 1`, larguraPagina - margemEsquerda - 20, rodapeY, { align: "right" })
  }

  return doc
}

/**
 * Salva o PDF gerado
 */
export const salvarPdf = (doc: jsPDF, nomeArquivo = "calculo-icms"): void => {
  doc.save(`${nomeArquivo}.pdf`)
}

/**
 * Abre o PDF em uma nova janela
 */
export const abrirPdf = (doc: jsPDF): void => {
  const pdfBlob = doc.output("blob")
  const pdfUrl = URL.createObjectURL(pdfBlob)
  window.open(pdfUrl, "_blank")
}


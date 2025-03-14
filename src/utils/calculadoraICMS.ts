// Funções para formatação de moeda
export const formatCurrency = (value: string | number): string => {
  const numValue = typeof value === "string" ? Number.parseFloat(value) : value
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numValue)
}

// Funções para ICMS 00
export function calcularBaseIcms(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  valorIpi = 0,
): string {
  const baseIcms = valorProduto + valorFrete + valorSeguro + valorOutro - valorDesconto + valorIpi

  return Number(baseIcms).toFixed(2)
}

export function calcularIcms00(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi = 0,
): string {
  const baseIcms = calcularBaseIcms(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, valorIpi)

  const icms00 = Number.parseFloat(baseIcms) * (aliquotaIcms / 100)
  return Number(icms00).toFixed(2)
}

// Funções para ICMS 10/30
export function calcularBaseIcmsProprio(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
): number {
  const baseIcms = valorProduto + valorFrete + valorSeguro + valorOutro - valorDesconto
  return Number(baseIcms.toFixed(2))
}

export function calcularValorIcmsProprio(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcmsProprio: number,
): number {
  const baseIcmsProprio = calcularBaseIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto)
  const valorIcmsProprio = baseIcmsProprio * (aliquotaIcmsProprio / 100)
  return Number(valorIcmsProprio.toFixed(2))
}

export function calcularBaseIcmsST(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualMVA: number,
  valorIPI = 0,
): number {
  const baseIcmsProprio = calcularBaseIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto)
  const baseIcmsST = (baseIcmsProprio + valorIPI) * (1 + percentualMVA / 100)
  return Number(baseIcmsST.toFixed(2))
}

export function calcularIcms10(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualMVA: number,
  aliquotaIcmsProprio: number,
  aliquotaIcmsST: number,
  valorIPI = 0,
): string {
  const baseIcmsST = calcularBaseIcmsST(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    percentualMVA,
    valorIPI,
  )

  const valorIcmsProprio = calcularValorIcmsProprio(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcmsProprio,
  )
  const icms10 = baseIcmsST * (aliquotaIcmsST / 100) - valorIcmsProprio
  return Number(icms10.toFixed(2))
}

// Funções para ICMS 20
export function calcularBaseIcmsReduzida(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualReducao: number,
  valorIpi = 0,
): string {
  const baseIcms = valorProduto + valorFrete + valorSeguro + valorOutro - valorDesconto + valorIpi

  const baseIcmsReduzida = baseIcms - (percentualReducao / 100) * baseIcms
  return Number(baseIcmsReduzida.toFixed(2))
}

export function calcularIcms20(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualReducao: number,
  aliquotaIcms: number,
  valorIpi = 0,
): string {
  const baseIcmsProprio = calcularBaseIcmsReduzida(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    percentualReducao,
    valorIpi,
  )

  const icms20 = Number.parseFloat(baseIcmsProprio) * (aliquotaIcms / 100)
  return Number(icms20.toFixed(2))
}

// Funções para ICMS 51
export function calcularIcmsOperacao(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi = 0,
): string {
  const baseIcms = calcularBaseIcms(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, valorIpi)

  const icmsOperacao = Number.parseFloat(baseIcms) * (aliquotaIcms / 100)
  return Number(icmsOperacao).toFixed(2)
}

export function calcularIcmsDiferido(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  percentualDiferimento: number,
  valorIpi = 0,
): string {
  const icmsProprio = calcularIcmsOperacao(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    valorIpi,
  )

  const icmsDiferido = (percentualDiferimento / 100) * Number.parseFloat(icmsProprio)
  return Number(icmsDiferido).toFixed(2)
}

export function calcularIcms51(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  percentualDiferimento: number,
  valorIpi = 0,
): string {
  const icmsDiferido = calcularIcmsDiferido(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    percentualDiferimento,
    valorIpi,
  )

  const icmsOperacao = calcularIcmsOperacao(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    valorIpi,
  )

  const icms51 = Number.parseFloat(icmsOperacao) - Number.parseFloat(icmsDiferido)
  return Number(icms51).toFixed(2)
}

// Funções para ICMS 70
export function calcularBaseIcmsSTReduzida(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualMVA: number,
  percentualReducaoST: number,
  valorIpi = 0,
): string {
  const baseIcmsProprio = calcularBaseIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto)

  const baseIcmsST = (baseIcmsProprio + valorIpi) * (1 + percentualMVA / 100)
  const baseIcmsSTReduzida = baseIcmsST - (percentualReducaoST / 100) * baseIcmsST
  return Number(baseIcmsSTReduzida).toFixed(2)
}

export function calcularIcms70(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualMVA: number,
  aliquotaIcmsProprio: number,
  aliquotaIcmsST: number,
  percentualReducao = 0,
  percentualReducaoST = 0,
  valorIpi = 0,
): string {
  let baseIcmsST: string | number

  if (percentualReducaoST > 0) {
    baseIcmsST = calcularBaseIcmsSTReduzida(
      valorProduto,
      valorFrete,
      valorSeguro,
      valorOutro,
      valorDesconto,
      percentualMVA,
      percentualReducaoST,
      valorIpi,
    )
  } else {
    baseIcmsST = calcularBaseIcmsST(
      valorProduto,
      valorFrete,
      valorSeguro,
      valorOutro,
      valorDesconto,
      percentualMVA,
      valorIpi,
    ).toString()
  }

  const valorIcmsProprio = calcularValorIcmsProprio(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcmsProprio,
  )

  const icms70 = Number.parseFloat(baseIcmsST) * (aliquotaIcmsST / 100) - valorIcmsProprio
  return Number(icms70).toFixed(2)
}


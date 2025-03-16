// Funções de cálculo de ICMS

// ==================== ICMS 00 (Cálculo Padrão) ====================

export function calcularBaseIcms(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  valorIpi = 0,
) {
  const baseIcms = valorProduto + valorFrete + valorSeguro + valorOutro - valorDesconto + valorIpi
  return Number(baseIcms.toFixed(2))
}

export function calcularIcms00(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi = 0,
) {
  const baseIcms = calcularBaseIcms(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, valorIpi)
  const icms00 = baseIcms * (aliquotaIcms / 100)
  return Number(icms00.toFixed(2))
}

// ==================== ICMS 10 (Substituição Tributária) ====================

export function calcularBaseIcmsProprio(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
) {
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
) {
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
  valorIpi = 0,
) {
  const baseIcmsProprio = calcularBaseIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto)
  const baseIcmsST = (baseIcmsProprio + valorIpi) * (1 + percentualMVA / 100)
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
  valorIpi = 0,
) {
  const baseIcmsST = calcularBaseIcmsST(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    percentualMVA,
    valorIpi,
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

// ==================== ICMS 20 (Base de Cálculo Reduzida) ====================

export function calcularBaseIcmsReduzida(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualReducao: number,
  valorIpi = 0,
) {
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
) {
  const baseIcmsProprio = calcularBaseIcmsReduzida(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    percentualReducao,
    valorIpi,
  )

  const icms20 = baseIcmsProprio * (aliquotaIcms / 100)
  return Number(icms20.toFixed(2))
}

// ==================== ICMS 51 (Diferimento Parcial) ====================

export function calcularIcmsOperacao(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi = 0,
) {
  const baseIcms = calcularBaseIcms(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, valorIpi)
  const icmsOperacao = baseIcms * (aliquotaIcms / 100)
  return Number(icmsOperacao.toFixed(2))
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
) {
  const icmsProprio = calcularIcmsOperacao(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    valorIpi,
  )

  const icmsDiferido = (percentualDiferimento / 100) * icmsProprio
  return Number(icmsDiferido.toFixed(2))
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
) {
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

  const icms51 = icmsOperacao - icmsDiferido
  return Number(icms51.toFixed(2))
}

// ==================== ICMS 70 (Redução na Base de Cálculo com ST) ====================

export function calcularBaseIcmsSTReduzida(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  percentualMVA: number,
  percentualReducaoST: number,
  valorIpi = 0,
) {
  const baseIcmsProprio = calcularBaseIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto)
  const baseIcmsST = (baseIcmsProprio + valorIpi) * (1 + percentualMVA / 100)
  const baseIcmsSTReduzida = baseIcmsST - (percentualReducaoST / 100) * baseIcmsST
  return Number(baseIcmsSTReduzida.toFixed(2))
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
  percentualReducao: number,
  percentualReducaoST: number,
  valorIpi = 0,
) {
  const baseIcmsST =
    percentualReducaoST > 0
      ? calcularBaseIcmsSTReduzida(
          valorProduto,
          valorFrete,
          valorSeguro,
          valorOutro,
          valorDesconto,
          percentualMVA,
          percentualReducaoST,
          valorIpi,
        )
      : calcularBaseIcmsST(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, percentualMVA, valorIpi)

  // Usar o percentualReducao para calcular o ICMS próprio com base reduzida, se aplicável
  const valorIcmsProprio =
    percentualReducao > 0
      ? calcularIcms20(
          valorProduto,
          valorFrete,
          valorSeguro,
          valorOutro,
          valorDesconto,
          percentualReducao,
          aliquotaIcmsProprio,
        )
      : calcularValorIcmsProprio(valorProduto, valorFrete, valorSeguro, valorOutro, valorDesconto, aliquotaIcmsProprio)

  const icms70 = baseIcmsST * (aliquotaIcmsST / 100) - valorIcmsProprio
  return Number(icms70.toFixed(2))
}


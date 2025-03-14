// src/utils/calculadoraICMS.ts

// Funções para ICMS 00
export function calcularBaseIcms(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  valorIpi: number = 0
): string {
  let baseIcms = valorProduto + 
                 valorFrete + 
                 valorSeguro + 
                 valorOutro - 
                 valorDesconto + 
                 valorIpi;
                 
  return Number(baseIcms).toFixed(2);
}

export function calcularIcms00(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi: number = 0
): string {
  let baseIcms = calcularBaseIcms(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    valorIpi
  );
  
  let icms00 = parseFloat(baseIcms) * (aliquotaIcms/100);
  return Number(icms00).toFixed(2);
}

// ... (código intermediário permanece o mesmo)

// Funções para ICMS 51
export function calcularIcmsOperacao(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  valorIpi: number = 0
): string {
  // Correção para o erro na linha 215
  let baseIcms = calcularBaseIcms(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    valorIpi
  );
                      
  let icmsOperacao = parseFloat(baseIcms) * (aliquotaIcms/100);
  return Number(icmsOperacao).toFixed(2);
}

export function calcularIcmsDiferido(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  percentualDiferimento: number,
  valorIpi: number = 0
): string {
  // Correção para o erro na linha 352 - removendo o parâmetro percentualReducao
  let icmsProprio = calcularIcmsOperacao(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    valorIpi
  );
                 
  let icmsDiferido = (percentualDiferimento/100) * parseFloat(icmsProprio);
  return Number(icmsDiferido).toFixed(2);
}

export function calcularIcms51(
  valorProduto: number,
  valorFrete: number,
  valorSeguro: number,
  valorOutro: number,
  valorDesconto: number,
  aliquotaIcms: number,
  percentualDiferimento: number,
  valorIpi: number = 0
): string {
  let icmsDiferido = calcularIcmsDiferido(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    percentualDiferimento,
    valorIpi
  );
                  
  let icmsOperacao = calcularIcmsOperacao(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcms,
    valorIpi
  );
  
  let icms51 = parseFloat(icmsOperacao) - parseFloat(icmsDiferido);
  return Number(icms51).toFixed(2);
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
  valorIpi: number = 0
): string {
  let baseIcmsProprio = calcularBaseIcmsProprio(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto
  );
                        
  let baseIcmsST = (baseIcmsProprio + valorIpi) * (1 + (percentualMVA/100));
  let baseIcmsSTReduzida = baseIcmsST - ((percentualReducaoST/100) * baseIcmsST);
  return Number(baseIcmsSTReduzida).toFixed(2);
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
  percentualReducao: number = 0,
  percentualReducaoST: number = 0,
  valorIpi: number = 0
): string {
  let baseIcmsST: string | number;
  
  if (percentualReducaoST > 0) {
    baseIcmsST = calcularBaseIcmsSTReduzida(
      valorProduto,
      valorFrete,
      valorSeguro,
      valorOutro,
      valorDesconto,
      percentualMVA,
      percentualReducaoST,
      valorIpi
    );
  } else {
    // Correção para o erro na linha 355
    let tempBaseIcmsST = calcularBaseIcmsST(
      valorProduto,
      valorFrete,
      valorSeguro,
      valorOutro,
      valorDesconto,
      percentualMVA,
      valorIpi
    );
    baseIcmsST = tempBaseIcmsST.toString();
  }
                
  let valorIcmsProprio = calcularValorIcmsProprio(
    valorProduto,
    valorFrete,
    valorSeguro,
    valorOutro,
    valorDesconto,
    aliquotaIcmsProprio
  );
  
  let icms70 = (parseFloat(baseIcmsST) * (aliquotaIcmsST/100)) - valorIcmsProprio;
  return Number(icms70).toFixed(2);
}

// ... (resto do código permanece o mesmo)
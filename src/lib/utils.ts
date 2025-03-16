// Funções auxiliares globais

/**
 * Concatena classes condicionalmente
 */
export function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Formata um valor para moeda brasileira (R$)
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

/**
 * Formata um número com separador de milhares e casas decimais
 */
export const formatNumber = (value: number, decimalPlaces = 2): string => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value)
}

/**
 * Formata uma porcentagem
 */
export const formatPercent = (value: number, decimalPlaces = 2): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value / 100)
}

/**
 * Converte uma string para número, tratando formatação brasileira
 */
export const parseNumberBR = (value: string): number => {
  // Remove R$, %, espaços e converte vírgula para ponto
  const cleanValue = value
    .replace(/[R$\s%]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")

  return Number(cleanValue)
}

/**
 * Gera um ID único
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Formata uma data para o formato brasileiro
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("pt-BR").format(date)
}

/**
 * Debounce para limitar a execução de funções
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}


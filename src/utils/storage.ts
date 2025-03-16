// Funções para salvar e recuperar cálculos do Local Storage

export interface CalculoSalvo {
  id: string
  tipo: string
  descricao: string
  valorBase: number
  aliquota: number
  resultado: number
  data: string
  detalhes?: Record<string, any>
}

/**
 * Gera um ID único para o cálculo
 */
const gerarId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}

/**
 * Salva um cálculo no Local Storage
 */
export const salvarCalculo = (calculo: Omit<CalculoSalvo, "id" | "data">): CalculoSalvo => {
  try {
    // Recupera os cálculos existentes
    const calculosAnteriores = recuperarCalculos()

    // Cria o novo cálculo com ID e data
    const novoCalculo: CalculoSalvo = {
      ...calculo,
      id: gerarId(),
      data: new Date().toISOString(),
    }

    // Adiciona o novo cálculo à lista
    const calculosAtualizados = [novoCalculo, ...calculosAnteriores]

    // Limita a quantidade de cálculos armazenados (opcional)
    const calculosLimitados = calculosAtualizados.slice(0, 50)

    // Salva no Local Storage
    localStorage.setItem("contaai_calculos", JSON.stringify(calculosLimitados))

    return novoCalculo
  } catch (error) {
    console.error("Erro ao salvar cálculo:", error)
    throw new Error("Não foi possível salvar o cálculo")
  }
}

/**
 * Recupera todos os cálculos do Local Storage
 */
export const recuperarCalculos = (): CalculoSalvo[] => {
  try {
    const calculosJSON = localStorage.getItem("contaai_calculos")
    if (!calculosJSON) return []

    return JSON.parse(calculosJSON) as CalculoSalvo[]
  } catch (error) {
    console.error("Erro ao recuperar cálculos:", error)
    return []
  }
}

/**
 * Recupera um cálculo específico pelo ID
 */
export const recuperarCalculoPorId = (id: string): CalculoSalvo | null => {
  try {
    const calculos = recuperarCalculos()
    return calculos.find((calculo) => calculo.id === id) || null
  } catch (error) {
    console.error("Erro ao recuperar cálculo por ID:", error)
    return null
  }
}

/**
 * Remove um cálculo específico pelo ID
 */
export const removerCalculo = (id: string): boolean => {
  try {
    const calculos = recuperarCalculos()
    const calculosAtualizados = calculos.filter((calculo) => calculo.id !== id)

    localStorage.setItem("contaai_calculos", JSON.stringify(calculosAtualizados))
    return true
  } catch (error) {
    console.error("Erro ao remover cálculo:", error)
    return false
  }
}

/**
 * Limpa todo o histórico de cálculos
 */
export const limparHistorico = (): boolean => {
  try {
    localStorage.removeItem("contaai_calculos")
    return true
  } catch (error) {
    console.error("Erro ao limpar histórico:", error)
    return false
  }
}

/**
 * Verifica se o Local Storage está disponível no navegador
 */
export const isLocalStorageDisponivel = (): boolean => {
  try {
    const testKey = "__test_storage__"
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    return false
  }
}


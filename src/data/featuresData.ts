export interface FeatureProps {
  title: string
  description: string
  iconType: string
  link: string
  index?: number
}

export interface BenefitProps {
  title: string
  description: string
  iconType: string
  index?: number
}

export const features: FeatureProps[] = [
  {
    title: "Calculadoras de ICMS",
    description: "Calcule o ICMS para diferentes tipos de tributação de forma rápida e precisa.",
    iconType: "calculator",
    link: "/calculadora",
  },
  {
    title: "Explicações Detalhadas",
    description: "Entenda como funciona o ICMS com explicações claras e exemplos práticos.",
    iconType: "book",
    link: "/explicacoes",
  },
  {
    title: "Mapa de Alíquotas",
    description: "Visualize as alíquotas de ICMS de cada estado brasileiro em um mapa interativo.",
    iconType: "map",
    link: "/mapa-icms",
  },
  {
    title: "Armazenamento Local",
    description: "Salve seus cálculos para consulta posterior diretamente no seu navegador.",
    iconType: "save",
    link: "/calculadora",
  },
]

export const benefits: BenefitProps[] = [
  {
    title: "Cálculos Precisos",
    description:
      "Algoritmos atualizados conforme a legislação vigente para garantir resultados confiáveis em todos os seus cálculos fiscais.",
    iconType: "check",
  },
  {
    title: "Economia de Tempo",
    description:
      "Reduza o tempo gasto em cálculos manuais e evite erros com nossa calculadora automatizada e intuitiva.",
    iconType: "clock",
  },
  {
    title: "Documentação Completa",
    description:
      "Gere relatórios em PDF para documentar seus cálculos e compartilhar com sua equipe ou guardar para referência futura.",
    iconType: "file",
  },
  {
    title: "Análise Visual",
    description:
      "Visualize as alíquotas e diferenças regionais através de mapas e gráficos interativos para melhor compreensão.",
    iconType: "chart",
  },
]


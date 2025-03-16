import type React from "react"
import { Link } from "react-router-dom"
import { Calculator, BookOpen, Map, Save, ArrowRight, CheckCircle2, Clock, FileText, BarChart3 } from "lucide-react"

const Home: React.FC = () => {
  const features = [
    {
      title: "Calculadoras de ICMS",
      description: "Calcule o ICMS para diferentes tipos de tributação de forma rápida e precisa.",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      link: "/calculadora",
    },
    {
      title: "Explicações Detalhadas",
      description: "Entenda como funciona o ICMS com explicações claras e exemplos práticos.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "/explicacoes",
    },
    {
      title: "Mapa de Alíquotas",
      description: "Visualize as alíquotas de ICMS de cada estado brasileiro em um mapa interativo.",
      icon: <Map className="h-8 w-8 text-primary" />,
      link: "/mapa-icms",
    },
    {
      title: "Armazenamento Local",
      description: "Salve seus cálculos para consulta posterior diretamente no seu navegador.",
      icon: <Save className="h-8 w-8 text-primary" />,
      link: "/calculadora",
    },
  ]

  return (
    <div className="container-app">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simplifique seus cálculos de ICMS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ContaAi é a ferramenta que profissionais e estudantes da área fiscal precisam para calcular e entender o
            ICMS de forma simples e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/calculadora" className="btn-primary flex items-center justify-center gap-2">
              <Calculator className="h-5 w-5" />
              Começar a Calcular
            </Link>
            <Link to="/explicacoes" className="btn-secondary flex items-center justify-center gap-2">
              <BookOpen className="h-5 w-5" />
              Aprender sobre ICMS
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos do ContaAi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="card-icms flex flex-col items-center text-center hover:bg-accent/50 transition-colors group"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="mr-1">Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por que usar o ContaAi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Cálculos Precisos</h3>
                <p className="text-muted-foreground">
                  Algoritmos atualizados conforme a legislação vigente para garantir resultados confiáveis.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Economia de Tempo</h3>
                <p className="text-muted-foreground">
                  Reduza o tempo gasto em cálculos manuais e evite erros com nossa calculadora automatizada.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Documentação Completa</h3>
                <p className="text-muted-foreground">
                  Gere relatórios em PDF para documentar seus cálculos e compartilhar com sua equipe.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BarChart3 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Análise Visual</h3>
                <p className="text-muted-foreground">
                  Visualize as alíquotas e diferenças regionais através de mapas e gráficos interativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para simplificar seus cálculos fiscais?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Comece a usar o ContaAi hoje mesmo e economize tempo com cálculos precisos de ICMS.
        </p>
        <Link to="/calculadora" className="btn-primary flex items-center justify-center gap-2 mx-auto w-fit">
          <Calculator className="h-5 w-5" />
          Experimentar Agora
        </Link>
      </section>
    </div>
  )
}

export default Home


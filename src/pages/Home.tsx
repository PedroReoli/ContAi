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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(75,44,44,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(181,155,106,0.1)_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent drop-shadow-sm">
              Simplifique seus cálculos de ICMS
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              ContaAi é a ferramenta que profissionais e estudantes da área fiscal precisam para calcular e entender o
              ICMS de forma simples e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/calculadora"
                className="bg-vinho hover:bg-vinho-dark text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calculator className="h-5 w-5" />
                Começar a Calcular
              </Link>
              <Link
                to="/explicacoes"
                className="bg-dourado/90 hover:bg-dourado text-slate-900 font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <BookOpen className="h-5 w-5" />
                Aprender sobre ICMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
                Recursos do ContaAi
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-dourado rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 group border border-transparent hover:border-vinho/20"
              >
                <div className="mb-6 p-5 bg-vinho/10 rounded-full transform transition-transform group-hover:scale-110 group-hover:bg-vinho/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vinho dark:text-dourado">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{feature.description}</p>
                <div className="mt-auto text-vinho dark:text-dourado flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="mr-1 font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
                Por que usar o ContaAi?
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-dourado rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="mr-6 p-4 bg-vinho/10 rounded-full">
                <CheckCircle2 className="h-8 w-8 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-vinho dark:text-dourado">Cálculos Precisos</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Algoritmos atualizados conforme a legislação vigente para garantir resultados confiáveis em todos os
                  seus cálculos fiscais.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="mr-6 p-4 bg-vinho/10 rounded-full">
                <Clock className="h-8 w-8 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-vinho dark:text-dourado">Economia de Tempo</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Reduza o tempo gasto em cálculos manuais e evite erros com nossa calculadora automatizada e intuitiva.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="mr-6 p-4 bg-vinho/10 rounded-full">
                <FileText className="h-8 w-8 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-vinho dark:text-dourado">Documentação Completa</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Gere relatórios em PDF para documentar seus cálculos e compartilhar com sua equipe ou guardar para
                  referência futura.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="mr-6 p-4 bg-vinho/10 rounded-full">
                <BarChart3 className="h-8 w-8 text-vinho dark:text-dourado" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-vinho dark:text-dourado">Análise Visual</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Visualize as alíquotas e diferenças regionais através de mapas e gráficos interativos para melhor
                  compreensão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mx-6 md:mx-12 lg:mx-20 rounded-3xl bg-gradient-to-r from-vinho/10 via-vinho/5 to-dourado/10 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-vinho dark:text-dourado">
            Pronto para simplificar seus cálculos fiscais?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            Comece a usar o ContaAi hoje mesmo e economize tempo com cálculos precisos de ICMS. Sem instalações, sem
            complicações.
          </p>
          <Link
            to="/calculadora"
            className="bg-vinho hover:bg-vinho-dark text-white font-medium py-4 px-10 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            <Calculator className="h-5 w-5" />
            Experimentar Agora
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home


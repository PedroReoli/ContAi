import { Link } from "react-router-dom";
import { Calculator, BookOpen, Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 mb-4">
          Ajuda Fiscal
        </h1>
        <p className="text-xl text-text-light dark:text-gray-300">
          Simplifique seus cálculos tributários e entenda melhor o ICMS com nossa ferramenta completa.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-8 hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="icon-bg mb-4">
              <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Calculadoras</h2>
            <p className="text-text-light dark:text-gray-300 mb-4">
              Calcule ICMS para diferentes situações tributárias de forma rápida e precisa.
            </p>
            <Link to="/calculadoras" className="btn-primary inline-flex items-center">
              Acessar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="card p-8 hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="icon-bg mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Explicações</h2>
            <p className="text-text-light dark:text-gray-300 mb-4">
              Entenda os conceitos de ICMS, CST, CSOSN e as alíquotas por estado.
            </p>
            <Link to="/explicacoes" className="btn-primary inline-flex items-center">
              Acessar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="card p-8 hover-lift">
          <div className="flex flex-col items-center text-center">
            <div className="icon-bg mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Contato</h2>
            <p className="text-text-light dark:text-gray-300 mb-4">
              Precisa de ajuda? Entre em contato conosco para esclarecer suas dúvidas.
            </p>
            <Link to="/contato" className="btn-primary inline-flex items-center">
              Acessar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="section-title">Por que usar o Ajuda Fiscal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
              <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Cálculos Precisos</h3>
              <p className="text-text-light dark:text-gray-300">
                Nossas calculadoras seguem rigorosamente a legislação tributária brasileira, garantindo resultados precisos para suas operações fiscais.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Explicações Claras</h3>
              <p className="text-text-light dark:text-gray-300">
                Entenda facilmente conceitos complexos com nossas explicações detalhadas sobre ICMS, CST e CSOSN.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
              <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Atualizado</h3>
              <p className="text-text-light dark:text-gray-300">
                Mantemos nossas informações sempre atualizadas conforme as mudanças na legislação tributária.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Fácil de Usar</h3>
              <p className="text-text-light dark:text-gray-300">
                Interface intuitiva que permite realizar cálculos complexos com poucos cliques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
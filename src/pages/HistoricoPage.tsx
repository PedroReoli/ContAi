import type React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import HistoricoCalculos from "@/components/HistoricoCalculos"
import { Database, Shield, HardDrive, Info } from "lucide-react"

const HistoricoPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vinho to-dourado bg-clip-text text-transparent">
            Histórico de Cálculos
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Consulte e gerencie todos os seus cálculos salvos anteriormente para referência rápida
          </p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-vinho to-dourado"></div>
          <CardHeader className="bg-slate-50 dark:bg-slate-800/50 p-8">
            <CardTitle className="text-3xl text-vinho dark:text-dourado flex items-center gap-3">
              <Database className="h-7 w-7" />
              Seus Cálculos Salvos
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
              Todos os cálculos são armazenados localmente no seu navegador para fácil acesso
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <HistoricoCalculos />

            <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-vinho dark:text-dourado flex items-center gap-3">
                <Info className="h-6 w-6" />
                Sobre o Armazenamento Local
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-vinho/10 dark:bg-vinho/20 rounded-full">
                    <HardDrive className="h-6 w-6 text-vinho dark:text-dourado" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">
                      O que é o Local Storage?
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      É um recurso do navegador que permite armazenar dados no seu dispositivo de forma persistente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-vinho/10 dark:bg-vinho/20 rounded-full">
                    <Shield className="h-6 w-6 text-vinho dark:text-dourado" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">Privacidade</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Os dados são armazenados apenas no seu dispositivo e não são enviados para nenhum servidor
                      externo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-vinho/10 dark:bg-vinho/20 rounded-full">
                    <Info className="h-6 w-6 text-vinho dark:text-dourado" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">Limitações</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Os dados podem ser perdidos se você limpar o cache do navegador ou usar o modo de navegação
                      anônima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-vinho/10 dark:bg-vinho/20 rounded-full">
                    <Database className="h-6 w-6 text-vinho dark:text-dourado" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">Capacidade</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      O Local Storage tem um limite de armazenamento (geralmente 5-10MB), mas é mais que suficiente para
                      salvar seus cálculos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default HistoricoPage


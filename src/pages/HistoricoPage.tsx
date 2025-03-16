import type React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import HistoricoCalculos from "@/components/HistoricoCalculos"
import { Database, Shield, HardDrive, Info } from 'lucide-react'

const HistoricoPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Histórico de Cálculos</h1>
          <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-3xl mx-auto">
            Consulte e gerencie todos os seus cálculos salvos anteriormente para referência rápida
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-xl border-0 overflow-hidden bg-white/90 dark:bg-bg-darker/90 backdrop-blur-sm">
            <div className="h-2 bg-gradient-primary"></div>
            <CardHeader className="bg-bg-medium/30 dark:bg-bg-dark/30 p-8">
              <CardTitle className="text-3xl text-primary dark:text-secondary flex items-center gap-3">
                <Database className="h-7 w-7" />
                Seus Cálculos Salvos
              </CardTitle>
              <CardDescription className="text-lg text-txt-secondary dark:text-txt-muted mt-2">
                Todos os cálculos são armazenados localmente no seu navegador para fácil acesso
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <HistoricoCalculos />

              <div className="mt-12 p-8 bg-bg-medium/30 dark:bg-bg-dark/30 rounded-2xl border border-bg-medium/30 dark:border-bg-dark/50">
                <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-secondary flex items-center gap-3">
                  <Info className="h-6 w-6" />
                  Sobre o Armazenamento Local
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <HardDrive className="h-6 w-6 text-primary dark:text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-2 text-txt-primary dark:text-txt-light">
                        O que é o Local Storage?
                      </p>
                      <p className="text-txt-secondary dark:text-txt-muted">
                        É um recurso do navegador que permite armazenar dados no seu dispositivo de forma persistente.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <Shield className="h-6 w-6 text-primary dark:text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-2 text-txt-primary dark:text-txt-light">Privacidade</p>
                      <p className="text-txt-secondary dark:text-txt-muted">
                        Os dados são armazenados apenas no seu dispositivo e não são enviados para nenhum servidor
                        externo.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <Info className="h-6 w-6 text-primary dark:text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-2 text-txt-primary dark:text-txt-light">Limitações</p>
                      <p className="text-txt-secondary dark:text-txt-muted">
                        Os dados podem ser perdidos se você limpar o cache do navegador ou usar o modo de navegação
                        anônima.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <Database className="h-6 w-6 text-primary dark:text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-2 text-txt-primary dark:text-txt-light">Capacidade</p>
                      <p className="text-txt-secondary dark:text-txt-muted">
                        O Local Storage tem um limite de armazenamento (geralmente 5-10MB), mas é mais que suficiente para
                        salvar seus cálculos.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default HistoricoPage

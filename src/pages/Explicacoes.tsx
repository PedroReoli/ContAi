"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/tabs"
import { BookOpen, FileText, BarChart3, HelpCircle } from "lucide-react"
import IntroducaoICMS from "@/components/page-components/explicacoes/IntroducaoICMS"
import TiposICMS from "@/components/page-components/explicacoes/TiposICMS"
import InfograficosICMS from "@/components/page-components/explicacoes/InfograficosICMS"
import FAQICMS from "@/components/page-components/explicacoes/FAQICMS"

const Explicacoes: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-secondary">
            Explicações sobre ICMS
          </h1>
          <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-3xl mx-auto">
            Entenda como funciona o Imposto sobre Circulação de Mercadorias e Serviços no Brasil
          </p>
        </motion.div>

        <div className="glass-card overflow-hidden shadow-xl border-0">
          <div className="h-2 bg-gradient-primary"></div>

          <Tabs defaultTab="introducao" onChange={() => {}}>
            <div className="bg-bg-medium/30 dark:bg-bg-dark/30 p-2 sm:p-4">
              <TabList className="flex flex-wrap justify-start md:justify-center gap-2 py-2">
                <Tab
                  id="introducao"
                  className="px-3 sm:px-6 py-3 font-medium text-sm sm:text-base rounded-lg transition-all border-0 data-[state=active]:bg-primary/10 dark:data-[state=active]:bg-secondary/10 data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Introdução</span>
                </Tab>
                <Tab
                  id="tipos"
                  className="px-3 sm:px-6 py-3 font-medium text-sm sm:text-base rounded-lg transition-all border-0 data-[state=active]:bg-primary/10 dark:data-[state=active]:bg-secondary/10 data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Tipos de ICMS</span>
                </Tab>
                <Tab
                  id="infograficos"
                  className="px-3 sm:px-6 py-3 font-medium text-sm sm:text-base rounded-lg transition-all border-0 data-[state=active]:bg-primary/10 dark:data-[state=active]:bg-secondary/10 data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Infográficos</span>
                </Tab>
                <Tab
                  id="faq"
                  className="px-3 sm:px-6 py-3 font-medium text-sm sm:text-base rounded-lg transition-all border-0 data-[state=active]:bg-primary/10 dark:data-[state=active]:bg-secondary/10 data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Perguntas Frequentes</span>
                </Tab>
              </TabList>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <TabPanel id="introducao">
                <IntroducaoICMS />
              </TabPanel>

              <TabPanel id="tipos">
                <TiposICMS />
              </TabPanel>

              <TabPanel id="infograficos">
                <InfograficosICMS />
              </TabPanel>

              <TabPanel id="faq">
                <FAQICMS />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Explicacoes


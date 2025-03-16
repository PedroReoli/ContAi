"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { BookOpen, FileText, BarChart3, HelpCircle } from "lucide-react"
import IntroducaoICMS from "@/components/explicacoes/IntroducaoICMS"
import TiposICMS from "@/components/explicacoes/TiposICMS"
import InfograficosICMS from "@/components/explicacoes/InfograficosICMS"
import FAQICMS from "@/components/explicacoes/FAQICMS"

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explicações sobre ICMS</h1>
          <p className="text-txt-secondary dark:text-txt-muted text-lg max-w-3xl mx-auto">
            Entenda como funciona o Imposto sobre Circulação de Mercadorias e Serviços no Brasil
          </p>
        </motion.div>

        <Tabs defaultTab="introducao" onChange={() => {}}>
          <TabList className="mb-10 flex justify-center border-b border-bg-medium/30 dark:border-bg-dark/50 overflow-x-auto">
            <Tab
              id="introducao"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-primary dark:data-[state=active]:border-secondary data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Introdução
            </Tab>
            <Tab
              id="tipos"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-primary dark:data-[state=active]:border-secondary data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Tipos de ICMS
            </Tab>
            <Tab
              id="infograficos"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-primary dark:data-[state=active]:border-secondary data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              Infográficos
            </Tab>
            <Tab
              id="faq"
              className="px-6 py-4 font-medium text-base transition-colors border-b-2 border-transparent data-[state=active]:border-primary dark:data-[state=active]:border-secondary data-[state=active]:text-primary dark:data-[state=active]:text-secondary flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </Tab>
          </TabList>

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
        </Tabs>
      </div>
    </div>
  )
}

export default Explicacoes


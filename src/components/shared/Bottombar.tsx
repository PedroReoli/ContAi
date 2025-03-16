"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Calculator,
  FileText,
  Map,
  HelpCircle,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

const Bottombar: React.FC = () => {
  const { theme } = useTheme()

  const footerLinks = [
    {
      title: "Recursos",
      links: [
        { name: "Calculadora de ICMS", href: "/calculadora", icon: <Calculator className="h-4 w-4" /> },
        { name: "Explicações Detalhadas", href: "/explicacoes", icon: <FileText className="h-4 w-4" /> },
        { name: "Mapa de Alíquotas", href: "/mapa-icms", icon: <Map className="h-4 w-4" /> },
        { name: "Histórico de Cálculos", href: "/historico", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "FAQ", href: "#", icon: <HelpCircle className="h-4 w-4" /> },
        {
          name: "Meu Trabalho",
          href: "https://pedroreoliportfolio.vercel.app/",
          icon: <ExternalLink className="h-4 w-4" />,
          external: true,
        },
        {
          name: "Reportar Problema",
          href: "mailto:pedrosousa2160@gmail.com",
          icon: <HelpCircle className="h-4 w-4" />,
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "#", icon: <FileText className="h-4 w-4" /> },
        { name: "Política de Privacidade", href: "#", icon: <FileText className="h-4 w-4" /> },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
  ]

  return (
    <footer className={`relative overflow-hidden ${theme === "dark" ? "dark" : ""}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-light to-bg-medium dark:from-bg-dark dark:to-bg-darker opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand and description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="bg-gradient-primary p-2 rounded-lg shadow-md mr-3">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-txt-primary dark:text-txt-light">
                Conta<span className="text-secondary">Aí</span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-txt-secondary dark:text-txt-muted"
            >
              Simplificando cálculos fiscais para profissionais e estudantes da área contábil e tributária. Nossa
              plataforma oferece ferramentas precisas e atualizadas para facilitar seu trabalho com ICMS.
            </motion.p>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-primary dark:text-secondary">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center text-txt-secondary dark:text-txt-muted hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                        <span>{link.name}</span>
                        <ArrowRight className="ml-1 h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="group flex items-center text-txt-secondary dark:text-txt-muted hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                        <span>{link.name}</span>
                        <ArrowRight className="ml-1 h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section with copyright and social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-bg-medium/30 dark:border-bg-dark/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-txt-secondary dark:text-txt-muted text-sm mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Conta<span className="text-secondary">Aí</span> - Todos os direitos
            reservados
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-bg-medium/30 dark:bg-bg-dark/30 text-txt-secondary dark:text-txt-muted hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/10 dark:hover:text-secondary transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* "Made with love" section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center text-xs text-txt-secondary dark:text-txt-muted"
        >
          <p>
            Desenvolvido com <span className="text-state-error">❤</span> para simplificar a vida fiscal
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Bottombar


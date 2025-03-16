import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cores primárias
        vinho: {
          DEFAULT: "#4B2C2C", // Vinho Profundo
          light: "#6D4141",
          dark: "#3A2222",
        },
        // Cores secundárias
        dourado: {
          DEFAULT: "#B59B6A", // Dourado Suave
          light: "#C9B285",
          dark: "#9A8359",
        },
        // Cores de fundo
        bg: {
          light: "#F4F4F4", // Cinza Claro Neutro
          medium: "#D9D9D9", // Cinza Médio
          dark: "#121212", // Preto Grafite
          darker: "#1E1E1E", // Cinza Chumbo
        },
        // Cores de texto
        txt: {
          primary: "#222222", // Preto para texto principal (modo claro)
          secondary: "#555555", // Cinza escuro para texto secundário (modo claro)
          light: "#FFFFFF", // Branco para texto (modo escuro)
          muted: "#B0B0B0", // Cinza Médio para texto secundário
          accent: "#B59B6A", // Dourado para texto de destaque
        },
        // Cores de estado
        state: {
          error: "#8B0000", // Vermelho Escuro
          success: "#2F4F4F", // Verde Militar
          warning: "#CDAA7D", // Bronze
        },
        // Cores para botões
        btn: {
          primary: "#222222", // Preto Fosco
          secondary: "#3A3A3A", // Cinza Aço
          hover: "#4B2C2C", // Vinho Profundo
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config


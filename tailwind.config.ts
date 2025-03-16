/** @type {import('tailwindcss').Config} */
const tailwindcssAnimate = require("tailwindcss-animate")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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

        // Cores de fundo
        "bg-light": "rgb(var(--background-light))",
        "bg-medium": "rgb(var(--background-medium))",
        "bg-dark": "rgb(var(--background-dark))",
        "bg-darker": "rgb(var(--background-darker))",

        // Cores de texto
        "txt-primary": "rgb(var(--text-primary))",
        "txt-secondary": "rgb(var(--text-secondary))",
        "txt-light": "rgb(var(--text-light))",
        "txt-muted": "rgb(var(--text-muted))",
        "txt-accent": "rgb(var(--text-accent))",

        // Estados
        "state-error": "rgb(var(--state-error))",
        "state-success": "rgb(var(--state-success))",
        "state-warning": "rgb(var(--state-warning))",
        "state-info": "rgb(var(--state-info))",

        // Botões
        "btn-primary": "rgb(var(--button-primary))",
        "btn-secondary": "rgb(var(--button-secondary))",
        "btn-hover": "rgb(var(--button-hover))",

        // Legado - manter para compatibilidade
        vinho: "rgb(var(--primary))",
        dourado: "rgb(var(--secondary))",
        "vinho-dark": "rgb(var(--button-hover))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 10px rgba(var(--shadow-color), var(--shadow-strength))",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}


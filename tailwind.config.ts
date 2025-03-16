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
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1920px",
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
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 10px rgba(var(--shadow-color), var(--shadow-strength))",
        "glow-lg": "0 0 20px rgba(var(--shadow-color), var(--shadow-strength))",
        "inner-glow": "inset 0 0 10px rgba(var(--shadow-color), var(--shadow-strength))",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgba(var(--primary), 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(var(--secondary), 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(var(--primary), 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(var(--secondary), 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(var(--primary), 0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(var(--secondary), 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(var(--primary), 0.1) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}


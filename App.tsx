import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Layout from "@/components/shared/Layout"
import Home from "@/pages/Home"
import Calculadora from "@/pages/Calculadora"
import Explicacoes from "@/pages/Explicacoes"
import MapaICMS from "@/pages/MapaICMS"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/explicacoes" element={<Explicacoes />} />
            <Route path="/mapa-icms" element={<MapaICMS />} />
            {/* Rota de fallback para redirecionar URLs inválidas para a página inicial */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App


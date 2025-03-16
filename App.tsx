import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./src/contexts/ThemeContext"
import Layout from "./src/components/Layout"
import Home from "./src/pages/Home"
import Calculadora from "./src/pages/Calculadora"
import Explicacoes from "./src/pages/Explicacoes"
import MapaICMS from "./src/pages/MapaICMS"

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


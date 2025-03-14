import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import Calculadoras from "@/pages/Calculadoras"
import Explicacoes from "@/pages/Explicacoes"
import { ThemeProvider } from "@/contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadoras" element={<Calculadoras />} />
            <Route path="/explicacoes" element={<Explicacoes />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App


import type React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import HistoricoCalculos from "@/components/HistoricoCalculos"

const HistoricoPage: React.FC = () => {
  return (
    <div className="container-app">
      <h1 className="mb-6">Histórico de Cálculos</h1>

      <Card>
        <CardHeader>
          <CardTitle>Seus Cálculos Salvos</CardTitle>
          <CardDescription>Consulte todos os cálculos que você salvou anteriormente</CardDescription>
        </CardHeader>
        <CardContent>
          <HistoricoCalculos />

          <div className="mt-8 p-4 bg-muted rounded-md">
            <h3 className="text-lg font-semibold mb-2">Sobre o Armazenamento Local</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>O que é o Local Storage?</strong> É um recurso do navegador que permite armazenar dados no seu
                dispositivo.
              </p>
              <p>
                <strong>Privacidade:</strong> Os dados são armazenados apenas no seu dispositivo e não são enviados para
                nenhum servidor.
              </p>
              <p>
                <strong>Limitações:</strong> Os dados podem ser perdidos se você limpar o cache do navegador ou usar o
                modo de navegação anônima.
              </p>
              <p>
                <strong>Capacidade:</strong> O Local Storage tem um limite de armazenamento (geralmente 5-10MB), mas é
                mais que suficiente para salvar seus cálculos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HistoricoPage


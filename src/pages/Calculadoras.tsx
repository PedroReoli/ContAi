"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  calcularBaseIcms,
  calcularIcms00,
  calcularBaseIcmsProprio,
  calcularValorIcmsProprio,
  calcularBaseIcmsST,
  calcularIcms10,
  calcularBaseIcmsReduzida,
  calcularIcms20,
  calcularIcmsOperacao,
  calcularIcmsDiferido,
  calcularIcms51,
  calcularBaseIcmsSTReduzida,
  calcularIcms70,
  formatCurrency,
} from "@/utils/calculadoraICMS"

export default function Calculadora() {
  // ICMS 00
  const [icms00, setIcms00] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    aliquotaIcms: "",
    valorIpi: "",
  })
  const [resultado00, setResultado00] = useState<{
    baseIcms: string
    icms: string
  } | null>(null)

  // ICMS 10/30
  const [icms10, setIcms10] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    percentualMVA: "",
    aliquotaIcmsProprio: "",
    aliquotaIcmsST: "",
    valorIPI: "",
  })
  const [resultado10, setResultado10] = useState<{
    baseIcmsProprio: string
    valorIcmsProprio: string
    baseIcmsST: string
    icms10: string
  } | null>(null)

  // ICMS 20
  const [icms20, setIcms20] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    percentualReducao: "",
    aliquotaIcms: "",
    valorIpi: "",
  })
  const [resultado20, setResultado20] = useState<{
    baseIcmsReduzida: string
    icms20: string
  } | null>(null)

  // ICMS 51
  const [icms51, setIcms51] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    aliquotaIcms: "",
    percentualDiferimento: "",
    valorIpi: "",
  })
  const [resultado51, setResultado51] = useState<{
    baseIcms: string
    icmsOperacao: string
    icmsDiferido: string
    icms51: string
  } | null>(null)

  // ICMS 70
  const [icms70, setIcms70] = useState({
    valorProduto: "",
    valorFrete: "",
    valorSeguro: "",
    valorOutro: "",
    valorDesconto: "",
    percentualMVA: "",
    aliquotaIcmsProprio: "",
    aliquotaIcmsST: "",
    percentualReducao: "",
    percentualReducaoST: "",
    valorIpi: "",
  })
  const [resultado70, setResultado70] = useState<{
    baseIcmsProprio: string
    valorIcmsProprio: string
    baseIcmsST: string
    icms70: string
  } | null>(null)

  // Handlers
  const handleIcms00Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms00({ ...icms00, [id.replace("icms00-", "")]: value })
  }

  const handleIcms10Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms10({ ...icms10, [id.replace("icms10-", "")]: value })
  }

  const handleIcms20Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms20({ ...icms20, [id.replace("icms20-", "")]: value })
  }

  const handleIcms51Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms51({ ...icms51, [id.replace("icms51-", "")]: value })
  }

  const handleIcms70Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms70({ ...icms70, [id.replace("icms70-", "")]: value })
  }

  // Calculate functions
  const calcular00 = () => {
    const baseIcms = calcularBaseIcms(
      Number.parseFloat(icms00.valorProduto) || 0,
      Number.parseFloat(icms00.valorFrete) || 0,
      Number.parseFloat(icms00.valorSeguro) || 0,
      Number.parseFloat(icms00.valorOutro) || 0,
      Number.parseFloat(icms00.valorDesconto) || 0,
      Number.parseFloat(icms00.valorIpi) || 0,
    )

    const icms = calcularIcms00(
      Number.parseFloat(icms00.valorProduto) || 0,
      Number.parseFloat(icms00.valorFrete) || 0,
      Number.parseFloat(icms00.valorSeguro) || 0,
      Number.parseFloat(icms00.valorOutro) || 0,
      Number.parseFloat(icms00.valorDesconto) || 0,
      Number.parseFloat(icms00.aliquotaIcms) || 0,
      Number.parseFloat(icms00.valorIpi) || 0,
    )

    setResultado00({ baseIcms, icms })
  }

  const calcular10 = () => {
    const baseIcmsProprio = calcularBaseIcmsProprio(
      Number.parseFloat(icms10.valorProduto) || 0,
      Number.parseFloat(icms10.valorFrete) || 0,
      Number.parseFloat(icms10.valorSeguro) || 0,
      Number.parseFloat(icms10.valorOutro) || 0,
      Number.parseFloat(icms10.valorDesconto) || 0,
    )

    const valorIcmsProprio = calcularValorIcmsProprio(
      Number.parseFloat(icms10.valorProduto) || 0,
      Number.parseFloat(icms10.valorFrete) || 0,
      Number.parseFloat(icms10.valorSeguro) || 0,
      Number.parseFloat(icms10.valorOutro) || 0,
      Number.parseFloat(icms10.valorDesconto) || 0,
      Number.parseFloat(icms10.aliquotaIcmsProprio) || 0,
    )

    const baseIcmsST = calcularBaseIcmsST(
      Number.parseFloat(icms10.valorProduto) || 0,
      Number.parseFloat(icms10.valorFrete) || 0,
      Number.parseFloat(icms10.valorSeguro) || 0,
      Number.parseFloat(icms10.valorOutro) || 0,
      Number.parseFloat(icms10.valorDesconto) || 0,
      Number.parseFloat(icms10.percentualMVA) || 0,
      Number.parseFloat(icms10.valorIPI) || 0,
    )

    const icms10 = calcularIcms10(
      Number.parseFloat(icms10.valorProduto) || 0,
      Number.parseFloat(icms10.valorFrete) || 0,
      Number.parseFloat(icms10.valorSeguro) || 0,
      Number.parseFloat(icms10.valorOutro) || 0,
      Number.parseFloat(icms10.valorDesconto) || 0,
      Number.parseFloat(icms10.percentualMVA) || 0,
      Number.parseFloat(icms10.aliquotaIcmsProprio) || 0,
      Number.parseFloat(icms10.aliquotaIcmsST) || 0,
      Number.parseFloat(icms10.valorIPI) || 0,
    )

    setResultado10({
      baseIcmsProprio: baseIcmsProprio.toString(),
      valorIcmsProprio: valorIcmsProprio.toString(),
      baseIcmsST: baseIcmsST.toString(),
      icms10,
    })
  }

  const calcular20 = () => {
    const baseIcmsReduzida = calcularBaseIcmsReduzida(
      Number.parseFloat(icms20.valorProduto) || 0,
      Number.parseFloat(icms20.valorFrete) || 0,
      Number.parseFloat(icms20.valorSeguro) || 0,
      Number.parseFloat(icms20.valorOutro) || 0,
      Number.parseFloat(icms20.valorDesconto) || 0,
      Number.parseFloat(icms20.percentualReducao) || 0,
      Number.parseFloat(icms20.valorIpi) || 0,
    )

    const icms20 = calcularIcms20(
      Number.parseFloat(icms20.valorProduto) || 0,
      Number.parseFloat(icms20.valorFrete) || 0,
      Number.parseFloat(icms20.valorSeguro) || 0,
      Number.parseFloat(icms20.valorOutro) || 0,
      Number.parseFloat(icms20.valorDesconto) || 0,
      Number.parseFloat(icms20.percentualReducao) || 0,
      Number.parseFloat(icms20.aliquotaIcms) || 0,
      Number.parseFloat(icms20.valorIpi) || 0,
    )

    setResultado20({ baseIcmsReduzida, icms20 })
  }

  const calcular51 = () => {
    const baseIcms = calcularBaseIcms(
      Number.parseFloat(icms51.valorProduto) || 0,
      Number.parseFloat(icms51.valorFrete) || 0,
      Number.parseFloat(icms51.valorSeguro) || 0,
      Number.parseFloat(icms51.valorOutro) || 0,
      Number.parseFloat(icms51.valorDesconto) || 0,
      Number.parseFloat(icms51.valorIpi) || 0,
    )

    const icmsOperacao = calcularIcmsOperacao(
      Number.parseFloat(icms51.valorProduto) || 0,
      Number.parseFloat(icms51.valorFrete) || 0,
      Number.parseFloat(icms51.valorSeguro) || 0,
      Number.parseFloat(icms51.valorOutro) || 0,
      Number.parseFloat(icms51.valorDesconto) || 0,
      Number.parseFloat(icms51.aliquotaIcms) || 0,
      Number.parseFloat(icms51.valorIpi) || 0,
    )

    const icmsDiferido = calcularIcmsDiferido(
      Number.parseFloat(icms51.valorProduto) || 0,
      Number.parseFloat(icms51.valorFrete) || 0,
      Number.parseFloat(icms51.valorSeguro) || 0,
      Number.parseFloat(icms51.valorOutro) || 0,
      Number.parseFloat(icms51.valorDesconto) || 0,
      Number.parseFloat(icms51.aliquotaIcms) || 0,
      Number.parseFloat(icms51.percentualDiferimento) || 0,
      Number.parseFloat(icms51.valorIpi) || 0,
    )

    const icms51 = calcularIcms51(
      Number.parseFloat(icms51.valorProduto) || 0,
      Number.parseFloat(icms51.valorFrete) || 0,
      Number.parseFloat(icms51.valorSeguro) || 0,
      Number.parseFloat(icms51.valorOutro) || 0,
      Number.parseFloat(icms51.valorDesconto) || 0,
      Number.parseFloat(icms51.aliquotaIcms) || 0,
      Number.parseFloat(icms51.percentualDiferimento) || 0,
      Number.parseFloat(icms51.valorIpi) || 0,
    )

    setResultado51({ baseIcms, icmsOperacao, icmsDiferido, icms51 })
  }

  const calcular70 = () => {
    const baseIcmsProprio = calcularBaseIcmsProprio(
      Number.parseFloat(icms70.valorProduto) || 0,
      Number.parseFloat(icms70.valorFrete) || 0,
      Number.parseFloat(icms70.valorSeguro) || 0,
      Number.parseFloat(icms70.valorOutro) || 0,
      Number.parseFloat(icms70.valorDesconto) || 0,
    )

    const valorIcmsProprio = calcularValorIcmsProprio(
      Number.parseFloat(icms70.valorProduto) || 0,
      Number.parseFloat(icms70.valorFrete) || 0,
      Number.parseFloat(icms70.valorSeguro) || 0,
      Number.parseFloat(icms70.valorOutro) || 0,
      Number.parseFloat(icms70.valorDesconto) || 0,
      Number.parseFloat(icms70.aliquotaIcmsProprio) || 0,
    )

    let baseIcmsST
    if (Number.parseFloat(icms70.percentualReducaoST) > 0) {
      baseIcmsST = calcularBaseIcmsSTReduzida(
        Number.parseFloat(icms70.valorProduto) || 0,
        Number.parseFloat(icms70.valorFrete) || 0,
        Number.parseFloat(icms70.valorSeguro) || 0,
        Number.parseFloat(icms70.valorOutro) || 0,
        Number.parseFloat(icms70.valorDesconto) || 0,
        Number.parseFloat(icms70.percentualMVA) || 0,
        Number.parseFloat(icms70.percentualReducaoST) || 0,
        Number.parseFloat(icms70.valorIpi) || 0,
      )
    } else {
      baseIcmsST = calcularBaseIcmsST(
        Number.parseFloat(icms70.valorProduto) || 0,
        Number.parseFloat(icms70.valorFrete) || 0,
        Number.parseFloat(icms70.valorSeguro) || 0,
        Number.parseFloat(icms70.valorOutro) || 0,
        Number.parseFloat(icms70.valorDesconto) || 0,
        Number.parseFloat(icms70.percentualMVA) || 0,
        Number.parseFloat(icms70.valorIpi) || 0,
      ).toString()
    }

    const icms70 = calcularIcms70(
      Number.parseFloat(icms70.valorProduto) || 0,
      Number.parseFloat(icms70.valorFrete) || 0,
      Number.parseFloat(icms70.valorSeguro) || 0,
      Number.parseFloat(icms70.valorOutro) || 0,
      Number.parseFloat(icms70.valorDesconto) || 0,
      Number.parseFloat(icms70.percentualMVA) || 0,
      Number.parseFloat(icms70.aliquotaIcmsProprio) || 0,
      Number.parseFloat(icms70.aliquotaIcmsST) || 0,
      Number.parseFloat(icms70.percentualReducao) || 0,
      Number.parseFloat(icms70.percentualReducaoST) || 0,
      Number.parseFloat(icms70.valorIpi) || 0,
    )

    setResultado70({
      baseIcmsProprio: baseIcmsProprio.toString(),
      valorIcmsProprio: valorIcmsProprio.toString(),
      baseIcmsST: baseIcmsST.toString(),
      icms70,
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Calculadora de ICMS</h1>

      <Tabs defaultValue="icms00">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6">
          <TabsTrigger value="icms00">ICMS 00</TabsTrigger>
          <TabsTrigger value="icms10">ICMS 10/30</TabsTrigger>
          <TabsTrigger value="icms20">ICMS 20</TabsTrigger>
          <TabsTrigger value="icms51">ICMS 51</TabsTrigger>
          <TabsTrigger value="icms70">ICMS 70</TabsTrigger>
        </TabsList>

        {/* ICMS 00 */}
        <TabsContent value="icms00">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 00 - Tributação Normal</CardTitle>
              <CardDescription>Cálculo de ICMS para operações com tributação normal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="icms00-valorProduto">Valor do Produto</Label>
                  <Input
                    id="icms00-valorProduto"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorProduto}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-valorFrete">Valor do Frete</Label>
                  <Input
                    id="icms00-valorFrete"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorFrete}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-valorSeguro">Valor do Seguro</Label>
                  <Input
                    id="icms00-valorSeguro"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorSeguro}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-valorOutro">Outras Despesas</Label>
                  <Input
                    id="icms00-valorOutro"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorOutro}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-valorDesconto">Valor do Desconto</Label>
                  <Input
                    id="icms00-valorDesconto"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorDesconto}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-aliquotaIcms">Alíquota do ICMS (%)</Label>
                  <Input
                    id="icms00-aliquotaIcms"
                    type="number"
                    placeholder="0,00"
                    value={icms00.aliquotaIcms}
                    onChange={handleIcms00Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms00-valorIpi">Valor do IPI</Label>
                  <Input
                    id="icms00-valorIpi"
                    type="number"
                    placeholder="0,00"
                    value={icms00.valorIpi}
                    onChange={handleIcms00Change}
                  />
                </div>
              </div>

              <Button onClick={calcular00} className="w-full md:w-auto">
                Calcular
              </Button>

              {resultado00 && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo:</p>
                      <p className="font-semibold">{formatCurrency(resultado00.baseIcms)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS:</p>
                      <p className="font-semibold">{formatCurrency(resultado00.icms)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 10/30 */}
        <TabsContent value="icms10">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 10/30 - Substituição Tributária</CardTitle>
              <CardDescription>Cálculo de ICMS para operações com substituição tributária</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="icms10-valorProduto">Valor do Produto</Label>
                  <Input
                    id="icms10-valorProduto"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorProduto}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-valorFrete">Valor do Frete</Label>
                  <Input
                    id="icms10-valorFrete"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorFrete}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-valorSeguro">Valor do Seguro</Label>
                  <Input
                    id="icms10-valorSeguro"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorSeguro}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-valorOutro">Outras Despesas</Label>
                  <Input
                    id="icms10-valorOutro"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorOutro}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-valorDesconto">Valor do Desconto</Label>
                  <Input
                    id="icms10-valorDesconto"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorDesconto}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-percentualMVA">MVA (%)</Label>
                  <Input
                    id="icms10-percentualMVA"
                    type="number"
                    placeholder="0,00"
                    value={icms10.percentualMVA}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-aliquotaIcmsProprio">Alíquota ICMS Próprio (%)</Label>
                  <Input
                    id="icms10-aliquotaIcmsProprio"
                    type="number"
                    placeholder="0,00"
                    value={icms10.aliquotaIcmsProprio}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-aliquotaIcmsST">Alíquota ICMS ST (%)</Label>
                  <Input
                    id="icms10-aliquotaIcmsST"
                    type="number"
                    placeholder="0,00"
                    value={icms10.aliquotaIcmsST}
                    onChange={handleIcms10Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms10-valorIPI">Valor do IPI</Label>
                  <Input
                    id="icms10-valorIPI"
                    type="number"
                    placeholder="0,00"
                    value={icms10.valorIPI}
                    onChange={handleIcms10Change}
                  />
                </div>
              </div>

              <Button onClick={calcular10} className="w-full md:w-auto">
                Calcular
              </Button>

              {resultado10 && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo Próprio:</p>
                      <p className="font-semibold">{formatCurrency(resultado10.baseIcmsProprio)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS Próprio:</p>
                      <p className="font-semibold">{formatCurrency(resultado10.valorIcmsProprio)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo ST:</p>
                      <p className="font-semibold">{formatCurrency(resultado10.baseIcmsST)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS ST:</p>
                      <p className="font-semibold">{formatCurrency(resultado10.icms10)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 20 */}
        <TabsContent value="icms20">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 20 - Redução de Base de Cálculo</CardTitle>
              <CardDescription>Cálculo de ICMS para operações com redução de base de cálculo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="icms20-valorProduto">Valor do Produto</Label>
                  <Input
                    id="icms20-valorProduto"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorProduto}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-valorFrete">Valor do Frete</Label>
                  <Input
                    id="icms20-valorFrete"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorFrete}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-valorSeguro">Valor do Seguro</Label>
                  <Input
                    id="icms20-valorSeguro"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorSeguro}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-valorOutro">Outras Despesas</Label>
                  <Input
                    id="icms20-valorOutro"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorOutro}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-valorDesconto">Valor do Desconto</Label>
                  <Input
                    id="icms20-valorDesconto"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorDesconto}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-percentualReducao">Percentual de Redução (%)</Label>
                  <Input
                    id="icms20-percentualReducao"
                    type="number"
                    placeholder="0,00"
                    value={icms20.percentualReducao}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-aliquotaIcms">Alíquota do ICMS (%)</Label>
                  <Input
                    id="icms20-aliquotaIcms"
                    type="number"
                    placeholder="0,00"
                    value={icms20.aliquotaIcms}
                    onChange={handleIcms20Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms20-valorIpi">Valor do IPI</Label>
                  <Input
                    id="icms20-valorIpi"
                    type="number"
                    placeholder="0,00"
                    value={icms20.valorIpi}
                    onChange={handleIcms20Change}
                  />
                </div>
              </div>

              <Button onClick={calcular20} className="w-full md:w-auto">
                Calcular
              </Button>

              {resultado20 && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo Reduzida:</p>
                      <p className="font-semibold">{formatCurrency(resultado20.baseIcmsReduzida)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS:</p>
                      <p className="font-semibold">{formatCurrency(resultado20.icms20)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 51 */}
        <TabsContent value="icms51">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 51 - Diferimento</CardTitle>
              <CardDescription>Cálculo de ICMS para operações com diferimento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="icms51-valorProduto">Valor do Produto</Label>
                  <Input
                    id="icms51-valorProduto"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorProduto}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-valorFrete">Valor do Frete</Label>
                  <Input
                    id="icms51-valorFrete"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorFrete}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-valorSeguro">Valor do Seguro</Label>
                  <Input
                    id="icms51-valorSeguro"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorSeguro}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-valorOutro">Outras Despesas</Label>
                  <Input
                    id="icms51-valorOutro"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorOutro}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-valorDesconto">Valor do Desconto</Label>
                  <Input
                    id="icms51-valorDesconto"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorDesconto}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-aliquotaIcms">Alíquota do ICMS (%)</Label>
                  <Input
                    id="icms51-aliquotaIcms"
                    type="number"
                    placeholder="0,00"
                    value={icms51.aliquotaIcms}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-percentualDiferimento">Percentual de Diferimento (%)</Label>
                  <Input
                    id="icms51-percentualDiferimento"
                    type="number"
                    placeholder="0,00"
                    value={icms51.percentualDiferimento}
                    onChange={handleIcms51Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms51-valorIpi">Valor do IPI</Label>
                  <Input
                    id="icms51-valorIpi"
                    type="number"
                    placeholder="0,00"
                    value={icms51.valorIpi}
                    onChange={handleIcms51Change}
                  />
                </div>
              </div>

              <Button onClick={calcular51} className="w-full md:w-auto">
                Calcular
              </Button>

              {resultado51 && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo:</p>
                      <p className="font-semibold">{formatCurrency(resultado51.baseIcms)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ICMS da Operação:</p>
                      <p className="font-semibold">{formatCurrency(resultado51.icmsOperacao)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ICMS Diferido:</p>
                      <p className="font-semibold">{formatCurrency(resultado51.icmsDiferido)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ICMS a Recolher:</p>
                      <p className="font-semibold">{formatCurrency(resultado51.icms51)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 70 */}
        <TabsContent value="icms70">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 70 - Redução de Base + Substituição Tributária</CardTitle>
              <CardDescription>
                Cálculo de ICMS para operações com redução de base e substituição tributária
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="icms70-valorProduto">Valor do Produto</Label>
                  <Input
                    id="icms70-valorProduto"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorProduto}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-valorFrete">Valor do Frete</Label>
                  <Input
                    id="icms70-valorFrete"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorFrete}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-valorSeguro">Valor do Seguro</Label>
                  <Input
                    id="icms70-valorSeguro"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorSeguro}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-valorOutro">Outras Despesas</Label>
                  <Input
                    id="icms70-valorOutro"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorOutro}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-valorDesconto">Valor do Desconto</Label>
                  <Input
                    id="icms70-valorDesconto"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorDesconto}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-percentualMVA">MVA (%)</Label>
                  <Input
                    id="icms70-percentualMVA"
                    type="number"
                    placeholder="0,00"
                    value={icms70.percentualMVA}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-aliquotaIcmsProprio">Alíquota ICMS Próprio (%)</Label>
                  <Input
                    id="icms70-aliquotaIcmsProprio"
                    type="number"
                    placeholder="0,00"
                    value={icms70.aliquotaIcmsProprio}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-aliquotaIcmsST">Alíquota ICMS ST (%)</Label>
                  <Input
                    id="icms70-aliquotaIcmsST"
                    type="number"
                    placeholder="0,00"
                    value={icms70.aliquotaIcmsST}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-percentualReducao">Percentual de Redução (%)</Label>
                  <Input
                    id="icms70-percentualReducao"
                    type="number"
                    placeholder="0,00"
                    value={icms70.percentualReducao}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-percentualReducaoST">Percentual de Redução ST (%)</Label>
                  <Input
                    id="icms70-percentualReducaoST"
                    type="number"
                    placeholder="0,00"
                    value={icms70.percentualReducaoST}
                    onChange={handleIcms70Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icms70-valorIpi">Valor do IPI</Label>
                  <Input
                    id="icms70-valorIpi"
                    type="number"
                    placeholder="0,00"
                    value={icms70.valorIpi}
                    onChange={handleIcms70Change}
                  />
                </div>
              </div>

              <Button onClick={calcular70} className="w-full md:w-auto">
                Calcular
              </Button>

              {resultado70 && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo Próprio:</p>
                      <p className="font-semibold">{formatCurrency(resultado70.baseIcmsProprio)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS Próprio:</p>
                      <p className="font-semibold">{formatCurrency(resultado70.valorIcmsProprio)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Base de Cálculo ST:</p>
                      <p className="font-semibold">{formatCurrency(resultado70.baseIcmsST)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor do ICMS ST:</p>
                      <p className="font-semibold">{formatCurrency(resultado70.icms70)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


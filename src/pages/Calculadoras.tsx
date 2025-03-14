"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InputField from "@/components/InputField"
import {
  calcularICMS00,
  calcularICMS10,
  calcularICMS20,
  calcularICMS30,
  calcularICMS51,
  calcularICMS70,
  formatarMoeda,
} from "@/utils/calculadoraICMS"

const Calculadoras = () => {
  // Estado para ICMS 00
  const [icms00, setIcms00] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
  })

  // Estado para ICMS 10
  const [icms10, setIcms10] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
    mva: "",
  })

  // Estado para ICMS 20
  const [icms20, setIcms20] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
    reducao: "",
  })

  // Estado para ICMS 30
  const [icms30, setIcms30] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
    mva: "",
  })

  // Estado para ICMS 51
  const [icms51, setIcms51] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
    percentualDiferimento: "",
  })

  // Estado para ICMS 70
  const [icms70, setIcms70] = useState({
    valorProduto: "",
    frete: "",
    seguro: "",
    despesas: "",
    desconto: "",
    aliquota: "",
    reducao: "",
    mva: "",
  })

  // Estados para resultados
  const [resultado00, setResultado00] = useState<{ baseCalculo: number; icms: number } | null>(null)
  const [resultado10, setResultado10] = useState<{
    baseCalculo: number
    icms: number
    baseCalculoST: number
    icmsST: number
  } | null>(null)
  const [resultado20, setResultado20] = useState<{
    baseCalculoIntegral: number
    baseCalculo: number
    icms: number
  } | null>(null)
  const [resultado30, setResultado30] = useState<{ baseCalculo: number; baseCalculoST: number; icmsST: number } | null>(
    null,
  )
  const [resultado51, setResultado51] = useState<{
    baseCalculo: number
    icmsTotal: number
    icmsDiferido: number
    icmsAPagar: number
  } | null>(null)
  const [resultado70, setResultado70] = useState<{
    baseCalculoIntegral: number
    baseCalculo: number
    icms: number
    baseCalculoST: number
    icmsST: number
  } | null>(null)

  // Handlers para atualização de estados
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

  const handleIcms30Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms30({ ...icms30, [id.replace("icms30-", "")]: value })
  }

  const handleIcms51Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms51({ ...icms51, [id.replace("icms51-", "")]: value })
  }

  const handleIcms70Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setIcms70({ ...icms70, [id.replace("icms70-", "")]: value })
  }

  // Funções para calcular
  const calcular00 = () => {
    const resultado = calcularICMS00(
      Number(icms00.valorProduto) || 0,
      Number(icms00.frete) || 0,
      Number(icms00.seguro) || 0,
      Number(icms00.despesas) || 0,
      Number(icms00.desconto) || 0,
      Number(icms00.aliquota) || 0,
    )
    setResultado00(resultado)
  }

  const calcular10 = () => {
    const resultado = calcularICMS10(
      Number(icms10.valorProduto) || 0,
      Number(icms10.frete) || 0,
      Number(icms10.seguro) || 0,
      Number(icms10.despesas) || 0,
      Number(icms10.desconto) || 0,
      Number(icms10.aliquota) || 0,
      Number(icms10.mva) || 0,
    )
    setResultado10(resultado)
  }

  const calcular20 = () => {
    const resultado = calcularICMS20(
      Number(icms20.valorProduto) || 0,
      Number(icms20.frete) || 0,
      Number(icms20.seguro) || 0,
      Number(icms20.despesas) || 0,
      Number(icms20.desconto) || 0,
      Number(icms20.aliquota) || 0,
      Number(icms20.reducao) || 0,
    )
    setResultado20(resultado)
  }

  const calcular30 = () => {
    const resultado = calcularICMS30(
      Number(icms30.valorProduto) || 0,
      Number(icms30.frete) || 0,
      Number(icms30.seguro) || 0,
      Number(icms30.despesas) || 0,
      Number(icms30.desconto) || 0,
      Number(icms30.aliquota) || 0,
      Number(icms30.mva) || 0,
    )
    setResultado30(resultado)
  }

  const calcular51 = () => {
    const resultado = calcularICMS51(
      Number(icms51.valorProduto) || 0,
      Number(icms51.frete) || 0,
      Number(icms51.seguro) || 0,
      Number(icms51.despesas) || 0,
      Number(icms51.desconto) || 0,
      Number(icms51.aliquota) || 0,
      Number(icms51.percentualDiferimento) || 0,
    )
    setResultado51(resultado)
  }

  const calcular70 = () => {
    const resultado = calcularICMS70(
      Number(icms70.valorProduto) || 0,
      Number(icms70.frete) || 0,
      Number(icms70.seguro) || 0,
      Number(icms70.despesas) || 0,
      Number(icms70.desconto) || 0,
      Number(icms70.aliquota) || 0,
      Number(icms70.reducao) || 0,
      Number(icms70.mva) || 0,
    )
    setResultado70(resultado)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">Calculadoras de ICMS</h1>

      <Tabs defaultValue="icms00" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-6">
          <TabsTrigger value="icms00">ICMS 00</TabsTrigger>
          <TabsTrigger value="icms10">ICMS 10</TabsTrigger>
          <TabsTrigger value="icms20">ICMS 20</TabsTrigger>
          <TabsTrigger value="icms30">ICMS 30</TabsTrigger>
          <TabsTrigger value="icms51">ICMS 51</TabsTrigger>
          <TabsTrigger value="icms70">ICMS 70</TabsTrigger>
        </TabsList>

        {/* ICMS 00 - Tributada Integralmente */}
        <TabsContent value="icms00">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 00 - Tributada Integralmente</CardTitle>
              <CardDescription>Calcule o ICMS para operações tributadas integralmente (CST 00).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms00-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms00.valorProduto}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms00-frete"
                  label="Frete"
                  type="number"
                  value={icms00.frete}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms00-seguro"
                  label="Seguro"
                  type="number"
                  value={icms00.seguro}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms00-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms00.despesas}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms00-desconto"
                  label="Desconto"
                  type="number"
                  value={icms00.desconto}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms00-aliquota"
                  label="Alíquota do ICMS"
                  type="number"
                  value={icms00.aliquota}
                  onChange={handleIcms00Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular00} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado00 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo:</p>
                      <p className="font-semibold">{formatarMoeda(resultado00.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS:</p>
                      <p className="font-semibold">{formatarMoeda(resultado00.icms)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 10 - Com Substituição Tributária */}
        <TabsContent value="icms10">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 10 - Com Substituição Tributária</CardTitle>
              <CardDescription>Calcule o ICMS para operações com substituição tributária (CST 10).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms10-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms10.valorProduto}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms10-frete"
                  label="Frete"
                  type="number"
                  value={icms10.frete}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms10-seguro"
                  label="Seguro"
                  type="number"
                  value={icms10.seguro}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms10-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms10.despesas}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms10-desconto"
                  label="Desconto"
                  type="number"
                  value={icms10.desconto}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms10-aliquota"
                  label="Alíquota do ICMS"
                  type="number"
                  value={icms10.aliquota}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms10-mva"
                  label="MVA (Margem de Valor Agregado)"
                  type="number"
                  value={icms10.mva}
                  onChange={handleIcms10Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular10} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado10 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo:</p>
                      <p className="font-semibold">{formatarMoeda(resultado10.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS:</p>
                      <p className="font-semibold">{formatarMoeda(resultado10.icms)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado10.baseCalculoST)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado10.icmsST)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 20 - Com Redução de Base de Cálculo */}
        <TabsContent value="icms20">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 20 - Com Redução de Base de Cálculo</CardTitle>
              <CardDescription>Calcule o ICMS para operações com redução de base de cálculo (CST 20).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms20-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms20.valorProduto}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms20-frete"
                  label="Frete"
                  type="number"
                  value={icms20.frete}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms20-seguro"
                  label="Seguro"
                  type="number"
                  value={icms20.seguro}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms20-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms20.despesas}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms20-desconto"
                  label="Desconto"
                  type="number"
                  value={icms20.desconto}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms20-aliquota"
                  label="Alíquota do ICMS"
                  type="number"
                  value={icms20.aliquota}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms20-reducao"
                  label="Percentual de Redução"
                  type="number"
                  value={icms20.reducao}
                  onChange={handleIcms20Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular20} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado20 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo Integral:</p>
                      <p className="font-semibold">{formatarMoeda(resultado20.baseCalculoIntegral)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo Reduzida:</p>
                      <p className="font-semibold">{formatarMoeda(resultado20.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS:</p>
                      <p className="font-semibold">{formatarMoeda(resultado20.icms)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 30 - Isenta ou não tributada com cobrança de ICMS por ST */}
        <TabsContent value="icms30">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 30 - Isenta com Substituição Tributária</CardTitle>
              <CardDescription>
                Calcule o ICMS para operações isentas ou não tributadas com cobrança por substituição tributária (CST
                30).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms30-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms30.valorProduto}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms30-frete"
                  label="Frete"
                  type="number"
                  value={icms30.frete}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms30-seguro"
                  label="Seguro"
                  type="number"
                  value={icms30.seguro}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms30-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms30.despesas}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms30-desconto"
                  label="Desconto"
                  type="number"
                  value={icms30.desconto}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms30-aliquota"
                  label="Alíquota do ICMS ST"
                  type="number"
                  value={icms30.aliquota}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms30-mva"
                  label="MVA (Margem de Valor Agregado)"
                  type="number"
                  value={icms30.mva}
                  onChange={handleIcms30Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular30} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado30 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo:</p>
                      <p className="font-semibold">{formatarMoeda(resultado30.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado30.baseCalculoST)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado30.icmsST)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 51 - Diferimento */}
        <TabsContent value="icms51">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 51 - Diferimento</CardTitle>
              <CardDescription>Calcule o ICMS para operações com diferimento (CST 51).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms51-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms51.valorProduto}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms51-frete"
                  label="Frete"
                  type="number"
                  value={icms51.frete}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms51-seguro"
                  label="Seguro"
                  type="number"
                  value={icms51.seguro}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms51-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms51.despesas}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms51-desconto"
                  label="Desconto"
                  type="number"
                  value={icms51.desconto}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms51-aliquota"
                  label="Alíquota do ICMS"
                  type="number"
                  value={icms51.aliquota}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms51-percentualDiferimento"
                  label="Percentual de Diferimento"
                  type="number"
                  value={icms51.percentualDiferimento}
                  onChange={handleIcms51Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular51} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado51 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo:</p>
                      <p className="font-semibold">{formatarMoeda(resultado51.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">ICMS Total:</p>
                      <p className="font-semibold">{formatarMoeda(resultado51.icmsTotal)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">ICMS Diferido:</p>
                      <p className="font-semibold">{formatarMoeda(resultado51.icmsDiferido)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">ICMS a Pagar:</p>
                      <p className="font-semibold">{formatarMoeda(resultado51.icmsAPagar)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ICMS 70 - Com redução de base de cálculo e cobrança de ICMS por ST */}
        <TabsContent value="icms70">
          <Card>
            <CardHeader>
              <CardTitle>ICMS 70 - Redução de Base com Substituição Tributária</CardTitle>
              <CardDescription>
                Calcule o ICMS para operações com redução de base de cálculo e cobrança por substituição tributária (CST
                70).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField
                  id="icms70-valorProduto"
                  label="Valor do Produto"
                  type="number"
                  value={icms70.valorProduto}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms70-frete"
                  label="Frete"
                  type="number"
                  value={icms70.frete}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms70-seguro"
                  label="Seguro"
                  type="number"
                  value={icms70.seguro}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms70-despesas"
                  label="Outras Despesas"
                  type="number"
                  value={icms70.despesas}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms70-desconto"
                  label="Desconto"
                  type="number"
                  value={icms70.desconto}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  min={0}
                  step="0.01"
                  prefix="R$"
                />
                <InputField
                  id="icms70-aliquota"
                  label="Alíquota do ICMS"
                  type="number"
                  value={icms70.aliquota}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms70-reducao"
                  label="Percentual de Redução"
                  type="number"
                  value={icms70.reducao}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  required
                  min={0}
                  max={100}
                  step="0.01"
                  suffix="%"
                />
                <InputField
                  id="icms70-mva"
                  label="MVA (Margem de Valor Agregado)"
                  type="number"
                  value={icms70.mva}
                  onChange={handleIcms70Change}
                  placeholder="0,00"
                  required
                  min={0}
                  step="0.01"
                  suffix="%"
                />
              </div>

              <div className="mt-6">
                <button onClick={calcular70} className="btn-primary">
                  Calcular
                </button>
              </div>

              {resultado70 && (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo Integral:</p>
                      <p className="font-semibold">{formatarMoeda(resultado70.baseCalculoIntegral)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo Reduzida:</p>
                      <p className="font-semibold">{formatarMoeda(resultado70.baseCalculo)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS:</p>
                      <p className="font-semibold">{formatarMoeda(resultado70.icms)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Base de Cálculo ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado70.baseCalculoST)}</p>
                    </div>
                    <div>
                      <p className="text-text-light dark:text-gray-300">Valor do ICMS ST:</p>
                      <p className="font-semibold">{formatarMoeda(resultado70.icmsST)}</p>
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

export default Calculadoras


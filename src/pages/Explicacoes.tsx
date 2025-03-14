"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { aliquotasICMSPorEstado, codigosCST, codigosCSOSN } from "@/utils/calculadoraICMS"

const Explicacoes = () => {
  const [searchCST, setSearchCST] = useState("")
  const [searchCSOSN, setSearchCSOSN] = useState("")

  const filteredCST = codigosCST.filter(
    (cst) => cst.codigo.includes(searchCST) || cst.descricao.toLowerCase().includes(searchCST.toLowerCase()),
  )

  const filteredCSOSN = codigosCSOSN.filter(
    (csosn) => csosn.codigo.includes(searchCSOSN) || csosn.descricao.toLowerCase().includes(searchCSOSN.toLowerCase()),
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">Explicações Tributárias</h1>

      <Tabs defaultValue="icms" className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-6">
          <TabsTrigger value="icms">O que é ICMS?</TabsTrigger>
          <TabsTrigger value="codigos">Códigos CST e CSOSN</TabsTrigger>
          <TabsTrigger value="aliquotas">Alíquotas por Estado</TabsTrigger>
        </TabsList>

        {/* O que é ICMS? */}
        <TabsContent value="icms">
          <Card>
            <CardHeader>
              <CardTitle>O que é ICMS?</CardTitle>
              <CardDescription>Entenda o Imposto sobre Circulação de Mercadorias e Serviços</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">Definição</h3>
                <p className="text-text dark:text-gray-300">
                  O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) é um tributo estadual que incide sobre a
                  movimentação de mercadorias e sobre prestações de serviços de transporte interestadual e
                  intermunicipal e de comunicação, ainda que as operações e as prestações se iniciem no exterior.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">
                  Origem da Mercadoria e Impactos no ICMS
                </h3>
                <p className="text-text dark:text-gray-300 mb-2">
                  A origem da mercadoria é um fator determinante para o cálculo do ICMS, especialmente em operações
                  interestaduais. Existem diferentes alíquotas aplicáveis dependendo do estado de origem e destino da
                  mercadoria.
                </p>
                <ul className="list-disc pl-6 text-text dark:text-gray-300">
                  <li>
                    <strong>Operações Internas:</strong> Quando a mercadoria circula dentro do mesmo estado, aplica-se a
                    alíquota interna daquele estado.
                  </li>
                  <li>
                    <strong>Operações Interestaduais:</strong> Quando a mercadoria circula entre estados diferentes,
                    aplica-se a alíquota interestadual, que varia conforme a região de origem e destino.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">
                  Diferença entre ICMS Normal, ST e Diferimento
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-dark dark:text-primary-light">ICMS Normal</h4>
                    <p className="text-text dark:text-gray-300">
                      É o regime padrão de tributação, onde cada contribuinte recolhe o imposto sobre o valor agregado
                      em sua etapa da cadeia comercial. O valor a ser pago é calculado pela diferença entre o ICMS
                      incidente nas vendas e o ICMS pago nas compras.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark dark:text-primary-light">
                      ICMS ST (Substituição Tributária)
                    </h4>
                    <p className="text-text dark:text-gray-300">
                      Neste regime, o recolhimento do imposto é antecipado e concentrado em um único contribuinte da
                      cadeia (geralmente o fabricante ou importador), que se torna responsável pelo pagamento do ICMS
                      devido em todas as etapas subsequentes até o consumidor final. O cálculo é feito com base em uma
                      margem de valor agregado (MVA) presumida.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark dark:text-primary-light">ICMS Diferimento</h4>
                    <p className="text-text dark:text-gray-300">
                      No diferimento, o pagamento do imposto é postergado para uma etapa posterior da cadeia comercial.
                      O contribuinte que adquire a mercadoria assume a responsabilidade pelo pagamento do ICMS que seria
                      devido pelo remetente. É uma forma de adiamento do recolhimento do imposto.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-light">
                  Como Funciona o Cálculo e Alíquotas
                </h3>
                <p className="text-text dark:text-gray-300 mb-2">
                  O cálculo do ICMS envolve a aplicação de uma alíquota sobre a base de cálculo, que geralmente é o
                  valor da operação (preço da mercadoria ou serviço).
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-dark dark:text-primary-light">Base de Cálculo</h4>
                    <p className="text-text dark:text-gray-300">
                      A base de cálculo do ICMS é composta pelo valor da mercadoria, acrescido de frete, seguro, juros,
                      outras despesas acessórias e o próprio imposto (cálculo "por dentro").
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark dark:text-primary-light">Alíquotas</h4>
                    <p className="text-text dark:text-gray-300">
                      As alíquotas variam conforme o estado e o tipo de mercadoria ou serviço. As alíquotas internas são
                      definidas por cada estado, enquanto as alíquotas interestaduais são definidas por resolução do
                      Senado Federal.
                    </p>
                    <ul className="list-disc pl-6 text-text dark:text-gray-300 mt-2">
                      <li>
                        <strong>Alíquotas Internas:</strong> Variam entre 17% e 20%, dependendo do estado.
                      </li>
                      <li>
                        <strong>Alíquotas Interestaduais:</strong> 7% para operações de estados do Sul e Sudeste
                        destinadas a estados do Norte, Nordeste, Centro-Oeste e Espírito Santo; 12% para as demais
                        operações interestaduais.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Códigos CST e CSOSN */}
        <TabsContent value="codigos">
          <Card>
            <CardHeader>
              <CardTitle>Códigos CST e CSOSN</CardTitle>
              <CardDescription>Entenda os códigos de situação tributária do ICMS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light">
                  CST - Código de Situação Tributária
                </h3>
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Pesquisar CST por código ou descrição..."
                    value={searchCST}
                    onChange={(e) => setSearchCST(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Código
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Descrição
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredCST.map((cst) => (
                        <tr key={cst.codigo} className="hover:bg-gray-50 dark:hover:bg-slate-800">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary dark:text-primary-light">
                            {cst.codigo}
                          </td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-text dark:text-gray-300">
                            {cst.descricao}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light">
                  CSOSN - Código de Situação da Operação do Simples Nacional
                </h3>
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Pesquisar CSOSN por código ou descrição..."
                    value={searchCSOSN}
                    onChange={(e) => setSearchCSOSN(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Código
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Descrição
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredCSOSN.map((csosn) => (
                        <tr key={csosn.codigo} className="hover:bg-gray-50 dark:hover:bg-slate-800">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary dark:text-primary-light">
                            {csosn.codigo}
                          </td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-text dark:text-gray-300">
                            {csosn.descricao}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alíquotas por Estado */}
        <TabsContent value="aliquotas">
          <Card>
            <CardHeader>
              <CardTitle>Alíquotas de ICMS por Estado</CardTitle>
              <CardDescription>Consulte as alíquotas internas e interestaduais de cada estado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        UF
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Alíquota Interna
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Alíquota Interestadual (Sul/Sudeste)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Alíquota Interestadual (Outros)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {aliquotasICMSPorEstado.map((estado) => (
                      <tr key={estado.sigla} className="hover:bg-gray-50 dark:hover:bg-slate-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary dark:text-primary-light">
                          {estado.sigla}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text dark:text-gray-300">
                          {estado.nome}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text dark:text-gray-300">
                          {estado.aliquotaInterna}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text dark:text-gray-300">
                          {estado.aliquotaInterestadual.sul_sudeste}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text dark:text-gray-300">
                          {estado.aliquotaInterestadual.outros}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Explicacoes


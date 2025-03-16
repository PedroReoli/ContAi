# ContaAi - Calculadora de ICMS

<p align="center">
  <img src="https://placeholder.svg?height=200&width=200" alt="ContaAi Logo" width="200" height="200">
</p>

<p align="center">
  <strong>Simplificando o cálculo de ICMS para profissionais e estudantes da área fiscal</strong>
</p>

<p align="center">
  <a href="#visão-geral">Visão Geral</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#estrutura-do-projeto">Estrutura do Projeto</a> •
  <a href="#cálculos-de-icms">Cálculos de ICMS</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
  <a href="#como-executar">Como Executar</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#licença">Licença</a>
</p>

## Visão Geral

O **ContaAi** é um aplicativo web desenvolvido com Vite, React e TailwindCSS, voltado para cálculos e explicações sobre o ICMS (Imposto sobre Circulação de Mercadorias e Serviços) no Brasil. Nosso objetivo é simplificar o entendimento e o cálculo deste imposto complexo, fornecendo uma ferramenta intuitiva e educativa para profissionais e estudantes da área fiscal.

## Funcionalidades

### 🧮 Calculadoras Interativas
- **ICMS 00 (Cálculo Padrão)**: Para operações sem reduções ou substituições tributárias
- **ICMS 10 (Substituição Tributária)**: Para operações com ICMS recolhido antecipadamente
- **ICMS 20 (Base de Cálculo Reduzida)**: Para operações com incentivos fiscais
- **ICMS 51 (Diferimento Parcial)**: Para operações com parte do imposto postergada

### 📚 Explicações Detalhadas
- Guia completo sobre o ICMS e suas variações
- Exemplos práticos de cálculos
- Glossário de termos fiscais

### 🗺️ Mapa Interativo do Brasil
- Visualização das alíquotas de ICMS por estado
- Informações atualizadas sobre legislação estadual

### 📊 Comparador de ICMS
- Compare diferentes cenários de tributação
- Análise de impacto financeiro

### 📄 Exportação de Relatórios
- Gere relatórios em PDF dos seus cálculos
- Documentação para fins contábeis e fiscais

### 💾 Armazenamento Local
- Salve seus cálculos para consulta posterior
- Histórico de operações realizadas

## Estrutura do Projeto

\`\`\`
📦 ContaAi
 ┣ 📂 src
 ┃ ┣ 📂 components             # Componentes reutilizáveis
 ┃ ┃ ┣ 📜 InputField.tsx       # Campo de entrada reutilizável
 ┃ ┃ ┣ 📜 Layout.tsx           # Estrutura base do layout
 ┃ ┣ 📂 components/ui          # Componentes visuais genéricos
 ┃ ┃ ┣ 📜 Button.tsx           # Botão estilizado
 ┃ ┃ ┣ 📜 Card.tsx             # Componente de card
 ┃ ┃ ┣ 📜 Input.tsx            # Campo de input genérico
 ┃ ┃ ┣ 📜 Tabs.tsx             # Abas de navegação
 ┃ ┣ 📂 contexts
 ┃ ┃ ┣ 📜 ThemeContext.tsx     # Contexto para gerenciamento de tema
 ┃ ┣ 📂 lib
 ┃ ┃ ┣ 📜 utils.ts             # Funções auxiliares globais
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Calculadora.tsx      # Página principal da calculadora de ICMS
 ┃ ┃ ┣ 📜 Explicacoes.tsx      # Página com explicações sobre ICMS
 ┃ ┃ ┣ 📜 Home.tsx             # Página inicial
 ┃ ┃ ┣ 📜 MapaICMS.tsx         # Mapa interativo das alíquotas de ICMS por estado
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 globals.css          # Estilos globais da aplicação
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📜 calculadoraICMS.ts   # Funções de cálculo de ICMS
 ┃ ┃ ┣ 📜 storage.ts           # Funções para salvar e recuperar cálculos do Local Storage
 ┣ 📜 App.tsx                  # Componente raiz da aplicação
 ┣ 📜 main.tsx                 # Ponto de entrada do React
 ┣ 📜 index.html               # Estrutura HTML inicial
 ┣ 📜 README.md                # Documentação do projeto
 ┣ 📜 tailwind.config.ts       # Configuração do TailwindCSS
\`\`\`

## Cálculos de ICMS

### ICMS 00 (Cálculo Padrão)
Utilizado em operações normais, sem reduções ou substituições tributárias.

**Fórmula:**
\`\`\`
Valor do ICMS = Base de Cálculo × Alíquota
\`\`\`

**Exemplo:**
Para uma mercadoria com valor de R$ 1.000,00 e alíquota de 18%:
\`\`\`
Valor do ICMS = R$ 1.000,00 × 18% = R$ 180,00
\`\`\`

### ICMS 10 (Substituição Tributária)
Utilizado quando o ICMS é recolhido antecipadamente pelo contribuinte substituto.

**Fórmula:**
\`\`\`
ICMS próprio = Base de Cálculo × Alíquota interna
ICMS-ST = (Base de Cálculo ST × Alíquota ST) - ICMS próprio
\`\`\`

### ICMS 20 (Base de Cálculo Reduzida)
Utilizado quando há redução na base de cálculo do imposto.

**Fórmula:**
\`\`\`
Base de Cálculo Reduzida = Base de Cálculo × (1 - Percentual de Redução)
Valor do ICMS = Base de Cálculo Reduzida × Alíquota
\`\`\`

### ICMS 51 (Diferimento Parcial)
Utilizado quando parte do imposto é postergada para pagamento futuro.

**Fórmula:**
\`\`\`
Valor do ICMS = Base de Cálculo × Alíquota × (1 - Percentual de Diferimento)
\`\`\`

## Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/)**: Build tool e dev server ultrarrápido
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário
- **[React Router](https://reactrouter.com/)**: Roteamento para aplicações React
- **[React Simple Maps](https://www.react-simple-maps.io/)**: Biblioteca para mapas interativos
- **[jsPDF](https://github.com/MrRio/jsPDF)**: Geração de documentos PDF no cliente

## Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
   \`\`\`bash
   git clone https://github.com/seu-usuario/contaai.git
   cd contaai
   \`\`\`

2. Instale as dependências
   \`\`\`bash
   npm install
   # ou
   yarn
   \`\`\`

3. Execute o projeto em modo de desenvolvimento
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   \`\`\`

4. Acesse o aplicativo em seu navegador
   \`\`\`
   http://localhost:5173
   \`\`\`

### Build para Produção

\`\`\`bash
npm run build
# ou
yarn build
\`\`\`

## Roadmap

- [x] Sprint 1: Configuração inicial e estruturação do projeto
- [ ] Sprint 2: Implementação das calculadoras de ICMS
- [ ] Sprint 3: Desenvolvimento do mapa interativo
- [ ] Sprint 4: Sistema de armazenamento local
- [ ] Sprint 5: Exportação de relatórios em PDF
- [ ] Sprint 6: Comparador de ICMS
- [ ] Sprint 7: Testes e otimizações

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato através de [email@exemplo.com](mailto:email@exemplo.com).

---

<p align="center">
  Desenvolvido com ❤️ para simplificar a vida fiscal brasileira
</p>


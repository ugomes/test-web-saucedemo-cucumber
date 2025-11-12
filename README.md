<div align="center">
  <h1>Automação de Testes com Playwright e Cucumber</h1>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-1.44.1-45ba4b?style=for-the-badge&logo=playwright" alt="Playwright Version"/>
  <img src="https://img.shields.io/badge/Cucumber-10.8.0-23be23?style=for-the-badge&logo=cucumber" alt="Cucumber Version"/>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=for-the-badge&logo=nodedotjs" alt="Node.js Version"/>
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" alt="License"/>
</p>

---

# 🍅 Sauce Demo - Testes E2E com Playwright e Cucumber

## 📋 Visão Geral

Este projeto implementa testes end-to-end (E2E) automatizados para o site de demonstração [Sauce Demo](https://www.saucedemo.com/) utilizando **Playwright** e **Cucumber** frameworks. Segue as práticas de **Behavior-Driven Development (BDD)** com sintaxe Gherkin e implementa o padrão de design **Page Object Model (POM)** para melhor manutenção dos testes.

O projeto é totalmente automatizado com **GitHub Actions**, executando testes em cada push e pull request, gerando relatórios detalhados em HTML.

## 📑 Tabela de Conteúdos

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Clonando o Projeto](#-clonando-o-projeto)
- [Instalação](#-instalação)
- [Executando os Testes](#-executando-os-testes)
- [Executando com Tags](#-executando-com-tags)
- [Gerando Relatórios](#-gerando-relatórios)
- [Usuários de Teste](#-usuários-de-teste)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [CI/CD com GitHub Actions](#-cicd-com-github-actions)
- [Adicionando Novos Testes](#-adicionando-novos-testes)
- [Troubleshooting](#-troubleshooting)
- [Suporte](#-suporte)
- [Licença](#-licença)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **[Node.js](https://nodejs.org/)** | Ambiente de execução para JavaScript (v18+) |
| **[Playwright](https://playwright.dev/)** | Framework de automação de navegador multiplataforma |
| **[Cucumber.js](https://cucumber.io/docs/cucumber/javascript/)** | Ferramenta para BDD com sintaxe Gherkin |
| **[Multiple Cucumber HTML Reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)** | Geração de relatórios HTML detalhados |
| **[Page Object Model (POM)](https://playwright.dev/docs/pom)** | Padrão de projeto para organizar seletores e interações |
| **[GitHub Actions](https://github.com/features/actions)** | CI/CD automatizado |

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes itens instalados:

- ✅ **Node.js** versão 18 ou superior ([Download](https://nodejs.org/en/download/))
- ✅ **npm** (gerenciador de pacotes do Node.js) - geralmente vem com Node.js
- ✅ **Git** instalado ([Download](https://git-scm.com/))
- ✅ Um editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

### Verificar versões instaladas

```bash
node --version
npm --version
git --version
```

---

## 🔁 Clonando o Projeto

Passo 1: Abra o terminal/prompt de comando
No Windows, você pode usar:

PowerShell
Command Prompt (cmd)
Git Bash

Passo 2: Navegue até a pasta onde deseja clonar o projeto
cd C:\Users\SeuUsuario\Documentos

---

## 🚀 Instalação

Clone o repositório e navegue até o diretório do projeto:
```bash
git clone <repository-url>
cd SauceDemoPO145
```

---

## 🧪 Executando os Testes

Existem várias formas de executar os testes:

Executar todos os testes: Este comando irá executar os cenários definidos nos arquivos .feature.

```bash
npm test
```

Executar testes com tags específicas: Permite executar apenas os cenários marcados com uma tag específica.

```bash
npm run test:tag -- --tags @smoke
```

Executar testes e gerar relatório HTML: Este é o comando mais recomendado para uma execução completa.

```bash
npm run test:report
```

Por padrão, os testes são executados no navegador Chromium em modo headed (com interface gráfica). Você pode alterar as configurações no arquivo `playwright.config.js`.

---

## 📊 Gerando Relatórios

Após a execução dos testes, um relatório em JSON é gerado no diretório `reports/`. Para gerar um relatório HTML mais amigável e detalhado, execute o comando:

```bash
npm run report
```

O relatório HTML será criado em `reports/cucumber-html-report/index.html`. Abra este arquivo em seu navegador para visualizar os resultados detalhados da execução, incluindo os passos de cada cenário, screenshots e metadados.

---

## 👤 Usuários de Teste

O projeto utiliza os seguintes usuários para os testes:

| Usuário | Senha | Tipo |
|--------|-------|------|
| standard_user | secret_sauce | Usuário comum |
| problem_user | secret_sauce | Usuário com problemas de login |
| performance_glitch_user | secret_sauce | Usuário com glitch de performance |
| locked_out_user | secret_sauce | Usuário bloqueado |

---

## 🗂️ Estrutura do Projeto

```
SauceDemoPO145/
├── features/                # Arquivos de feature do Cucumber (cenários de teste)
│   ├── support/             # Código de suporte para os testes
│   │   ├── pages/           # Page Objects (LoginPage.js, InventoryPage.js)
│   │   └── steps/           # Step Definitions (login.steps.js)
│   └── hooks.js             # Configurações de setup e teardown (Before/After)
├── reports/                 # Diretório para os relatórios gerados
├── cucumber.js              # Configurações do Cucumber.js
├── generate-report.js       # Script para gerar o relatório HTML
├── package.json             # Dependências e scripts do projeto
└── playwright.config.js     # Configurações do Playwright
```

---

## 🛠️ CI/CD com GitHub Actions

O projeto utiliza GitHub Actions para automatizar a execução dos testes em cada push e pull request. O workflow está configurado em `.github/workflows/test.yml` e realiza as seguintes etapas:

1. Checkout do código
2. Instalação das dependências
3. Instalação dos navegadores do Playwright
4. Execução dos testes
5. Geração do relatório HTML
6. Upload do relatório como artefato do workflow

---

## ➕ Adicionando Novos Testes

Para adicionar novos testes:

1. Crie um novo arquivo `.feature` na pasta `features/`
2. Implemente os step definitions no diretório `features/support/steps/`
3. Adicione os page objects necessários no diretório `features/support/pages/`
4. Execute os testes com `npm test` ou `npm run test:report`

---

## ❓ Troubleshooting

Se você encontrar problemas durante a execução dos testes, tente:

1. Limpar o cache do npm:
   ```bash
   npm cache clean --force
   ```
2. Reinstalar as dependências:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Verificar se os navegadores estão instalados:
   ```bash
   npx playwright install
   ```

---


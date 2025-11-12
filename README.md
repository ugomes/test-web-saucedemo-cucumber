<div align="center">
  <h1>Automação de Testes com Playwright e Cucumber</h1>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-1.44.1-45ba4b?style=for-the-badge&logo=playwright" alt="Playwright Version"/>
  <img src="https://img.shields.io/badge/Cucumber-10.8.0-23be23?style=for-the-badge&logo=cucumber" alt="Cucumber Version"/>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=for-the-badge&logo=nodedotjs" alt="Node.js Version"/>
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" alt="License"/>
</p>

# Sauce Demo - Testes E2E com Playwright e Cucumber

## 📋 Visão Geral

Este projeto implementa testes end-to-end (E2E) automatizados para o site de demonstração Sauce Demo (www.saucedemo.com) utilizando **Playwright** e **Cucumber** frameworks. Segue as práticas de **Behavior-Driven Development (BDD)** com sintaxe Gherkin e implementa o padrão de design **Page Object Model (POM)** para melhor manutenção dos testes.

## 📑 Tabela de Conteúdos

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Clonando o Projeto](#clonando-o-projeto)
- [Instalação](#instalação)
- [Executando os Testes](#executando-os-testes)
- [Executando com Tags](#executando-com-tags)
- [Gerando Relatórios](#gerando-relatórios)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript
- **[Playwright](https://playwright.dev/)**: Framework de automação de navegador
- **[Cucumber.js](https://cucumber.io/docs/cucumber/javascript/)**: Ferramenta para BDD com sintaxe Gherkin
- **[Multiple Cucumber HTML Reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)**: Geração de relatórios HTML
- **Page Object Model (POM)**: Padrão de projeto para organizar seletores e interações

## 📋 Pré-requisitos

- Node.js versão 18 ou superior
- npm (gerenciador de pacotes do Node.js)
- Git instalado

## 🔄 Clonando o Projeto

### Passo 1: Abra o terminal/prompt de comando

No Windows, você pode usar:
- **PowerShell**
- **Command Prompt (cmd)**
- **Git Bash**

### Passo 2: Navegue até a pasta onde deseja clonar o projeto

```bash
cd C:\Users\SeuUsuario\Documentos
```

## 🚀 Instalação

1. Clone o repositório e navegue até o diretório do projeto:
```bash
git clone <repository-url>
cd SauceDemoPO145
```

## 🧪 Executando os Testes

Existem várias formas de executar os testes:

1. **Executar todos os testes:**
   Este comando irá executar os cenários definidos nos arquivos `.feature`.
   ```bash
   npm test
   ```

2. **Executar testes com tags específicas:**
   Permite executar apenas os cenários marcados com uma tag específica.
   ```bash
   npm run test:tag -- --tags @smoke
   ```

3. **Executar testes e gerar relatório HTML:**
   Este é o comando mais recomendado para uma execução completa.
   ```bash
   npm run test:report
   ```

Por padrão, os testes são executados no navegador Chromium em modo `headed` (com interface gráfica). Você pode alterar as configurações no arquivo `playwright.config.js`.

## 📊 Gerando Relatórios

Após a execução dos testes, um relatório em JSON é gerado no diretório `reports/`. Para gerar um relatório HTML mais amigável e detalhado, execute o comando:

```bash
npm run report
```

O relatório HTML será criado em `reports/cucumber-html-report/index.html`. Abra este arquivo em seu navegador para visualizar os resultados detalhados da execução, incluindo os passos de cada cenário, screenshots e metadados.

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
</code>
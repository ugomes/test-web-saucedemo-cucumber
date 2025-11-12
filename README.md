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

## 🚀 Começando

### Pré-requisitos
- Node.js versão 18 ou superior
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório e navegue até o diretório do projeto:
```bash
git clone <repository-url>
cd SauceDemoPO145

## Tabela de Conteúdos

-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Pré-requisitos](#pré-requisitos)
-   [Instalação](#instalação)
-   [Executando os Testes](#executando-os-testes)
-   [Visualizando os Relatórios](#visualizando-os-relatórios)
-   [Estrutura do Projeto](#estrutura-do-projeto)
-   [Como Contribuir](#como-contribuir)
-   [Licença](#licença)

## Tecnologias Utilizadas

-   **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript.
-   **[Playwright](https://playwright.dev/)**: Framework de automação de navegador.
-   **[Cucumber.js](https://cucumber.io/docs/cucumber/javascript/)**: Ferramenta para BDD, permitindo escrever testes em linguagem natural.
-   **[Multiple Cucumber HTML Reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)**: Para geração de relatórios de teste em HTML.
-   Page Object Model (POM): Padrão de projeto para organizar e manter os seletores e interações com as páginas.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior) instalado em sua máquina.

---

## Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd SauceDemoPO145
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Instale os navegadores do Playwright:**
    O Playwright requer a instalação dos navegadores que ele irá controlar.
    ```bash
    npx playwright install
    ```

---

## Executando os Testes

Existem algumas formas de executar os testes:

1.  **Executar apenas os testes:**
    Este comando irá executar os cenários definidos nos arquivos `.feature`.
    ```bash
    npm test
    ```

2.  **Executar os testes e gerar o relatório HTML em seguida:**
    Este é o comando mais recomendado para uma execução completa.
```bash
npm run test:report
```

Por padrão, os testes são executados no navegador Chromium em modo `headed` (com interface gráfica). Você pode alterar as configurações no arquivo `playwright.config.js`.

---

## Visualizando os Relatórios

Após a execução dos testes, um relatório em JSON é gerado no diretório `reports/`. Para gerar um relatório HTML mais amigável e detalhado, execute o comando:

```bash
npm run report
```

O relatório HTML será criado em `reports/cucumber-html-report/index.html`. Abra este arquivo em seu navegador para visualizar os resultados detalhados da execução, incluindo os passos de cada cenário, screenshots e metadados.

---

## Estrutura do Projeto

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

## Como Contribuir

Para contribuir com este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

Certifique-se de que os testes passem antes de submeter sua contribuição.

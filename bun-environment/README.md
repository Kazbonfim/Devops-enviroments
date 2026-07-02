# Ambiente Bun (Dockerized)

Este diretório contém um ambiente de desenvolvimento dockerizado pronto para rodar aplicações **Bun** (no backend) e **Vite** (no frontend).

## 🚀 Arquitetura e Portas

*   **backend**: Aplicação Bun rodando na porta `3000` (`http://localhost:3000`).
*   **frontend**: Aplicação Vite (com React/Nginx) exposta na porta `8080` (`http://localhost:8080`).

## 💾 Banco de Dados

*   O backend está configurado para utilizar um banco de dados **SQLite**.
*   O arquivo do banco de dados é persistido e mapeado no diretório local `data/sqlite.db`.

## ⚙️ Requisitos

*   Docker e Docker Compose instalados.
*   Make (opcional, para utilizar os atalhos do Makefile).

## 🛠️ Automação com Makefile

O projeto inclui um `Makefile` na raiz deste diretório para simplificar o gerenciamento dos containers:

*   `make up`: Sobe o ambiente completo em modo detached (em segundo plano).
*   `make down`: Para e remove os containers ativos.
*   `make logs`: Acompanha os logs de todos os serviços em tempo real.
*   `make sh-backend`: Abre um terminal interativo (`/bin/bash`) dentro do container do backend (Bun).
*   `make sh-frontend`: Abre um terminal interativo (`/bin/sh`) dentro do container do frontend (Vite).

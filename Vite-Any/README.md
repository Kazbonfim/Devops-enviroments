# Fullstack Docker Dev Environment

Este projeto é um setup de desenvolvimento Fullstack moderno e robusto, utilizando Docker para simular um ambiente de produção com Proxy Reverso (Nginx).

## 🚀 Arquitetura

O sistema utiliza o **Nginx** como ponto de entrada único (Gateway) na porta `80`. 

- **Frontend:** React + Vite (acessível em `/`)
- **Backend:** Node.js + Express (acessível em `/api/*`)
- **Banco de Dados:** PostgreSQL 16 local (Docker) ou conexão externa (Supabase)

## 🛠️ Tecnologias

- **Frontend:** Vite, React, TypeScript.
- **Backend:** Node.js (v20), Express.
- **Infra:** Docker, Docker Compose, Nginx.

## ⚙️ Configuração Rápida

1.  **Requisitos:** Docker e Docker Compose instalados.
2.  **Variáveis de Ambiente:** Configure o arquivo `backend/.env` (veja o README na pasta backend).
3.  **Iniciar o ambiente:**
    ```bash
    make build
    ```

## 🛠️ Automação com Makefile

O projeto inclui um `Makefile` para facilitar os comandos comuns:

- `make up`: Sobe o ambiente.
- `make down`: Para o ambiente.
- `make logs`: Visualiza os logs.
- `make backend-shell`: Acessa o terminal do backend para instalar dependências.

Digite apenas `make` ou `make help` para ver todos os comandos disponíveis.

## 🔌 Acesso

- **Aplicação Completa:** [http://localhost](http://localhost) (Porta 80)
- **Documentação da API (se houver):** [http://localhost/api](http://localhost/api)
- **Banco de Dados Local:** `localhost:5432` (User/Pass: `postgres/postgres`)

## 💡 Pontos Importantes

- **Sem CORS:** Como o Nginx unifica o Frontend e o Backend sob o mesmo host e porta, problemas de CORS são eliminados.
- **Hot Reload (HMR):** O Vite está configurado para suportar HMR através do proxy do Nginx.
- **Volume Bindings:** Alterações no código fonte no seu host refletem instantaneamente dentro dos containers.

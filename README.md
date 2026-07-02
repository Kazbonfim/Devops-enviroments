# DevOps Environments

Este repositório centraliza uma coleção de ambientes de desenvolvimento fullstack dockerizados, projetados para simular infraestruturas robustas e facilitar o setup inicial de diferentes pilhas de tecnologias de forma isolada.

## 📁 Estrutura de Ambientes do Projeto

Cada ambiente está contido em sua própria pasta e possui configurações de portas, orquestração e bancos de dados específicos:

1. **[vite-environment](file:///mnt/08A61168A6115810/Desenvolvimento/Projetos/Devops-enviroments/vite-environment/README.md)**
   * **Frontend:** React + Vite + TypeScript (servido em `/`)
   * **Backend:** Node.js v20 + Express (servido em `/api/*`)
   * **Banco de Dados:** PostgreSQL 16 local ou externo (ex: Supabase)
   * **Gateway:** Proxy reverso Nginx na porta `80` (eliminando problemas de CORS)
   * **Automação:** Makefile completo com atalhos para logs, shell e build.

2. **[bun-environment](file:///mnt/08A61168A6115810/Desenvolvimento/Projetos/Devops-enviroments/bun-environment/README.md)**
   * **Frontend:** Vite + React servido via Nginx na porta `8080`
   * **Backend:** Bun executando nativamente na porta `3000`
   * **Banco de Dados:** SQLite persistido em diretório local (`data/sqlite.db`)
   * **Automação:** Makefile com atalhos essenciais de inicialização e shell.

3. **[laravel-environment](file:///mnt/08A61168A6115810/Desenvolvimento/Projetos/Devops-enviroments/laravel-environment/README.md)**
   * **Backend/Frontend:** Laravel PHP 8.2-FPM servido por Nginx na porta `8080`
   * **Banco de Dados:** PostgreSQL 14 (configuração pré-definida e comentada no compose)
   * **Composer:** Pré-instalado diretamente no container de desenvolvimento.

---

## 🚀 Como Iniciar

Para rodar o ambiente desejado, acesse o diretório correspondente e utilize os comandos especificados no README de cada um:

```bash
# Rodar o setup Vite + Node + Nginx Gateway na porta 80
cd vite-environment
make build

# Rodar o setup Bun + Vite + SQLite na porta 8080
cd bun-environment
make up

# Rodar o setup Laravel + Nginx na porta 8080
cd laravel-environment
docker-compose up -d --build
```

Consulte os READMEs individuais para mais detalhes de configuração de variáveis de ambiente (`.env`), comandos de shell e migração de banco de dados.

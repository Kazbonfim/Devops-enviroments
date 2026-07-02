# Ambiente Laravel (Dockerized)

Este diretório contém um ambiente de desenvolvimento dockerizado pronto para rodar aplicações **Laravel** usando PHP 8.2-FPM e Nginx.

## 🚀 Arquitetura e Portas

*   **nginx**: Servidor web Nginx rodando em Alpine, expondo a porta `8080` (`http://localhost:8080`).
*   **app**: Serviço PHP 8.2-FPM (Alpine) contendo o Laravel (`/var/www/html`) com Composer instalado.
*   **db** (Opcional): Configuração para banco de dados PostgreSQL 14 pré-mapeada no `docker-compose.yml` (atualmente comentada).

## ⚙️ Requisitos

*   Docker e Docker Compose instalados.

## 🚀 Como Iniciar

1.  Inicie os containers:
    ```bash
    docker-compose up -d --build
    ```
2.  Instale as dependências do Composer (caso necessário):
    ```bash
    docker-compose exec app composer install
    ```
3.  Configure o arquivo `.env` da aplicação Laravel dentro da pasta `src/` (copie de `src/.env.example` caso não exista).
4.  Gere a chave da aplicação:
    ```bash
    docker-compose exec app php artisan key:generate
    ```
5.  Acesse a aplicação em: [http://localhost:8080](http://localhost:8080)

## 🛠️ Comandos Úteis

*   **Acessar terminal do container PHP:**
    ```bash
    docker-compose exec app sh
    ```
*   **Executar comandos Artisan:**
    ```bash
    docker-compose exec app php artisan <comando>
    ```
*   **Executar migrações:**
    ```bash
    docker-compose exec app php artisan migrate
    ```
*   **Instalar dependências Node (Vite/Mix) se necessário (local ou no container):**
    ```bash
    npm install && npm run dev
    ```

## 📂 Estrutura de Pastas

*   `docker/`: Configurações do Nginx e do Dockerfile do PHP.
*   `src/`: Código fonte da aplicação Laravel.
*   `docker-compose.yml`: Orquestração dos containers.

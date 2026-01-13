# Variáveis
DC = docker-compose
EXEC_BACKEND = $(DC) exec backend
EXEC_FRONTEND = $(DC) exec frontend

.PHONY: help up down build restart logs ps backend-shell frontend-shell clean

help: ## Exibe esta ajuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

up: ## Sobe os containers em modo detached
	$(DC) up -d

down: ## Para e remove os containers
	$(DC) down

build: ## Reconstrói as imagens dos serviços
	$(DC) up -d --build

restart: ## Reinicia todos os serviços
	$(DC) restart

logs: ## Acompanha os logs de todos os containers
	$(DC) logs -f

ps: ## Lista os containers ativos
	$(DC) ps

backend-shell: ## Abre um terminal interativo no container do backend
	$(EXEC_BACKEND) sh

frontend-shell: ## Abre um terminal interativo no container do frontend
	$(EXEC_FRONTEND) sh

clean: ## Remove containers, redes e volumes (apaga os dados do banco!)
	$(DC) down -v --remove-orphans

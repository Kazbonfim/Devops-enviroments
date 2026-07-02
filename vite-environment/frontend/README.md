# Frontend - React + Vite

Esta pasta contém a aplicação Frontend configurada para rodar dentro do ecossistema Docker.

## 📁 Estrutura de Destaque

- `Dockerfile`: Configurado para desenvolvimento com Node 20.
- `vite.config.ts`: Configurações essenciais para Docker:
  - `host: true`: Permite que o servidor Vite aceite conexões de fora do container.
  - `hmr.clientPort: 80`: Garante que o Hot Module Replacement funcione através do proxy Nginx.
- `nginx/nginx.conf`: Configuração do Proxy Reverso que orquestra o tráfego `/` e `/api`.

## 🔄 Hot Module Replacement (HMR)

O ambiente está otimizado para Windows e Linux utilizando `usePolling: true` no `watch` do Vite. Isso garante que as mudanças de arquivo sejam detectadas mesmo através dos volumes do Docker.

## 🌐 Integração com a API

Para fazer requisições ao backend, utilize caminhos relativos:
```typescript
fetch('/api/users') // O Nginx redirecionará automaticamente para o backend:3333
```
Não é necessário configurar a URL completa do backend, evitando troca de variáveis entre dev e prod.

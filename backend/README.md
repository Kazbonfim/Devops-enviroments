# Backend - Node.js (Quadro em Branco)

API configurada para ser agnóstica a ferramentas de banco de dados, permitindo que você escolha sua stack favorita.

## 🔑 Variáveis de Ambiente (.env)

O arquivo `.env` gerencia as conexões:

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `PORT` | Porta interna do container | `3333` |
| `DATABASE_URL` | Conexão com o Postgres local do Docker | `postgresql://postgres:postgres@db:5432/myapp` |
| `DATABASE_URL_EXTERNAL` | URL de conexão externa (ex: Supabase) | `postgresql://user:pass@host:5432/db` |
| `USE_EXTERNAL_DB` | Flag para alternar entre DB local (`false`) ou externo (`true`) | `false` |

## 🗄️ Lógica de Conexão (`src/db.ts`)

O backend já vem com uma lógica pronta para ler a URL correta baseada na flag `USE_EXTERNAL_DB`. Você pode usar essa URL para configurar qualquer ORM ou Query Builder (como Knex, TypeORM, Drizzle ou o driver `pg` puro).

## 🛠️ Comandos Úteis

```bash
# Acessar o terminal do container para instalar novas libs
make backend-shell

# Exemplo de instalação de um driver de banco
# npm install pg
```

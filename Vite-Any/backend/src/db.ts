import dotenv from 'dotenv';

dotenv.config();

const useExternalDb = process.env.USE_EXTERNAL_DB === 'true';
const databaseUrl = useExternalDb 
  ? process.env.DATABASE_URL_EXTERNAL 
  : process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('⚠️ DATABASE_URL não definida nas variáveis de ambiente');
}

console.log(`🔌 Configuração de Banco de Dados: ${useExternalDb ? 'EXTERNO (Supabase)' : 'LOCAL (Docker)'}`);

/**
 * Quadro em Branco:
 * Aqui você pode instanciar seu cliente de banco de dados favorito (pg, knex, typeorm, etc.)
 * utilizando a variável 'databaseUrl'.
 */

export const dbConfig = {
  url: databaseUrl,
  isExternal: useExternalDb
};

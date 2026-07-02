import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Necessário para o Docker
    strictPort: true,
    hmr: {
      clientPort: 80, // O navegador acessa pela porta 80 do Nginx
    },
    watch: {
      usePolling: true, // Melhora detecção de mudanças em volumes Docker no Windows
    },
  },
})

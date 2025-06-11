import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,  // listen on all addresses, not just localhost
    port: 3000,  // port number to match docker-compose port mapping
  },
})

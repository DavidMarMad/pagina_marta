import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/pagina_marta/',
  plugins: [react()],
  server: {
    allowedHosts: ['.loca.lt', '.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'],
  },
})

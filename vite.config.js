import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/makemypass-frontend-t1",
  server: {
    allowedHosts: [
      '2a2a-103-165-167-220.ngrok-free.app' // Add your ngrok domain here
    ]
  }
})

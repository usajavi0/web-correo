import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/web-correo/', // <-- ASEGÚRATE DE QUE ESTO COINCIDE CON EL NOMBRE DE TU REPO
  build: {
    outDir: 'docs'
  }
})

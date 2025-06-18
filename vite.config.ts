import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- La ruta relativa, la solución definitiva
  build: {
    outDir: 'docs'
  }
})

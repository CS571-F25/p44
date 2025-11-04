import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/p44/',
    build: {
    outDir: 'docs'
  }
})
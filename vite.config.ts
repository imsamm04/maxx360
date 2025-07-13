import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
      '@/components': resolve(import.meta.dirname, './src/components'),
      '@/pages': resolve(import.meta.dirname, './src/pages'),
      '@/utils': resolve(import.meta.dirname, './src/utils'),
      '@/types': resolve(import.meta.dirname, './src/types'),
      '@/assets': resolve(import.meta.dirname, './src/assets'),
    },
  },
})
